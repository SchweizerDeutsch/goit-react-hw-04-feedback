import React from 'react';
import { NotificationContainer, NotificationText } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <NotificationContainer>
      <NotificationText>{message}</NotificationText>
    </NotificationContainer>
  );
};

export default Notification;
