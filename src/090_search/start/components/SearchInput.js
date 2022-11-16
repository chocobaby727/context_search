import { useRef, useState } from 'react'
import { useSearchConditions, useSearchConditionsDispatch } from '../context/SearchConditionsContext'

const SearchInput = () => {
  const conditions = useSearchConditions();
  const dispatch = useSearchConditionsDispatch();
  
  const [selected, setSelected] = useState(conditions.completed ?? "");
  const OPTIONS = [
    { label: "", value: "" },
    { label: "未達成", value: false },
    { label: "達成", value: true }
  ];

  const handleSelect = (e) => {
    setSelected(e.target.value);
    dispatch({ type: 'complete', value: e.target.value });
  }


  const inputRef = useRef(conditions.title ?? "");
  const handleInput = (e) => {
    dispatch({ type: 'title', value: e.target.value });
  };

  return (
    <>
      <select
        value={selected}
        onChange={handleSelect}
      >
        {OPTIONS.map(({ label, value }) => <option key={label} value={value}>{label}</option>)}
      </select>
      <div>
        <label htmlFor="input">title</label>
        <div>
          <input
            type="text"
            id="input"
            placeholder='こんにちは'
            ref={inputRef}
            onChange={handleInput}
          />
        </div>
      </div>
    </>
  );
}

export { SearchInput };
