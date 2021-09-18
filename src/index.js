const Ul = require("./Ul");

const root = document.getElementById("root");

const element = React.createElement(Ul, {
  className: "text",
  text: "Lorem ipsum",
});

ReactDOM.render(element, root);
