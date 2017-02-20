/**
 * Created by ahmed on 20.02.17.
 */
import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class TodoDraftStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                return '';

            case TodoActionTypes.UPDATE_DRAFT:
                return action.text;

            default:
                return state;
        }
    }
}

export default new TodoDraftStore();