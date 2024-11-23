import React from "react";
import Vissionimg from "../../assets/images/about Page/vission/vission.png";
import Missionimg from "../../assets/images/about Page/mission/mission.png";
import VissionBg from "../../assets/images/about Page/vission/vissionbg.png";
import MissionBg from "../../assets/images/about Page/mission/missionbg.png";

const VissionMission = () => {
  const vissionData = {
    title: "Our Vision",
    content:
      "Empowering tomorrow’s possibilities through innovative technology solutions.",
    img: Vissionimg,
    background: VissionBg,
  };

  const missionData = {
    title: "Our Mission",
    content:
      "Empowering business transformation through innovative solutions, adding value at every turn, and fostering meaningful partnerships for mutual success.",
    img: Missionimg,
    background: MissionBg,
  };

  return (
    <div className="space-y-8 w-full px-[10%] lg:px-[7rem] xl:px-[9rem] 2xl:px-[11rem] pb-[3rem] xs:mt-0 mt-[1rem] sm:mt-[3rem] xs:h-[60rem] h-[65rem] lg:h-[50rem] flex flex-col justify-center">
      <div
        style={{
          backgroundImage: `url(${vissionData.background})`,
        }}
        className="xs:h-[25rem] h-[28rem] lg:h-[20rem] flex flex-col lg:flex-row items-center w-full lg:justify-between rounded-bl-[50px] rounded-tr-[50px] bg-cover bg-center p-6 md:p-8  "
      >
        <div className=" w-full lg:w-[45%] xs:h-[40%] h-[12rem] sm:h-[16rem] ">
          <img
            className="w-full xs:h-[100%] h-[12rem] sm:h-[16rem] rounded-tr-[40px] rounded-bl-[40px] object-cover"
            src={vissionData.img}
            alt="Vision"
          />
        </div>
        <div className="text-center lg:text-left md:ml-6 mt-4 md:mt-0 text-white h-[60%] flex flex-col  justify-center lg:w-[45%]">
          <h2 className="text-2xl lg:text-[30px] xl:text-[35px] lg:mb-[1rem] font-bold mb-2 text-[#161E3A]">
            {vissionData.title}
          </h2>
          <p className="text-[16px] lg:text-[18px] xl:text-[20px] text-base font-light">
            {vissionData.content}
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${missionData.background})`,
        }}
        className="w-full flex xs:h-[25rem] h-[28rem] lg:h-[20rem] flex-col lg:flex-row-reverse items-center lg:justify-between rounded-bl-[50px] rounded-tr-[50px] bg-cover bg-center p-6 md:p-8"
      >
        <div className=" w-full lg:w-[45%] xs:h-[40%] h-[12rem] sm:h-[16rem]">
          <img
            className="w-full xs:h-[100%] h-[12rem] sm:h-[16rem] rounded-tr-[40px] rounded-bl-[40px] object-cover"
            src={missionData.img}
            alt="Mission"
          />
        </div>
        <div className="text-center lg:text-left md:ml-6 mt-4 md:mt-0 text-white h-[60%] flex flex-col  lg:w-[45%]">
          <h2 className="text-2xl xl:text-[35px] lg:text-[30px] lg:mb-[1rem] font-bold mb-2 text-[#161E3A]">
            {missionData.title}
          </h2>
          <p className="text-[16px] lg:text-[18px] xl:text-[20px] text-base font-light">
            {missionData.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VissionMission;
