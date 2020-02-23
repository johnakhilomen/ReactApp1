import React, { Component } from "react"
import ReactDOM from "react-dom"
import Header from "./components/header"
import NewsList from "../src/components/news_list"
import JSON from "../src/db.json";

//We create a UI component which returns a H1 header element. This component only returns an element
/*const App = () =>
{
  return <h1> Hello World </h1>;
};*/

//Never forget that to create a component with grouped elements, you must enclose them in a div element
/*const HeaderText = () => {
return (
<div>
  <h1>This is a header</h1>
  <h4>This is a sub header</h4>
</div>
);
};*/

//Then we ask react to render the component on the dom element 'root'
/*ReactDOM.render(<App />, document.querySelector("#root"));
//Then we ask react to render the component on the dom element 'subroot'
ReactDOM.render(<HeaderText />, document.querySelector("#subroot"));*/


class App extends Component
{
  state = {
news: JSON
  };

  render(){

    return(
      <div>
        <Header></Header>
        <NewsList newslistattribute={this.state.news}/>
      </div>
          
        );

  }

};

ReactDOM.render(<App/>, document.querySelector("#root"));