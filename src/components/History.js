import React from 'react'
import { connect } from 'react-redux'

import '../css/History.css'

function History(props) {

console.log(props.visitor.arr)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="mb-1 mt-3 pb-4">Visitor log</h3>
                </div>
                <div className="col-12">
                    {
                        props.visitor.arr.map(item => (
                            <div className="history_cards">
                                <h3>{item.username}</h3>
                                <h5>{item.email}</h5>
                                <h3>type of visit : <span style={{fontWeight:600}}>{item.visitType}</span></h3>
                                <h4>{item.dateofentry}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        user : state.user,
        visitor : state.visitor
    }
}

export default connect(mapStateToProps)(History)