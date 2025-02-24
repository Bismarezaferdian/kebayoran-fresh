"use client";

import { Register } from "@/action";
import { FormState } from "@/data";
import { successMessage } from "@/utils/notification";
import useNotificationStore from "@/utils/zustand/notification";
import { stat } from "fs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const FormRegister = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(Register, null);
  const { setSuccessNotification } = useNotificationStore();

  useEffect(() => {
    if (state?.message === "Failed to register user ") {
      successMessage("error server");
    }
    if (!state?.error && state?.message == "success register") {
      //set successNotification on session to be true for show notifcation on login page
      setSuccessNotification(true);
      router.push("/masuk");
    }
  }, [state?.error, state?.message, state, router, setSuccessNotification]);

  return (
    <div>
      <form action={formAction} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            autoComplete="username"
            placeholder="jhon do"
            className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-gray-900 focus-visible:shadow-none dark:border-dark-3 dark:text-white"
          />
          <span className="text-rose-500 text-sm font-medium italic">
            {state?.error?.name || " "}
          </span>
        </div>
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
            autoComplete="email"
            placeholder="jhondo@gmail.com"
            className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-gray-900 focus-visible:shadow-none dark:border-dark-3 dark:text-white"
          />
          <span className="text-rose-500 text-sm font-medium italic">
            {state?.error?.email || " "}
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
            autoComplete="new-password"
            className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-gray-900 focus-visible:shadow-none dark:border-dark-3 dark:text-white"
          />
          <span className="text-rose-500 text-sm font-medium italic">
            {state?.error?.password || " "}
          </span>
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="********"
            autoComplete="new-password"
            className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-gray-900 focus-visible:shadow-none dark:border-dark-3 dark:text-white"
          />
          <span className="text-rose-500 text-sm font-medium italic">
            {state?.error?.confirmPassword || " "}
          </span>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded hover:bg-blue-600 transition duration-300 w-full"
        >
          Register
        </button>
        <span className="text-rose-500 text-sm font-medium italic">
          {/* {state?.message} */}
        </span>
        <p className="text-sm">
          Already have an account ?
          <Link className="pl-1 text-blue-400 hover:text-blue-500" href="/">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default FormRegister;
