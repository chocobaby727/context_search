import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const useData = (url) => {
    const [data, setData] = useState();

    useEffect(() => {
        let ignore = false;

        async function getData() {
            const res = await axios.get(url);
            if(!ignore) {
                console.log('useData');
                setData(res.data);
            }
        }
        getData();
    }, [url]);

    return data;
}


export { useData };