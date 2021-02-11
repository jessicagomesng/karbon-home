import React from 'react';
import './css/PillForm.css';

class PillForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (event) => { 
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <form className="PillForm">
                <input id="pillFormEmail" name="email" type="email" placeholder="Enter your work email address" className="PillInput" onChange={this.handleChange} />
                <button type="submit" id="pillFormButton">Get Started</button>
            </form>
        )
    }
}

export default PillForm;