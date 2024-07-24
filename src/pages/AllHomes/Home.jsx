import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  Aos  from 'aos';
import 'aos/dist/aos.css';
import Spinner from '../../components/Spinner';
import { API } from '../../api/apis';
import { latestMeals } from '../../api/apis';
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import RandomMeals from '../RandomMeals';
import Ingredent from '../Ingredent';
import Footer from '../../components/Footer';
import Btop from '../Back to top/Btop';

const Home = () => {
    const [Meals, setMeals] = useState([]);
    const [loading, setloading] = useState(true)
    useEffect(() => {
        Aos.init();
        const fetchMealsData = () => {
            const mealPromises = latestMeals.map((meal) => {
                return axios.get(`${API.mealDetails}${meal.idMeal}`);


            });

            Promise.all(mealPromises)
                .then((mealResponses) => {
                    const mealData = mealResponses.map((response) => response.data.meals[0]);
                    setloading(false)
                    setMeals(mealData);

                })
                .catch((error) => {
                    console.log("Error fetching meal data:", error);
                });
        };

        fetchMealsData();
    }, []);

    if (loading == true) {
        return <div className='Big-Spinner'><Spinner /> </div>

    }
    console.log(Meals)


    return (
        <>
            <div class="container-fluid py-5 bg-dark hero-header mb-5" >
                <div class="container my-5 py-5">
                    <div class="row align-items-center g-5" className=''>
                        <div data-aos="fade-up" class="text-center text-lg-start" className='Hero-page'>
                            <div className='spinner img'>
                                <img src={'images/chiken.jpg'} alt="" style={{width:"100%"}}/>
                            </div>
                            <div class="text-center text-lg-start" className='Delicious-meal'>
                                <div className='Delicious-cont'>
                                    <h1> <span class="Enjoy">Enjoy Our</span>
                                        <br />Delicious Meal
                                    </h1>
                                    <p class="">Stay tuned as we guide you through the step-by-step process of creating this masterpiece in your own kitchen. From selecting the freshest ingredients to mastering the techniques that make this dish shine, we'll be with you every step of the way.</p>
                                    <a href="" class="btn btn-outline-warning   py-sm-3 px-sm-5 me-3 " className='btn'>Book A Table</a>
                                </div>
                            </div>

                            <div className='img-container'>
                                <img src={'images/hero.jpg'} alt="" />
                            </div>
                        </div>




                        <div class="col-lg-6 text-center text-lg-end overflow-hidden">

                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div data-aos="fade-up" className='container'>
                    <h2 className='header'>
                        Latest Meals
                    </h2>
                    <div className='recipe-list'>
                        {Meals.map((meal) => (
                            <div className='recipe-card' key={meal.idMeal}>
                                {meal && <img src={meal.strMealThumb} alt={meal.strMeal} />}
                                <div className='Meals-properties'>
                                    <div className=''>
                                        <p className='meal-name'>{meal.strMeal}</p>
                                        <Link>  <BsThreeDotsVertical className='i-name bg-info-subtle' /></Link>
                                    </div>

                                    <p className='meal-recipe'>
                                        <Link to={`meals/${meal.idMeal}`}>
                                            <>
                                                View Recipe
                                            </>
                                        </Link>
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className='P-container'>
                        {Meals.map((meal) => (
                            <div className='P-ingredients' key={meal}>

                            </div>
                        ))}
                    </div>
                </div>

            </section>

            <Ingredent />

            <RandomMeals />
            <Btop />

            <Footer />


        </>
    );
};

export default Home;
