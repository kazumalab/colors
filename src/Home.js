import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: props.user,
    }
  }

  render() {
    return(
      <div>Hello</div>
    )
  }
}

export default Home

