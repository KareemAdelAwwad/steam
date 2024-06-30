import heroGIF from "/public/assets/cline-store/Header.gif";
import GroupSlider from "../../components/GroupSlider";

const Home = () => {
  return (
    <>
      <div className="h-[5000px] w-full steam-gradient">
      <img src={heroGIF} alt="Hero" className="w-full" />

        <section className="container 2xl:w-[1388px] mx-auto py-40">
          
          <GroupSlider />


        </section>
      </div>
    </>
  );
};

export default Home;
