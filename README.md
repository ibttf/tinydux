# Tinydux

Tinyduxy is the most intuitive way to manage global state variables in React. Like the way you would've thought Redux worked after you first learned  about useState.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Setting Up](#setting-up)
  - [Using the `useMyState` Hook](#using-the-usemystate-hook)
  - [Applying Middleware](#applying-middleware)
- [Examples](#examples)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use Tinydux in your project, simply install it via npm:

```shell
npm install tinydux.
```

## Usage

```javascript
import { useMyState } from 'tinydux';
```

### Using the useMyState Hook
You can use the useMyState hook to manage and access your application's global state:

```javascript
const [currentState, dispatch, subscribe, applyMiddleware] = useMyState();
```

currentState: The current state of your application.
dispatch: A function to dispatch actions that modify the state.
subscribe: A function to add subscribers that listen for state changes.
applyMiddleware: A function to add middleware functions for action processing.


### Example

```javascript
import React, { useEffect } from 'react';
import { useMyState } from 'my-state-library';

function MyComponent() {
  const [currentState, dispatch, subscribe] = useMyState();

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      console.log('State has changed:', currentState);
    });

    return () => {
      unsubscribe();
    };
  }, [subscribe, currentState]);

  const updateState = () => {
    dispatch({ payload: { message: 'Hello, World!' } });
  };

  return (
    <div>
      <p>Current State: {JSON.stringify(currentState)}</p>
      <button onClick={updateState}>Update State</button>
    </div>
  );
}

export default MyComponent;
```


## Contributions

Contributions welcome. fork and open a pull request.
