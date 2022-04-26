import './Results.css'
import axiosClient from '../config/axiosConfig';
import { api_key } from '../../constants/constants';
import { useEffect } from 'react';

const Results = () => {
  const [Results,setResults] = useState([]);
    const getApiCovalent = async () =>{
      try {
        const response = await axiosClient.get ('/?api_key='+ api_key); //necesitamos la de Covalent
        setResults(response.data)                                       //=${api_key}&xxx`); para agregar parámetros a usar
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
            <li key={index}>{result.name}</li> //necesitamos saber los result que proporciona covalent
            )}
        </>
     );
}


 
export default Results ;