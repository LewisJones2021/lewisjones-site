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
    <div onClick={props.toggleModal} className="modal modal-open ">
     <div className="modal-box bg-gray-800 mt-12">
      <h3 className="font-cardHeading text-white p-[10px] text-center text-[25px] font-bold">
       Here's your random fact!
      </h3>
      {props.children}

      <div className="modal-action"></div>
     </div>
    </div>
   )}
  </>
 );
}
export default Modal;
