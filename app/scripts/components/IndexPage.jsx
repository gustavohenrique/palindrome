import React from 'react';
import { connect } from 'react-redux';
import { checkPalindrome } from '../actions';

export class SiteForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = { inputValue: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentWillReceiveProps () {
        this.setState({ inputValue: '' });
    }

    handleChange (e) {
        this.setState({ inputValue: e.target.value });
    }

    handleClick () {
        this.props.checkPalindrome(this.state.inputValue);
    }

    handleKeyPress (e) {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    render () {
        const { isPalindrome, palindrome } = this.props;

        return (
            <div className="tab-pane active in">
                <div className="well form-group" style={{margin: "0"}}>
                    <input value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.handleKeyPress} type="text" className="form-control" placeholder="World here" />
                    <span className="input-group-btn">
                        <button onClick={this.handleClick} className="btn btn-raised btn-primary" type="button">Check</button>
                    </span>
                </div>
                <div className={palindrome ? "well site-info form-group" : "hidden"}>
                    <h1>Is {palindrome} a palindrome? {isPalindrome}</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isPalindrome: state.isPalindrome ? 'yes' : 'no' ,
        palindrome: state.palindrome
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkPalindrome: (input) => {
            dispatch(checkPalindrome(input));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteForm);
