export default ({name, changeName, goToNextCard}) => (
  <section>
    <div />
    <div>
      <div>
        <label htmlFor='name_input'>
          What's your name?
        </label>
      </div>
      <input
        id='name_input'
        name='name'
        value={name}
        onChange={changeName}
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
