import React from 'react';
import ReactDOM from 'react-dom';



class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isDisabled: 'disabled',
      lenStr: '',
      feedbackStyle: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.value;
    let isDisabled = 'disabled';
    let style = styles.disabledStyle;
    if(name.length >= 3 && name.length <= 20) {
      isDisabled = null;
      style = styles.enabledStyle;
    }

    let lenStr = name.length + " characters";
    this.setState({
      value: name,
      isDisabled: isDisabled,
      lenStr: lenStr,
      feedbackStyle: style
    });
  }

  handleSubmit(event) {
    // alert('Name of a user : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return ( < form onSubmit = {this.handleSubmit} >

    <center>
      <label >
      
        <font size="6" style={{ color: '#BF360C' }} > Welcome to the Fanzy world!  < /font> < br/> < br/>
        <font size="4" style={{ color: '#FF7043' }}>What would you call yourself in Fanzy? </font> < br/> < br/>
        <input type = "text"  value = {this.state.value}
        onChange = {this.handleChange } placeholder="User Name"/>< br/>
        <font size="2" style={{ color: '#757575' }}>  Name should be between 3 to 20 characters < /font> <br /> <br/>

     < /label >

         <input type = "submit" disabled={this.state.isDisabled} value = "Get Started" / >
         <div style={ this.state.feedbackStyle }>{this.state.lenStr}</div>
    < /center>

        </form>
    );
  }
}

const styles = {
  disabledStyle: {
    color: 'red'
  },
  enabledStyle: {
    color: 'blue'
  }
  //height: 100,
  //color: 'blue',
}

export default NameForm;
