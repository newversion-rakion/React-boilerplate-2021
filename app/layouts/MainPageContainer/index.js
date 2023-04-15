import React, { PureComponent } from 'react';
import MainPage from '../../components/MainPage';

class MainPageContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openSideBar: false,
    };
  }

  toggleSideBar = () => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      openSideBar: !this.state.openSideBar,
    });
  };

  render() {
    return (
      <MainPage
        openSideBar={this.state.openSideBar}
        toggleHandler={this.toggleSideBar}
      />
    );
  }
}

export default MainPageContainer;
