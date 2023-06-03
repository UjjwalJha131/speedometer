import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevSpeed => ({
        speed: prevSpeed.speed + 10,
      }))
    }
  }

  onApplyBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevSpeed => ({
        speed: prevSpeed.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-app-container">
        <div className="speedometer-container">
          <h1 className="heading">Speedometer</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer-image"
          />
          <h2 className="speed-text">Speed is {speed}mph</h2>
          <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              type="button"
              className="accelerate-button button"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>

            <button
              type="button"
              className="apply-brake-button button"
              onClick={this.onApplyBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
