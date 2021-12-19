import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Countries = () => {

   const [ countries, setCountries ]= useState([]) 

   useEffect(() => {
    
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
     
   }, [])
console.log(countries, 'estoy fuera');
    return (
        <>
        <section>
             <p> FILTRAR POR CONTINENTE</p>
            <Link to={'/coutriesAsia'} ><p>Asia</p></Link>
            <Link to ={'/coutriesSurAmerica'}> <p>Sur America</p></Link>
            <Link to ={'/coutriesNorteAmerica'}> <p>Norte America</p></Link>
            <Link to ={'/coutriesEuropa'}> <p>Europa</p></Link>
            <Link to ={'/coutriesAfrica'}> <p>Africa</p></Link>
            <Link to ={'/coutriesOceania'}> <p>Oceania</p></Link>
        </section>
        
        <section className='cardsConteiner'>
        {countries.map((item,i)=>(
          <article key={i + item} className='conutriesCars'>
           <Link  to={`/countriesDetail/${item.name.common}`} ><img src={item.flags.png} alt='no se encontro la imagen'/></Link>
           <Link  to={`/countriesDetail/${item.name.common}`} ><p>{item.name.common}</p></Link> 
           </article>
        ))}
        </section>
        </>
    )
}

export default Countries
