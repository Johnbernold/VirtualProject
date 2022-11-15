import {Link} from 'react-router-dom'
import {EachList, TabButton} from './styledComponent'

const TabButtons = props => {
  const {EveryButton, currentButton, changeButton} = props

  const onClickTabButton = () => {
    changeButton(EveryButton.id)
  }

  console.log(EveryButton.link)

  return (
    <EachList>
      <Link to={EveryButton.link} className="link">
        <TabButton
          onClick={onClickTabButton}
          Color={currentButton}
          type="button"
        >
          {EveryButton.text}
        </TabButton>
      </Link>
    </EachList>
  )
}

export default TabButtons
