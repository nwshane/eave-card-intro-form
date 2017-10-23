export default ({changeName, name, goToNextCard}) => (
  <form>
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
  </form>
)
