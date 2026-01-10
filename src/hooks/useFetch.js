import { useState, useEffect } from "react";

export function useFetch(url,option) {
    let [data, setData] = useState(null)
    let [loading, setLoading] = useState(true)
    let [errorObj, setErrorObj] = useState({error:false,errorMessage:""})
    
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                let response = await fetch(url,option)
                let processedData = await response.json()
                setData(processedData)  //  Just set the data directly
            } catch (err) {
                setErrorObj({error:true,errorMessage:err.message})
            } finally {
                //even if it fails or fetches data, stop the loading state
                setLoading(false)
            }
        }
        
        fetchData();
    }, [url,option])  //  Re-fetch when URL changes

    return { data, loading, errorObj }  //  Return object for clearer usage
}