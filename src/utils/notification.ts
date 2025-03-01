"use client"

import { toast } from "react-toastify";
// interface SuccessMessageOptions {
//     message: string;
//     onClose?: () => void;
//   }
export const successMessage = (message:string) => {
    // window.alert("Invalid Credentials");
    toast.success(message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    //   onClose: onClose,
    });
  };
export const errorMessage = (message:string) => {
    // window.alert("Invalid Credentials");
    toast.error(message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    //   onClose: onClose,
    });
  };
  