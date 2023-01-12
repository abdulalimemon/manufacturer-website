import { useEffect, useState } from 'react';

const useTools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://manufacturer-server-67n7.onrender.com/tools')
            .then(res => res.json())
            .then(data => {
                setTools(data);
            });
    }, [])
    return [tools, setTools];
};

export default useTools;