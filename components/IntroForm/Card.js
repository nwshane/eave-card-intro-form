export default ({children, goToNextCard}) => (
  <div>
    <div>
      
    </div>
    {children}
    <div>
      {goToNextCard && (
        <button
          className='js-next-page-button'
          onClick={goToNextCard}
        >
          Next Page
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
