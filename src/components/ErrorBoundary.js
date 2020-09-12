import React from "react";
import { Link, Redirect, navigate } from "@reach/router";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(`${error} , ${info}`);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => navigate('/'), 3000);
    }
  }

  render() {
    console.log(`error state is ${this.state.hasError}`);
    if (this.state.redirect) return <Redirect to="/" />;
    if (this.state.hasError) {
      return (
        <div>
          An Error Occurred. Click <a href="/">here</a> to go back to
          homepage
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
