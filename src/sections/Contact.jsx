import { useState } from "react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Free email delivery via FormSubmit (https://formsubmit.co) — no API key or signup.
// The first message sends an activation email to this address; click the link once
// and every later message lands in this inbox.
const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || "asishdandy87@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _replyto: formData.email,
            _subject: `New portfolio message from ${formData.name}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const result = await response.json();

      if (response.ok && String(result.success) === "true") {
        setFormData({ name: "", email: "", message: "" });
        showAlertMessage("success", "Your message has been sent!");
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      showAlertMessage("danger", "Message failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div
        ref={sectionRef}
        className={`flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading"> Lets Talk </h2>
          <p className="font-normal text-neutral-400">
            Whether You're Looking to build a new Website, or a Existing
            Platform, or to bring a project to life, <br /> I'm here to help.
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
              className="field-input field-input-focus"
              placeholder="Violet"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
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
              className="field-input field-input-focus"
              placeholder="Violet@gmail.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="field-input field-input-focus"
              placeholder="Share your thoughts"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-1 py-3 text-center rounded-md cursor-pointer bg-radial from-lavender hover-animation"
          >
            {!isLoading ? "send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
