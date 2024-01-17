import React from 'react';

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>
        Create a Listing
      </h1>
      <form className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
          <input
            type='text'
            className='border p-3 rounded-lg'
            placeholder='Name'
            id='name'
            maxLength={50}
            minLength={5}
            required
          ></input>
          <textarea
            type='text'
            className='border p-3 rounded-lg'
            placeholder='Description'
            id='description'
            required
          ></textarea>
          <input
            type='text'
            className='border p-3 rounded-lg'
            placeholder='Address'
            id='address'
            required
          ></input>
          <div className='flex gap-6 flex-wrap'>
            <div className='flex gap-2'>
              <input type='checkbox' id='sale' className='w-5'></input>
              <span>Sell</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='rent' className='w-5'></input>
              <span>Rent</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='parking' className='w-5'></input>
              <span>Parking Spot</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='furnished' className='w-5'></input>
              <span>Furnished</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='offer' className='w-5'></input>
              <span>Offer</span>
            </div>
          </div>
          <div className='flex flex-wrap gap-6'>
             <div className='flex items-center gap-2'>
                <input type='number' id='bedrooms' min={1} max={10} required className='p-3 borader-gray-700 rounded-lg '>
                </input>
                <p>Beds</p>
             </div>
             <div className='flex items-center gap-2'>
                <input type='number' id='bathrooms' min={1} max={10} required className='p-3 borader-gray-700 rounded-lg '>
                </input>
                <p>Baths</p>
             </div>
             <div className='flex items-center gap-2'>
                <input type='number' id='regularprice' min={1} max={10} required className='p-3 borader-gray-700 rounded-lg '>
                </input>
                <div className='flex flex-col items-center'>
                <p>Regular Price</p>
                <span className='text-xs'>(₹ / month)</span>
                </div>
             </div>
             <div className='flex items-center gap-2'>
                <input type='number' id='discountprice' min={1} max={10} required className='p-3 borader-gray-700 rounded-lg '>
                </input>
                <div className='flex flex-col items-center'>
                <p>Discounted Price</p>
                <span className='text-xs'>(₹ / month)</span>
                </div>
             </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 gap-4'>
          <p className='font-semibold'>images :
          <span className='font-normal text-gray-700 ml-2'>the first image will be the cover (max 6)</span>
          </p>
          <div className='flex gap-4'>
            <input className='p-3 border border-gray-300 rounded w-full' type='file' id='images' accept='image/*' multiple></input>
            <button className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
          </div>
          <button className='p-3 bg-gray-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-70'>Create Listing</button>
        </div>
      </form>
    </main>
  );
}
