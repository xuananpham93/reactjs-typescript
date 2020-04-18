import React from 'react';

interface StateButton {
  activeTab: Number
}
interface PropsButton {

}

class ScreenTwo extends React.Component<PropsButton, StateButton> {
  constructor(props: PropsButton) {
    super(props);

    this.state = {
      activeTab: 1,
    }
  }

  handleTabOneClick = () => {
    this.setState({
      activeTab: 1
    });
  }

  handleTabTwoClick = () => {
    this.setState({
      activeTab: 2
    });
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div className='containerScreenTwo'>
        <p>All Custom Task</p>

        <div className='divTab'>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 1 && 'active'}`} href="#" onClick={this.handleTabOneClick}>Create by Store</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 2 && 'active'}`} href="#" onClick={this.handleTabTwoClick}>Create by cluster</a>
            </li>
          </ul>
        </div>

        <div className='inputDropdown'>
          <div className="dropdown show">
            <a className="btn btn-secondary dropdown-toggle button-drop" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Good Enterprise
        </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <form action="" className="formInput">
            <div className="form-group">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
            </div>

            <div className="form-group">
              <textarea placeholder='Description' className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
            </div>
          </form>

          <button type="button" className="btn btn-outline-primary">Upload an image</button>
        </div>
      </div>
    )
  }
}

export default ScreenTwo;