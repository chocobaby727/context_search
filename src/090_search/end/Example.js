import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, { type, payload }) => {
  const { a, b } = state;

  switch (type) {
    case 'change': 
      return { ...state, [payload.name]: payload.value };
    case 'add':
      return { ...state, result: a + b };
    case 'minus':
      return { ...state, result: a - b };
    case 'divide':
      return { ...state, result: a / b };
    case 'multiply':
      return { ...state, result: a * b };
    default:
      throw Error();
  }

}

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  const numChangeHandler = (e) => {
    dispatch({ 
      type: 'change', 
      payload: { 
        name: e.target.name, 
        value: parseInt(e.target.value)
      }
    })
  }

  return (
    <>
      <h3>練習問題</h3>
      <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {
          CALC_OPTIONS.map(opt => <option key={opt}>{opt}</option>)
        }
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
