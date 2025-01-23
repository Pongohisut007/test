import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [data, setdata] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/nongao`);
        console.log(response.data)
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      test
    </div>

  );
}

export default App;
