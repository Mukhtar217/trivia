import React, { Component } from 'react';
// import components


class AnswerChoice extends Component {
    /**
     * Renders the answer choice button by the provided text.
     * Parent should also pass whether this Answer Choice is the correct one, and a handler that will be invoked when the button is clicked.
     * Current design - the handler will only be invoked if the Answer Choice is the correct one. (This handler is used to change the question on the screen.)
     */
    render() {
        return (
            <button onClick={() => {
                console.log(this.props.answerText + ' is clicked.');
                if (this.props.isCorrect) {
                    alert('This is the correct answer!');
                    this.props.handleAnswerClick();
                } else {
                    alert('Sorry. That\' not right!');
                }
            }

            }>{this.props.answerText}</button>
        );
    }
}

export { AnswerChoice };