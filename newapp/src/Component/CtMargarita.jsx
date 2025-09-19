import {useState , useEffect} from 'react';
import axios from 'axios';
import "./CtMargarita.css"

function CtMargarita() {
    const [JuiceData ,setJuiceData] = useState([]);


    const getDrink = async () => {
        const Response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
        console.log(Response.data.drinks);
        setJuiceData(Response.data.drinks);
    }
    useEffect(()=>{
        getDrink();
    },[])
  return (
    // document.getElementById('box').addEventListener(
    //   'onclick',function(){
    //     document.getElementById('bigbox').attributes(className;displaybox)
    //   }
    // )
    <div className='all'>
    {/* <div>
      <h3>IF LIFE GIVES YOU LIMES</h3>
      <h1>MAKE MARGARITAS</h1>
    </div> */}
    <div>
        <input type='search'/>
    </div>
    <div class="Drinks">

      {JuiceData.map((Drink) => {
        return(         
                    <div className='Drink col-4'>
                        <img src={Drink.strDrinkThumb} />
                        <h1>{Drink.strDrink}</h1>
                        {/* <p>{Drink.strInstructions}</p>
                        <p> {Drink.strIngredient1}</p> */}
                    </div>
                    
                
            
        )
      }
      )}

    </div>
    </div>
  )
}

export default CtMargarita
