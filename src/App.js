import './App.css';
import ContributionGraph from "./components/ContributionGraph/ContributionGraph";
import {useEffect, useState} from "react";
import {API} from "./api/API";

function App() {

    const [contributions, setContributions] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            await API.getContributions().then((data) => {
                setContributions(data)
            }).finally(() => {
                setIsLoading(false)
            });
        }
        fetchData()
    }, [])

    if (isLoading) {
        return <h1>Is loading</h1>
    }

    return (
        <div className="App">
            <ContributionGraph contributionList={contributions}/>
        </div>
    );
}

export default App;
