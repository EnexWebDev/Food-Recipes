import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { API } from '../api/apis';
import 'bootstrap/dist/css/bootstrap.min.css';


const Ingredent = () => {
    const [IngredientsImg, setIngredientsImg] = useState([]);
    const [IngredientsData, setIngredientsData] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const specificIngredients = ["Chicken", "Salmon", "Beef", "Pork"];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch Ingredients
        const fetchIngredients = () => {
            axios.get(`${API.ingredients}`)
                .then(res => {
                    const filteredIngredients = res.data.meals.filter(ingredient => specificIngredients.includes(ingredient.strIngredient));
                    setLoading(false);
                    setIngredientsData(filteredIngredients);
                })
                .catch(err => {
                    console.log(err + "Data not Found ");
                });
        };
        fetchIngredients();
    }, []);

    useEffect(() => {
        // Fetch Ingredient Images
        const fetchIngredientsImages = () => {
            axios.get(`${API.filterByIngredient}`)
                .then(res => {
                    const filterImg = res.data.meals.slice(0, 4);
                    setLoading(false);
                    setIngredientsImg(filterImg);
                })
                .catch(err => {
                    console.log(err + "Can't fetch img Data");
                });
        };
        fetchIngredientsImages();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className='ingredient-container'>
            <div data-aos="fade-down" className='ingredientData'>
                <h2>POPULAR INGREDIENT</h2>
                <div data-aos="fade-down" className='img-ingredient'>

                    {IngredientsImg.map((ingredient, index) => (
                        <div key={index} className='ingredient-card'>
                            <img src={ingredient.strMealThumb} alt='Ingredient' />
                            <div className=''>
                                <ul>
                                    {IngredientsData.filter((data) => data.strMeal).map((IngredientsData, index) => (
                                        <li key={index}>{IngredientsData.strIngredient}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Ingredent;
