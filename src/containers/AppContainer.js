import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoEditStore from '../data/TodoEditStore'
import TodoDraftStore from '../data/TodoDraftStore'
import TodoActions from '../data/TodoActions';


function getStores() {
  return [
    TodoStore,
    TodoDraftStore,
    TodoEditStore
  ];
}

function getState() {
  return {
    draft: TodoDraftStore.getState(),
    editing: TodoEditStore.getState(),
    todos: TodoStore.getState(),

    onAdd: TodoActions.addTodo,
    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,
    onUpdateDraftTodo: TodoActions.updateDraftTodo,
    onDeleteCompletedTodos: TodoActions.deleteCompletedTodos,
    onToggleAllTodos:   TodoActions.toggleAllTodos,
    onEditTodo: TodoActions.editTodo,
    onStartEditingTodo: TodoActions.startEditingTodo,
    onStopEditingTodo: TodoActions.stopEditingTodo
  };
}

export default Container.createFunctional(AppView, getStores, getState);
