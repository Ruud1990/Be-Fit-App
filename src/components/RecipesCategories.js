import React from 'react';
import {MdOutlineDinnerDining, MdFoodBank} from 'react-icons/md';
import {FaIceCream} from 'react-icons/fa';
import {TbSoup} from 'react-icons/tb';
import {NavLink} from 'react-router-dom';



const RecipesCategories = () => {
  return (
    <div className='recipes-categories-wrapper'>
        <NavLink className='category-link' to={'/cousine/soup'}>
            <TbSoup className='category-icon'/>
            <h4>Soup</h4>
        </NavLink>
        <NavLink className='category-link' to={'/cousine/dessert'}>
            <FaIceCream className='category-icon'/>
            <h4>Dessert</h4>
        </NavLink>
        <NavLink className='category-link' to={'/cousine/dinner'}>
            <MdOutlineDinnerDining className='category-icon'/>
            <h4>Dinner</h4>
        </NavLink>
        <NavLink className='category-link' to={'/cousine/breakfast'}>
            <MdFoodBank className='category-icon'/>
            <h4>Breakfast</h4>
        </NavLink>
    </div>
  )
}

export default RecipesCategories