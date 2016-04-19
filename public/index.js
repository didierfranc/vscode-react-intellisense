import React from 'react'
import ReactDom from 'react-dom'

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>
  }
})

ReactDOM.render(<HelloMessage name="Mark" />, document.getElementbyId('content'))
