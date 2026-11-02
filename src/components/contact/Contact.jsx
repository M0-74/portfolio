import React from "react";
// import ContactForm from "./ContactForm";
import { useState } from "react";
import ContactDetails from "./ContactDetails";
import { Particles } from "./Particles";
import Alert from "../alert/Alert";
import emailjs from "@emailjs/browser"
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineShareLocation } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa"
// import React from "react";
// import { twMerge } from "tailwind-merge";
const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    subject: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);
    try {
      await emailjs.send("service_vqd72t5", "template_gv4nai8", {
        from_name: formData.name,
        to_name: "Mohamed Salah",
        from_email: formData.email,
        to_email: "moosalah839@gmail.com",
        from_phone: formData.phone,
        to_phone: "01000000000",
        subject: formData.subject,
        message: formData.message,

      }, "C5_X3rbQskJLxufJu")
      setIsLoading(false);
      showAlertMessage("success", "Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
        subject: "",
      });
    } catch (error) {
      setIsLoading(false);
      // console.log(error.text);
      showAlertMessage("danger", "Failed to send message.");
    }

    //service_bzlaa6c
    //template_gv4nai8
  }

  return (
    <div className="relative c-space section-spacing" id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <h1 className="text-heading mb-10">
        Contact
      </h1>
      <div className="flex flex-col items-center justify-center p-5 mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* **************************************************************** */}
          <div className="">
            <p className=" text-[#818181] text-[14px] tracking-[1.5px]">
              I'm available for freelance work and full time positions. However, if
              you have any other requests or questions, don't hesitate to contact me.
            </p>

            {/* Email */}
            <div
              className="group flex justify-between items-center border border-white/10
                   rounded-2xl p-5 mt-6 hover:bg-white/5 duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-center gap-3">
                <MdOutlineEmail className="text-neutral-500 group-hover:scale-[1.2] duration-300" />
                <div className="flex flex-col">
                  <span className="text-sm text-[#575757] text-[10px] font-bold tracking-[2px]">Email</span>
                  <a
                    href="moosalah839@gmailcom"
                    target="_blank"
                    rel="noopener"
                    className="text-[#818181] group-hover:text-white duration-300"
                  >
                    Moosalah839@gmail.com
                  </a>
                </div>
              </div>
              <FaArrowTrendUp className="text-neutral-500" />
            </div>
            {/* Phone */}
            <div
              className="group flex justify-between items-center border border-white/10
                   rounded-2xl p-5 mt-6 hover:bg-white/5 duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-center gap-3">
                <FaWhatsapp className="text-neutral-500 group-hover:scale-[1.2] duration-300" />
                <div className="flex flex-col">
                  <span className="text-sm text-[#575757] text-[10px] font-bold tracking-[2px]">Phone</span>
                  <a
                    href="https://wa.me/201149296490"
                    target="_blank"
                    rel="noopener"
                    className="text-[#818181] group-hover:text-white duration-300"
                  >
                    +20 1149296490
                  </a>
                </div>
              </div>
              <FaArrowTrendUp className="text-neutral-500" />
            </div>

            {/* Github */}
            <div
              className="group flex justify-between items-center border border-white/10
                   rounded-2xl p-5 mt-6 hover:bg-white/5 duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-center gap-3">
                <CiLink className="text-neutral-500 group-hover:scale-[1.2] duration-300" />
                <div className="flex flex-col">
                  <span className="text-sm text-[#575757] text-[10px] font-bold tracking-[2px]">Github</span>
                  <a
                    href="https://github.com/M0-74"
                    target="_blank"
                    rel="noopener"
                    className="text-[#818181] group-hover:text-white duration-300"
                  >
                    M0-74
                  </a>
                </div>
              </div>
              <FaArrowTrendUp className="text-neutral-500" />
            </div>

            {/* Location */}
            <div
              className="group flex justify-between items-center border border-white/10
                   rounded-2xl p-5 mt-6 hover:bg-white/5 duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-center gap-3">
                <MdOutlineShareLocation className="text-neutral-500 group-hover:scale-[1.2] duration-300" />
                <div className="flex flex-col">
                  <span className="text-sm text-[#575757] text-[10px] font-bold tracking-[2px]">Location</span>
                  <a
                    href=" "
                    className="text-[#818181] group-hover:text-white duration-300"
                  >
                    Beni Suef, Egypt
                  </a>
                </div>
              </div>
              <FaArrowTrendUp className="text-neutral-500" />
            </div>

            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

            <p className="uppercase text-[10px] font-bold text-center flex items-center justify-center gap-2 text-[#2f8d51] tracking-widest">
              <span className="w-1 h-1 rounded-full bg-green-500 animate-ping duration-200"></span>
              AVAlable For New Project
            </p>
          </div>
          {/* **************************************************************** */}
          <div
            className="mt-10 md:mt-0 border
         border-white/10 rounded-2xl"
          >


            {/* *************************************************************** */}
            {/* <ContactForm /> */}
            <div className="relative shadow-input mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8 bg:transparent">
              <div className="flex items-center justify-center gap-2">
                <p className="text-xl font-bold text-neutral-300 text-[10px] uppercase">
                  Send a Message
                </p>
                <div className="h-[1px] w-[300px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
              </div>
              <form className="my-8" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col space-y-2  md:flex-row md:space-y-0 md:space-x-2 md">
                  <div className="flex w-full flex-col space-y-2">
                    <label
                      htmlFor="name"
                      className="field-label tracking-[2px] font-bold"
                    >
                      Full Name
                      <span className="pl-1 text-red-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="field-input field-input-focus"
                      placeholder="John Doe"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex w-full flex-col space-y-2 mt-4 md:mt-0">
                    <label
                      htmlFor="email"
                      className="field-label tracking-[2px] font-bold"
                    >
                      Email
                      <span className="pl-1 text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="field-input field-input-focus"
                      placeholder="John Doe"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                  <div className="flex w-full flex-col space-y-2 mt-4 md:mt-0">
                    <label
                      htmlFor="name"
                      className="field-label tracking-[2px] font-bold"
                    >
                      Phone Number
                      <span className="pl-1 text-red-600">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      className="field-input field-input-focus"
                      placeholder="John Doe"
                      // autoComplete=""
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className=" flex w-full flex-col space-y-2 mt-4 md:mt-0">
                    <label
                      htmlFor="subject"
                      className="field-label tracking-[2px] font-bold"
                    >
                      Subject
                    </label>
                    <input

                      id="subject"
                      name="subject"
                      type="text"
                      className="field-input field-input-focus"
                      placeholder="John Doe"
                      autoComplete="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="Message"
                    className="field-label tracking-[2px] font-bold"
                  >
                    Message
                    <span className="pl-1 text-red-600">*</span>
                  </label>
                  <textarea
                    id="Message"
                    name="message"
                    type="text"
                    className="field-input"
                    placeholder="Share your thoughts ..."
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                  />
                </div>

                <button
                      className="group/btn relative cursor-pointer block h-10 w-full rounded-md bg-gradient-to-br
                      from-black to-neutral-600 font-medium
                        dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]
                       dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 
                    text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                  type="submit"
                >
                  {!isLoading ? "Send Message" : "Sending..."}
                  
                  <BottomGradient />
                </button>

                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
              </form>
            </div>
            {/* *************************************************************** */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
///******************************* */