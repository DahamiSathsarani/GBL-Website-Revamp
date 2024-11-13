import React from "react";
import Vissionimg from "../../assets/images/aboutUs/vission/vission.png";
import Missionimg from "../../assets/images/aboutUs/mission/mission.png";
import VissionBg from "../../assets/images/aboutUs/vission/vissionbg.png";
import MissionBg from "../../assets/images/aboutUs/mission/missionbg.png";

const VissionMission = () => {
    const vissionData = {
        title: "Our Vision",
        content: "Empowering tomorrow’s possibilities through innovative technology solutions.",
        img: Vissionimg,
        background: VissionBg,
    };

    const missionData = {
        title: "Our Mission",
        content: "Empowering business transformation through innovative solutions, adding value at every turn, and fostering meaningful partnerships for mutual success.",
        img: Missionimg,
        background: MissionBg,
    };

    return (
        <div className="space-y-8 max-w-[1000px] mx-auto p-8">
            <div
                style={{ backgroundImage: `url(${vissionData.background})`, minHeight: '300px', minWidth: '100%' }}
                className="flex flex-col md:flex-row items-center justify-center rounded-[20px] bg-cover bg-center p-6 md:p-8"
            >
                <div className="flex-shrink-0 w-full md:w-[35%]">
                    <img className="w-full h-auto rounded-tr-[40px] rounded-bl-[40px]" src={vissionData.img} alt="Vision" />
                </div>
                <div className="text-center md:text-left md:ml-6 mt-4 md:mt-0 text-white">
                    <h2 className="text-2xl font-bold mb-2">{vissionData.title}</h2>
                    <p className="text-base font-light">{vissionData.content}</p>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${missionData.background})`, minHeight: '300px', minWidth: '100%' }}
                className="flex flex-col md:flex-row items-center justify-center rounded-[20px] bg-cover bg-center p-6 md:p-8"
            >
                <div className="text-center md:text-left md:ml-6 mt-4 md:mt-0 text-white">
                    <h2 className="text-2xl font-bold mb-2">{missionData.title}</h2>
                    <p className="text-base font-light">{missionData.content}</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-[35%]">
                    <img className="w-full h-auto rounded-tr-[40px] rounded-bl-[40px]" src={missionData.img} alt="Mission" />
                </div>
            </div>
        </div>
    );
};

export default VissionMission;
