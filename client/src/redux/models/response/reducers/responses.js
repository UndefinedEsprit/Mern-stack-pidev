import initialState from '../../../constants/initialState'; 
import * as types from '../../../constants/types';


export function answersVolume(state = initialState.answersVolume, action) {
    switch (action.type) { 
        case types.answers.GETANSWERSVOLUME: { 
            const { answersVolume} = action; 
            let nextState = Object.assign({}, state);
            for (let element of answersVolume) {
                if (!nextState[element._id]) {
                    nextState[element._id] = element;
                }
            }
            return nextState;
        }
        default: 
            return state;
    }
}

export function latestUserResponse(state = initialState.latestUserResponse, action) {
    switch (action.type) {
      case types.answers.GETLATESTUSERRESPONSE: {
        const {latestUserResponse}= action;
        let nextState = Object.assign({}, state);
          nextState=latestUserResponse;
        return nextState;
      }
  
      default:
        return state;
    }
}

export function mostAnsweredQuestion(state = initialState.mostAnsweredQuestion, action) {
  switch (action.type) {
    case types.answers.GETMOSTANSWEREDQUESTION: {
      const {mostAnsweredQuestion}= action;
      let nextState = Object.assign({}, state);
        nextState=mostAnsweredQuestion;
      return nextState;
    }

    default:
      return state;
  }
}

export function numberOfAnswers(state = initialState.numberOfAnswers, action) {
  switch (action.type) {
    case types.answers.GETNUMBEROFANSWERS: {
      const {numberOfAnswers}= action;
      let nextState = Object.assign({}, state);
      for (let numberOfAnswer of numberOfAnswers) {
        if (!nextState[numberOfAnswer.questionText]) {
          nextState[numberOfAnswer.questionText] = numberOfAnswer;
        }
      }
      return nextState;
    }

    default:
      return state;
  }
}

export function mostChosenAnswer(state = initialState.mostChosenAnswer, action) {
  switch (action.type) {
    case types.answers.GETMOSTCHOSENANSWER: {
      const {mostChosenAnswer}= action;
      let nextState = Object.assign({}, state);
        nextState=mostChosenAnswer;
      return nextState;
    }

    default:
      return state;
  }
}


