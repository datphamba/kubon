import React from "react";

class userDetails extends React.Component {
  constructor(props) {
    super(props);
    const { params } = this.props.match;

    this.checkData = this.checkData.bind(this);

    this.state = {
      dataId: params.id,
      data: "N/A"
    };
  }

  checkData(id) {
    if(id == 1) {
        alert('Dat')
    } else {
        alert('Nam')
    }
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <button onClick={() => this.checkData(this.state.dataId)}>Check Data</button>
      </div>
    );
  }
}
export default userDetails;
