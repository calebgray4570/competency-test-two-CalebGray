import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'; // 37E-1
import './Home.css'

import LukeList from './List'

export default class Home extends Component { // 37E-2
  constructor(){ // 36I
    super()
    this.state={  // 36C
      luke: {}
    }
  }

  componentDidMount() { // 44E 44C 44D
    axios.get("https://swapi.co/api/people/1").then( response => { // 37D
      this.setState({  // 36D
        luke: response.data
        
      });
      console.log(response.data)
    });
  }

  render(){ // 36F

    return(
      <div >
        <div>
          <h1>HOME PAGE</h1>
          <Link to='/contact'><h3>CONTACT</h3></Link>
        </div>


        <LukeList
          name={this.state.luke.name}
          birth={this.state.luke.birth_year}
          height={this.state.luke.height}
        />


      </div> 
    )
  }
} 
