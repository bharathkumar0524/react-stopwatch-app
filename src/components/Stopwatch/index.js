// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timer: 0}

  onClickStart = () => {
    this.timerId = setInterval(this.time, 1000)
  }

  time = () => {
    this.setState(prevState => ({timer: prevState.timer + 1}))
  }

  onClickStop = () => {
    clearInterval(this.timerId)
  }

  onClickRestart = () => {
    this.setState({timer: 0})
  }

  render() {
    const {timer} = this.state
    const seconds = Math.floor(timer % 60)
    const minutes = Math.floor(timer / 60)

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="stopwatch-timer-container">
            <div className="timer-container">
              <img
                className="timer-img"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch-timer"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 testid="timer" className="timer">
              <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
              <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
            </h1>
            <div className="button-container">
              <button
                type="button"
                className="button start"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset"
                onClick={this.onClickRestart}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
