import {Component} from 'react'
import {
  GradientContainer,
  Heading,
  Paragraph,
  TabsContainer,
  ColorsPickersContainer,
  EachContainer,
  ColorPara,
  ColorPicker,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeTabId: gradientDirectionsList[0].directionId,
    gradientDirection: gradientDirectionsList[0].value,
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
  }

  updateTabId = (tabId, direction) => {
    this.setState({activeTabId: tabId, gradientDirection: direction})
  }

  updateColorOne = e => {
    this.setState({colorOne: e.target.value})
  }

  updateColorTwo = e => {
    this.setState({colorTwo: e.target.value})
  }

  render() {
    const {activeTabId, gradientDirection, colorOne, colorTwo} = this.state

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        colorOne={colorOne}
        colorTwo={colorTwo}
        gradientDirection={gradientDirection}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <TabsContainer>
          {gradientDirectionsList.map(eachTab => (
            <GradientDirectionItem
              updateTabId={this.updateTabId}
              isActive={activeTabId === eachTab.directionId}
              tabDetails={eachTab}
              key={eachTab.directionId}
            />
          ))}
        </TabsContainer>
        <Paragraph>Pick the Colors</Paragraph>
        <ColorsPickersContainer>
          <EachContainer>
            <ColorPara>{colorOne}</ColorPara>
            <ColorPicker
              onChange={this.updateColorOne}
              type="color"
              defaultValue={colorOne}
            />
          </EachContainer>
          <EachContainer>
            <ColorPara>{colorTwo}</ColorPara>
            <ColorPicker
              onChange={this.updateColorOne}
              type="color"
              defaultValue={colorTwo}
            />
          </EachContainer>
        </ColorsPickersContainer>
        <GenerateButton>Generate</GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
