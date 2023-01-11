
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import RecipesListHome from './routes/RecipesListHome';
import RecipesListCousine from './routes/RecipesListCousine';
import SearchedRecipes from './components/SearchedRecipes';
import Recipe from './routes/Recipe';
import ExercisesHome from './routes/ExercisesHome';
import ExercisesList from './routes/ExercisesList';
import SearchedExercises from './components/SearchedExercises';
import ExerciseDetail from './components/ExerciseDetail';
import BmrCalculator from './routes/BmrCalculator';
import GroceryList from './routes/GroceryList';
import Footer from './components/Footer';

 
import './styles.css';

const App = () => {

  return (
    
      <>
        
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/groceryList' element={<GroceryList />} />
        <Route path='/exercises' element={<ExercisesHome />} />
        <Route path='/exercises/:type' element={<ExercisesList />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
        <Route path='/searchedExercises/:search' element={<SearchedExercises />} />
        <Route path='/bmr' element={<BmrCalculator />} />
        <Route path='/recipes' element={<RecipesListHome />} />
        <Route path='/cousine/:type' element={<RecipesListCousine />} />
        <Route path='/searched/:search' element={<SearchedRecipes />} />
        <Route path='/recipe/:name' element={<Recipe />} />
      </Routes>
      <Footer />
  </>
    
  );
}

export default App;
