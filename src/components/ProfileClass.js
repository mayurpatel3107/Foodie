import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:0,
        };
        console.log("constructor");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }
    render(){
        const {count} = this.state;
        return(
            <div>
                <h1>Profile Class Component</h1>
                <h2>Name:{this.props.name}</h2>
                <h2>XYZ:{this.props.xyz}</h2>
                <h2>{count}</h2>
                <button onClick={()=>{this.setState({count2:1,})}}>SetCount</button>
            </div>
        )
    }
}

export default Profile;