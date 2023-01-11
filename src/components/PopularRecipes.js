import React, {useEffect, useState} from 'react'
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';


const PopularRecipes = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
        const check = localStorage.getItem('popular');

        if(check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPES_KEY}&number=7`);
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }
    }




  return (
      <div className='recipes-wrapper'> 
            <h3>popular recipes</h3>
            <Splide
            options={{
                perPage: 4,
                breakpoints: {
                    940: {
                        perPage: 3,
                    },
                    700: {
                        perPage: 2,
                        gap: '1rem'
                    },
                },
                arrows: false,
                drag: 'free',
                gap: '3rem',
            }}>
    {popular.map((recipe) => {
        return (
        
<SplideSlide key={recipe.id}>
    <Link className='recipe-card' to={'/recipe/' + recipe.id}>
        <p>{recipe.title}</p>
        <img src={recipe.image} alt={recipe.title} className='recipe-img'></img>
    </Link>
</SplideSlide>

        );
    } )}</Splide>
    </div>
  )
}

export default PopularRecipes;