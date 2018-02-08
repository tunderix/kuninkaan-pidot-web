import React from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class ContactForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log(data);
    //Do something with data
  }

  render() {
    return (
      <div className="ContactForm">
        <form onSubmit={this.handleSubmit}>
          <TextField
              hintText="Nimesi"
              floatingLabelText="Nimesi"
              onChange = {(event,newValue) => this.setState({username:newValue})}
              />
          <TextField
              hintText="Sähköposti"
              floatingLabelText="Sähköposti"
              onChange = {(event,newValue) => this.setState({username:newValue})}
              />
          <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleSubmit(event)}/>
        </form>
      </div>
    );
  }
}
export default ContactForm;
