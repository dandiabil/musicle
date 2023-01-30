import { useRouter } from 'next/router';
import React from 'react';
import { Backspace } from '../../../public/icons';

const BackButton = () => {
  const router = useRouter();

  return (
    <div
      className="back-button absolute top-5 left-4 z-20 text-white flex items-center pr-4 py-3 cursor-pointer"
      onClick={() => router.back()}
    >
      <Backspace fill="#FFF" className="w-12 h-6" />
      <h3 className="uppercase font-bold">Back</h3>
    </div>
  );
};

export default BackButton;
