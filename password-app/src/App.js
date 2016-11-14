import React, { Component } from 'react';



class Form extends Component {
  constructor(props){
    super()
    this.state= {
      email: "",
      password: "",
      validation: ""
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleEmail(event){
    this.setState({
      email: event.target.value
    })
  }

  handlePassword(event){
    this.setState({
      password: event.target.value
    })
  }

  handleValidation(event){
    this.setState({
      validation: event.target.value
    })
  }

  handleSubmit(event) {
    if (this.state.email && this.state.password && this.state.validation){
    {/* A JSX comment */}
   if (this.state.password == this.state.validation){
     alert("Sign Up Success!");
   }else{
     alert("Nice try but not this time.");
   }
   event.preventDefault();
 }else{
   alert("You must fill in all fields. fuck you")
 }
 }

  render() {
    return (
    <div>
      <h1>Password Validation</h1>
      <p>Email:{this.state.email}</p>
      <form onSubmit ={this.handleSubmit}>
        Email:
        <input type = "text" value={this.state.email} onChange = {this.handleEmail}/>
        Password:
        <input type = "password" value ={this.state.password} onChange= {this.handlePassword}></input>
        Validation:
        <input type = "password" value ={this.state.validation} onChange= {this.handleValidation}></input>
        <input type="submit" value="Submit" />
      </form>
    </div>
    );
  }
}

export default Form;

//request input email
  //click button
  //brings up form

//request input password

//request input validation

//if password != validation then error message! otherwise those values persist
