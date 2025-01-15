import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
          setIsSending(false); // Reset sending state on failure
        }
      );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2 className="mb-10 text-4xl font-semibold text-primary-50">
        Contact Me !
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto p-6 rounded-lg shadow-md w-1/3 bg-accent-850 border-primary-800 border"
      >
        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="Name"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="user_email"
          id="user_email"
          placeholder="Email"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          name="message"
          id="message"
          placeholder="Message"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />

        <input
          type="submit"
          value={isSending ? "Sending..." : "Send"}
          disabled={isSending}
          className={`w-full p-3 text-white rounded-lg cursor-pointer transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            isSending ? "bg-accent-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        />
      </form>
    </div>
  );
}

export default ContactComponent;
