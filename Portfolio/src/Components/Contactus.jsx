import React, { useState } from "react";
import { FaPhone, FaWhatsapp, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdCopyright } from "react-icons/md";

const Contactus = ({ id }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://clientportfolio-backend.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div id={id} className="w-screen flex justify-center items-center py-8 bg-yellow-400">
      <div className="mt-4 w-[80%]">
        <h1 className="text-4xl font-bold text-center">Let's Chat</h1>
        <h1 className="text-2xl font-bold text-center text-black mt-4">Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row p-3 gap-3 justify-center items-center mt-4">
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-bold">First Name <sup className="text-red-600">*</sup></label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="p-2 mt-2 rounded-md border-none outline-none hover:shadow-lg"/>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-bold">Email Address <sup className="text-red-600">*</sup></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="p-2 mt-2 border-black rounded-md outline-none hover:shadow-lg"/>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row p-3 gap-3 justify-center items-center mt-4">
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-bold">Last Name <sup className="text-red-600">*</sup></label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="p-2 mt-2 border-black rounded-md outline-none hover:shadow-lg"/>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-bold">Phone Number</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="p-2 mt-2 border-black rounded-md outline-none hover:shadow-lg"/>
            </div>
          </div>

          <div className="p-3">
            <label className="font-bold">Comments / Questions <sup className="text-red-600">*</sup></label>
            <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full p-2 mt-2 border-black rounded-md outline-none hover:shadow-lg"></textarea>
          </div>

          <button type="submit" className="bg-white text-black p-3 rounded-lg hover:bg-yellow-400 hover:font-bold">SEND MESSAGE</button>
        </form>

        {status && <p className="text-center font-bold mt-4">{status}</p>}

        <div className="flex flex-col sm:flex-row justify-evenly items-center mt-16">
          <div className="flex flex-col items-center">
            <FaPhone className="w-12 h-12 cursor-pointer" />
            <p className="text-xl">+91 9528729636</p>
          </div>
          <div className="flex flex-col items-center">
            <CiMail className="w-12 h-12 cursor-pointer" />
            <p className="text-xl">avinayak171@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Let's Connect</h1>
            <div className="flex gap-2">
              <a href="https://wa.me/9528729636" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-black rounded-full">
                <FaWhatsapp />
              </a>
              <a href="https://www.linkedin.com/in/vinayakagarwal01/" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-black rounded-full">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com/avinayak171/" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-black rounded-full">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
