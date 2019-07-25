import React from 'react'
import './App.css';
import firebase from "./firebase-config"
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      db: firebase.firestore()
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) this.setState({ user })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header user={this.state.user} isLogin={this.isLogin} login={this.login} />
          <Route path='/' component={() => <Home user={this.state.user} />} />
          <Footer />
        </div>
      </BrowserRouter>
    )
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
