import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url: any) => {
    const [ response, setResponse ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(url);
                setResponse(res.data.results);
                console.log(res.data.results);
                setLoading(false);
            } catch (err: any) {
                setError(err);
                setLoading(false);
            }
        }
        fetch();
    }, [url]);

    return { response, loading, error };
}

export default useAxios;