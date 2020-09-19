import React from 'react';
import PropTypes from 'prop-types';
// Material
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// Components
import { ListItemComponent as ListItem } from '../listItem/listItem';
// Styles
import { ModalContainer } from './modal.styled';

export class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  handleClose = () => {
    this.setState({ open: false });
    this.props.onClose();
  };

  render () {
    const { open } = this.state;
    return (
      <ModalContainer
        open={open}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <>
            {this.props.data?.map(item => (
              <ListItem key={item.id} item={item}/>
            ))}
          </>
        </Fade>
      </ModalContainer>
    )
  }
}

ModalComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number,
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string,
    })
  ),
};
