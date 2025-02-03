import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import HText from "./HText";

function ContactComponent() {
  const [isSending, setIsSending] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          e.target.reset();
          setIsSending(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <HText className="mb-10 text-4xl font-bold text-primary-400 text-center font-montserrat">
        Contact Me !
      </HText>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto p-6 text-xs lg:text-sm rounded-lg shadow-md w-1/2 2xl:w-1/3 bg-accent-850 border-primary-800 border"
      >
        <motion.input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="Name"
          required
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300"
        />

        <motion.input
          type="email"
          name="user_email"
          id="user_email"
          placeholder="Email"
          required
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300"
        />

        <motion.textarea
          name="message"
          id="message"
          placeholder="Message"
          required
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full h-24 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 resize-none"
        />

        <motion.input
          type="submit"
          value={isSending ? "Sending..." : "Send"}
          disabled={isSending}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`w-full p-3 text-white font-bold text-lg rounded-lg cursor-pointer transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-primary-300 ${
            isSending ? "bg-accent-400" : "bg-primary-500 hover:bg-primary-400"
          }`}
        />
      </form>
    </div>
  );
}

export default ContactComponent;
