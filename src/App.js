import React from 'react'
import './App.css';
import firebase from "./firebase-config"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null
    }
  }

  render() {
    return(
      <div>
        <h1>Hello! Colors.</h1>
        { !this.isLogin && <button onClick={this.login}>Login</button> }
        { this.isLogin && <p>{this.state.user.email}</p> }
      </div>
    )
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user })
    })
  }

  get isLogin() {
    return this.state.user && this.state.user.uid
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }
}

export default App;
