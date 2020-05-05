import React from 'react'
import classes from './HomePageIndex.module.css'

import Categories from '../Categories/Categories'
import ChannelIndex from '../Channels/ChannelIndex'

class HomePageIndex extends React.Component {

    constructor(props) {
        super(props)
    }




    render() {

        return (

            <div id="indexArea" className={classes.indexWrapper}>
                <h2> Top Channels </h2>
                <hr/>
                <div className={classes.innerContainer}>
                    <ChannelIndex/>
                    <hr/>
                    <h2 className = {classes.categoriesHeader}> <b>Categories</b> You May Like</h2>
                    <Categories />
                </div>
            </div>


        )
    }

}


export default HomePageIndex







