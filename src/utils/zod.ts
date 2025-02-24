import { z } from "zod";


export const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: "Name must be more than 1 character" }),
    email: z.string().email({ message: "Invalid Email" }),
    password: z
      .string()
      .min(8, { message: "Password must be more than 8 characters" })
      .max(32, { message: "Password must be less than 32 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be more than 8 characters" })
      .max(32, { message: "Password must be less than 32 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: " Passwords do not match",
    path: ["confirmPassword"],
  });

  export const LoginSchema = z
  .object({
    email: z.string().email({ message: "Invalid Email" }),
    password :z.string()
    .min(8, { message: "Password must be more than 8 characters" })
      .max(32, { message: "Password must be less than 32 characters" }),
  });