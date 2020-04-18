import React from 'react';

interface StateButton {
}
interface PropsButton {

}

class ScreenOne extends React.Component<PropsButton, StateButton> {
  constructor(props: PropsButton) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className='containerScreenTwo'>
        <p>All Custom Task</p>

        <div className='inputDropdown'>
          <form action="" className="formInput">
            <div className="form-group">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
            </div>

            <div className="form-group">
              <textarea placeholder='Description' className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
            </div>

            <div className="form-group">
              <label>Created at</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" value="27 March, 2020 2:07 PM" />
            </div>

            <div className="form-group">
              <label>Due by</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" value="27 March, 2020 2:07 PM" />
            </div>

            <div className="form-group">
              <label>Application location</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" value="Cluster 1" />
            </div>

            <div className="form-group">
              <label>Images</label>

              <div>
                <img src="https://tapchianhdep.com/wp-content/uploads/2015/04/hinh-anh-dep-ve-thien-nhien-2.jpg" alt="Lamp" className="responsive" />
              </div>
            </div>
          </form>

          <div>
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ScreenOne;