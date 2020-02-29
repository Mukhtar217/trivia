import React, { Component } from 'react';
// import components
import { buildFirebase, getRandomQuestion } from '../clients/firebase.js';
import { Question } from './Question';


class Questions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questions : null,
        };

        this.getQuestionsFromFirebase()

        this.handleAnswerClick = this.handleAnswerClick.bind(this)
    }

    /**
     * Fetches all trivia questions from Firebase.
     * Assign one of those questions onto this.state.
     */
    getQuestionsFromFirebase() {
        var database = buildFirebase();
        var databaseRef = database.ref("/questions");
        console.log('fetching data...')
        databaseRef.once("value").then((data) => {
            const questions = data.val();
            console.log(questions)
            this.setState({
                questions : data.val(),
                question : getRandomQuestion(data.val())
            })
        });
    }

    /**
     * Used as a handler passed down to the child AnswerChoice component.
     * This will be called when the correct answer is clicked to change the question.
     */
    handleAnswerClick() {
        console.log('Yay right answer')
        this.setState((prevState) => ({
            question: getRandomQuestion(prevState.questions)
        }))
    }

    /**
     * Renders the question screen after Firebase returns with valid questions.
     * Renders by building a Question component using the selected question.
     */
    render() {
        if (this.state.questions && this.state.question) {
            let question = this.state.question;
            let questionText = question.question_text
            let answerChoices = question.choices
            let correctChoice = question.correct_choice_index
            return <Question 
                    questionText={questionText}
                    answerOne={answerChoices[0]}
                    answerTwo={answerChoices[1]}
                    answerThree={answerChoices[2]}
                    answerFour={answerChoices[3]}
                    correctChoice={correctChoice}
                    handleAnswerClick={this.handleAnswerClick}>
                </Question>
        } else {
            return <div>Loading... Fetching data from Firebase...</div>
        }
    }
}

export { Questions };