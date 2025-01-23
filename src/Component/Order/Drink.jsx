import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Drink.module.css";

export default function Drink() {
  const [drinks, setDrinks] = useState([]);
  
  async function fetchDrinks() {
    let x = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink");
    console.log("Drinks:", x.data.drinks);
    setDrinks(x.data.drinks);
  }

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <>
      <div className="mt-5 p-5 bg-dark text-center">
        <h1 className={`text-white mb-4 ${style.mm} d-flex justify-content-center align-items-center m-auto p-1 w-25 border rounded-5`}>
          <span className="text-danger">D</span>rinks
        </h1>
        <div className="container p-3">
          <fieldset className={`border border-white rounded-5 p-5 ${style.mm}`}>
            <div className="row">
              {drinks.map((drink, index) => (
                <div className="col-md-4 mb-5 p-3" key={index}>
                  {drink.strDrinkThumb && (
                    <img className="w-75 h-75 border rounded-5" src={drink.strDrinkThumb} alt={drink.strDrink} />
                  )}
                  <h6 className="text-white mt-2">Title: {drink.strDrink}</h6>
                  <h6 className="text-white mt-2">Drink Price: {Math.floor(Math.random() * 60) + 350} .eg</h6>
                  <div className="dropdown btn btn-secondary">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                       Order 
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><input type="text" placeholder="Name" className="dropdown-item" /></li>
                      <li><input type="Number" placeholder="Seat Number" className="dropdown-item" /></li> 
                      <button className="btn btn-dark text-white mt-1 w-100" onClick={() => {}}>
                        Confirm
                      </button>
                    </ul>
                  </div>


                  <div className="border border-1 mt-4"></div>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}
