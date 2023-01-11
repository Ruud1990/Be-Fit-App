import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
// import Loading from '../components/Loading';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercise = () => {
    // const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState({});

    let params = useParams();

    const fetchDetails = async () => {
        //   const data = await fetchData(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_RECIPES_KEY}`);
          const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`, exerciseOptions);
          const detailData = data;
          console.log(detailData);
          setDetails(detailData);

  }

  useEffect(() => {
    fetchDetails()
}, [params.id])
console.log(params.id);


return (
    <section className='hero'>
        <div className="exercise-container">
            <div className="exercise-container-info">
                <img src={details.gifUrl} alt={details.name} className='recipe-detail-img'/>
            </div>
            <div className="exercise-container-info">
                <h2 className="exercise-title">{details.name}</h2>
                <p>Bodypart: {details.bodyPart}</p>
                <p>Equipment: {details.equipment}</p>

            </div>
</div>
    </section>
)

}

export default Exercise;