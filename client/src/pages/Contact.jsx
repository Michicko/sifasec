import Header from "../Components/Layout/Header";
import Icon from "@mdi/react";
import {
  mdiArrowTopRight,
  mdiMapMarkerRadiusOutline,
  mdiEmailOutline,
  mdiPhoneInTalkOutline,
} from "@mdi/js";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../Components/Alert/Alert";

export default function Contact() {
  const formRef = useRef(null);
  const config = {
    serviceId: "service_2b8iwla",
    templateId: "template_pxqx97o",
    publicKey: "oVMW3bIannPYMEZdv",
  };

  const [formStatus, setFormStatus] = useState({
    message: "",
    status: "",
    showAlert: "",
  });

  const resetFormStatus = () => {
    setFormStatus({
      message: "",
      status: "",
      showAlert: false,
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      setFormStatus({
        message: "Message sent. We'll get back to you shortly.",
        status: "success",
        showAlert: true,
      });
      const res = await emailjs.sendForm(
        config.serviceId,
        config.templateId,
        formRef.current,
        {
          publicKey: config.publicKey,
        }
      );

      if (res.status === 200 || res.text === "OK") {
        setFormStatus({
          message: "Message sent. We'll get back to you shortly.",
          status: "success",
          showAlert: true,
        });
        formRef.current.reset();
      }
    } catch (error) {
      setFormStatus({
        message: "Something went wrong. Try again later.",
        status: "error",
        showAlert: true,
      });
      console.log(error);
    }
  };

  return (
    <>
      <Alert
        showAlert={formStatus.showAlert}
        status={formStatus.status}
        message={formStatus.message}
        resetFormStatus={resetFormStatus}
      />
      <Header>
        <div className="contact">
          <div className="left">
            <h1>Contact us</h1>
            <p>It is time to solve your cybersecurity challenges</p>
            <div className="infos">
              <div className="info">
                <Icon path={mdiEmailOutline} className="icon" />
                <p>support@sifasec.com</p>
              </div>
              <div className="info">
                <Icon path={mdiPhoneInTalkOutline} className="icon" />
                <p>+1 (786) 309-3032</p>
              </div>
              <div className="info">
                <Icon path={mdiMapMarkerRadiusOutline} className="icon" />
                <p>Miami, Florida</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contact-form-box">
              <h2 className="light">Get in touch with us</h2>
              <form
                className="contact-form"
                onSubmit={sendMessage}
                ref={formRef}
              >
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    name="from_name"
                    id="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your email</label>
                  <input
                    type="email"
                    name="from_email"
                    id="email"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="3"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button className={"btn light"} type="submit">
                  <span className="icon-box">
                    <Icon path={mdiArrowTopRight} className="icon btn-icon" />
                  </span>
                  <span>Get in touch</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}
