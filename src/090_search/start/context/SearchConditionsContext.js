import { createContext, useContext, useReducer } from "react";

const SearchConditionsContext = createContext();
const SearchConditionsDispatchContext = createContext();

const initialConditions = {
    userId: null,
    id: null,
    title: null,
    completed: null
};


const reducer = (state, action) => {
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

const SearchConditionsProvider = ({ children }) => {
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