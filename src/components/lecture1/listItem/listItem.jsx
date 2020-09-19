import React from 'react';
import PropTypes from "prop-types";
// Styles
import { ItemContainer, ItemTitle, ItemText } from './listItem.styled';

export const ListItemComponent = ({ item }) => {
  return (
    <ItemContainer key={item.id}>
      <ItemTitle>{item.id} - {item.name}</ItemTitle>
      <ItemText>{item.body}</ItemText>
    </ItemContainer>
  );
}

ListItemComponent.propTypes = {
  item: PropTypes.shape({
    postId: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  })
};
