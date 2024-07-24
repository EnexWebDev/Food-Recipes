import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { API } from '../api/apis';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from "react-icons/fa";
import RandomMeals from './RandomMeals';
import Footer from '../components/Footer';

const Igpage = () => {
  const [igDescription, setIgDescription] = useState([]);
  const [currentIngredientIndex, setCurrentIngredientIndex] = useState(0);
  const [imagedata, setimagedata] = useState('')
  const [loading, setloading] = useState(true)
  useEffect(() => {
    Aos.init()
    const getDescription = () => {
      axios.get(API.ingredients)
        .then(res => {
          setloading(false)
          setIgDescription(res.data.meals);

        })
        .catch(err => {
          console.log(err, "Data NOT FOUND!");
        });
    };

    getDescription();

  }, []);



  const injectApi = (imageName) => {
    console.log('https://www.themealdb.com/images/ingredients/${imageName}.png')

    return `https://www.themealdb.com/images/ingredients/${imageName}.png`;
  }

  //   function injectApi(imageName){




  // return imagedata;
  //   }

  const handleNextIngredient = () => {
    setCurrentIngredientIndex((prevIndex) => (prevIndex + 1) % igDescription.length);
  };
  const handlePrevIngredient = () => {
    setCurrentIngredientIndex((prevIndex) => (prevIndex - 1) % igDescription.length);
  };

  if (loading == true) {
    return <div className='Big-Spinner'><Spinner /> </div>
  }
  return (
    <>
      {console.log(igDescription)}
      <div data-aos="fade-down-right" className='ig-container' >
        {igDescription.length > 0 && (
          <div className='ingredient-container' key={igDescription[currentIngredientIndex].id}>
            <div className='description'>
              <h3>{igDescription[currentIngredientIndex].strIngredient}</h3>
              <img src={`https://www.themealdb.com/images/ingredients/${igDescription[currentIngredientIndex].strIngredient}.png`} alt="" />
            </div>
            <p>{igDescription[currentIngredientIndex].strDescription}</p>
          </div>
        )}
        <div className='navigation'>

          {currentIngredientIndex !== 0 && ( // Conditionally render the FaAngleLeft icon
            <FaAngleLeft onClick={handlePrevIngredient} style={{ cursor: 'pointer' }} className='arrow-icon' />
          )}
          <FaAngleRight onClick={handleNextIngredient} style={{ cursor: 'pointer' }} className='arrow-icon' />
        </div>

      </div>
      
      <RandomMeals />

      <Footer/>


    </>
  );
};

export default Igpage;
