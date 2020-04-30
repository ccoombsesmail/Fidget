import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faSmileBeam, faSmile } from '@fortawesome/free-solid-svg-icons'
import classes from './EmojiMenu.module.css'


class EmojiMenu extends React.Component {
    constructor(props) {
        super(props);

    }




    render() {

        return (
            <>
            {
                this.props.show ? (
            <ul className = {classes.menu}>
                <li>
                
                <FontAwesomeIcon icon={faCircleNotch} />
                </li> 
                
                <li>
                <FontAwesomeIcon icon={faCircleNotch} />
                </li>
                <li>
                    <img  className = {classes.emojiImg} src= "https://i.ibb.co/Km2YDrb/UIHere.png" />
                </li>
            </ul>
            ) : null

        }   
             </>
        )
    }


}


export default EmojiMenu