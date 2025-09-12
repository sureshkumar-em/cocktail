import {useState , useEffect} from 'react';
import axios from 'axios';
import "./CtMartini.css"

function CtMartini() {
    const [JuiceData ,setJuiceData] = useState([]);


    const getDrink = async () => {
        const Response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini");
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
    <div>
    <div>
        <input type='search'/>
    </div>
    <div class="Drinks">

      {JuiceData.map((Drink) => {
        return(         
                    <div className='Drink col-3'>
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

export default CtMartini
