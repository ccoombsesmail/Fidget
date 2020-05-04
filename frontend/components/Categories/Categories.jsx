import React from 'react'
import classes from './Categories.module.css'
import img from '../twitchwhite.png'


class Categories extends React.Component {
    constructor(props){
        super(props)

        this.categories = [ 
            ['League of Legends', "https://i.ibb.co/sQN82r1/League-of-Legends-188x250.jpg"], 
            ['Valorant', "https://i.ibb.co/X7332MS/VALORANT.jpg"], 
            ['Just Chatting', "https://i.ibb.co/3YCt6C2/Just-Chatting-188x250.jpg"], 
            ['Teamfighting Tactics', "https://i.ibb.co/Zg0H6mH/Teamfight-Tactics-188x250.jpg"], 
            ["Counter-Strike", "https://i.ibb.co/28vTh3v/csgosmaller.jpg"],
            ["Hearthstone", "https://i.ibb.co/3vq5916/Hearthstone-188x250.jpg"],
            ["Music", "https://i.ibb.co/nPNwM3g/twitchmusic.jpg"]
        ]
    }


    render() {

        return (

            <div className = {classes.categoriesWrapper}>

                {
                     this.categories.map((category, idx) => {
                         return <div key={idx} className={classes.categoryItemWrapper} >
                            <div  className = {classes.categoryItem}>    
                           <img className = {classes.categoryImg} src={category[1]}/>  
                            <h5> {category[0]} </h5>   
                        </div>
                        </div>
                    })
                }


            </div>

        )

    }

}




export default Categories