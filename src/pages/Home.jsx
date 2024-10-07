import Header from "../Components/Layout/Header";
import HeaderBottom from "../Components/Layout/HeaderBottom";
import HeaderTop from "../Components/Layout/HeaderTop";
import Icon from "@mdi/react";
import { mdiArrowTopRight } from "@mdi/js";
import Services from "../Components/Services/Services";
import Industries from "../Components/Industries/Industries";
import Ca from "../Components/Ca/Ca";

export default function Home() {
  return (
    <>
      <Header>
        <HeaderTop>
          <h1>Cybersecurity for Innovators of the 21st Century</h1>
          <p>
            Take on tomorrow&apos;s challenge securely with our cutting-edge and
            comprehensive cybersecurity solutions.
          </p>
          <a href="#" target="_blank" className="btn header-btn">
            <span className="icon-box">
              <Icon path={mdiArrowTopRight} className="icon btn-icon" />
            </span>
            <span>Run a quick scan</span>
          </a>
        </HeaderTop>
        <HeaderBottom>
          <img
            src="/images/header-img.jpg"
            alt="sifasec team working"
            className="header-img"
            data-attributes="image by Sigmund on unspash https://unsplash.com/photos/people-sitting-on-chair-in-front-of-computer-monitor-Fa9b57hffnM"
          />
        </HeaderBottom>
      </Header>
      <section className="section">
        <h2 className="secondary-heading">Platform-enabled services</h2>
        <Services />
      </section>
      <Ca />
      <section className="section section-industry">
        <div className="top">
          <h3 className="light">We deliver a diverse range of state of the art solutions.</h3>
          <p>
            Every company and every industry is different. Regulations and
            compliance requirements vary. Threat actors might have special
            tactics depending on the company type
          </p>
        </div>
        <div className="divider"></div>
        <div className="bottom">
          <Industries />
        </div>
      </section>
    </>
  );
}
