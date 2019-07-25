import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isopen: false,
    }

    this.changeWindow = this.changeWindow.bind(this)
  }

  render() {
    return(
      <header className="header">
        <a href="/" className="service_name">Colors</a>
        <button className="side-menu-button" onClick={this.changeWindow} >
          <FontAwesomeIcon icon={faBars} size="2x" color="white"></FontAwesomeIcon>
        </button>
        { this.state.isopen &&
          <div className="side-menu">
            <div className="side-menu-cover" onClick={this.changeWindow}>
            </div>
          { this.isLogin && <a className="side-menu-item" href="/user">{this.props.user.email}</a> }
          { !this.isLogin && <button className="side-menu-item" onClick={this.props.login}>ログイン</button> }
          </div>
        }
      </header>
    )
  }

  get isLogin() {
    return this.props.user !== null
  }

  changeWindow() {
    this.setState({ isopen: !this.state.isopen })
  }
}

export default Header