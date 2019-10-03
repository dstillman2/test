import styled from 'styled-components';

const Trigger = styled.button`
	background-color: #44c767;
	border-radius: 5px;
	border: 1px solid #18ab29;
	cursor: pointer;
	color: #fff;
	font-size: 12px;
	padding: 5px 8px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #2f6627;
`;

const Dropdown = styled.div``;

const Input = styled.input``;

const ComboBoxOptions = styled.ul`
  display: ${props => props.isOpen ? 'block' : 'none'};
  border: 2px solid #000;
  width: 250px;
  padding: 0;
  margin: 0;
`;

const ComboBoxOption = styled.li`
  list-style-type: none;
  border: 1px solid #000;
  cursor: pointer;
`;

const CurrentComboBoxOption = styled(ComboBoxOption)`
  background-color: red;
  color: #fff;
`;

export {
  Trigger,
  Dropdown,
  Input,
  ComboBoxOptions,
  ComboBoxOption,
  CurrentComboBoxOption
}