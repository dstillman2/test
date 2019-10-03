import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import _ from 'underscore';
import {
  StyledTrigger,
  StyledDropdown,
  StyledInput,
  StyledComboBoxOptions,
  StyledComboBoxOption,
  StyledCurrentComboBoxOption
} from './css';

const forwardRefComboBoxHooks = forwardRef(ComboBoxHooks);

forwardRefComboBoxHooks.defaultProps = {
  items: [],
  name: 'default'
};

export function ComboBoxHooks(props, ref) {
  const [isOpen, setIsOpen] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const triggerRef = useRef();
  const comboBoxRef = useRef();
  const uniqueId = _.uniqueId();

  function onTriggerClick(event) {
    event.stopPropagation();
    event.preventDefault();

    setIsOpen(! isOpen);
  }

  function onKeyDown(event) {  
    const isUpArrow = event.keyCode === 38;
    const isDownArrow = event.keyCode === 40;
    const isEscKey = event.keyCode === 27;
    const isEnterKey = event.keyCode === 13;
    const isSpacebar = event.keyCode === 32;

    const lastIndex = props.items.length - 1;

    if (isEnterKey || isSpacebar || isEscKey) {
      event.preventDefault();
      setIsOpen(false);
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

    setCurrentIndex(nextIndex);
  }

  function onOptionClick(event, index) {
    setIsOpen(false);
  }

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else if (isOpen) {
      comboBoxRef.current.focus();
    } else {
      triggerRef.current.focus();
    }
  }, [isOpen]);

  useImperativeHandle(ref, () => ({
    focus: () => {
      triggerRef.current.focus();
    }
  }));

  return (
    <>
      <StyledTrigger
        aria-owns={uniqueId}
        ref={triggerRef}
        onClick={onTriggerClick}
      >
        {props.name}
      </StyledTrigger>
      <StyledDropdown>
        {
          props.search && (
            <StyledInput
              placeholder={props.search.placeholder}
              type="text"
            />
          )
        }
        <StyledComboBoxOptions
          ref={comboBoxRef}
          isOpen={isOpen}
          tabIndex="-1"
          onKeyDown={onKeyDown}
        >
          {
            props.items.map((item, index) => {
              let OptionComponent = StyledComboBoxOption;

              if (currentIndex === index) {
                OptionComponent = StyledCurrentComboBoxOption;
              }

              return (
                <OptionComponent
                  onClick={event => onOptionClick(event, index)}
                  id={`${uniqueId}-${index}`}
                  key={item}
                >
                  {item}
                </OptionComponent>
              );
            })
          }
        </StyledComboBoxOptions>
      </StyledDropdown>
    </>
  );
};

export default forwardRefComboBoxHooks;
