class Heading extends React.Component {
  //обязательно для компонента
  render() {
    //достаем из props все настройки
    const { givenId, givenTitle, children, headingLevel } = this.props;
    return React.createElement(
      `h${headingLevel}`,
      { className: "header-title", id: givenId, title: givenTitle },
      ...children
    );
  }
}
module.exports = Heading;
