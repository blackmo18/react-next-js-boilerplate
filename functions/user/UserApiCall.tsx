
import { InternalAddress } from "../../configs/internal";
import { handleErrorResponse } from "../api/apiHandleResponse";

import Response from "../../classes/response/Response"
import cookie from 'js-cookie'
import axios from 'axios'

export const userLogin = async (credential) => {
    let response: Response<String>

    try {
        const dataResponse = await axios.post(
            InternalAddress.USER_LOGIN,
            credential,
        )

        let code = dataResponse.data.code
        let  message =  dataResponse.data.message
        let dataValue = dataResponse.data.data

        response = new Response(code, message, dataValue)
    } catch(error) {
        response = handleErrorResponse(error)
    }

    return response
}

export const userLogout = async (body: string) => {
    let response: Response<String>

    try {
        const secret = cookie.get('token').replace(/"/g,'')    
        const dataResponse = await axios.post(
            InternalAddress.USER_LOGOUT,
            body,
            {headers: {secret: secret}}
        )

        let code = dataResponse.data.code
        let  message =  dataResponse.data.message
        let dataValue = dataResponse.data.data

        response = new Response(code, message, dataValue)
    } catch(error) {
        response = handleErrorResponse(error)
    }

    return response
}