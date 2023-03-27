/** @format */

import React, { ReactNode } from 'react';

type NewType = {
 children?: ReactNode;
 isOpen: boolean;
 toggleModal: () => void;
};

type ModalType = NewType;

function Modal(props: ModalType) {
 return (
  <>
   {props.isOpen && (
    <div onClick={props.toggleModal} className="fixed inset-0 z-40 bg-gray-900 opacity-80  ">
     <div className="fixed h-40 min-w-[100vw]  z-50 bg-green-900 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      {props.children}
     </div>
    </div>
   )}
  </>
 );
}
export default Modal;
