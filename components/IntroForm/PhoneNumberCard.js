import TextField from 'material-ui/TextField'
import PreviousCardButton from './PreviousCardButton'
import NextCardButton from './NextCardButton'

const validPhoneNumberChars = (str) => (
  /^[\d\s\-]+$/.test(str)
)

const numberCount = (str) => (
  str.replace(/\D/g, '').length
)

const isValidPhoneNumber = (phoneNumber) => (
  numberCount(phoneNumber) >= 10 && validPhoneNumberChars(phoneNumber)
)

export default ({phoneNumber, changePhoneNumber, goToPreviousCard, goToNextCard}) => (
  <form onSubmit={goToNextCard}>
    <div>
      <PreviousCardButton onClick={goToPreviousCard} />
    </div>
    <div>
      <div>
        <label htmlFor='phone_number_input'>
          Thanks!<br />How about your phone number?
        </label>
      </div>
      <TextField
        id='phone_number_input'
        name='phone_number'
        value={phoneNumber}
        floatingLabelText='Please enter 10 more digits.'
        onChange={changePhoneNumber}
      />
    </div>
    <NextCardButton
      type='submit'
      onClick={goToNextCard}
      disabled={!isValidPhoneNumber(phoneNumber)}
    />
    <style jsx>{`
      form {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
  </form>
)
