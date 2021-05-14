// CHECKED 1.0
import React, { Component, ErrorInfo } from "react";

import { ErrorBoundaryState } from "./interfaces";
import ErrorPage from "Views/_Common/Pages/Error/ErrorPage";

// ErrorBoundary component from BLC can be used to replace this.
export default class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // A good place to log unexpected errors.
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorPage />;
    }

    return children;
  }
}
