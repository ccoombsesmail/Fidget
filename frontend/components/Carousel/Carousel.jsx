import React from 'react'
import classes from './Carousel.module.css'



class Carousel extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            nextCount: 0,
        }
        this.containerRef = React.createRef()
        this.nextRef = React.createRef()
        this.prevRef = React.createRef()
        this.crslPrevImg = this.crslPrevImg.bind(this)

    }

    componentDidMount() {
        this.crslImgs = document.querySelectorAll('.Carousel-module__carouselImg--1hSYo');
        console.log(this.crslImgs)
        this.crslImgsLength = this.crslImgs.length
        this.prevRef.current.addEventListener('click', this.crslPrevImg);
        // this.nextRef.current.addEventListener('click', crslNextImg);
    }

    crslPrevImg() {
        this.setState({nextCount: this.state.nextCount -1}, 
            () => {
                if (this.state.nextCount < -1) {
                    this.setState({ nextCount: this.crslImgsLength - 2 });
                }
                console.log(this.state.nextCount)
                this.containerRef.current.style.transform = `translateX(${this.state.nextCount * 50 * -1}vw)`;
                if (this.state.nextCount > -1) this.crslImgs[this.state.nextCount].style.transform = "scale(1)";
                this.crslImgs[this.state.nextCount + 1].style.transform = "scale(1.2)";
                if (this.state.nextCount < this.crslImgsLength - 1) this.crslImgs[this.state.nextCount + 2].style.transform = "scale(1)";
            });
   
    }
    // crslNextImg() {
    //     nextCount += 1;
    //     if (nextCount > crslImgsLength - 2) {
    //         nextCount = -1;
    //     }

    //     crslAllImgs.style.transform = `translateX(${nextCount * 50 * -1}vw)`;
    //     if (nextCount > -1) crslImgs[nextCount].style.transform = "scale(1)";
    //     crslImgs[nextCount + 1].style.transform = "scale(1.2)";
    //     if (nextCount < crslImgsLength - 1) crslImgs[nextCount + 2].style.transform = "scale(1)";
    // }



    render() {
        
        return (
                <div className={classes.carouselWrapper}>
                    <div className={classes.imgsContainer}>
                        <div className={classes.imgContainer}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Pexels-photo-572937.jpg" alt="" className={classes.carouselImg} />
                        </div>
                        <div className={classes.imgContainer}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Pexels-photo-572937.jpg" alt="" className={classes.carouselImg} />
                        </div>
                        <div className={classes.imgContainer}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Pexels-photo-572937.jpg" alt="" className={classes.carouselImg} />
                        </div>
                        <div className={classes.imgContainer}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Pexels-photo-572937.jpg" alt="" className={classes.carouselImg} />
                        </div>
                        <div className={classes.imgContainer}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Pexels-photo-572937.jpg" alt="" className={classes.carouselImg} />
                        </div>
                    </div>
                    <div>
                        <button ref = {this.nextRef}>
                            Next
                        </button>
                        <button ref = {this.prevRef}>
                            Prev
                        </button>
                    </div>
                </div>
        )
    }

}



export default Carousel