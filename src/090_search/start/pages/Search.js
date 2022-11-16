import { useState, lazy, Suspense, memo } from 'react';
import { useData } from '../hooks/useData';
import { SearchInput } from "../components/SearchInput";
import { SearchResult } from "../components/SearchResult";
import { useSearchConditions } from '../context/SearchConditionsContext'

const LazyResult = lazy(() => import("../components/SearchResult"));


const propsAreEqual = (prevProps, nextProps) => {
    if(prevProps.val === nextProps.val) {
        return true; // 再レンダリング発生なし
    } else {
        return false; // 再レンダリング
    }
}

const Search = memo(() => {
    const URL = 'https://jsonplaceholder.typicode.com/todos/?';
    const [url , setUrl] = useState(URL);
    const items = useData(url);
    console.log(items);
    const conditions = useSearchConditions();

    const handleSearch = (e) => {
        e.preventDefault();
        const disNullableConditions = Object.entries(conditions).filter(([, value]) => value);
        const searchParams = new URLSearchParams(disNullableConditions).toString();
        setUrl(() => URL + searchParams);
    };


    return (
        <>
            <SearchInput />
            <h3>現在の検索条件</h3>
            {
                Object.entries(conditions).map(([label, value]) => {
                    return (
                        <div key={label}>{label}: {value ?? '未指定'}</div>
                    );
                })
            }
            <button name='btn' type='submit' onClick={handleSearch}>検索</button>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            {items ? <SearchResult items={items || []} />: <div>Loading...</div>}
            {/* </Suspense> */}
        </>
    );
});

export {
    Search
};