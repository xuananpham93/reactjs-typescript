import React from 'react';
import './App.scss';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';

interface StateButton {
  screen: Number,
}
interface PropsButton {

}
class App extends React.Component<PropsButton, StateButton> {
  constructor(props: PropsButton) {
    super(props);

    this.state = {
      screen: 1,
    }
  }

  handleScreenOneClick = () => {
    this.setState({
      screen: 1
    });
  }

  handleScreenTwoClick = () => {
    this.setState({
      screen: 2
    });
  }

  renderScreens = () => {
    const { screen } = this.state;

    switch (screen) {
      case 1:
        return (
          <ScreenOne />
        );

      case 2:
        return (
          <ScreenTwo />
        );

      default:
        return null;
    }

  }

  render() {
    return (
      <div className="App">
        <div>
          <br />
          <button onClick={this.handleScreenOneClick} type="button" className="btn btn-info">Screen One</button>
          <br />
          <br />
          <button onClick={this.handleScreenTwoClick} type="button" className="btn btn-info">Screen Two</button>
        </div>

        {this.renderScreens()}
      </div>
    );
  }
}

export default App;
