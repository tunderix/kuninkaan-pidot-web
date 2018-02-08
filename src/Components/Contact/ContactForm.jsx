import React from "react";

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
          <h3 htmlFor="name">Nimesi</h3>
          <input id="name" name="name" type="text" />
          <h3 htmlFor="contact">Yhteystietosi</h3>
          <input id="contact" name="contact" type="text" />
          <h3 htmlFor="title">Mitäs läksit?</h3>
          <input id="title" name="title" type="text" />
          <h3 htmlFor="what">A-a-a-aaasiaaa?</h3>
          <textarea id="what" name="what" type="text" />
          <div>
            <button>Send data!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
