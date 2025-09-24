import React from 'react';

import useImg from '../../assets/user-1.png'
import { useState } from 'react';
import { toast } from 'react-toastify';
const PlayerCard = ({player,setAvailableBalance,availableBalance,listPlayer}) => {
    const [isSelected,setSelected]= useState(false);
    return (
        <div className="card bg-base-100 w-96 shadow-sm p-4">
                            <figure>
                                <img
                                    src={player.playerImage}
                                    alt="pic of player" />
                            </figure>
                            <div className="mt-4">
                                <div className='flex'>
                                    <img src={useImg} alt="" /> <h2 className="card-title ml-2">{player.playerName}</h2>
                                </div>
        
                                <div className='flex justify-between items-center border-b-2 pb-2'>
                                    <h2>{player.playerCountry}</h2>
                                    <button className='btn'>{player.playerRole}</button>
                                </div>
        
                                <div className='flex justify-between font-extrabold mb-4'>
                                    <span>Rating</span>
                                    <span>{player.rating}</span>
                                </div>
        
        
        
        
        
                                <div className="card-actions  mt-3 justify-between items-center">
                                    <span className='font-bold'>Price: ${player.playerPrice}</span>
                                    <button disabled={isSelected} onClick={()=>{
                                        if(availableBalance<player.playerPrice){toast("Haha u don't have enough coin");return;}
                                            
                                    
                                        setSelected(!isSelected);
                                        setAvailableBalance(availableBalance-player.playerPrice);
                                        listPlayer(player);
                                        }} className="btn">{isSelected?"Selected":"Choose Player"}</button>
                                </div>
                            </div>
                        </div>
    );
};

export default PlayerCard;