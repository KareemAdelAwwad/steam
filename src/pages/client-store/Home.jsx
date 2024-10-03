import heroGIF from "@public/assets/client-store/Header.gif";
import Featured from "@components-store/Featured_Slider";
import SpecialOffers from "@components-store/SpecialOffers_Slider";
import Categories from "@components-store/Categories_Slider";
import F2P_Game from "@components-store/F2P_Game_Slider";
import RecentlyUpdated from "@components-store/RecentlyUpdated_Slider";
import Trending from "@components-store/Trending_Slider";
import TopSellers from "@components-store/TopSellers_Slider";
import Under_5 from "@components-store/Under_5_Slider";
import Streaming from "@components-store/Streaming_Slider";

const Home = () => {
  return (
    <>
      <div className="w-full steam-gradient">
        <img src={heroGIF} alt="Hero" className="w-full" />
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
