class Ul extends React.Component {
  render() {
    const { className, text } = this.props;
    return React.createElement(
      "ul",
      {},
      React.createElement(
        "li",
        {},
        React.createElement("p", { className: className }, text)
      )
    );
  }
}

module.exports = Ul;
