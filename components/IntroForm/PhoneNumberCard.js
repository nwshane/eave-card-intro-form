import TextField from 'material-ui/TextField'
import PreviousCardButton from './PreviousCardButton'
import NextCardButton from './NextCardButton'

export default ({phoneNumber, changePhoneNumber, goToPreviousCard, goToNextCard}) => (
  <section>
    <div>
      <PreviousCardButton onClick={goToPreviousCard} />
    </div>
    <div>
      <div>
        <label htmlFor='phone_number_input'>
          What's your phone number?
        </label>
      </div>
      <TextField
        id='phone_number_input'
        name='phone_number'
        value={phoneNumber}
        onChange={changePhoneNumber}
      />
    </div>
    <div>
      <NextCardButton
        onClick={goToNextCard}
      >
        Next Card
      </NextCardButton>
    </div>
    <style jsx>{`
      section {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
  </section>
)
