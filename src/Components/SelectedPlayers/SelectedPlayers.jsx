import React from 'react';

const SelectedPlayers = ({purchasePlayers,removePlayer}) => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            
            {
                purchasePlayers.map(player=>
                    
  <div className=" card  card-sm shadow-sm flex flex-row items-center p-[30px] gap-[300px] justify-between">
    <div className='flex gap-[10px]'>
    <img className='w-[70px] h-[50px]' src={player.playerImage} alt="" />
    <div>
    <h2 className="card-title">{player.playerName}</h2>
    <p>Price:$ {player.playerPrice}</p>
    </div>
    </div>
    <div className="justify-end card-actions">
      <button onClick={()=>removePlayer(player)} className="btn btn-primary">Remove</button>
    </div>
  </div>

                )
            }
        </div>
    );
};

export default SelectedPlayers;