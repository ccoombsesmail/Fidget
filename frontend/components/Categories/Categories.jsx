import React from 'react'
import { connect } from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { clearVods } from '../../actions/vod_actions'
import { requestCategories } from '../../actions/category_actions'
import classes from './Categories.module.css'

class Categories extends React.Component {
    constructor(props){
        super(props)
        // this.categories = returnCategoryInfo()
    }

    componentDidMount() {
        this.props.requestCategories()
    }

    componentWillUnmount() {
        this.props.clearVods()
    }

   
    render() {
        console.log(this.props.categories)

        return (
            <div className = {classes.categoriesWrapper}>
                {
                     this.props.categories.map((category, idx) => {
                         let key = category.id || idx
                         return <Link key={key} to={{ pathname: `/directory/game/${category.name}`, state: { imgUrl: category.imgUrl, description: category.description }}} > 
                                <div className={classes.categoryItemWrapper} >
                                    <div  className = {classes.categoryItem}>    
                                        <img className = {classes.categoryImg} src={category.imgUrl}/>  
                                        <h5> {category.name} </h5>   
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

const mSTP = (state) => {
    return {
        categories: Object.values(state.entities.categories)
    }
}

const mDTP = (dispatch) => {
    return {
        clearVods: () => dispatch(clearVods()),
        requestCategories: () => dispatch(requestCategories()),
    }
}

export default withRouter(connect(mSTP, mDTP)(Categories))


