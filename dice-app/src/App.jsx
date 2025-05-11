import React ,{useState} from "react";
import "./App.css";

export default function App(){

// desturcturing method [] ES6:

  const [name1 , setName1] = useState("");
  const [name2 , setName2 ] = useState("");
  const [dice1 , setDice1] = useState(1);
  const [dice2 , setDice2] = useState (1);
  const [message , setMessage] = useState();

  // condition abhi false hai jab user data dedega player 1, 2 k liye jab true ho jayegi condition, or ye pg close hoky dosra ajayega.
  const [ showGame , setShowGame ] = useState(false);
  
  function handleStart(){
    if (name1 !== "" && name2 !== "") {

// value true hojayegi tu dosra pg show hojayega (now, dice pg show )
      setShowGame(true);
    }
    
  else{
      alert('Please Enter Both Names!!'); 
  }
  }
  
// jb user dice roll k btn pr click karega tab ye pg show hoga
  function handleRoll(){
      const n1 = Math.floor(Math.random() * 6) + 1; //if dice mai 0 value generate ki tu +1 (o ki value ko 1 krky show krwayega or dice mai 6 value hoti hai isliye *6 krwaya hai)
      const n2 = Math.floor(Math.random() * 6) + 1;
      setDice1(n1);
      setDice2(n2);

  if (n1 < n2) {
      setMessage(`Congratulations!! ${name1} You Wins 🏆`)
  }
  else if (n2 < n1){
    setMessage(`Congratulations!! ${name2} You Wins 🏆`)
  }
  else {       
    setMessage("It's a draw 🤝");     
  } 
    }
function restart(){
  window.location.href="";
}


// html code
  return (
    <div className="container">
      {/* use ternary operator */}
      {!showGame ? (
        <>
    <h2>Enter Player Names</h2>
{/*onChange={()}, ()enevt hai ye ,jab bhi input mai changes hoga tu ye arrow function run hoga & ye occure hojay7eg, (e) jo changes hongi wo (e) k parameter mai store hoga or (e) input ko => e => target => input =>value   */}
    <input type="text"  placeholder="Player 1" onChange={(e)=> setName1 
    (e.target.value)}/>
    <input type="text"  placeholder="Playe 2" onChange={(e)=> setName2 
    (e.target.value)}/>

    <button onClick={handleStart}>Start Game</button>
    </>
    // empty block element
    ) : (
   
      <>
      <div className="box">
    <h1>Dice Game</h1>
    <h3>{name1} <span>Vs</span> {name2}</h3>

    <div className="dice-box">
      <div className="dice-value">{dice1}</div>
      <div className="dice-value">{dice2}</div>
    </div>

<button onClick={handleRoll}>Roll Dice</button>
<button onClick={restart}>Restart</button>

{/* win useer msg */}
<p>{message}</p>
</div>
</>
    )}
    </div>
  );
}
