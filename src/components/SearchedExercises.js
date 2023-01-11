import React, {useState, useEffect}  from 'react';
import {Link, useParams} from 'react-router-dom';
import ExercisesCategories from '../components/ExercisesCategories';
import SearchExercises from '../components/SearchExercises';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchedExercises = () => {
    const [searchedExercises, setSearchedExercises] = useState([]);
    let params = useParams();

    const getSearched = async (input) => {
        const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/name/${input}`, exerciseOptions);
        const exercisesInfo = data;
        console.log(exercisesInfo);
        setSearchedExercises(exercisesInfo);
    }


    useEffect(() => {
        getSearched(params.search);
    }, [params.search])
    return (
        <section className='hero'>
        <SearchExercises />
        <ExercisesCategories />
        <div className="cousine-wrapper">
          {searchedExercises.map((item) => {
            return (
              <Link className='recipe-card cousine' to={'/exercise/' + item.id} key={item.id}>
                <p>{item.name}</p>
                <img src={item.gifUrl} alt={item.name} />
              </Link>
            )
          })}
        </div>
        </section>
      )
}

export default SearchedExercises