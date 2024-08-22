import React, { useState } from "react";

const player = ({initialName, symbol, isActive, onChangeName}) => {
    const [playerName, setPlayerName]=useState(initialName)
    const [isEditing, setIsEditing]=useState(false);

    function handleEditClick(){
        setIsEditing(editing=> !editing);
        if(isEditing){
          onChangeName(symbol, playerName)

        }
    }


    function handleChange(e){
        setPlayerName(e.target.value);
    }

    let EditablePlayerName=<span className="player-name">{playerName}</span>;
   

    if(isEditing){
        EditablePlayerName=<input type="text" value={playerName} onChange={handleChange} required/>;
        

    }

  return (
    <li className={isActive?'active':undefined}>
      <span className="player">
        {EditablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
      </span>
    </li>
  );
};

export default player;
