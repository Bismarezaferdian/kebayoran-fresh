import FormRegister from "@/components/auth/formRegister/page";
import React from "react";

const Register = () => {
  return (
    // <div className="container mx-auto p-6 space-y-3 bg-white">
    //   <h1 className="flex justify-center text-2xl">Create an account </h1>
    //   <FormRegister />
    // </div>
    <div className="bg-slate-100 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center  space-x-6 px-6 py-8 mx-auto max-w-[525px] h-screen ">
          <div className="container mx-auto my-auto p-6 space-y-3 bg-white">
            <h1 className="flex justify-center text-2xl">Welcome Back ! </h1>
            <FormRegister />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
