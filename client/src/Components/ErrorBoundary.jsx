import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Layout/Header";
import HeaderTop from "./Layout/HeaderTop";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  reloadPage() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Header noBottom={true}>
            <div className="section min error-boundary">
              <h3>Oops! Something went wrong</h3>
              <p>
                This page didn&apos;t load correctly. Reload page or{" "}
                <Link to={"/"} className="error-link">
                  Go back to homepage
                </Link>
              </p>
              <button type="button" onClick={this.reloadPage}>
                Reload page
              </button>
            </div>
          </Header>
        </>
      );
    }

    return this.props.children;
  }
}
