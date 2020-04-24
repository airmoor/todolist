import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <div>Произошла ошибка :(</div>;
    }
    return children;
  }
}

export default ErrorBoundary;