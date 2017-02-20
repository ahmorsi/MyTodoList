import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Counter from '../data/Counter';
import Todo from '../data/Todo';

class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
         // Don't add todos with no text.
        if (!action.text) {
          return state;
        }
        const id = Counter.increment();
        return state.set(id, new Todo({
          id,
          text: action.text,
          complete: false,
        }));
        case TodoActionTypes.CLEAR_COMPLETED_TODOS:
            return state.filter(todo => !todo.complete);

        case TodoActionTypes.DELETE_TODO:
            if(id !== -1)
              return state.delete(action.id);
            else{
              return state.filter(item => !item.complete);
            }

        case TodoActionTypes.TOGGLE_TODO:
            return state.update(
                action.id,
                todo => todo.set('complete', !todo.complete),
            );
        case TodoActionTypes.TOGGLE_ALL_TODOS:
            const areAllComplete = state.every(todo => todo.complete);
            return state.map(todo => todo.set('complete', !areAllComplete));

        case TodoActionTypes.EDIT_TODO:
            return state.setIn([action.id, 'text'], action.text);
      default:
        return state;
    }
  }
}

export default new TodoStore();
