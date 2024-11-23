import { useState } from "react";
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
emailjs.init("uENne41d2xJw4d1mb");

export default function MapAndFormSection({ formRef }) {
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData({ ...formData, [name]: value });
  
    if (name === "email") {
      if (validateEmail(value)) {
        setError(""); 
      } else {
        setError("Please enter a valid email address.");
      }
    }
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
      });
      return;
    }
  
    const formWithFullName = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      message: formData.message,
    };
  
    emailjs
      .send("service_36kvrtb", "template_qo8es3i", formWithFullName)
      .then((result) => {
        console.log("Email successfully sent!", result.text);
        Swal.fire({
          icon: 'success',
          title: 'Email Sent',
          text: 'Your message has been sent successfully!',
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        Swal.fire({
          icon: 'error',
          title: 'Email Not Sent',
          text: 'Failed to send email. Please try again later.',
        });
      });
  };
  

  return (
    <section
      ref={formRef}
      className="mx-[10%] lg:mx-[7rem] xl:mx-[9rem] 2xl:mx-[11rem] xs:mt-0 mt-[2rem] sm:mt-[3rem] lg:mt-[5rem] xs:mb-[3rem] mb-[4rem] bg-[#E7E6E9]  "
    >
      <div>
        <iframe 
          title="map"
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
      <form className="mx-[10%] py-[3rem] text-[16px] sm:text-[18px] " onSubmit={handleSubmit}>
        <div className="flex flex-col justify-between w-full lg:flex-row">
          <input
            className="bg-[#FFFFFF] w-[100%] lg:w-[45%] h-[3rem] rounded-[10px] mb-[1.5rem] lg:mb-[0rem] pl-[20px] placeholder-[#A5A5A5] "
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            placeholder="First Name"
          />
          <input
            className="bg-[#FFFFFF] w-[100%] lg:w-[45%] h-[3rem] rounded-[10px]  pl-[20px] placeholder-[#A5A5A5] "
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="mt-[1.5rem] lg:mt-[2rem] ">
          <input
            className="bg-[#FFFFFF] w-[100%] h-[3rem] rounded-[10px] pl-[20px] placeholder-[#A5A5A5] "
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={{
              borderColor: error ? "red" : "black",
            }}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <input
          className="bg-[#FFFFFF] w-[100%] h-[6rem] rounded-[10px]  mt-[1.5rem] lg:mt-[2rem] mb-[2.5rem] lg:mb-[3rem] pl-[20px] placeholder-[#A5A5A5] "
          name="message"
          value={formData.message}
          onChange={handleChange}
          type="text"
          placeholder="Message"
        />
        <button className="font-bold text-[18px] sm:text-[20px] bg-gradient w-full h-[3rem] lg:h-[3.5rem] rounded-[10px] text-[#ffff] "
                type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
