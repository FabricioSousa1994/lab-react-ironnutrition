import foodsData from './foods.json'
import './App.css';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {

  const [foods, setFoods] = useState(foodsData);
  const [filteredFoods, setFilteredFoods] = useState(foodsData)


  function AddFood(newFood) {
    setFilteredFoods(filteredFoods.concat(newFood))
  }


  function handleSearch(keyword) {
    const filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setFilteredFoods(filteredFoods);
  }

  function handleDeleteFood(foodName) {
    const filtered = filteredFoods.filter((food) => {
      return food.name !== foodName
    })
    setFilteredFoods(filtered)
  }

  function deleteFood({foodName}) {
    const filtered = filteredFoods.filter((food) => {
      return food.name !== foodName;
  });
  setFilteredFoods(filtered);
}

  
  return (
    <div className="App">
      FOOD LIST

      <Search handleSearch={handleSearch}/>
       
        
          
      <FoodBox key={filteredFoods.name} food={filteredFoods} handleDeleteFood={handleDeleteFood}/>            
        
        

      <AddFoodForm addFood={AddFood} /> 
              
      
    </div>
  );
}

export default App;
