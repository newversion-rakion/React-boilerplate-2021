/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import MiniDrawer from '../MiniDrawer';

class MiniDrawerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { openSideBar, sideBarClick } = this.props;
    return (
      <MiniDrawer
        subMenuOpen={this.state.isOpen}
        onClickHandler={this.handleClick}
        openSideBar={openSideBar}
        handlerSideBar={sideBarClick}
      />
    );
  }
}

export default MiniDrawerContainer;
