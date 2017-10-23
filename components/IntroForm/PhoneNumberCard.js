export default ({changePhoneNumber, phoneNumber, goToNextCard}) => (
  <form>
    <div>
      <label htmlFor='phone_number_input'>
        What's your phone number?
      </label>
    </div>
    <input
      id='phone_number_input'
      name='phone_number'
      value={phoneNumber}
      onChange={changePhoneNumber}
    />
  </form>
)
