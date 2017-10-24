import PreviousCardButton from './PreviousCardButton'

export default ({name, phoneNumber, goToPreviousCard, goToNextCard}) => (
  <div>
    <PreviousCardButton onClick={goToPreviousCard} />
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
