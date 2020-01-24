export default function reducer(state, action) {
    switch (action.type) {
      case "ADD_TODO":
        // return current state if empty
        if (!action.payload) {
          return state;
        }
        // return current state if duplicate
        if (state.todos.includes(action.payload)) {
          return state;
        }
        console.log('this is sate',state)
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
      case "COMPLETE":
        console.log('this is compelte reducer', action.payload)
        return {
          ...state,
          todos: state.todos.filter(t => t !== action.payload),
          complete: [...state.complete, action.payload],
        };
      case "REFRESH":
        console.log('this is refersh ')
        return {
          ...state,
          complete: [...state.complete = []],
          todos: [...state.todos = []],
          // todos: state.todos.filter(t => t !== action.payload)
        };
      default:
        return state;
    }
  }
  