const Heading = require("./Heading");
const container = document.getElementById("root");

// const element = React.createElement(
//   "div",
//   { id: "first", title: "This is title", className: "test", tabIndex: "0" },
//   "I was created by React"
// );
//=======================================================================
//создаем компонент, кладем в props все настройки и детей этого элемента
const element = React.createElement(
  Heading,
  { givenId: "first", givenTitle: "This is title", headingLevel: 1 },
  "I was created by React",
  React.createElement("span", {}, " yes ")
);

const element2 = React.createElement(
  Heading,
  { givenId: "second", givenTitle: "Текст ", headingLevel: 3 },
  "любой"
);

ReactDOM.render(element, container);
ReactDOM.render(element2, container);
