import React from 'react';
import { render } from 'react-dom';
import ReactToPrint from 'react-to-print';


class ComponentToPrint extends React.Component {
  render() {
    return (
      <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
      <tr>
        <td>Anom</td>
        <td>19</td>
        <td>Male</td>
      </tr>
      <tr>
        <td>Megha</td>
        <td>19</td>
        <td>Female</td>
      </tr>
      <tr>
        <td>Subham</td>
        <td>25</td>
        <td>Male</td>
      </tr>
    </table>
    )
  }
}

class Example extends React.Component {
  render () {
    return (
      <div>
        <ReactToPrint
        trigger={() => {
          return <button>Print this out!</button>;
        }}
        content={() => this.componentRef}
      />

      <ComponentToPrint ref={el => (this.componentRef = el)}/>

      </div>
    );
  }
}

render(<Example />, document. querySelector("#root"));