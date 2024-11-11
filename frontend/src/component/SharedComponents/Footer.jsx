import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { images } from "../../assets/images/assestsImages";

export default function Footer(){
    const footerOptions= [{type:"Our Services", options:["Software Development","BPO/KPO","IT Infastructure","Digital Marketing"]},{type:"Company",options:["About Us","Carrers","News","Team"]},{type:"Connect",options:[{element:FaFacebookF, Link:"/"},{element:FaTwitter,Link:"/"},{element:FaLinkedinIn,Link:"/"}]},{type:"Contact",options:["83A, Ananda Rajakaruna Mawatha, Colombo 10","+94 112 684 179","info@globalbridgelabs.com"]}]
    return (
        <section className="w-full bg-[#11253D] font-sans">
            <div className="px-10  sm:px-16 lg:px-20 xl:px-28 pt-16 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between  w-full lg:flex-nowrap">
            {footerOptions.map((unit)=> 
            <div className="mb-8  sm:w-[16rem] md:w-[20rem] lg:w-auto lg:min-w-[12rem] xl:min-w-[14rem]"><div className="mb-3">
                <h3 className="text-[#EDE8F5] text-[18px] sm:text-[20px] lg:text-[18px] xl:text-[20px]  font-bold">{unit.type}</h3>
                <div class="w-[3rem] h-[3px] bg-[#E5642C]"></div>
            </div>
             {unit.type==="Connect"?(<div className="mt-7 flex">{unit.options.map((linkUnit)=><div className="h-[2.5rem] w-[2.5rem] sm:h-[3rem] sm:w-[3rem] lg:h-[2.5rem] lg:w-[2.5rem] xl:h-[3rem] xl:w-[3rem] rounded-[50%]  bg-[#15284C] flex items-center justify-center mr-8 hover:bg-[#E5642C] group transition-all duration-200"><a href={linkUnit.Link}><linkUnit.element className="text-[#ffff] group-hover:text-[#15284C] sm:text-[20px] lg:text-[18px] xl:text-[20px]" /></a> </div>)}</div>):(unit.options.map((optionUnit)=><p className="text-[#8A99B4] text-[15px] sm: mb-2 sm:text-[18px] lg:text-[16px] xl:text-[18px]">{optionUnit}</p>))}
            </div>)}
            </div>
            <div className="mx-10 sm:mx-16 lg:mx-20 xl:mx-28  border-t-[1px] border-[#3D52A0] py-6 xl:py-8 flex justify-between "> 
                <img className="h-[3rem] sm:h-[4rem] xl:h-[5rem]" src={images.GBLLogo} alt="gbl-logo"></img>
                <p className="text-[#EDE8F5] text-[12px] lg:text-[16px] sm:text-[15px] ml-6 text-center h-[3rem] sm:h-[4rem] xl:h-[5rem] flex items-center">© Copyright 2024 Global Bridge Labs. All rights reserved. </p>
            </div>
        </section>
    )
}