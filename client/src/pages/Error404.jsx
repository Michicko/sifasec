import { Link } from "react-router-dom";
import Header from "../Components/Layout/Header";
import HeaderTop from "../Components/Layout/HeaderTop";

export default function Error404() {
  return (
    <>
      <Header noBottom={true}>
        <HeaderTop>
          <h1>404 | Page not found</h1>
        </HeaderTop>
        <div className="section-error">
          <div className={"error-text-box"}>
            <p>
              The page you&apos;re looking for doesn&apos;t exist or an error
              occured.
            </p>
            <div className="dir-box">
              <p>
                Go back, or go to{" "}
                <Link to={"/"} className={"error-link"}>
                  Home page
                </Link>{" "}
                to choose a new direction.
              </p>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}
