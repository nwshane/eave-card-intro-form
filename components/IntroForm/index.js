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
    this.getCards = this.getCards.bind(this)
    this.getCurrentCard = this.getCurrentCard.bind(this)
  }

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

  getCards () {
    return [
      <NameCard
        name={this.state.name}
        changeName={this.changeName}
        goToNextCard={this.goToNextCard}
      />,
      <PhoneNumberCard
        goToNextCard={this.goToNextCard}
        goToPreviousCard={this.goToPreviousCard}
        phoneNumber={this.state.phoneNumber}
        changePhoneNumber={this.changePhoneNumber}
      />,
      <ResultsCard
        name={this.state.name}
        phoneNumber={this.state.phoneNumber}
        goToPreviousCard={this.goToPreviousCard}
      />
    ]
  }

  getCurrentCard () {
    return this.getCards()[this.state.card]
  }

  render () {
    return (
      <div>
        {this.getCurrentCard()}
        <style jsx>{`
          div {
            margin-top: 50px;
          }
        `}</style>
      </div>
    )
  }
}

export default IntroForm
