import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercise = () => {
    const [details, setDetails] = useState({});

    let params = useParams();

    const fetchDetails = async () => {
          const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`, exerciseOptions);
          const detailData = data;
          console.log(detailData);
          setDetails(detailData);

  }

  useEffect(() => {
    fetchDetails()
// eslint-disable-next-line react-hooks/exhaustive-deps
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