import { memo, Suspense } from 'react';
import { Routes, Route, } from 'react-router-dom';

const SearchResult = memo(({ items }) => {
    // console.log('SearchResult レンダリングされた');

    return (
        <Suspense fallback={<div>Loading...</div>}>
        <div>
            <h3>検索結果</h3>
            <table border="1" style={{"borderCollapse": "collapse"}}>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(({ userId, id, title, completed}) => {
                            return (
                                <tr key={id}>
                                    <th>{userId}</th>
                                    <th>{id}</th>
                                    <th>{title}</th>
                                    <th>{completed ? "達成": "未達成"}</th>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
        </Suspense>
    );
});

export {
    SearchResult
};