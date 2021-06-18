import { useEffect, useState } from 'react';
import axios from 'axios';

const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert('Erro - Tente novamente')
            })
    }, [url]);

    return (data);
};

export default useRequestData;