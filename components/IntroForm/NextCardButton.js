import FlatButton from 'material-ui/FlatButton'
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'

const NextCardButton = (props) => (
  <FlatButton
    className='js-next-page-button'
    icon={<ArrowForward />}
    {...props}
  />
)

export default NextCardButton
