import './App.css';
import axios from "axios"
import { useState, useEffect } from 'react';



const App = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ui>
        {data.map((item) => {
          return (
            <>
              <li>Id: {item.id}</li>
              <li>Name: {item.name}</li>
              <li>Email: {item.email}</li>
              <li>Phone: {item.phone}</li>
              <li>Address: {item.address.street}</li>
              <hr />
            </>
          );
        })}
      </ui>
    </div>
  );
};

export default App;