import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../components/Loading';
import {FaCopy} from 'react-icons/fa';
import { FavoriteContext, useGlobalContext } from '../favoriteContext';
import Modal from '../components/Favorites';

const Recipe = () => {
  const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const { addToFavorites } = useGlobalContext(FavoriteContext);

    let params = useParams();

    const fetchDetails = async () => {
        setLoading(true);
        try { 
          const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_RECIPES_KEY}`);
          const detailData = await data.json();
          setDetails(detailData);
          setLoading(false)
          console.log(detailData)
      }
catch (error) {
  console.log(error)
      setLoading(false)
}
  }



    useEffect(() => {
        fetchDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.name])

  return (
    
  <section className='hero'>
  {
    loading ?
  <Loading loading={loading}/>

  :
      
      <div className="recipe-container">
      <Modal setDetails={setDetails}/>
        <div className="recipe-container-info">
          <h2>{details.title}</h2>
          <button className='btn' onClick={() => addToFavorites(details)}>Add to favorites</button>
          <div className="recipe-image-container">
          <img src={details.image} alt={details.title} className='recipe-detail-img'/>
          </div>
        </div>
        <div className="recipe-container-info">
          <div className="recipe-container-btn">
            <button className={activeTab === 'instructions' ? 'btn-active' : 'btn'} onClick={() => setActiveTab('instructions')}>Instructions</button>
            <button className={activeTab === 'ingredients' ? 'btn-active' : 'btn'} onClick={() => setActiveTab('ingredients')}>Ingredients</button>
          </div>
          <div>
            {activeTab === 'instructions' && (
              <article className='recipe-container-description'>
                <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
              </article>
            )}
            {activeTab === 'ingredients' && (
              <ul>
                {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}
                <button className='copy-btn' onClick={() => {
         navigator.clipboard.writeText(ingredient.original).then(() => alert('copied'))}}><FaCopy className='copy-icon'/></button></li>
            ))}
               </ul>
            )}
          </div>
        </div>
      </div>
  }
  </section>
  )
}

export default Recipe