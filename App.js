// import logo from './logo.svg';
// import './App.css';
// import Header from './components/header';
// import Footer from './components/footer'
// import Router from './config/router';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <><Header /></> */}

//         <div><Router /></div>
        

//         {/* <div><Footer /></div> */}

//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';

import { createContext,useReducer } from 'react';
import Router from './config/router';

// create global context object and export
export const ShopContext = createContext()

// create global cartReducer
const cartReducer = (cart,action)=>{
  switch(action.type){
    case "ADD TO CART": return [...cart,action.item]
    case "REMOVE ITEM": return cart.filter(item=>item.id!==action.item.id)
    default: return cart
  }
}

function App() {

  const [cart,dispatch] = useReducer(cartReducer,[])

  // event handlers
  const addItemToCart = (product)=>{
    alert("Success! Item added to Cart. Please view your Cart")
    // dispatching action object
    dispatch({type:"ADD TO CART",item:product})
  }

  const removeItemFromCart = (product)=>{
    // dispatching action object
    dispatch ({type:"REMOVE ITEM",item:product})
  }

  return (
    <div>
      <ShopContext.Provider value={{cart,addItemToCart,removeItemFromCart}} >
        <Router/>
      </ShopContext.Provider>
    </div>
  );
}

export default App;