import React from 'react'
import "../stylesheets/footer.scss"

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
        <div className="footer-company">
          <p className="footer-company__copyright">2019 mattari, inc.</p>
        </div>
      </footer>
    )
  }
}

export default Footer