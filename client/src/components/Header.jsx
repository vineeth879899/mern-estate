import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link , useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handlerSubmit =(e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  }
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if(searchTermFromUrl){
      setSearchTerm(searchTermFromUrl);
    }
  },[location.search])
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between item-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <Link to='/'>
            <span className='text-slate-500'>vineeth</span>
            <span className='text-slate-700'>Estate</span>
          </Link>
        </h1>
        <form onSubmit={handlerSubmit} className='bg-slate-100 p-2 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
         <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='text-slate-700 hover:underline hidden sm:inline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='text-slate-700 hover:underline hidden sm:inline'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='h-7 w-7 rounded-full object-cover'
                src={currentUser.avatar}
                alt='profile'
              ></img>
            ) : (
              <li className='text-slate-700 hover:underline'>Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
