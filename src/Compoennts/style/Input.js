import styled from 'styled-components/native'

export const CheetahInput = styled.TextInput.attrs(props => ({
	placeholderTextColor: '#a6a6a6',
	placeholder: props.hint,
	elevation: 10
}))
	`
  font-size: 18px;
  background-color: ${props =>  'white'};
  color: ${props =>  'black'};
  width: 100%;
  height: 60px;
  margin-top: 24px;
	border-radius: 10px;
  box-shadow: 3px 2px 5px #a6a6a6;
  padding: 16px;
`