import './App.css'
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';
import { useState } from 'react';

 const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack,setStack]=useState([])

  const handleAddToStack =(ingredient)=>{
    setStack([...stack,ingredient])


  }

  const handleRemoveStack =(ingredient)=>{
    const newStackArr=stack.filter((stackIngredients)=>{

     return stackIngredients.name !==ingredient.name
  })
    setStack(newStackArr)

  }


  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>

        <IngredientList
         availableIngredients={availableIngredients}
         handleAddToStack={handleAddToStack}
         />
        <BurgerStack
         stack={stack}
         handleRemoveStack={handleRemoveStack}
         />
      </section>
    </main>
  );
};

export default App;

