import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const RandomMeals = () => {
    const [Data, setData] = useState([]);


    useEffect(() => {
        Aos.init()
        const getRandom = async () => {
            let response = await fetch(
                'https://www.themealdb.com/api/json/v1/1/random.php'
            );
            let data = await response.json();
            setData((prev) => [...prev, ...data.meals]);
        };
        for (let i = 0; i < 2; i++) {
            getRandom();
        }
    }, []);
   
    console.log(Data)
    return (
        <>
            <section>
                <div  className='container'>
                    <h2 className='header'>
                        Random Meals
                    </h2>
                    <div className='recipe-list'>
                        {Data.map((meal) => (
                            <div className='recipe-card' key={meal.idMeal}>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                                <div className='Meal-properties'>
                                    <p className='meal-name'>{meal.strMeal}</p>

                                </div>
                                <p className='meal-recipe'>
                                    <Link to={`random-meals/${meal.idMeal}`}>
                                        <>
                                            View Recipe
                                        </>
                                    </Link>
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>

    )
}

export default RandomMeals