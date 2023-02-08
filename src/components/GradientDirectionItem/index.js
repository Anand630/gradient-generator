import {TabButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {directionId, value, displayText} = tabDetails

  const onTabClicking = () => {
    updateTabId(directionId, value)
  }

  return (
    <ListItem>
      <TabButton type="button" onClick={onTabClicking} isActive={isActive}>
        {displayText}
      </TabButton>
    </ListItem>
  )
}

export default GradientDirectionItem
