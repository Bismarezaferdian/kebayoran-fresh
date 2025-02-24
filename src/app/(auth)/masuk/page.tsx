import { getSession } from "@/action";
import FormLogin from "@/components/auth/formLogin/page";
import { redirect } from "next/navigation";

const Masuk = async () => {
  const session = await getSession();
  console.log(session);
  if (session.isLoggedIn) {
    redirect("/");
  }

  return (
    <div className="bg-slate-100 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between px-6 py-8 mx-auto max-w-[525px] h-screen ">
          <div className="container mx-auto my-auto p-6 space-y-3 bg-white">
            <h1 className="flex justify-center text-2xl">Welcome Back ! </h1>
            <FormLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masuk;
