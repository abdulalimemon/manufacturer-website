import { useEffect, useState } from 'react';

const useToolsItem = (ToolsId) => {
    const [toolsItem, setToolsItem] = useState([]);

    useEffect(() => {
        const url = `https://manufacturer-server-67n7.onrender.com/tools/${ToolsId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setToolsItem(data));
    }, [ToolsId])
    return [toolsItem];
};

export default useToolsItem;