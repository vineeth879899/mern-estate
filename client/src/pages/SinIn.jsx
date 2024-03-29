import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInFailure,
  signInSuccess,
  signInStart,
} from '../redux/user/UserSlice';
import OAuth from '../components/OAuth';

export default function SinIn() {
  const [formData, setformData] = useState({});
  // const [error, setError]=useState(null);
  // const [loading ,setLoading]=useState(false);
  const { loading, error } = useSelector((state) => state.user);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      //setLoading(true);
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        // setLoading(false);
        // setError(data.message);
        dispatch(signInFailure(data.message));
        return;
      }
      // setLoading(false);
      // setError(null);
      dispatch(signInSuccess(data));
      navigation('/');
    } catch (error) {
      //  setLoading(false);
      //  setError(error.message);
      dispatch(signInFailure(error.message));
    }
  };

  //console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign In</h1>

      <form onSubmit={handlerSubmit} className='flex flex-col gap-4'>
        {/* <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange}></input> */}
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        ></input>
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        ></input>
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-65'>
          {loading ? 'Loading...' : 'sign in'}
        </button>
        <OAuth></OAuth>
      </form>
      <div className='flex gap-4 mt-3'>
        Don't Have an Account
        <Link to='/sinout'>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
