import { useReducer } from 'react'

const Example = () => {
  const [state, dispatch] = useReducer((prev, { type }) => {
    switch (type) {
      case '+':
        return ++prev
      case '-':
        return --prev
      default:
        throw new Error('unknown action');
    }
  }, 0)

  const countUp = () => {
    dispatch({ type: '+' });
  }

  const countDown = () => {
    dispatch({ type: '-' });
  }

  return (
    <>
      <h3>{state}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
