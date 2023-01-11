import React, {useState, useEffect}  from 'react';
import {Link, useParams} from 'react-router-dom';
import RecipesCategories from '../components/RecipesCategories';
import SearchRecipes from '../components/SearchRecipes';

const SearchedRecipes = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPES_KEY}&query=${name}`);
        const recipes = await data.json();
        console.log(recipes.results);
        setSearchedRecipes(recipes.results);
    }


    useEffect(() => {
        getSearched(params.search);
    }, [params.search])
    return (
        <section className='hero'>
        <SearchRecipes />
        <RecipesCategories />
        <div className="cousine-wrapper">
          {searchedRecipes.map((item) => {
            return (
              <Link className='recipe-card cousine' to={'/recipe/' + item.id} key={item.id}>
                <p>{item.title}</p>
                <img src={item.image} alt={item.title} />
              </Link>
            )
          })}
        </div>
        </section>
      )
}

export default SearchedRecipes