import React, { Component } from 'react'
import AvatarEditor from 'react-avatar-editor'

class MyEditor extends Component {
  constructor(props) {
    super(props)
  }

  setEditorRef = (editor) => this.editor = editor

  render () {
    return (
      <div>
        <AvatarEditor
          ref={this.props.test}
          image={this.props.avatar}
          width={250}
          height={250}
          border={10}
          scale={1.2}
        />
        <button
          onClick={this.props.save}
          >click me</button>
      </div>
    )
  }
}

export default MyEditor