import React from 'react';
import './css/PillForm.css';

// const PillForm = () => {
//     return (
//         <form className="PillForm">
//             <input id="pillFormEmail" name="email" type="email" placeholder="Your work email address" className="PillInput" />
//             <button type="submit" className="PillButton">Get Started</button>
//         </form>
//     )
// }

// export default PillForm;

// rewrite as constant 
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