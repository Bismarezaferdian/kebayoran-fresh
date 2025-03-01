import { SessionOptions } from "iron-session";
import { SessionData } from "./data";



export const defaultSession: SessionData = {
  isLoggedIn: false,
};

  export const sessionOptions: SessionOptions = {
  // You need to create a secret key at least 32 characters long.
  password: process.env.SECRET_KEY!,
  cookieName: "bisma-session",
  // ttl: 86400, // Sesi berlaku selama 1 hari
  // rolling: true, // Memperpanjang sesi jika ada aktivitas
  // rollingDuration: 3600, // Perpanjangan sesi 1 jam
  // saveUninitialized: false, // Hanya simpan jika ada data
  // autoSave: true, // Otomatis simpan sesi
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};      
