import React from 'react'

export default function () {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='p-7 border-b-2 md:border-r-2 md:min-h-screen'>
            <form className='flex flex-col gap-8'>
                <div className='flex items-center gap-2'>
                    <label className='whitespace-nowrap font-semibold'>Search Term :</label>
                    <input type='text' id='SearchTerm' placeholder='Search...' className='border rounded-lg p-3 w-full'></input>
                </div>
                <div className='flex gap-2 flex-wrap items-center'>
                    <label className='font-semibold'>Type :</label>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='all' className='w-5'></input>                        
                        <span>Rent & Sale</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='rent' className='w-5'></input>                        
                        <span>Rent</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='sale' className='w-5'></input>                        
                        <span>Sale</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='offer' className='w-5'></input>                        
                        <span>Offer</span>
                    </div>
                </div>
                <div className='flex gap-2 flex-wrap items-center'>
                    <label className='font-semibold'>Amenities :</label>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='parking' className='w-5'></input>                        
                        <span>Parking</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='furnished' className='w-5'></input>                        
                        <span>Furnished</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <label className='font-semibold'>Sort :</label>
                    <select className='border rounded-lg p-3' id='sorted_order'>
                        <option>Price high to low</option>
                        <option>Price low to high</option>
                        <option>Latest</option>
                        <option>Oldest</option>
                    </select>
                </div>
                <button className='bg-slate-700 rounded-lg text-white uppercase p-3 hover:opacity-95'>Search</button>
            </form>
        </div>
        <div className=''>
            <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>Listings results :</h1>
        </div>
    </div>
  )
}
