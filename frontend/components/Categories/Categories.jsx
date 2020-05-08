import React from 'react'
import classes from './Categories.module.css'
import {connect} from 'react-redux'
import {clearVods} from '../../actions/vod_actions'
import {withRouter, Link} from 'react-router-dom'

class Categories extends React.Component {
    constructor(props){
        super(props)

        this.categories = returnCategoryInfo()
        
    }

    componentWillUnmount() {
        this.props.clearVods()
    }

   
    render() {
        
        return (

            <div className = {classes.categoriesWrapper}>

                {
                     this.categories.map((category, idx) => {
                         return <Link key={idx} to={{ pathname: `/directory/game/${category[0]}`, state: { imgUrl: category[1], description: category[2] }}} > 
                                <div className={classes.categoryItemWrapper} >
                                    <div  className = {classes.categoryItem}>    
                                        <img className = {classes.categoryImg} src={category[1]}/>  
                                        <h5> {category[0]} </h5>   
                                     </div>
                                </div> 
                                </Link> 
                    })
                }


            </div>

        )

    }

}




function returnCategoryInfo() {
    return [
        ['League Of Legends', "https://i.ibb.co/sQN82r1/League-of-Legends-188x250.jpg", "League of Legends is a free-to-play competitive MOBA game with a large following in Esports"],
        ['Valorant', "https://i.ibb.co/X7332MS/VALORANT.jpg", "Valorant is an upcoming free-to-play multiplayer first-person shooter developed and published by Riot Games"],
        ['Just Chatting', "https://i.ibb.co/3YCt6C2/Just-Chatting-188x250.jpg", "A place to chill and chat"],
        ['Teamfight Tactics', "https://i.ibb.co/Zg0H6mH/Teamfight-Tactics-188x250.jpg", "Teamfight Tactics is an auto battler game developed and published by Riot Games"],
        ["Counter-Strike", "https://i.ibb.co/28vTh3v/csgosmaller.jpg", "Counter-Strike: Global Offensive is a multiplayer first-person shooter video game developed by Valve and Hidden Path Entertainment"],
        ["Hearthstone", "https://i.ibb.co/3vq5916/Hearthstone-188x250.jpg", "Hearthstone is a free-to-play collectible card game by Blizzard Entertainment set in the Warcraft universe"],
        ["Music", "https://i.ibb.co/nPNwM3g/twitchmusic.jpg", "A place for music creators and listeners"]
    ]

}


const mDTP = dispatch => {

    return {
        clearVods: () => dispatch(clearVods())
    }

}
export default withRouter(connect(null, mDTP)(Categories))


