import React from 'react'

class NavBar extends React.Component {

    render() {
        return (

            <nav id="nav" className={classes.mainNav}>
                <div className={classes.leftNav} >
                    {/* <Link to='/'> <a href="https://fontmeme.com/twitch-logo-font/"><img src="https://fontmeme.com/permalink/200429/c5c269ee240a3104c60edd9054042334.png" alt="twitch-logo-font" border="0"/></a></Link> */}
                    <Link to='/'> <img src="https://i.ibb.co/LRxhSsJ/twitchwhite.png" /> </Link>
                    <div className={classes.line}></div>
                    <Link to='/directory'>
                        <div className={classes.browseContainer}>
                            <span className={classes.browse}> Browse </span>
                        </div>
                    </Link>

                </div>
                <span onClick={() => toggle(false)}> . </span>
                <div className={classes.rightNav}>
                    <SessionControlsContainer />
                </div>
            </nav>
        )
    }

}


export default NavBar