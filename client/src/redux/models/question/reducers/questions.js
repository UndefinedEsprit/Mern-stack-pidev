import initialState from '../../../constants/initialState'; 
import * as types from '../../../constants/types';


export function questions(state = initialState.questions, action) {
    switch (action.type) { 
        case types.questions.GET: { 
            const { questions } = action; 
            let nextState = Object.assign({}, state);
            for (let question of questions) {
                if (!nextState[question._id]) {
                    nextState[question._id] = question;
                }
            }
            return nextState;
        }
        default: 
            return state;
    }
}
 
export function questionIds(state = initialState.questionIds, action) {
    switch (action.type) {
        case types.questions.GET: {
            const nextQuestionIds = action.questions.map(question => question._id); 
            let nextState = Array.from(state); 
            for (let question of nextQuestionIds) {
                if (!state.includes(question)) {
                    nextState.push(question);
                }
            }
            return nextState;
        }
        default:
            return state;
    }
}


