export default ({changeName, name, goToNextCard}) => (
  <div>
    Welcome!
    <hr />
    <form>
      <input
        id='name_input'
        name='name'
        value={name}
        onChange={changeName}
      />
    </form>
  </div>
)
