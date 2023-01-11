import React from 'react'
import SearchExercises from '../components/SearchExercises';
import ExercisesCategories from '../components/ExercisesCategories';

const ExercisesHome = () => {
  return (
      <section className='hero'>
        <SearchExercises />
        <ExercisesCategories />
      </section> 
  )
}

export default ExercisesHome