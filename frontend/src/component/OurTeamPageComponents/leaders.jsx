import React from "react";
import { images } from "../../assets/images/assestsImages";

const Leaders = () => {
  const leadershipTeam = [
    {
      img: images.CEOPic2,
      name: "Amila Vinod Gunasekara",
      Position: "Co-Founder/Director",
      Link: "https://www.linkedin.com/in/amilagunasekara/",
    },
    {
      img: images.CEOPic1,
      name: "Hojitha Weerasinghe",
      Position: "Co-Founder/Director",
      Link: "https://www.linkedin.com/in/hojitha-weerasinghe-502414101/",
    },
    {
      img: images.CEOPic3,
      name: "Danushka Pinto",
      Position: "Co-Founder/Director",
      Link: "https://www.linkedin.com/in/dhanushka-pinto-72a77380/",
    },
  ];
  return (
    <section className=" w-[100%] mb-[2rem] ">
      <div className="xs:h-[15vh] h-[20vh] flex flex-col w-full text-center justify-center px-[10%] lg:px-[5rem] xl:px-[6rem] 2xl:px-[8rem] ">
        <h1 className="xs:text-[25px] text-[30px] lg:text-[40px] font-bold font-sans sub-menu-gradient mb-2 ">
          Our Leadership Team
        </h1>
        <p className="text-gradient xs:text-[16px] text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[25px]">
          Our leadership team drives innovation and excellence, delivering
          strategic guidance to propel our company forward
        </p>
      </div>
      <img
        src={images.WaveImage}
        className="w-full xs:h-[4rem] h-[5rem] lg:h-[8rem] mt-[2rem] lg:mb-[2rem]"
      />
      <div className="h-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between px-[10%] lg:px-[5rem] xl:px-[6rem] 2xl:px-[8rem] w-full">
        {leadershipTeam.map((onePerson) => (
          <div className="w-full lg:w-[350px] xl:w-[450px] h-[22rem] sm:h-[25rem] md:h-[30rem] lg:h-[25rem] xl:h-[28rem] mx-8 flex flex-col  mb-[3rem] ">
            <div className="w-full h-[100%] relative  flex justify-center ">
              <div className="xs:w-full group w-[270px] sm:w-[340px] md:w-[400px] lg:w-[270px] xl:w-[320px] 2xl:w-[390px] bg-gradient mb-0 flex items-end justify-center absolute  bottom-0 xs:h-[70%] lg:h-[65%] h-[80%] xl:h-[65%] 2xl:h-[80%] rounded-t-[50%] transition-all duration-1000 ease-linear shadow-[0_2px_4px_8px_rgba(0,0,0,0.1)]">
                <div className="w-0   duration-1000 relative group-hover:w-full transition-all ease-in-out bg-[white] h-full opacity-[0.2] rounded-t-[50%] "></div>
                <div className="w-[90%] h-[100px] absolute z-10 flex items-end">
                  <img
                    src={onePerson.img}
                    alt="CEO"
                    className="w-full h-auto  "
                  ></img>
                </div>
              </div>
            </div>
            <div className="w-full h-[20%] flex flex-col items-center my-2">
              <h2 className="font-sans text-lg font-bold">{onePerson.name}</h2>
              <p className="text-[#4B4B4B]">{onePerson.Position}</p>
              <a href={onePerson.Link}>
                <img
                  src={images.LinkedinIcon}
                  alt={onePerson.name}
                  className="h-[2rem]"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leaders;
