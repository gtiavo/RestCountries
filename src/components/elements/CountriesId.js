
const CountriesId = (props) => {

 
    return (
        <>
            
           <article className='conutriesCarsId'>
           <img src={props.flags.png} alt='no se encontro la imagen'/>
           <p>PAÍS</p>
           <p>{props.name.official}</p> 
           <p>CAPITAL</p>
           <p>{props.capital}</p>
           </article>
           

        </>
    )
}

export default CountriesId
