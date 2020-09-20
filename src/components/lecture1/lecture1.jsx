import React from 'react';
// Components
import { ModalComponent as Modal } from './modal/modal';
// Styles
import { Lecture1Container, OpenButton } from './lecture1.styled';

class Lecture1Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false,
      data: []
    };
  }

  async componentDidMount() {
    await fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(serverJson => this.setState({ data: [...serverJson].slice(0, 10) }))
  }

  handleModalOpen = () => {
    !this.state.isModalOpened && this.setState({ isModalOpened: true })
  }

  handleModalClose = () => {
    this.state.isModalOpened && this.setState({ isModalOpened: false })
  }

  render () {
    const { isModalOpened, data } = this.state;
    return (
      <Lecture1Container>
        <OpenButton onClick={this.handleModalOpen}>Open Comments</OpenButton>
        { isModalOpened && <Modal data={data} onClose={this.handleModalClose} /> }
      </Lecture1Container>
    )
  }
}

export default Lecture1Component;
