import React, { useContext, useState } from "react";

const FavoriteContext = React.createContext();



const FavoriteProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [favorites, setFavorites] = useState([]);
    


    const openModal = () => {
        setIsModalOpen(true);
      };
      const closeModal = () => {
        setIsModalOpen(false);
      };

    const addToFavorites = (name) => {
      setFavorites((prev) => [...prev, { name: name.title, id: name.id, image: name.image}])

 
    }

    const uniqueIds = [];

    const noDuplicates  = favorites.filter(details => {
      const isDuplicate = uniqueIds.includes(details.id)

      if(!isDuplicate) {
        uniqueIds.push(details.id);
        return true
      }
      return false;
    })

    

    const removeFavorite = (id) => {
      const removeArr = [...favorites].filter(item => item.id !== id)
  
      setFavorites(removeArr)
    };

  
    return (
        <FavoriteContext.Provider value={{ favorites, setFavorites, addToFavorites, openModal, closeModal, isModalOpen, removeFavorite, noDuplicates }}>{children}</FavoriteContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(FavoriteContext);
  };
  
  export { FavoriteContext, FavoriteProvider };