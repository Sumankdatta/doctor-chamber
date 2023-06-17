import { useEffect, useState } from "react"

const useToken = (email) => {
    const [token, setToken] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('doc-accessToken', data.accessToken)
                        setToken(data.accessToken)
                        setIsLoading(false)
                    }
                })
        }
    }, [email])

    return [token, isLoading]
}
export default useToken