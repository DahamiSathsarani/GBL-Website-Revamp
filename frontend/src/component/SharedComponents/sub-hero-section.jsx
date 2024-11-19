import { images } from "../../assets/images/assestsImages";

const SubHeroSection = ({
  topic,
  description,
  picture,
  upperIcon,
  lowerIcon,
}) => {
  return (
    <section className=" flex flex-col lg:flex-row w-full relative  top-[7rem] sm:top-[8rem] lg:top-[11rem]">
      <div className="w-full lg:w-[55%] xl:mt-[3%]">
        <h1 className="xs:text-[30px] text-[35px] lg:text-[40px] 2xl:text-[45px] font-bold  sub-menu-gradient text-center lg:text-left font-poppins ml-[10%] lg:ml-[5rem] xl:ml-[6rem] 2xl:ml-[8rem] lg:pl-[2rem] xl:pl-[3rem] ">
          {topic}
        </h1>
        <img
          src={images.SubHeroSectionUpperWave}
          alt="SubHeroSectionUpperWave"
          className="mt-[1rem] sm:mt-[2rem] xs:mb-[1rem] mb-[1rem]"
        />
        <div>{description}</div>
      </div>
      <div className="xs:h-[32rem] h-[35rem] sm:h-[44rem] md:h-[50rem] lg:h-[45rem] xl:h-[50rem] 2xl:h-[60rem] relative flex flex-col w-full lg:w-[45%] xs:mt-[0rem] mt-[2rem] lg:mt-0 ">
        <div className="xs:h-[17rem] h-[19rem] sm:h-[26rem] md:h-[30rem] lg:h-[26rem] xl:h-[30rem] 2xl:h-[35rem] w-full flex justify-center items-center  mt-5">
          <div>
            <div className="h-[3.5rem] w-[3.5rem] sm:h-[4.5rem] sm:w-[4.5rem] lg:h-[3.5rem] lg:w-[3.5rem] xl:h-[4.5rem] xl:w-[4.5rem]   rounded-[50%] border-[3px] border-[#7091E6] flex justify-center items-center relative left-[1.5rem] xs:top-[3.8rem] top-[4.3rem] sm:top-[6.5rem] md:top-[6.8rem] md:left-[2.2rem] lg:top-[5rem] lg:left-[2rem] xl:top-[6rem] xl:left-[3rem] 2xl:top-[6.5rem] 2xl:left-[4rem] bg-white">
              <img
                src={upperIcon}
                alt="upperIcon"
                className="h-[2.5rem] w-[2.5rem] sm:h-[3.5rem] sm:w-[3.5rem]"
              />
            </div>
            <div className="xs:h-[17rem] xs:w-[17rem] h-[19rem] w-[19rem] sm:h-[26rem] sm:w-[26rem] md:w-[30rem] md:h-[30rem] lg:h-[23rem] lg:w-[23rem]  xl:h-[30rem] xl:w-[30rem] 2xl:w-[35rem] 2xl:h-[35rem] rounded-[50%] border-[#7091E6] border-[5px] flex justify-center items-center">
              <img
                src={picture}
                alt=""
                className="xs:h-[12rem] xs:w-[12rem] h-[14rem] w-[14rem] sm:h-[20rem] sm:w-[20rem] md:h-[24rem] md:w-[24rem] lg:h-[18rem] lg:w-[18rem] xl:h-[24rem] xl:w-[24rem] 2xl:h-[29rem] 2xl:w-[29rem] rounded-[50%] shadow-sm"
              />
            </div>
            <div className="h-[3.5rem] w-[3.5rem] sm:h-[4.5rem] sm:w-[4.5rem] lg:h-[3.5rem] lg:w-[3.5rem] xl:h-[4.5rem] xl:w-[4.5rem]  rounded-[50%] border-[3px] border-[#7091E6] flex justify-center items-center relative left-[14rem] xs:left-[12.5rem] xs:top-[-4.5rem] top-[-4.5rem] sm:left-[21rem] sm:top-[-8rem] md:left-[24rem] lg:top-[-6rem] lg:left-[18rem] xl:top-[-7rem] xl:left-[23rem] 2xl:top-[-6rem] 2xl:left-[25.5rem] bg-white">
              <img
                src={lowerIcon}
                alt="lowerIcon"
                className="h-[2.5rem] w-[2.5rem] sm:h-[3.5rem] sm:w-[3.5rem]"
              />
            </div>
          </div>
        </div>
        <img
          src={images.SubHeroSectionLowerWave}
          alt="SubHeroSectionLowerWave"
          className="xs:mt-[0rem]   "
        />
      </div>
    </section>
  );
};

export default SubHeroSection;
