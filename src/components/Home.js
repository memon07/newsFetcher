import React from 'react'
import { connect } from 'react-redux'
import {Button } from 'antd'

import history from '../history'
import News from '../components/News'
import '../css/Home.css'

function Home(props) {


    // if(props.user === null || props.user === 'undefined'){
    //     return <>
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-12 pt-4 text-center">
    //                     <h3 className="text-center">Please Sign to access our module</h3>
    //                     <Button onClick={() => {history.push("/")}}>
    //                         Sign in</Button>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="mb-1 mt-3">Welcome ,</h3>
                    <h5 className="home-username">
                    </h5>
                </div>

                <News/>


            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.user)
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Home)