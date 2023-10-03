import { useState, useEffect } from 'react'
import '../App.css'

interface FetchDataResponse {
    homeData: string;
}

const useFetchData = (): FetchDataResponse => {
    const [homeData, setHomeData] = useState<string>("");

    useEffect(() => {
        const fetchHomeSite = async () => {
            const response = await fetch("http://localhost:3001/");
            if (response.ok) {
                const data = await response.text();
                setHomeData(data)
            }
        }
        fetchHomeSite();
    }, []);
    
    return {homeData};
}

export const Home = () => {
    const {homeData} = useFetchData();
    return (
        <header> 
          <p>{homeData}</p>
        </header>
    );
  }
  