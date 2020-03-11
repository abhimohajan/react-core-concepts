import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const nayok = ['Razzak', 'Sabana', 'Salman', 'Riyaz','Bappi'];
const job = "Actress";
const product = [
  {name:"PhotoShop", price:"$9.99"},
  {name:"Illustrator", price:"$20.99"},
  {name:"PDF Reader", price:"$7.66"},
  {name:"DreamWaver", price:"$50.99"},
  {name:"InDesign", price:"$20.99"},
  {name:"After Effect", price:"$30.99"},
]
// const product2 =[
//   {name:"DreamWaver", price:"$50.99"},
//   {name:"InDesign", price:"$20.99"},
//   {name:"After Effect", price:"$30.99"},
// ]

const friendsName =[
  {name:'Tiklu Chowdhury', age:'30'},
  {name:'Regan Chowdhury', age:'31'},
  {name:'Kaiser Ahmed', age:'29'},
  {name:'Shuvo Chowdhury', age:'28'},
  {name:'Liton Mitra', age:'32'},
  {name:'Joy Chowdhury', age:'25'},
]
  return (
    <div className="App">
      <header className="App-header">
      <p>I Am In React Person</p>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          friendsName.map(friends => <li>Friends Name: {friends.name} Age: {friends.age}</li>)
        }
        {
          nayok.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      {
        product.map(product => <Products name={product.name} price={product.price}></Products>)
      }
      {/* <Products></Products> */}
      {/* <Products name={product[1].name} price={product[1].price}></Products>
      <Products name={product[2].name} price={product[2].price}></Products> */}

      {/* <Product2 product2={product2[0]}></Product2>
      <Product2 product2={product2[1]}></Product2>
      <Product2 product2={product2[2]}></Product2> */}


      <Person name="Manum" job="Javascript Learner"></Person>
      <Person name="Kabir" job="Html Learner"></Person>
      <Person name="Forhad" job="CSS Learner"></Person>
      <Person name={nayok[0]} job={job}></Person>
      <Person name={nayok[1]} job={job}></Person>
      <Person name={nayok[2]} job={job}></Person>
      <Person name={nayok[3]} job={job}></Person>
      </header>
    </div>
  );
  
}
function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h1>Dynamic Data: {users.length}</h1>
      {
        console.log(users)
      }
      {
        users.map(users => <li>{users.id} {users.email}</li>)
      }
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0)
  const eventHandler = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onMouseDown={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Products(Props){
const productStyle = {
 border:'2px solid gray',
 borderRadius:'10px',
 backgroundColor:'lightgray',
 margin:'10px',
 padding:'10px',
 height:'200px',
 width:'200px' ,
 float:'left'

}
return(
  <div style={productStyle}>
    <h2>{Props.name}</h2>
    <h5>{Props.price}</h5>
    <button>Buy Now</button>
  </div>
)
}
// function Product2(props){
//   const productStyle2 = {
//    border:'2px solid gray',
//    borderRadius:'10px',
//    backgroundColor:'lightgray',
//    margin:'10px',
//    padding:'10px',
//    height:'200px',
//    width:'200px' ,
//    float:'left'
  
//   }
//   return(
//     <div style={productStyle2}>
//       <h2>{props.product2.name}</h2>
//       <h5>{props.product2.price}</h5>
//       <button>Buy Now</button>
//     </div>
//   )
//   }


function Person(Props){
 const personStyle = {
   border:'5px solid green',
   margin:'10px',
   width: '500px',
   backgroundColor:'purple',
   borderRadius:'10px'
   
 }
  return(
    <div style={personStyle}>
      <h1>Name: {Props.name} </h1>
  <h3 style={{color:'cyan'}}>Profession: {Props.job}</h3>
     </div>
  
  );
  
}

export default App;
