export default ({changeName, name, goToNextCard}) => (
  <div>
    <form>
      <input
        id='name_input'
        name='name'
        value={name}
        onChange={changeName}
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
