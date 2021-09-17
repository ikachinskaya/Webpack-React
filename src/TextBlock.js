class TextBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      articleTitle,
      firstPar = "забыл передать текст",
      secondPar = "забыл передать текст",
      headingLevel = 1,
    } = this.props;
    return React.createElement(
      "article",
      {},
      React.createElement(`h${headingLevel}`, {}, articleTitle),
      React.createElement("p", {}, firstPar),
      React.createElement("p", {}, secondPar)
    );
  }
}

module.exports = TextBlock;
