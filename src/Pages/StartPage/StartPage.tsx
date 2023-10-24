import { useState, useEffect } from 'react';

import { Text } from './styles';

interface FetchDataResponse {
  homeData: string;
}

const useFetchHomeData = (): FetchDataResponse => {
  const [homeData, setHomeData] = useState<string>('');

  useEffect(() => {
    const fetchHomeSite = async () => {
      const response = await fetch('http://localhost:3001/');
      if (response.ok) {
        const data = await response.text();
        setHomeData(data);
      }
    };
    fetchHomeSite();
  }, []);

  return { homeData };
};

export const StartPage = (): JSX.Element => {
  const { homeData } = useFetchHomeData();
  return <Text>{homeData}</Text>;
};
