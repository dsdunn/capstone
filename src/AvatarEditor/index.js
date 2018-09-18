import React, { Component } from 'react';
import AvatarEditor from 'react-avatar-editor';
import './styles.css'

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

  handleRotate = (event) => {
    event.preventDefault()
    this.setState({ rotate: this.state.rotate += 90 })
  }

  render () {
    return (
      <div className='avatar-editor'>
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
        <div className='avatar-controls'>
          <input className='avatar-control' type='range' min='10' max='100' name='size' onChange={this.handleChange} value={this.state.size}/>
          <button className='avatar-control' name='rotate' onClick={this.handleRotate} value={this.state.rotate} onChange={this.handleChange}>rotate 90</button>
          <button className='avatar-control' onClick={this.props.save}>Save Avatar</button> 
        </div>
      </div>
    )
  }
}

export default MyEditor