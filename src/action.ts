"use server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import {  defaultSession, sessionOptions } from "./lib";
import { LoginSchema, RegisterSchema } from "./utils/zod";
import { prisma } from "./utils/conect";
import { compare, hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";
import { FormState, SessionData } from "./data";
import ResetAll from "./utils/zustand/resetState";


export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
};




export const login =async(
  previousState: {
    //handle type error
    error?: {
      [key: string]: string[]; // Example: { email: ["error message"] }
    };
    message?: string;
    
  }, // Current form state
  formData: FormData // Submitted form data
): Promise<FormState> => {
  const session = await getSession();

  
  const validateState = LoginSchema.safeParse(//safeParse from zod
    Object.fromEntries(formData.entries())
  );
  // const validateState = RegisterSchema.safeParse(//safeParse from zod
  //   Object.fromEntries(formData.entries())
  // );

  if(!validateState.success){
    return {
      error: validateState.error.flatten().fieldErrors
    }
  }

  const {email,password}= validateState.data
    //check user in db
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email, // Ganti dengan email pengguna yang ingin dicari
      },
    });


    if (!user || !user.password) {
      return {
        error: {
          email: ['Invalid email '], // Attach errors to 'email'
          password: ['Wrong password'], // Attach errors to 'password'
        }, // Avoid exposing the actual error
      };
    }

    // Compare the password with the hashed password in the database
    const isPasswordValid = await compare(password, user.password);
    
    //check if not match
    if(!isPasswordValid){
      return {
        error: {password:[ 'Wrong password'] }, // Avoid exposing the actual error
      };
    }

    //if password match

    session.userId = user.id,
    session.email = user.email,
    session.userName= user.name,
    session.isPro = true,
    session.isLoggedIn = true;
  await session.save();
  } catch (error) {
    console.log(error)
  }
  console.log("error")
  redirect("/")
}


export const logout = async()=>{
  
  const session = await getSession();
  session.destroy()
  redirect("/")
}


export const Register =async (previousState: {
  
  error?: {
    [key: string]: string[]; // Example: { email: ["error message"] }
  };
  message?: string;
  
}, // Current form state
formData: FormData // Submitted form data
): Promise<FormState> => {
  
const validateState = RegisterSchema.safeParse(//safeParse from zod
Object.fromEntries(formData.entries())
);
// const validateState = RegisterSchema.safeParse(//safeParse from zod
//   Object.fromEntries(formData.entries())
// );

if(!validateState.success){
return {
  error: validateState.error.flatten().fieldErrors
}


}
const {name,email,password}= validateState.data
const hashed = hashSync(password,10)
try {
const user = await prisma.user.findUnique({
where: {
  email: email, // Ganti dengan email pengguna yang ingin dicari
},
});

if(user?.email=== email){
return{
  error:{
    email:["email already exist"]
  }
}
// return{
//     message:"email already exist"
// }
}

const createAccount=await prisma.user.create({
data:{
  name,
  email,
  password:hashed

}
})
if(createAccount.id){
  return{
    message:"success register",
  }
}

} catch (error) {
  return {
    message:"Failed to register user "
  }
}

}

