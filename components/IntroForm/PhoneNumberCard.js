export default ({changePhoneNumber, phoneNumber, goToNextCard}) => (
  <form>
    <input
      id='phone_number_input'
      name='phone_number'
      value={phoneNumber}
      onChange={changePhoneNumber}
    />
  </form>
)
