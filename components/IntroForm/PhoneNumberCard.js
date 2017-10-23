export default ({changePhoneNumber, phoneNumber, goToNextCard}) => (
  <div>
    <form>
      <input
        id='phone_number_input'
        name='phone_number'
        value={phoneNumber}
        onChange={changePhoneNumber}
      />
    </form>
    <button
      className='js-next-page-button'
      onClick={goToNextCard}
    >
      Next Page
    </button>
  </div>
)
