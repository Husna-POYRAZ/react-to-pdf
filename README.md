# How to print in React.js?

Example page:<br><br>
![1](https://user-images.githubusercontent.com/75911392/199562793-74bfa597-2413-4984-8ba9-be9f7714bbc9.png)

When "Print this out!" button click:<br><br>
![2](https://user-images.githubusercontent.com/75911392/199563036-16844d77-549e-4682-be08-336076277a28.png)


## Step by Step Project
## 1- Requirments
* cmd: npm install --global yarn<br>
* cmd: yarn global add npx
## 2- Creat Project
* cmd: npx creat-react-app my-project
* cmd: cd project-path
* cmd: yarn start
## 3- Download package
* cmd: npm i react-to-print
* package source: https://www.npmjs.com/package/react-to-print
## 4- Import project
```
import ReactToPrint from 'react-to-print';
```
## 5- Create class/function etc. for web page
* Example:
```
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
```
## 6- Add react to print
* Example:
```
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
```
## 7- Render
```
render(<Example />, document. querySelector("#root"));
```
