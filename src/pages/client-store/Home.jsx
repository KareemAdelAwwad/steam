import heroGIF from "/public/assets/client-store/Header.gif";
import Featured from "../../components/Featured_Slider";
import SpecialOffers from "../../components/SpecialOffers_Slider";
import Categories from "../../components/Categories_Slider";
import F2P_Game from "../../components/F2P_Game_Slider";
import RecentlyUpdated from "../../components/RecentlyUpdated_Slider";
import Trending from "../../components/Trending_Slider";
import TopSellers from "../../components/TopSellers_Slider";
import Under_5 from "../../components/Under_5_Slider";
import Streaming from "../../components/Streaming_Slider";

const Home = () => {
  return (
    <>
      <div className="w-full steam-gradient">
        {/* <img src={heroGIF} alt="Hero" className="w-full" /> */}
        <video src="/public/assets/client-store/New Header.webm" autoPlay loop muted className="w-full" />

        <section className="container 2xl:w-[1388px] mx-auto py-40 max-sm:px-4">
          <Featured />
          <SpecialOffers />
          <Categories />
          <F2P_Game />
          <RecentlyUpdated />
          <Trending />
          <TopSellers />
          <Under_5 />
          <Streaming />
        </section>
      </div>
    </>
  );
};

export default Home;
