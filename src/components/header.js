import React, {Component} from "react";
import "../css/styles.css";

const headerInfo = 
{
headertitle : "Header Title goes here",
subheadertitle : "Sub Header"
};

//using function based component
/*

const Header = () => {
    return (
        <div>
            <h1>{headerInfo.headertitle}</h1>
        </div>
    );
};

*/

//using class based components
class Header extends Component
{

    /*constructor(props)
    {
        super(props);  //Super brings in all parent class members into this child class
        state =
        {
            keywords: "Hello"
        }
    }*/
   
    state =
        {
            keywords: " "
        }

    inputChangeHandler = (event) =>
    {
        this.setState({
           keywords : event.target.value
        });
        console.log(event.target.value);
    }

    render()
    {
        /*const headerStyle = 
        {
            header : {
                    background: "rgba(201, 76, 76, 0.3)",
                    },
            logoText: 
                    {
                        fontFamily: "Open Sans",
                        fontSize: "24px",
                        textAlign: "center",
                        color: "#fff",
                    }
        };

        return (
            <header style={headerStyle.header}>
                <p style={headerStyle.logoText}>{headerInfo.headertitle}</p>
                <h4>{headerInfo.subheadertitle}</h4>
            </header>
        );*/

    

        return (
            <header>
                <p className="logoText">{headerInfo.headertitle}</p>
                <input type="text" onChange={this.inputChangeHandler}></input>
                <p>{this.state.keywords}</p>
                <h4>{headerInfo.subheadertitle}</h4>
            </header>
        );
    }
}

//By using export default to export we can export both class and function component, we're making it accessible publicly to other pages
export default Header;
