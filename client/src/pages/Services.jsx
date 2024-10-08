import Header from "../Components/Layout/Header";
import HeaderTop from "../Components/Layout/HeaderTop";
import ServicesSection from "../Components/Services/Services";
import { trusts } from "../data";
import Card from "../Components/Services/Service";
import { v4 as uuid } from "uuid";
import Ca from "../Components/Ca/Ca";
import Industries from "../Components/Industries/Industries";

export default function Services() {
  return (
    <>
      <Header noBottom={true}>
        <HeaderTop noText={false}>
          <h1>
            We deliver a diverse range of state of the art solutions across
            industries
          </h1>
          <p>A better source of protection for a better tomorrow.</p>
        </HeaderTop>
        <div className="divider"></div>
      </Header>
      <section className="section xs">
        <div className="industries">
          <Industries theme={"dark"} />
        </div>
      </section>
      <section className="section">
        <h2 className="secondary-heading">Platform-enabled services</h2>
        <ServicesSection />
      </section>
      <section className="section section-service">
        <h2 className="secondary-heading">
          Effective strategy for maximum security
        </h2>
        <div className="texts">
          <p>
            Whether you&apos;re building, operating, or optimizing your cybersecurity
            strategy, we&apos;ll help you elevate your program so you can access new
            revenue streams, realize greater efficiencies, and get to market
            faster.
          </p>
          <p>
            Our services, technology, and innovative approaches will keep you
            competitive and ensure client satisfaction. Our unique framework and
            value methodology enable you to prioritize your business goals and
            deliver exceptional service.
          </p>
          <p>
            We move quickly and constantly update and implement plans that are
            specifically designed to meet your business objectives. With years
            of experience of growing business, we bring all our knowledge to
            help you thrive and succeed.
          </p>
        </div>
      </section>

      <section className="section blue-bg">
        <h2 className="secondary-heading">
          This is why the top companies trust us with their cybersecurity
          solutions
        </h2>
        <div className="texts light">
          <p>
            Sifa Security offers the most comprehensive solutions to help
            industries accelerate security, maximize productivity, preserve user
            experience, and lower total cost of ownership. We&apos;ll help you
            understand your attack surface, gain insight into emergent threats
            and be well-equipped to react. We&apos;ll give you a path to collaborate
            and the confidence to take on tomorrow&apos;s challenge securely.
          </p>
        </div>
        <div className="trusts">
          {trusts.map((trust) => {
            return <Card service={trust} key={uuid()} theme="light" />;
          })}
        </div>
      </section>
      <Ca />
    </>
  );
}
