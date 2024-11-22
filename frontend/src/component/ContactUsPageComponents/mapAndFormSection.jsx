import { useState } from "react";
export default function MapAndFormSection({ formRef }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (validateEmail(value)) {
      setError("");
    } else {
      setError("Please enter a valid email address.");
    }
  };
  return (
    <section
      ref={formRef}
      className="mx-[10%] lg:mx-[7rem] xl:mx-[9rem] 2xl:mx-[11rem] xs:mt-0 mt-[2rem] sm:mt-[3rem] lg:mt-[5rem] xs:mb-[3rem] mb-[4rem] bg-[#E7E6E9]  "
    >
      <div>
        <iframe
          className="w-full h-[300px] sm:h-[400px]"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=83A,%20Ananda%20Rajakaruna%20Mawatha,%20Colombo%2010%20+(Global%20Bridge%20Labs)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
      <div className="mx-[10%] py-[3rem] text-[16px] sm:text-[18px] ">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <input
            className="bg-[#FFFFFF] w-[100%] lg:w-[45%] h-[3rem] rounded-[10px] mb-[1.5rem] lg:mb-[0rem] pl-[20px] placeholder-[#A5A5A5] "
            type="text"
            placeholder="First Name"
          />
          <input
            className="bg-[#FFFFFF] w-[100%] lg:w-[45%] h-[3rem] rounded-[10px]  pl-[20px] placeholder-[#A5A5A5] "
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="mt-[1.5rem] lg:mt-[2rem] ">
          <input
            className="bg-[#FFFFFF] w-[100%] h-[3rem] rounded-[10px] pl-[20px] placeholder-[#A5A5A5] "
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleChange}
            style={{
              borderColor: error ? "red" : "black",
            }}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <input
          className="bg-[#FFFFFF] w-[100%] h-[6rem] rounded-[10px]  mt-[1.5rem] lg:mt-[2rem] mb-[2.5rem] lg:mb-[3rem] pl-[20px] placeholder-[#A5A5A5] "
          type="text"
          placeholder="Message"
        />
        <button className="font-bold text-[18px] sm:text-[20px] bg-gradient w-full h-[3rem] lg:h-[3.5rem] rounded-[10px] text-[#ffff] ">
          Submit
        </button>
      </div>
    </section>
  );
}
