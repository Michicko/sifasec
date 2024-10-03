import Header from "../Components/Layout/Header";
import Icon from "@mdi/react";
import { mdiArrowTopRight } from "@mdi/js";

export default function Contact() {
  return (
    <>
      <Header>
        <div className="contact">
          <div className="left">
            <h1>Contact us</h1>
            <p>It is time to solve your cybersecurity challenges</p>
          </div>
          <div className="right">
            <div className="contact-form-box">
              <h2>Get in touch with us</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your message</label>
                  <textarea name="message" id="message" rows="4"></textarea>
                </div>
                <button className={"btn"} type="submit">
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
