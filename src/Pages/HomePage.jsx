import { Component } from 'react';
import coverImg from '../Static/img/community-building-977x720.png';
import coverImgLogged from '../Static/img/grocery-shopping-list.png';
import { Link } from 'react-router-dom';
function HomePage(){
    return(
        <div style={{overflow: "hidden", position : "relative"}}>
            <img src = {coverImg} alt ="cover-img" style={{width:"1900px", opacity : 0.25, height: "110vh"}}/>
            <div className='position-absolute w-100 h-100 
                start-50 top-50 translate-middle d-flex flex-column justify-content-center align-items-center' 
                style={{backgroundColor : "rgba(254, 242, 242, 0.5)"}}>
                    <span className='display-6 text-uppercase text-center fw-bold mb-5' 
                        style={{color: "#D1A080"}}>
                        Welcome to Know Your Neighborhood
                    </span>
                    <Link to = "/registration" className='btn btn-outline-kyn border rounded-3 py-3 px-5'>
                        Get Started
                    </Link>
            </div>
        </div>
    );
}

class Home extends Component{

    render(){
        if (this.props.isAuth === false){
            return(
                <HomePage/>
            );
        }else{
            return(
                <div style={{overflow: "hidden", position : "relative"}}>
                    <img src = {coverImgLogged} alt ="cover-img" style={{width:"1900px", opacity : 0.5, height: "110vh"}}/>
                    <div className='position-absolute w-100 h-100 
                        start-50 top-50 translate-middle d-flex flex-column justify-content-center align-items-center' 
                        style={{backgroundColor : "rgba(255, 255, 255, 0.8)"}}>
                            <span className='display-6 text-uppercase text-center fw-bold mb-5' 
                                style={{color: "#D1A080"}}>
                                Welcome to Know Your Neighborhood, {this.props.authUser.firstName}
                            </span>
                            <Link 
                                className='btn btn-outline-kyn border rounded-3 py-3 px-5'
                                style={{fontSize: "1.33rem"}}
                                to="/stores"
                            >
                                View Stores
                            </Link>
                    </div>
                </div>
            );
        }
    }
}

export default Home;