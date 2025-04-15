import List from './List.jsx'

function App() {

  const fruits = [{id: 1, name:"apple", calories: 91}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 111}, 
                  {id: 4, name: "coconut", calories: 159}];

  
  const vegetables = [{id: 1, name:"potatoes", calories: 101}, 
                  {id: 2, name: "celery", calories: 76}, 
                  {id: 3, name: "broccoli", calories: 11}, 
                  {id: 4, name: "lettuce", calories: 50}];

  // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100); Filters fruit over 100 calories

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); Sorting Fruits
  // fruits.sort((a, b) => a.calories - b.calories) Sorting by Calories


  return(
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  );  
}

export default App
