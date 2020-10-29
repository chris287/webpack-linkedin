import React from 'react'

export default class WinnerImage extends React.Component{
    render(){
        const players = [{name: "Jerry", img: "https://lambdazen.roshal.xyz/images/1.jpg"}, {name: "Jane", img:"https://lambdazen.roshal.xyz/images/2.jpg"}, {name: "Jack", img:"https://lambdazen.roshal.xyz/images/1.jpg"}]
        return(
            <div className="winnerImage">
              <img src="https://s.conceptjs.com/tni/LinkedInTemplate.png" alt="Linkedin template"/>
              <div className="winnerImageProfileContainer">
                {players.map(value=>{
                    return(
                        <div>
                            <img src={value.img} alt={value.name+"'s image"} height="90px" style={{borderRadius:"50px"}}/>
                            <div>{value.name}</div>
                        </div>
                    )
                })}
              </div>
              <div className="winnerDisplayContainer">
                <div>Winner</div>
                <img src={players[0].img} alt={players[0].name + "'s image"} height="90px" style={{borderRadius: "50px", position: "absolute", top: "3px", left: "50px"}}/>
                <div>{players[0].name}</div>
              </div>
            </div>
        )
    }
}