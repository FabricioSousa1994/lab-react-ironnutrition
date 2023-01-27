import { useState } from 'react';
function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [serving, setServing] = useState(0);

  function handleNameInput(event) {
    setName(event.target.value);
  }
  function handleImageInput(event) {
    setImage(event.target.value);
  }
  function handleCaloriesInput(event) {
    setCalories(event.target.value);
  }
  function handleServingInput(event) {
    setServing(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: serving,
    };

    props.addFood(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServing(0);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label for="name">Name</label>
        <input onChange={handleNameInput} type="text" id="title" value={name} />

        <label for="image">Image</label>
        <input
          onChange={handleImageInput}
          type="text"
          id="image"
          value={image}
        />

        <label for="calories">Calories</label>
        <input
          onChange={handleCaloriesInput}
          type="number"
          id="calories"
          value={calories}
        />

        <label for="serving">Serving</label>
        <input
          onChange={handleServingInput}
          type="text"
          id="serving"
          value={serving}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;

