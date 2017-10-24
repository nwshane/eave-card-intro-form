import FlatButton from 'material-ui/FlatButton'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

const PreviousCardButton = (props) => (
  <FlatButton
    className='js-previous-page-button'
    icon={<ArrowBack />}
    {...props}
  />
)

export default PreviousCardButton
