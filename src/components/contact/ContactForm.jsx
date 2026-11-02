


import emailjs from "@emailjs/browser"
import React from "react";
import { twMerge } from "tailwind-merge";
const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={twMerge("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
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
      await emailjs.send("service_bzlaa6c", "template_gv4nai8", {
        from_name: formData.name,
        to_name: "Mohamed Salah",
        from_email: formData.email,
        to_email: "moosalah839@gmail.com",
        from_phone: formData.phone,
        to_phone: "01000000000",
        subject: formData.subject,
        message: formData.message,

      })
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
      showAlertMessage("error", "Failed to send message.");
    }

    //service_bzlaa6c
    //template_gv4nai8
  }

  return (
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
          &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      </form>
    </div>
  );
}
