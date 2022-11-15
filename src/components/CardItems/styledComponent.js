import styled from 'styled-components'

export const LiCard = styled.li`
  width: 400px;
  box-shadow: 0px 4px 10px 0px #bfbfbf;
  padding: 10px;
  border-radius: 8px;
  height: 45vh;
  margin: 10px;
  list-style-type: none;
`
export const CardTopSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const NameSection = styled.div`
  display: flex;
  flex-direction: column;
`
export const CompanyTitle = styled.h1`
  color: #2e2929;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Roboto';
`
export const PersonDetailSection = styled.div`
  display: flex;
`

export const NameText = styled.p`
  color: #9c9991;
  font-size: 11px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const LiBugetType = styled.p`
  color: #9c9991;
  font-size: 11px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const IconDateSection = styled.div`
  display: flex;
  flex-direction: column;
`
export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #d1b2ae;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`
export const TextValue = styled.p`
  color: #9c9991;
  font-size: 10px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-right: 5px;
`
export const PercentageSection = styled.div`
  display: flex;
  width: 100%;
  height: 10px;
`

export const SpendSection = styled.div`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #bd1e19;
  width: ${props => props.value}%;
`
export const AvailableSection = styled.div`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #26911f;
  width: ${props => props.value}%;
`
export const DataValueSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
export const SpendValueSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding: 0px;
`
export const LiSpend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ValueContainer = styled.p`
  color: #9c9991;
  font-size: 10px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const SpentPara = styled.p`
  color: #9c9991;
  font-size: 10px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const AvailableValueSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0px;

  padding: 0px;
`
export const ColorRed = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #bd1e19;
  margin-right: 5px;
`
export const ColorGreen = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #26911f;
  margin-right: 5px;
`
export const CardButton = styled.button`
  color: #9c9991;
  font-size: 10px;
  font-weight: 500;
  font-family: 'Roboto';
  border: 1px solid #9c9991;
  background-color: transparent;
  border-radius: 4px;
  margin-bottom: 5px;
`
