// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import AdventureWorksApiClient from './api/adventureworksApiClient';

export function App() {
  const [data, setData] = useState(null);
  const client = new AdventureWorksApiClient().instance;

  useEffect(() => {
    const fetchData = async () => {
      try {        
        const response = await client.get('/Employee?page=1&pageSize=10');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [client]);

  return <div>Data: {JSON.stringify(data)}</div>;
}

export default App;
