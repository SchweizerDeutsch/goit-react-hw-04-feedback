import React from 'react';
import { OptionsContainer, OptionBth } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      {options.map(option => (
        <OptionBth key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </OptionBth>
      ))}
    </OptionsContainer>
  );
};

export default FeedbackOptions;
