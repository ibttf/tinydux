let state = {};
const subscribers = [];
const middleware = [];

function setState(newState) {
  state = { ...state, ...newState };
  subscribers.forEach((callback) => callback());
}

function useMyState() {
  const currentState = state;

  function subscribe(callback) {
    subscribers.push(callback);
    return () => {
      const index = subscribers.indexOf(callback);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
    };
  }

  function applyMiddleware(action) {
    middleware.forEach((middlewareFunc) => {
      middlewareFunc(action, currentState, setState);
    });
  }

  function dispatch(action) {
    applyMiddleware(action);
    setState(action.payload);
  }

  return [currentState, dispatch, subscribe, applyMiddleware];
}

function applyMiddleware(middlewareFunc) {
  middleware.push(middlewareFunc);
}

export { useMyState, applyMiddleware };
