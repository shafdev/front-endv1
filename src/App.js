import { useEffect, useState } from "react";

function App() {
  const [people,setPeople] = useState([]);
  const getData = async ()=>{
    const url = 'https://aqueous-oasis-11633.herokuapp.com/api';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    // const nameList = data;
    setPeople(data)
  }
  useEffect(()=>
    getData()
  ,[])
  // "proxy":"https://aqueous-oasis-11633.herokuapp.com",
  // "proxy":"http://localhost:5000/",
  return (
    <div className="App">
      {people.map((name) => {
        const {id,firstname} = name;
        return(<h3 key={id}>{firstname}</h3>)

      }
      
      )
      }
    </div>
  );
}

export default App;
