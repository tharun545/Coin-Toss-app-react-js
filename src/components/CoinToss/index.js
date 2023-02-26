// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {totalCount: 0, headCount: 0, tailCount: 0, isTossHead: true}

  onCoinTossed = () => {
    const {totalCount, headCount, tailCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
      this.setState({isTossHead: true})
    } else {
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
      this.setState({isTossHead: false})
    }
    this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
  }

  render() {
    const {isTossHead, totalCount, headCount, tailCount} = this.state

    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {isTossHead ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="image"
            />
          )}
          <div>
            <button className="button" onClick={this.onCoinTossed}>
              Toss Coin
            </button>
          </div>
          <div className="toss-count-container">
            <p>Total: {totalCount}</p>
            <p>Heads: {headCount}</p>
            <p>Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
