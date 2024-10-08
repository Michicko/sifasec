import Header from "../Components/Layout/Header";
import HeaderTop from "../Components/Layout/HeaderTop";
import Page from "../Components/Page";

export default function Blog() {
  return (
    <Page>
      <Header noBottom={true}>
        <HeaderTop>
          <h1>Blog and Articles</h1>
          <p>
            Find helpful information, security articles, trends in cybersecurity
            and insight on threats and cyberattacks.
          </p>
        </HeaderTop>
        <div className="divider"></div>
      </Header>
      <section className="section min section-articles">
        <p>No articles available.</p>
      </section>
    </Page>
  );
}
