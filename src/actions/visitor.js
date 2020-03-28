import * as actionTypes from '../actionTypes/visitor'

import { errorMsg } from '../components/message'

export function postVisitor(data) {
  return (dispatch) => {
    try {
      let dispatchData = {
            "username":data.username,
            "email":data.email,
            "visitType":data.visitType,
            "ptv":data.ptv,
            "dateofentry": data.dateofentry,
            "toe":data.toe,
            "toexit":data.toexit
      }
        dispatch(actionTypes.postVisitor(dispatchData))
    }catch(e){
      errorMsg(e)
    }
  }
}
