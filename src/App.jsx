
import './App.css'
import navImg from './assets/logo.png'
import dollerImg from './assets/dollar-1.png'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import { Suspense } from 'react'
import { useState } from 'react'
  import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

const fetchPlayers=async()=>{
    const res=await fetch('/players.json');
    return  res.json();
  }
  const playerPromise=fetchPlayers();
function App() {
 
  
  const [toggle,setToggle]= useState(true);
  const [availableBalance,setAvailableBalance]=useState(60000000000);
  const [purchasePlayers,setPurchasePlayers]=useState([]);

  const listPlayer=(prop)=>{
    const newAr=[...purchasePlayers,prop];
    setPurchasePlayers(newAr);
    
  }
  const removePlayer=(prop)=>{
    console.log('ddd');
    setAvailableBalance(availableBalance+prop.playerPrice)
    const newAr=purchasePlayers.filter(player=>prop!=player);
    setPurchasePlayers(newAr);
    
  }
  // console.log(purchasePlayers);
  return (
    <div>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className=" text-xl">
            <img className='w-[60px] h-[60px]' src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center">
          <span className='mr-1'>{availableBalance}</span>
          <span className='mr-1'>Coin</span>
          <img src={dollerImg} alt="" />
        </div>
      </div>
      <div className='flex justify-between items-center max-w-[1200px] mx-auto mb-5'>
        <h1 className='font-bold'>{toggle?"Available Players":`SelectedPlayers(${purchasePlayers.length}/6)`}</h1>
        <div>
          <button onClick={()=>setToggle(true)} className={`${toggle===true?"bg-lime-400":"bg-black"} p-3 border-1 border-gray-400 border-r-0 rounded-l-2xl`}>Available</button>
          <button onClick={()=>setToggle(false)} className={`${toggle===false?"bg-lime-400":"bg-black"} p-3 border-1 border-gray-400 border-l-0 rounded-r-2xl`}>Selected({purchasePlayers.length})</button>
        </div>
      </div>
      {
        toggle===true?<Suspense fallback={<span class="loading loading-infinity loading-xl"></span>}>
        <AvailablePlayers listPlayer={listPlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
      </Suspense>:<SelectedPlayers removePlayer={removePlayer} purchasePlayers={purchasePlayers}></SelectedPlayers>
      }
      
      <ToastContainer />
      
    </div>
  )
}

export default App
