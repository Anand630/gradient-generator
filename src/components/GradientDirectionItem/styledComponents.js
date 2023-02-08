// Style your elements here
import styled from 'styled-components'

export const TabButton = styled.button`
  color: #000000;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px 20px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  font-family: Roboto;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  @media (max-width: 575px) {
    width: 100%;
  }
`

export const ListItem = styled.li`
  @media (max-width: 575px) {
    flex-basis: 48%;
    margin-bottom: 10px;
  }
`
