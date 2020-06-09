import thunk from 'redux-thunk'; 
import configureStore from 'redux-mock-store';
import initialState from '../../../constants/initialState';
import * as types from '../../../constants/types';
/*
import {
    showForms,
    toggleForms,
    getFormsForStudy
 
} from '../../src/actions/forms'; 


 
const mockStore = configureStore([thunk]); 
describe('login actions', () => {
    let store; 
    beforeEach(() => {
        store = mockStore(initialState); 
    });
    test('showForms', () => {
        const studyId = 'id';
        const actual = showForms(studyId); 
        const expected = { type: types.forms.SHOW, studyId }; 
        expect(actual).toEqual(expected); 
    });
    test('toggleForms', () => {
        const studyId = 'id';
        const actual = toggleForms(studyId);
        const expected = { type: types.forms.TOGGLE, studyId };
        expect(actual).toEqual(expected);
    });
    test('updateAvailableForms', () => {
        const forms = ['forms'];
        const actual = updateAvailableForms(forms);
        const expected = { type: types.forms.GET, forms };
        expect(actual).toEqual(expected);
    });
   
    test('getFormsForStudy', async () => {
        const studyId = 'id';
        const forms = [{}];
        axios.get(apiUrl + '/form/getbystudy',{id: studyId,}) = jest.fn(() => {
            return Promise.resolve({
                json: () => Promise.resolve(forms)
            });
        });
        await store.dispatch(getFormsForStudy(studyId));
        const actions = store.getActions();
        const expectedActions = [{ type: types.comments.GET, forms }];
        expect(actions).toEqual(expectedActions);
    });
});
*/