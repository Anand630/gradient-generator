// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  background-image: ${props =>
    `linear-gradient(to ${props.gradientDirection}, ${props.colorOne}, ${props.colorTwo})`};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: Roboto;
  text-align: center;
  color: #ffffff;
  font-weight: 500;
  font-size: 34px;
  margin-left: 5px;
  margin-right: 5px;
  @media (max-width: 575px) {
    font-size: 23px;
  }
`

export const Paragraph = styled.p`
  font-family: Roboto;
  text-align: center;
  color: #ffffff79;

  font-size: 20px;
`

export const TabsContainer = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 450px;
  margin: 15px 5px;
  @media (max-width: 575px) {
    width: 85%;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`

export const ColorsPickersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`

export const EachContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 25px 0;
`
export const ColorPara = styled.p`
  font-family: Roboto;
  text-align: center;
  color: #ededed;

  font-size: 16px;
`

export const ColorPicker = styled.input`
  background-color: transparent;
  border: none;
  height: 50px;
  width: 80px;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #00c9b7;
  border-radius: 8px;
  padding: 10px 20px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  font-family: Roboto;
  cursor: pointer;
`
