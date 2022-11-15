import {Component} from 'react'

import {
  AiOutlineVideoCamera,
  AiOutlinePlus,
  AiFillAppstore,
  AiFillDatabase,
} from 'react-icons/ai'
import TabButtons from '../TabButtons'
import './index.css'

import {
  HeaderMainSection,
  AllHeadings,
  MainHeadingSection,
  MainTitle,
  LearnMoreVideoSection,
  TextVideo,
  VirtualButton,
  AllTabSection,
  TabSection,
  TwoIconSection,
} from './styledComponent'

const tabObject = [
  {id: 'your_tab', text: 'Your', link: '/'},
  {id: 'ALL_tab', text: 'All', link: '/all'},
  {id: 'BLOCKED_tab', text: 'Blocked', link: '/blocked'},
]

class Header extends Component {
  state = {selectedButton: tabObject[0].id}

  changeButton = selectedId => {
    this.setState({selectedButton: selectedId})
  }

  render() {
    const {selectedButton} = this.state

    return (
      <HeaderMainSection>
        <AllHeadings>
          <MainHeadingSection>
            <MainTitle>Virtual cards</MainTitle>
            <LearnMoreVideoSection>
              <AiOutlineVideoCamera className="video-icon" />
              <TextVideo>LEARN MORE</TextVideo>
            </LearnMoreVideoSection>
          </MainHeadingSection>
          <VirtualButton type="button">
            <AiOutlinePlus className="plus-icon" />
            Virtual Card
          </VirtualButton>
        </AllHeadings>
        <AllTabSection>
          <TabSection>
            {tabObject.map(eachTab => (
              <TabButtons
                key={eachTab.id}
                EveryButton={eachTab}
                currentButton={selectedButton === eachTab.id}
                changeButton={this.changeButton}
              />
            ))}
          </TabSection>
          <TwoIconSection>
            <AiFillAppstore className="file-icon" />
            <AiFillDatabase className="file-icon" />
          </TwoIconSection>
        </AllTabSection>
      </HeaderMainSection>
    )
  }
}

export default Header
