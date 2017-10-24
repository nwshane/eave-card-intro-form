import FlatButton from 'material-ui/FlatButton'
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'

const getStyles = ({disabled}) => {
  if (disabled) return {}
  return {
    backgroundColor: 'rgb(126, 209, 133)'
  }
}

const NextCardButton = (props) => (
  <FlatButton
    className='js-next-page-button'
    icon={<ArrowForward />}
    style={getStyles(props)}
    {...props}
  />
)

export default NextCardButton
