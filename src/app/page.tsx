import Banner from "@/components/landingpage/Banner";
import Category from "@/components/landingpage/Category";
import Featured from "@/components/landingpage/Featured";
import Navbar from "@/components/landingpage/Navbar";
import NewProducts from "@/components/landingpage/NewProduct";
import Notification from "@/components/landingpage/Notification";
import Offer from "@/components/landingpage/Offer";
import Slider from "@/components/landingpage/Slider";

export default function Home() {
  return (
    <div className="">
      {/* <Notification /> */}
      <Slider />
      <Featured />
      <Banner />
      <Category />
      <NewProducts />
      <Offer />
    </div>
  );
}
