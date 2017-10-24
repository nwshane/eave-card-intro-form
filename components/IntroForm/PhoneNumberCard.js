export default ({phoneNumber, changePhoneNumber, goToPreviousCard, goToNextCard}) => (
  <section>
    <div>
      <button
        className='js-previous-page-button'
        onClick={goToPreviousCard}
      >
        Previous Card
      </button>
    </div>
    <div>
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
    </div>
    <div>
      <button
        className='js-next-page-button'
        onClick={goToNextCard}
      >
        Next Card
      </button>
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
