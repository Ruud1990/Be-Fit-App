import React from 'react';
import { useGlobalContext } from '../favoriteContext';
import { FaTimes, FaTrash } from 'react-icons/fa';
import {Link} from 'react-router-dom';


const Modal = () => {
  const { isModalOpen, closeModal, favorites, removeFavorite, noDuplicates } = useGlobalContext();
  console.log(favorites);


    // const uniqueIds = [];

    // const noDuplicates  = favorites.filter(details => {
    //   const isDuplicate = uniqueIds.includes(details.id)

    //   if(!isDuplicate) {
    //     uniqueIds.push(details.id);
    //     return true
    //   }
    //   return false;
    // })

  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>Favourites List</h3>
          {noDuplicates.map((details, index) => (
            <div className='favorite-item' key={index}>
       <img className='favorite-img'src={details.image} alt=''></img>
       <Link to={'/recipe/' + details.id} onClick={closeModal}>
               <h4>{details.name}</h4>
       </Link> 
                <button className='btn btn-delete-fav' onClick={() => removeFavorite(details.id)}><FaTrash></FaTrash></button>
            </div>
        ))}
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;