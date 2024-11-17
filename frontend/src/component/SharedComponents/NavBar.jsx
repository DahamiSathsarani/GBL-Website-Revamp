import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { images } from "../../assets/images/assestsImages";
import { IoIosArrowDropleft } from "react-icons/io";
export default function NavBar() {
  const navbarItems = [
    {
      name: "Company",
      url: "/",
      type: "Dropdown",
      items: [
        { name: "About Us", Link: "/" },
        { name: "Leadership Team", Link: "/" },
        { name: "Career", Link: "/" },
      ],
    },
    {
      name: "Our Services",
      url: "",
      type: "Dropdown",
      items: [
        { name: "Web Development", Link: "/" },
        { name: "BPO/KPO", Link: "/" },
        { name: "IT Infrastructure", Link: "/" },
        { name: "Digital Marketing", Link: "/" },
      ],
    },
    { name: "Our Products", url: "", type: "Link" },
    { name: "Contact Us", url: "/", type: "Link" },
  ];
  const [isClickedOnMenuBar, setClickedOnMenuBar] = useState(false);
  const [isClickedOnSubMenuBar, setClickedOnSubMenuBar] = useState(null);
  const clickingTheMenuBar = () => {
    setClickedOnMenuBar(!isClickedOnMenuBar);
  };
  const clickingTheSubMenuBar = (index) => {
    setClickedOnSubMenuBar(isClickedOnSubMenuBar === index ? null : index);
    console.log(isClickedOnSubMenuBar);
  };

  return (
    <section className="absolute w-full z-50">
      <div className="flex items-center justify-between h-[3.5rem] sm:h-[4.5rem] md:h-[5rem] lg:h-[6rem] bg-[#ffffff] shadow-2xl mx-[10%] lg:mx-[5rem] xl:mx-[6rem] 2xl:mx-[8rem] rounded-[35px] px-[2rem] lg:px-[2rem] xl:px-[3rem] mt-5 lg:mt-10 ">
        <a href="/">
          <img
            className="h-[2.5rem] sm:h-[3.5rem]  md:h-[4rem] xl:h-[5rem] xl:w-auto"
            src={images.GBLLogo}
            alt="GBL logo"
          />
        </a>
        <ul className="hidden  lg:flex lg:w-[55%]  xl:w-[50%] justify-between font-poppins font-bold lg:text-[16px] xl:text-[18px] items-center h-[6rem]">
          {navbarItems.map((item) =>
            item.type === "Link" ? (
              <li className="group  " key={item.name}>
                <a
                  className=" hover:text-gradient hover:transition-all hover:duration-200 hover:ease-linear text-[#000000]  h-[2rem] items-center"
                  href={item.url}
                >
                  {item.name}
                </a>
              </li>
            ) : (
              <li className=" group" key={item.name}>
                <div className="flex cursor-pointer hover:text-gradient text-center hover:transition-all hover:duration-200 hover:ease-linear  h-[2rem] items-center">
                  {item.name}
                </div>
                <ul
                  className="lg:w-[9.5rem] xl:w-[12rem] hidden group-hover:inline-flex lg:text-[14px] xl:text-[16px] flex-col absolute bg-[#f2f2f2] shadow lg:ml-[-25px] xl:ml-[-40px] lg:px-2 lg:py-2 xl:px-4 xl:py-3  rounded"
                  key={item.name}
                >
                  {item.items.map((subItem) => (
                    <a
                      className="inline-flex self-center hover:text-gradient hover:transition-all hover:duration-200 hover:ease-linear mb-2 "
                      href={subItem.Link}
                      key={subItem.name}
                    >
                      {subItem.name}
                    </a>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
        <button className="hidden lg:flex font-sans font-bold text-[#ffffff] lg:text-[14px] xl:text-[16px] bg-gradient lg:h-[3rem] xl:h-[3.5rem] lg:w-[12rem] xl:w-[15rem]  items-center justify-center rounded-[20px] hover:text-gradient hover:border-4 hover:border-[#008A7D] hover:transition-all hover:duration-300 hover:ease-linear ">
          Book a Free Consultation
        </button>
        <FaBars
          className="text-[30px] sm:text-[33px] md:text-[36px] text-[#00B09C] lg:hidden cursor-pointer"
          onClick={clickingTheMenuBar}
        />
        <div
          className={`${
            isClickedOnMenuBar ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 fixed top-0 left-0 h-full w-full bg-white shadow-lg lg:hidden z-50`}
        >
          {" "}
          <div className="flex justify-between h-[5rem] sm:h-[6rem] md:h-[6.5rem] items-center px-7 border-b-[1px] border-[#00B09C]">
            <a href="/">
              <img
                className="h-[3rem] sm:h-[4rem] md:h-[4.5rem]"
                src={images.GBLLogo}
                alt="GBL logo"
              />
            </a>
            <RxCross2
              className="text-[30px] sm:text-[35px] md:text-[40px] text-[#00B09C] cursor-pointer"
              onClick={clickingTheMenuBar}
            />
          </div>
          <div className="flex-col px-7 mt-[2rem]">
            {" "}
            {navbarItems.map((item, index) =>
              item.type === "Link" ? (
                <a
                  className="block   text-gradient  text-[18px] sm:text-[20px] md:text-[22px] py-4"
                  href={item.url}
                >
                  {item.name}
                </a>
              ) : (
                <div className="flex-col">
                  <span className="flex   items-center justify-between text-gradient text-[18px] sm:text-[20px] md:text-[22px] py-4">
                    {item.name}{" "}
                    <div>
                      {" "}
                      <IoIosArrowDropleft
                        onClick={() => clickingTheSubMenuBar(index)}
                        className={`${
                          isClickedOnSubMenuBar === index
                            ? "-rotate-90"
                            : "rotate-0"
                        } text-[27px] sm:text-[29px] text-[#00B09C] transition-all duration-700 cursor-pointer `}
                      />
                    </div>
                  </span>
                  <div
                    className={`${
                      isClickedOnSubMenuBar === index
                        ? "max-h-screen scale-y-30 opacity-100  "
                        : "max-h-0 scale-y-20 opacity-0"
                    } flex-col overflow-hidden transition-all duration-700 transform ml-4 `}
                  >
                    {item.items.map((subItem) => (
                      <a
                        href={subItem.Link}
                        className="text-gradient block my-1 text-[16px] sm:text-[18px] md:text-[20px]"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
