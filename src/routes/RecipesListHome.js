import React from 'react';
import KetoRecipes from '../components/KetoRecipes';
import PopularRecipes from '../components/PopularRecipes';
import RecipesCategories from '../components/RecipesCategories';
import SearchRecipes from '../components/SearchRecipes';

const RecipesListHome = () => {
  return (
    <section className='hero recipes-hero'>
      <SearchRecipes />
      <RecipesCategories />
      <PopularRecipes to='/recipes'/>
      <KetoRecipes to='/recipes'/>
    </section>
  )
}

export default RecipesListHome