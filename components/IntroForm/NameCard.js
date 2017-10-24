import TextField from 'material-ui/TextField'
import NextCardButton from './NextCardButton'

const onlyLetters = (str) => (
  /^[a-zA-Z\s]+$/.test(str)
)

const multipleWords = (str) => (
  str.trim().split(' ').length >= 2
)

const isValidName = (name) => (
  name.length >= 0 && multipleWords(name) && onlyLetters(name)
)

const onSubmit = (callback) => (event) => {
  event.preventDefault()
  callback()
}

export default ({name, changeName, goToNextCard}) => (
  <form onSubmit={goToNextCard}>
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
        type='submit'
        disabled={!isValidName(name)}
        onClick={goToNextCard}
      />
    </div>
    <style jsx>{`
      form {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
  </form>
)
