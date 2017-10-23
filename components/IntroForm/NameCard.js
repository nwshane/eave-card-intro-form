import Card from './Card'

export default ({changeName, name, goToNextCard}) => (
  <div>
    Welcome!
    <hr />
    <Card goToNextCard={goToNextCard}>
      <form>
        <input
          id='name_input'
          name='name'
          value={name}
          onChange={changeName}
        />
      </form>
    </Card>
  </div>
)
