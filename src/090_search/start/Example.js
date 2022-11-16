import { Routes, Route } from 'react-router-dom';
import { SearchConditionsProvider } from "./context/SearchConditionsContext";
import { Search } from "./pages/Search"
import { Detail } from './pages/Detail';
import { memo, useState, useCallback } from 'react';

// // 子
// const Child = memo(({ action }) => { 
//   console.log('再レンダリング');
//   return <button onClick={action}>+</button>;
// });

// // 親
// const Example = () => {
// 	const [count, setCount] = useState(0);
// 	const handleIncrement = useCallback(() => {
//     setCount((prev) => prev + 1);
// 	}, []);

// 	return (
//     <>
//       <span>count: {count}</span>
//       <Child action={handleIncrement} />
//     </>
// 	);
// };

const Example = () => {


  return (
    <SearchConditionsProvider>
      <Search />
    </SearchConditionsProvider>
  );
};

export default Example;
