export default ({name, phoneNumber, goToPreviousCard, goToNextCard}) => (
  <div>
    <button
      className='js-previous-page-button'
      onClick={goToPreviousCard}
    >
      Previous Card
    </button>
    <p className='js-form-results'>
      Hi {name}! Your phone is {phoneNumber}.
    </p>
    <div />
    <style jsx>{`
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
  </div>
)
