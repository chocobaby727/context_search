import { useLocation } from "react-router-dom";

const Detail = () => {
    const location = useLocation();
    const { userId, id, title, completed } = location;
    return (
        <>
            <ul>
                <li>{userId}</li>
                <li>{id}</li>
                <li>{title}</li>
                <li>{completed}</li>
            </ul>
        </>
    );
};

export { Detail };