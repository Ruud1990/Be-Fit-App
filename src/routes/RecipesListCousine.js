import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import RecipesCategories from '../components/RecipesCategories';
import SearchRecipes from '../components/SearchRecipes';
import Loading from '../components/Loading';


const RecipesListCousine = () => {
  const [loading, setLoading] = useState(false);
    const [cousine, setCousine] = useState([]);
    let params = useParams();

    
    const getCousine = async (name) => {
      setLoading(true)
      try {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPES_KEY}&type=${name}&number=12`);
        const recipes = await data.json();
        console.log(recipes.results);
        setCousine(recipes.results);
        setLoading(false);
       }
       catch (error) {
          console.log(error)
          setLoading(false)
      }
    }


    
    useEffect(() => {
           getCousine(params.type);
    }, [params.type]);


  return (
    <section className='hero'>
    {
    loading ?
    <Loading loading={loading}/>
    :
    
    <>
    <SearchRecipes />
    <RecipesCategories />
    <div className="cousine-wrapper">
            {cousine.map((item) => {
              return (
                <Link className='recipe-card cousine' to={'/recipe/' + item.id} key={item.id}>
                  <p>{item.title}</p>
                  <img src={item.image} alt={item.title} />
                </Link>
              );
            })}
          </div></>
    }
    </section>
  )
}

export default RecipesListCousine