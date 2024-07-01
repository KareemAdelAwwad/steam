import heroGIF from "/public/assets/cline-store/Header.gif";
import F2P_Game from "../../components/F2P_Game_Slider";
import Featured from "../../components/Featured_Slider";
import RecentlyUpdated from "../../components/RecentlyUpdated_Slider";
import Under_5 from "../../components/Under_5_Slider";

const Home = () => {
  return (
    <>
      <div className="h-[5000px] w-full steam-gradient">
        <img src={heroGIF} alt="Hero" className="w-full" />

        <section className="container 2xl:w-[1388px] mx-auto py-40 max-sm:px-4">
          <Featured />
          <F2P_Game />
          <RecentlyUpdated />
          <Under_5 />
        </section>
      </div>
    </>
  );
};

export default Home;
