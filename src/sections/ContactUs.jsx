import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { error } from "three";
import Alert from "../components/Alert";
import { Particles } from "../components/Particle";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("form submitted", formData);
      await emailjs.send(
        "service_63bngo5",
        "template_a5w4w4v",
        {
          from_name: formData.name,
          to_name: "Atirek",
          from_email: formData.email,
          to_email: "atirekgupta09@gmail.com",
          message: formData.message,
        },
        "uJ__cDyvD1hInqx1w",
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage(
        "danger",
        "Something Went wrong! Please try agian after some time",
      );
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            From AI-powered applications and Agentic AI workflows to modern
            React and Next.js websites, I help turn ideas into scalable,
            production-ready products.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="field-input field-input-focus"
              placeholder="John Doe"
              required
              autoComplete="name"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="field-input field-input-focus"
              placeholder="JohnDoe@example.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your Idea or problem statement..."
              required
              autoComplete="message"
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
