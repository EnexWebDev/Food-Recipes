import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const RandomMeals = () => {
    const [Data, setData] = useState([]);


    useEffect(() => {
        
        // const getRandom = async () => {
        //     let response = await fetch(
        //         'https://www.themealdb.com/api/json/v1/1/random.php'
        //     );
        //     let data = await response.json();
        //     console.log("--------Data Returned-------", data)
        //     setData((prev) => [...prev, ...data.meals]);
        // };
        // for (let i = 1; i <= 2; i++) {
        //     getRandom();
        // }

        const fetchRandomMeals = async () => {
            try {
                const promises = Array.from({ length: 4 }, () =>
                    fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(response => response.json())
                );
                const results = await Promise.all(promises);
                const meals = results.map(result => result.meals[0]);
                setData(meals);
            } catch (error) {
                console.error('Error fetching random meals:', error);
            }
        };

        fetchRandomMeals();
    }, []);

    console.log("--------use state data-------", Data)
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