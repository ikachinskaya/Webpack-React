const TextBlock = require("./TextBlock");

const root = document.getElementById("root");

const reactElem = React.createElement(TextBlock, {
  articleTitle: "Зaголовок",
  firstPar: "lorem ipsum",
  headingLevel: 4,
});

const reactElem1 = React.createElement(TextBlock);

ReactDOM.render(reactElem, root);
//ReactDOM.render(reactElem1, root);
