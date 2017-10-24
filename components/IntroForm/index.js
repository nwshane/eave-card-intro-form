import {Component} from 'react'
import NameCard from './NameCard'
import PhoneNumberCard from './PhoneNumberCard'
import ResultsCard from './ResultsCard'

class IntroForm extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      phoneNumber: '',
      card: 0
    }
    this.changeName = this.changeName.bind(this)
    this.changePhoneNumber = this.changePhoneNumber.bind(this)
    this.goToNextCard = this.goToNextCard.bind(this)
    this.goToPreviousCard = this.goToPreviousCard.bind(this)
  }

  cards = [
    'name',
    'phoneNumber',
    'results'
  ]

  changeName (e) {
    this.setState({
      name: e.target.value
    })
  }

  changePhoneNumber (e) {
    this.setState({
      phoneNumber: e.target.value
    })
  }

  goToNextCard (event) {
    event.preventDefault()
    this.setState({
      card: this.state.card + 1
    })
  }

  goToPreviousCard () {
    this.setState({
      card: this.state.card - 1
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
        {this.getCurrentCard() === 'phoneNumber' && (
          <PhoneNumberCard
            goToNextCard={this.goToNextCard}
            goToPreviousCard={this.goToPreviousCard}
            phoneNumber={this.state.phoneNumber}
            changePhoneNumber={this.changePhoneNumber}
          />
        )}
        {this.getCurrentCard() === 'results' && (
          <ResultsCard
            name={this.state.name}
            phoneNumber={this.state.phoneNumber}
            goToPreviousCard={this.goToPreviousCard}
          />
        )}
      </div>
    )
  }
}

export default IntroForm
