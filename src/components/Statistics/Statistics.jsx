import React from 'react';
import {
  StatisticsContainer,
  StatisticItem,
  PositivePercentage,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsContainer>
      <StatisticItem>Good: {good}</StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      <StatisticItem>Total: {total}</StatisticItem>
      <PositivePercentage>
        Posite feedback: {positivePercentage}%
      </PositivePercentage>
    </StatisticsContainer>
  );
};

export default Statistics;
