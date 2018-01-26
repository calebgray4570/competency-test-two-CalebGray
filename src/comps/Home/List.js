import React, { Component } from 'react';
// import axios from 'axios'


class LukeList extends Component {

    componentWillReceiveProps(nextprops){

    }
    render(){
        return (
            <div>
                <h1>Luke API</h1>
                <h2>name: {this.props.name}</h2>
                <h2>Birth: {this.props.birth}</h2>
                <h2>Height: {this.props.height}</h2>
            </div>
        )
    }
}

export default LukeList