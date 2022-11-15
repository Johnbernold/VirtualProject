import styled from 'styled-components'

export const EachList = styled.li`
  list-style-type: none;
  margin-left: 0px;
`
export const TabButton = styled.button`
  color: ${props => (props.Color ? '#3b3c3d' : '#abadb8')};
  border-bottom-color: ${props => (props.Color ? '#3b3c3d' : '#ffffff')};
  border-top: none;
  border-right: none;
  border-left: none;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
  padding: 8px;
  background-color: transparent;
`
