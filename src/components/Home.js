import React from 'react'
import { connect } from 'react-redux'
import {Button } from 'antd'

import history from '../history'
import News from '../components/News'
import '../css/Home.css'

function Home(props) {

console.log(props.user.payload.username)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="mb-1 mt-3">Welcome ,</h3>
                    <h4 className="home-username">
                        {props.user ? props.user.payload.username : ''}
                    </h4>
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