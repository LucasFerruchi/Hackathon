import './Results.css'
import axiosApi from '../config/axiosConfig';
import { api_key } from '../../constants/constants';
import { useEffect, useState } from 'react';
import axiosApi from '../config/axiosConfig';

const Results = () => {
  const [Results,setResults] = useState([]);
    const getApiCovalent = async () =>{
      try {
        const response = await axiosApi.get ("https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=USD&format=JSON&key=ckey_2ece492703d64924bec1968f88e"); //necesitamos la de Covalent
        setResults(response.data)                                       
      } catch (error) {
          console.log(error);
          
      }  
        
    }

    useEffect(()=>{
        getApiCovalent();
    },[]);


    return ( 
        <>
        {Results.map(result=>
            <li key={index}>{result.name}</li> //necesitamos aquí los result que proporciona covalent (filter)
            )}
        </>
     );
}


 
export default Results ;