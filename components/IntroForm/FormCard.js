export default ({children, goToPreviousCard, goToNextCard}) => (
  <div>
    <div>
      {goToPreviousCard && (
        <button
          className='js-previous-page-button'
          onClick={goToPreviousCard}
        >
          Previous Card
        </button>
      )}
    </div>
    {children}
    <div>
      {goToNextCard && (
        <button
          className='js-next-page-button'
          onClick={goToNextCard}
        >
          Next Card
        </button>
      )}
    </div>
    <style jsx>{`
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
  </div>
)
