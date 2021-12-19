import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const NorteAmerica = () => {

    const [ countries, setCountries ]= useState([]) 

    useEffect(() => {
     
         fetch('https://restcountries.com/v3.1/all')
             .then(response => response.json())
             .then(data => setCountries(data))
      
    }, [])
    
        let listFilter = countries.filter(item => item.continents == "North America" )
    return (
        <>
        <section className='cardsConteiner'>
             {listFilter.map((item,i)=>
             <article  className='conutriesCars'>
           <Link  to={`/countriesDetail/${item.name.common}`} ><img src={item.flags.png} alt='no se encontro la imagen'/></Link>
           <Link to={`/countriesDetail/${item.name.common}`} ><p>{item.name.common}</p></Link> 
           </article> 
           )}
           </section>
        </>
    )
}

export default NorteAmerica