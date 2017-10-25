import PreviousCardButton from './PreviousCardButton'
import renderer from 'react-test-renderer'
import withMaterialUi from '../withMaterialUi'

const WrappedPreviousCardButton = withMaterialUi(PreviousCardButton)

describe('<PreviousCardButton>', () => {
  test('snapshot', () => {
    const onClick = () => {}

    const tree = renderer.create(
      <WrappedPreviousCardButton onClick={onClick} />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
