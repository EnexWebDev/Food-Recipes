import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ReactPlayer from 'react-player/youtube';
import Footer from '../components/Footer';

const Rmeals = () => {
  const { id } = useParams()
  const [Data, setData] = useState([]);
  const [loading, setloading] = useState(true)
  useEffect(() => {
    const getRandom = async () => {
      let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      let data = await response.json();
      setloading(false)
      console.log(data.meals)
      setData(data.meals);
    };
    getRandom();
  }, []);

  // if (Data.length == 0) {
  //   return (
  //     <div>
  //       <p>...</p>
  //     </div>
  //   );
  // }
  if (loading == true) {
    return <div className='Big-Spinner'><Spinner /> </div>
  }
  return (
    <>
      {Data.length > 0 && (
        <>
          <div className='RecipeContainer'>
            <div className='Views'>
              <h2> {Data[0].strMeal}</h2>
              <img src={Data[0].strMealThumb} alt="" />
            </div>
            <div className='menuData'>
              <h2 style={{ padding: '10px 0px' }}>Ingredients</h2>
              <div className=''>
                <ul>
                  <li>{Data[0].strIngredient1}</li>
                  <li>{Data[0].strIngredient2}</li>
                  <li>{Data[0].strIngredient3}</li>
                  <li>{Data[0].strIngredient5}</li>
                  <li>{Data[0].strIngredient7}</li>
                  etc...
                </ul>
              </div>
            </div>

            <div className='recipe-menu'>
              <h2>Instructions</h2>
              <div className=''>
                <p>{Data[0].strInstructions}</p>
              </div>
            </div>

            <div>
              <h2>Demo</h2>
              <div className='player-wrapper'>
                <ReactPlayer
                  className='react-player'
                  width='100%'
                  height="100%"
                  url={Data[0].strYoutube}
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

export default Rmeals