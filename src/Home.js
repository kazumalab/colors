import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "./stylesheets/common.scss"
import "./stylesheets/color-form.scss"

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: props.user,
      colors: [],
      errors: [],
    }

    this.addColor = this.addColor.bind(this)
    this.setColor = this.setColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }

  render() {
    const colorElements =
      <div className="color-box-list">
        {
          this.state.colors.map((value, index) =>
            <div className="color-box" style={{ backgroundColor: value }} key={index}>
              <button className="color-box__trash" onClick={() => this.removeColor(index)}><FontAwesomeIcon icon={faTrash} size="2x" color={this.trashColor(value)}></FontAwesomeIcon></button>
            </div>
          )
        }
      </div>

    return(
      <div className="color-form">
        <label>Color's Themes</label>
        { this.errorMessages }
        <input type="text" placeholder="Theme" className="input" />
        <input type="color" onChange={this.setColor} />
        { colorElements }
        <button onClick={this.addColor} className="button">Add</button>
      </div>
    )
  }

  setColor(event) {
    this.setState({ color: event.target.value })
  }

  addColor() {
    if (!this.state.color) {
      this.setState({ errors: ['色を選択してください'] })
      return
    }

    let colors = this.state.colors
    colors.push(this.state.color)
    this.setState({ colors: colors })
  }

  removeColor(index) {
    let colors = this.state.colors
    colors.splice(index, 1)
    this.setState({ colors: colors })
  }

  trashColor(selectedColor) {
    console.log(selectedColor)
    console.log((selectedColor.match(new RegExp("f", "g")) || []).length)
    return (selectedColor.match(new RegExp("f", "g")) || []).length >= 4 ? 'black' : 'white'
  }

  get errorMessages() {
    if (this.state.errors.length === 0) return

    return <div className="flash -error">{
      this.state.errors.map((value, index) =>
        <p className="flash-text" key={index}>{value}</p>
      )
    }
    </div>
  }
}

export default Home

