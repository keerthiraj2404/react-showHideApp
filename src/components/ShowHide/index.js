// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onFirstName = () => {
    const {isFirstName} = this.state
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
    return isFirstName
  }

  onLastName = () => {
    const {isLastName} = this.state
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
    return isLastName
  }

  render() {
    const {isFirstName} = this.state
    const {isLastName} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="content">
          <div className="name-container">
            <button className="button" type="button" onClick={this.onFirstName}>
              Show/Hide FirstName
            </button>
            {isFirstName ? <p className="names">Joe</p> : null}
          </div>
          <div className="name-container">
            <button className="button" type="button" onClick={this.onLastName}>
              Show/Hide LastName
            </button>
            {isLastName ? <p className="names">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
