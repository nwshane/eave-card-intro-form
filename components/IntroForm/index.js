import {Component} from 'react'
import NameCard from './NameCard'
import Results from './Results'

class IntroForm extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      card: 0
    }
    this.changeName = this.changeName.bind(this)
    this.goToNextCard = this.goToNextCard.bind(this)
  }

  cards = [
    'name',
    'results'
  ]

  changeName (e) {
    this.setState({
      name: e.target.value
    })
  }

  goToNextCard () {
    this.setState({
      card: this.state.card + 1
    })
  }

  getCurrentCard () {
    return this.cards[this.state.card]
  }

  render () {
    return (
      <div>
        {this.getCurrentCard() === 'name' && (
          <NameCard
            name={this.state.name}
            changeName={this.changeName}
            goToNextCard={this.goToNextCard}
          />
        )}
        {this.getCurrentCard() === 'results' && (
          <Results
            name={this.state.name}
          />
        )}
      </div>
    )
  }
}

export default IntroForm
