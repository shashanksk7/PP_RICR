import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Contact Me</h2>
        <form className='flex flex-col'>
          <label className='text-gray-700 mb-2'>Name</label>
          <input type='text' className='p-2 border border-gray-300 rounded mb-4' placeholder='Your Name' />

          <label className='text-gray-700 mb-2'>Email</label>
          <input type='email' className='p-2 border border-gray-300 rounded mb-4' placeholder='Your Email' />

          <label className='text-gray-700 mb-2'>Message</label>
          <textarea className='p-2 border border-gray-300 rounded mb-4' rows='4' placeholder='Your Message'></textarea>

          <button type='submit' className='bg-amber-600 text-white py-2 rounded hover:bg-amber-700'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
