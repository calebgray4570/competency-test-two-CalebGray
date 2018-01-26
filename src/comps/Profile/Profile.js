import React, { Component } from 'react';
// import { connect } from 'react-redux'; //43C
// import {Link} from 'react-router-dom';
import axios from 'axios';
import './Profile.css'

export default class Contact extends Component {
  constructor(){
    super()
    this.state={
        contact: '',
        name: '',
        email: ''
    }
    this.handleNameChange=this.handleNameChange.bind(this)
    this.handleEmailChange=this.handleEmailChange.bind(this)
    
    this.editContact=this.editContact.bind(this)
    this.deleteContact=this.deleteContact.bind(this)
    
  }


  handleNameChange( value ) {
    this.setState({ name: value });
    console.log("name", this.state.name)
  }

  handleEmailChange( value ) {
    this.setState({ email: value });
    console.log("email", this.state.email)
  }

  //42J 42K 44C 44D
  editContact(){  
    const contactURL = this.props.match.params.contactName 
    
    let { name, email } = this.state
    axios.put( `/editContact/${contactURL}`, { name, email })
    this.props.history.push('/contact')
  }

  deleteContact(){
    const contactURL = this.props.match.params.contactName
    
    axios.delete(`/deleteContact/${contactURL}`)
      .then(res => this.props.history.push('/contact'))
  }

  componentWillMount(){
    const contactURL = this.props.match.params.contactName
    
    axios.get(`/getContact/${ contactURL }`)
      .then( contact => {  
        this.setState({
          contact: contact.data[0],
          name: contact.data[0].name,
          email: contact.data[0].email
        })
      })
  }

  

  render(){
    

    return(
      <div className="profile">

      <div className="profileDiv">

          <h1>{this.state.name}</h1>

            <input id="name" value={this.state.name} onChange={(e) => this.handleNameChange( e.target.value )}/>

          <h1>{this.state.email}</h1>

            <input id="email" value={this.state.email} onChange={(e) => this.handleEmailChange( e.target.value )}/>

              <br/>

          <button onClick={this.editContact} >UPDATE Contact</button>
              <br/>
          <button onClick={this.deleteContact}>DELETE Contact</button>

        </div>
        

      </div>
    )
  }
}


