import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface FetchDataResponse {
    homeData: string;
}

const Text = styled.p`
    font-size: 4rem;
    font-weight: 400;
    color: #001529;
`;

const useFetchHomeData = (): FetchDataResponse => {
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

export const StartPage = (): JSX.Element => {
    const {homeData} = useFetchHomeData();
    return <Text>{homeData}</Text>
  };
  