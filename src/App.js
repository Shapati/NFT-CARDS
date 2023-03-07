import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import NftCards from "./Components/NftCards";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [array, setArray] = useState(null);

  const API_URI = "https://testnets-api.opensea.io/api/v1/assets";

  useEffect(() => {
    const getNftCards = async () => {
      setPending(true);
      setError("");
      try {
        const response = await axios.get(API_URI);
        if (response.status === 200) {
          setData(response.data.assets);
          setArray(response.data.assets);
          setPending(false);
          console.log(response);
        }
      } catch (err) {
        console.error(err);
        setError("Something Went Wrong");
        setPending(false);
      }
    };
    getNftCards();
  }, [API_URI]);

  const modalPopUp = (data_value) =>{
      setArray((prev)=> {
         return prev.filter((array_value)=>{
          return array_value.id === data_value
         })
      })  
  }

  const resetArray = () =>{
    if(data){
      setArray(data)
    }
  }
  return (
    <div className="App">
        <NftCards data={data} array={array} modalPopUp={modalPopUp} resetArray={resetArray} />
    </div>
  );
}

export default App;
