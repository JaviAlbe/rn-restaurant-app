import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            //The second argument of the yelp.get function are queries appended to the url
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'Madrid',
                    limit: 50
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went wrong fetching the data')
        }
    }

    useEffect(()=> {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
}