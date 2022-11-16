import axios from "axios";

const getData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return res.data;
}


export { getData };