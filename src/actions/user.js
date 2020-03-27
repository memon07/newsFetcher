import * as actionTypes from '../actionTypes/user'

import history from "../history"
import { success ,errorMsg} from '../components/message'

export function postRegister(data) {
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
      console.log('dispatch m dtaa',dispatchData)
        dispatch(actionTypes.postRegister(dispatchData))
        success('Profile has been created !!')
        history.push('/dashboard');

    }catch(e){
      errorMsg(e)
    }
  }
}
