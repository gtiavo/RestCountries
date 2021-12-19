
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CountriesId from './CountriesId';

const CountriesDetail = () => {

    const [ country, setCountry ] = useState([]);
    
   

    
    useEffect(() => {
      
       oneCountry()
        
    }, [])

    let {name} = useParams()
    
    let oneCountry = async ()=>{
        let data = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        let pais = await data.json()
       setCountry(pais)
    }
    
  
    

    return (
        <>
        {/* {country.map((item, i)=>
          <article className='conutriesCarsId'>
           <img src={item.flags.png} alt='no se encontro la imagen'/>
           <p>{item.name.official}</p> 
           <p>{item.capital}</p>
            <p>{item.currencies[0].name}</p>
           </article>
           )} */}
            
            {country.map((item, i) => {
              return   < CountriesId {...item} key = {i+item} />
            })}
        </>
    )
}

export default CountriesDetail
