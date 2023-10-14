import React from "react";

export default class Nicecla extends React.Component {
  condition = 1;

  clicked() {
    alert("hi");
  }

  render() {
    return (
      <>
        <div>CLASS EVENT</div>
        <button onClick={this.clicked}>clickme</button>
        {this.condition > 1 ? (
          <span>condition 1 </span>
        ) : (
          <span> condition 2 </span>
        )}
      </>
    );
  }
}
