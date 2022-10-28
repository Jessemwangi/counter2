import React from "react";
import Button from "./Button";

class Main extends React.Component{

state={
counter:3
}

addOneCounter = () =>{
    this.setState({counter:this.state.counter +1});
}

addFiveCounter = () => {
    this.setState({
        counter : this.state.counter + 5
    });
}

reset = () => {
    this.setState({
        counter :0
    });
}

removeOneCounter = () =>{
    this.setState({
        counter: this.state.counter - 1
    });
}

removeFiveCounter = () => {
    this.setState({
        counter : this.state.counter -5
    });
}

render(){
    let myclas = "circle";
if (this.state.counter === 0)
{
myclas = "circle";
}
else if(this.state.counter % 2 === 0 ){
    myclas = "circle even";
}
else{
    myclas = "circle odd"; 
}
    return (
    <main>
    <h1 className={myclas}> {this.state.counter}</h1>
<Button click={this.addOneCounter} type="submit">Add One Counter</Button>
<Button click={this.addFiveCounter} type="submit">Add Five Counter</Button>
<Button click={this.reset} type="submit">Reset</Button>
<Button click={this.removeOneCounter} type="submit">Remove One Counter</Button>
<Button click={this.removeFiveCounter} type="submit">remove Five Counter</Button>
    </main>)
    ;
}
}

export default Main;