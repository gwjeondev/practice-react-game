const React = require('react')
const ReactDom = require('react-dom/client')

class WordRelay extends React.Component {
  state = {
    text: 'Hello webpack',
  }

  render() {
    return <div>{this.state.text}</div>
  }
}

module.exports = WordRelay
