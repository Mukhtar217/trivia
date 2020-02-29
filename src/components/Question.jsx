import React, { Component } from 'react';
// import components
import { AnswerChoice } from './AnswerChoice';


class Question extends Component {
  /**
   * Creates a Question component using given params from parent.
   * This includes the question text, the answer choices, the correct answer choice, and a click handler that is used when an answer choice is clicked.
   */
  render() {
    return (
      <div>
        <h1>{this.props.questionText}</h1>
        <button onClick={() => console.log('Reset is clicked')}>Reset</button>
        <div>
          <AnswerChoice answerText={this.props.answerOne} isCorrect={this.props.correctChoice === 0} handleAnswerClick={this.props.handleAnswerClick} />
          <AnswerChoice answerText={this.props.answerTwo} isCorrect={this.props.correctChoice === 1} handleAnswerClick={this.props.handleAnswerClick} />
        </div>
        <div>
          <AnswerChoice answerText={this.props.answerThree} isCorrect={this.props.correctChoice === 2} handleAnswerClick={this.props.handleAnswerClick} />
          <AnswerChoice answerText={this.props.answerFour} isCorrect={this.props.correctChoice === 3} handleAnswerClick={this.props.handleAnswerClick} />
        </div>
      </div>
    );
  }
}

export { Question };