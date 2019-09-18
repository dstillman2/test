import React from 'react';
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

export default class ComboBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpenByDefault,
      currentIndex: 0,
      activeIndex: props.selected || 0
    };

    this.triggerRef = React.createRef();
    this.comboBoxRef = React.createRef();
  
    this.uniqueId = Math.random().toString().split('.')[1];
  }

  onTriggerClick = event => {
    event.stopPropagation();
    event.preventDefault();

    this.setState(prevState => ({
      isOpen: ! prevState.isOpen
    }));
  }
  
  onKeyDown = event => {
    const isUpArrow = event.keyCode === 38;
    const isDownArrow = event.keyCode === 40;
    const isEscKey = event.keyCode === 27;
    const isEnterKey = event.keyCode === 13;
    const isSpacebar = event.keyCode === 32;

    const currentIndex = this.state.currentIndex;
    const lastIndex = this.props.items.length - 1;
    
    if (isEnterKey || isSpacebar) {
      event.preventDefault();
      this.setState({ isOpen: false });
      return;
    }

    if (isEscKey) {
      this.setState({ isOpen: false });
      return;
    }

    let nextIndex;
  
    if (isUpArrow) {

      if (currentIndex === 0) {
        nextIndex = lastIndex;
      } else {
        nextIndex = currentIndex - 1
      }

    }

    if (isDownArrow) {

      if (currentIndex === lastIndex) {
        nextIndex = 0;
      } else {
        nextIndex = currentIndex + 1;
      }
    
    }

    if (typeof nextIndex !== 'number') return;

    this.setState((prevProps, prevState) => ({
      currentIndex: nextIndex
    }));
  }

  onOptionClick(event, index) {
    this.setState({ isOpen: false });
  }

  focusComboBox() {
    this.comboBoxRef.current.focus();
  }

  focusTrigger() {
    this.triggerRef.current.focus();
  }

  componentDidUpdate(prevProps, prevState) {
    const isOpenHasUpdated = prevState.isOpen !== this.state.isOpen;

    if (isOpenHasUpdated) {

      if (this.state.isOpen) {
        this.focusComboBox();
      } else {
        this.focusTrigger();
      }

    }
  }

  render() {
    return (
      <>
        <Trigger
          aria-owns={this.uniqueId}
          ref={this.triggerRef}
          onClick={this.onTriggerClick}
        >
          {this.props.name}
        </Trigger>
        <Dropdown>
          {
            this.props.search && (
              <Input
                placeholder={this.props.search.placeholder}
                type="text"
              />
            )
          }
          <ComboBoxOptions
            id={this.uniqueId}
            ref={this.comboBoxRef}
            isOpen={this.state.isOpen}
            tabIndex="-1"
            onKeyDown={this.onKeyDown}
          >
            {
              this.props.items.map((item, index) => {
                let OptionComponent = ComboBoxOption;

                if (this.state.currentIndex === index) {
                  OptionComponent = CurrentComboBoxOption;
                }

                return (
                  <OptionComponent
                    onClick={event => this.onOptionClick(event, index)}
                    id={`${this.uniqueID}-${index}`}
                    key={item}
                  > 
                    {item}
                  </OptionComponent>
                );
              })
            }
          </ComboBoxOptions>
        </Dropdown>
      </>
    );
  }
}