import Card from './Card'

export default ({changePhoneNumber, phoneNumber, goToNextCard}) => (
  <Card goToNextCard={goToNextCard}>
    <form>
      <input
        id='phone_number_input'
        name='phone_number'
        value={phoneNumber}
        onChange={changePhoneNumber}
      />
    </form>
  </Card>
)
