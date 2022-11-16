import React, { createContext, useContext, useReducer } from "react";


type InitialConditions = {
    userId: null | string;
    id: null | number;
    title: null | string;
    completed: null | boolean;
}

const initialConditions: InitialConditions = {
    userId: null,
    id: null,
    title: null,
    completed: null
};


type ACTIONTYPE =
  | { type: "alert"; value: number }
  | { type: "console"; value: string }
  | { type: "complete"; value: string }
  | { type: "title"; value: string }
  | { type: "reset"; value: string };


const reducer = (state: any, action: ACTIONTYPE) => {
    switch (action.type) {
        case 'alert':
          alert(`dispatch ${action.value}`);
          return { ...state}
        case 'console':
            console.log('console event called');
            break;
        case 'complete': 
            return { ...state, completed: action.value };
        case 'title': 
            return { ...state, title: action.value };
        case 'reset':
            return { ...state, ...initialConditions }
        default:
          alert('default');
          break;
      }
  };


const SearchConditionsContext = createContext({} as InitialConditions);
const SearchConditionsDispatchContext = createContext({} as React.Dispatch<ACTIONTYPE>);

type Props = {
    children: React.ReactNode;
};

const SearchConditionsProvider: React.FC<Props> = ({ children }) => {
    // console.log("SearchConditionsProvider レンダリング");
    const [conditions, dispatch] = useReducer(reducer, initialConditions);

    return (
        <SearchConditionsContext.Provider value={conditions}>
            <SearchConditionsDispatchContext.Provider value={dispatch}>
                {children}
            </SearchConditionsDispatchContext.Provider>
        </SearchConditionsContext.Provider>
    );
};

const useSearchConditions = () => useContext(SearchConditionsContext);
const useSearchConditionsDispatch = () => useContext(SearchConditionsDispatchContext);

export { 
    SearchConditionsProvider,
    useSearchConditions,
    useSearchConditionsDispatch
};