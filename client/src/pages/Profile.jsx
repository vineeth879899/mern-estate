import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from '../redux/user/UserSlice';
import { useDispatch } from 'react-redux';

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [fileperc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const [updateSuccess, setUpdateSuccess] = useState(false);

  // console.log(fileperc);
  //  console.log(file);
   console.log(formData);
  // console.log(fileperc);
  // console.log(fileUploadError);

  //firebase storage
  //     allow read;
  //     allow write:if
  //     request.resource.size<2*1024*1024 &&
  //     request.resource.contentType.matches('image/.*')

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('upload is '+progress+' is done')
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handlerChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-5'>Profile</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'> 
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type='file'
          ref={fileRef}
          hidden
          accept='image/*'
        ></input>
        <img
          onClick={() => fileRef.current.click()}
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
          src={formData.avatar || currentUser.avatar}
          alt='profile'
        ></img>
        <p className='text-sm self-center'>
          {fileUploadError ? (
            <span className='text-red-700'>error image uploaded</span>
          ) : fileperc > 0 && fileperc < 100 ? (
            <span className='text-slate-700'>{`uploading ${fileperc}%`}</span>
          ) : fileperc === 100 ? (
            <span className='text-green-700'> successfully uploaded</span>
          ) : (
            ''
          )}
        </p>
        <input
          type='text'
          placeholder='username'
          id='username'
          defaultValue={currentUser.username}
          className='border p-3 rounded-lg'
          onChange={handlerChange}
        ></input>
        <input
          type='email'
          placeholder='email'
          id='email'
          defaultValue={currentUser.email}
          className='border p-3 rounded-lg'
           onChange={handlerChange}
        ></input>
        <input
          type='password'
          placeholder='password'
          id='password'
          className='border p-3 rounded-lg'
          onChange={handlerChange}
        ></input>
        <button disabled={loading} className='bg-slate-700 p-3 rounded-lg hover:opacity-90 text-white disabled:opacity-65 uppercase'>
          {loading ? 'Loading...' : 'Update'}
        </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700'>Delete account</span>
        <span className='text-red-700'>Sign out</span>
      </div>
      <p className='text-red-700 mt-5'>{error ? error : ''}</p>
      <p className='text-green-700 mt-5'>{updateSuccess ? 'user is updated successfully' : ''}</p>
    </div>
  );
}
