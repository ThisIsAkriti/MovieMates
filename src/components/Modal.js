import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className='fixed inset-20 md:w-[50%] w-80% md:h-96 h-full flex justify-center items-center z-50 md:ml-[20%]'>
      <div className='bg-black opacity-90 p-4 h-64 md:w-[80%] w-full overflow-y-auto text-white rounded-md scrollbar-thin scrollbar-thumb-purple-800 scrollbar-track-black'>
        <button onClick={onClose} className='float-right text-red-600 font-extrabold md:text-4xl md:-mt-4  text-2xl'>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
