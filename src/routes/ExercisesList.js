import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import ExercisesCategories from '../components/ExercisesCategories';
import SearchExercises from '../components/SearchExercises';
import Loading from '../components/Loading';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const ExercisesList = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
    const [exerciseList, setExerciseList] = useState([]);
    let params = useParams();

    
    const getExercises = async (bodyPart) => {
     
        const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        const exercises = data;
        console.log(exercises);
        setExerciseList(exercises);
      
       
    }

    console.log(params.type)
    
    useEffect(() => {
           getExercises(params.type);
    }, [params.type]);


  return (
    <section className='hero'>
    {
    loading ?
    <Loading loading={loading}/>
    :
    
    <>
    <SearchExercises />
    <ExercisesCategories />
    <div className="cousine-wrapper">
            {exerciseList.map((exercise) => {
              return (
                <Link className='recipe-card cousine' to={'/exercise/' + exercise.id} key={exercise.id}>
                  <p>{exercise.name}</p>
                  <img src={exercise.gifUrl} alt={exercise.name} />
                </Link>
              );
            })}
          </div></>
    }
    </section>
  )
}

export default ExercisesList