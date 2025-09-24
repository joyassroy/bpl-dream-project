import React from 'react';
import { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playerPromise,setAvailableBalance,listPlayer,purchasePlayers , availableBalance}) => {
    const playerData = use(playerPromise);
    console.log(playerData);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-5 max-sm:grid-cols-1'>
            {
                playerData.map(player => <PlayerCard purchasePlayers={purchasePlayers} listPlayer={listPlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
            }

        </div>
    );
};

export default AvailablePlayers;