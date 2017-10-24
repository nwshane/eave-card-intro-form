import TextField from 'material-ui/TextField'
import NextCardButton from './NextCardButton'

export default ({name, changeName, goToNextCard}) => (
  <section>
    <div />
    <div>
      <div>
        <label htmlFor='name_input'>
          What's your name?
        </label>
      </div>
      <TextField
        id='name_input'
        name='name'
        value={name}
        onChange={changeName}
      />
    </div>
    <div>
      <NextCardButton
        onClick={goToNextCard}
      />
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
