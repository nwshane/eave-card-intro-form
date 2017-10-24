import TextField from 'material-ui/TextField'
import NextCardButton from './NextCardButton'

const isValidName = (name) => (
  name.length >= 0 && name.trim().split(' ').length >= 2
)

export default ({name, changeName, goToNextCard}) => (
  <section>
    <div />
    <div>
      <div>
        <label htmlFor='name_input'>
          Hey there!<br/>What's your name?
        </label>
      </div>
      <TextField
        id='name_input'
        name='name'
        value={name}
        floatingLabelText='Please enter your full name.'
        onChange={changeName}
      />
    </div>
    <div>
      <NextCardButton
        disabled={!isValidName(name)}
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
