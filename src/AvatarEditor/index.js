import React, { Component } from 'react'
import AvatarEditor from 'react-avatar-editor'

class MyEditor extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      size: 10,
      rotate: 0 
    }
  }

  setEditorRef = (editor) => this.editor = editor

  handleChange = (event) => {
    let { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleRotate = () => {
    this.setState({ rotate: this.state.rotate += 90 })
  }

  render () {
    return (
      <div>
        <AvatarEditor
          ref={this.props.test}
          image={this.props.avatar}
          width={250}
          height={250}
          border={10}
          scale={this.state.size / 10}
          rotate={this.state.rotate}
          borderRadius={150}
        />
        <input type='range' min='10' max='100' name='size' onChange={this.handleChange} value={this.state.size}/>
        <button onClick={this.props.save} >click me</button>
        <button name='rotate' onClick={this.handleRotate} value={this.state.rotate} onChange={this.handleChange}>rotate</button>
      </div>
    )
  }
}

export default MyEditor