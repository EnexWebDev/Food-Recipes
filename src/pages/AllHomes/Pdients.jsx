import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { latestMeals } from '../../api/apis';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { API } from '../../api/apis';
import ReactPlayer from 'react-player/youtube';
import Footer from '../../components/Footer';
const Pdients = () => {
    const { id } = useParams()
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchMealsData = () => {
            const mealPromises = latestMeals.map((meal) => {
                return axios.get(`${API.mealDetails}${meal.idMeal}`);
            });

            Promise.all(mealPromises)
                .then((mealResponses) => {
                    const mealData = mealResponses.map((response) => response.data.meals[0]);
                    setData(mealData);
                })
                .catch((error) => {
                    console.log("Error fetching meal data:", error);
                });
            Aos.init();
        };

        fetchMealsData();
    }, []);


    let FilteredData = Data.filter((item) => item.idMeal == id)
    console.log(FilteredData)
    return (
        <>
            {FilteredData.length > 0 && (
                <>
                    <div className='RecipeContainer'>
                        <div className='Views'>
                            <h2> {FilteredData[0].strMeal}</h2>
                            <img src={FilteredData[0].strMealThumb} alt="" />
                        </div>

                        <div className='menuData'>
                            <div className=''>
                                <h2 style={{ padding: '10px 0px' }}>Ingredients</h2>
                                <ul>
                                    <li>{FilteredData[0].strIngredient1}</li>
                                    <li>{FilteredData[0].strIngredient2}</li>
                                    <li>{FilteredData[0].strIngredient3}</li>
                                    <li>{FilteredData[0].strIngredient4}</li>
                                    <li>{FilteredData[0].strIngredient5}</li>
                                    <li>{FilteredData[0].strIngredient6}</li>etc...
                                </ul>
                            </div>

                        </div>

                        <div className='recipe-menu'>
                            <h2>Instructions</h2>
                            <div className=''>
                                <p>{FilteredData[0].strInstructions}</p>
                            </div>

                        </div>
                        <div className=''>
                            <h2>DEMO</h2>
                            <div className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    width='100%'
                                    height="100%"
                                    url={FilteredData[0].strYoutube}
                                />
                            </div>

                        </div>

                    </div>
                    <Footer />




                </>

            )}
        </>
    )
}

export default Pdients