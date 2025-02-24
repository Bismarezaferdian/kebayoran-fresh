"use client";
import { getSession } from "@/action";
import { redirect, useRouter } from "next/navigation";
import React from "react";

interface InputBoxProps {
  type: string; // atau bisa spesifik seperti: 'text' | 'password' | 'email' | 'number' dll.
  placeholder: string;
  name: string;
}

const FormLogin = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, //agar otomatis parsing ke json
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }
      return router.push("/");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputBox type="username" name="username" placeholder="username" />
        <InputBox type="password" name="password" placeholder="Password" />
        <div className="mb-10">
          <input
            type="submit"
            value="Sign In"
            className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-slate-900 transition hover:bg-opacity-90"
          />
        </div>
      </form>
    </div>
  );
};

export default FormLogin;

const InputBox = ({ type, placeholder, name }: InputBoxProps) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
      />
    </div>
  );
};
