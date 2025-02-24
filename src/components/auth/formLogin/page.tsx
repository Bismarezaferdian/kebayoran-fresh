"use client";
import { login } from "@/action";
import { successMessage } from "@/utils/notification";
import useNotificationStore from "@/utils/zustand/notification";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";

const FormLogin = () => {
  const [state, formAction] = useFormState(login, null);
  const { setSuccessNotification, showSuccessNotification } =
    useNotificationStore();

  useEffect(() => {
    if (showSuccessNotification) {
      successMessage("success create account");
    }
    setSuccessNotification(false);
  }, [showSuccessNotification, setSuccessNotification]);

  return (
    <div>
      <form action={formAction} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="jhondo@gmail.com"
            autoComplete="email"
            className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-gray-900 focus-visible:shadow-none dark:border-dark-3 dark:text-white"
          />
          <span className="text-rose-500 text-sm font-medium italic">
            {state?.error?.email}
          </span>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="********"
            autoComplete="password"
            className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-gray-900 focus-visible:shadow-none dark:border-dark-3 dark:text-white"
          />
          <span className="text-rose-500 text-sm font-medium italic">
            {state?.error.password}
          </span>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded hover:bg-blue-600 transition duration-300 w-full"
        >
          Login
        </button>
        <p className="text-sm">
          Don&apos;t have an account ?
          <Link
            className="pl-1 text-blue-400 hover:text-blue-500"
            href="/register"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default FormLogin;

// const notificationShown = useRef(false);

// useEffect(() => {
//   if (showSuccessNotification && !notificationShown.current) {
//     successMessage("succes shhow notif ");
//     notificationShown.current = true;
//     // Reset status notifikasi setelah ditampilkan
//     setSuccessNotification(false);
//   } else if (!showSuccessNotification) {
//     notificationShown.current = false;
//   }
// }, [showSuccessNotification, setSuccessNotification]);
