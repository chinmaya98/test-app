import React from 'react';
import ReactDOM from 'react-dom';

const divStyle = {
  color: 'blue',
    //backgroundImage: "url(" + { Background } + ")"
};

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      lenStr: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.value;
    let lenStr = name.length + " characters";
    this.setState({
      value: name,
      lenStr: lenStr
    });
  }

  handleSubmit(event) {
    alert('Name of a user : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return ( < form onSubmit = {this.handleSubmit} >
    //  <div style={divStyle} >
    <center>
      <label >
        <font size="6" style={{ color: '#BF360C' }} > Welcome to the Fanzy world!  < /font> < br/> < br/>
        <font size="4" style={{ color: 'red' }}>What would you call yourself in Fanzy? </font> < br/>
        <input type = "text"  value = {this.state.value}
        onChange = {this.handleChange } placeholder="User Name"/>< br/>
        <font size="2" style={{ color: 'red' }}>  Name should be between 3 to 20 characters < /font> <br /> <br/>
     < /label >
        <input type = "submit"  value = "get started" / > {
        this.state.lenStr }
    < /center>
  //  < /div>
        </form>
    );
  }
}

export default NameForm;
