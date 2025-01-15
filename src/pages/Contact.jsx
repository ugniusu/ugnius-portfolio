import ContactComponent from "../components/ContactComponent";
import Navigation from "../components/Navigation";

function Contact() {
  return (
    <div className="flex h-full">
      <aside>
        <Navigation />
      </aside>
      <ContactComponent />
    </div>
  );
}

export default Contact;
