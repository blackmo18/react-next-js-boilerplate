
import { handleResponse, handleErrorResponse } from "../../../functions/api/apiHandleResponse"
import { Status } from "../../../classes/response/Status"
import axios, { AxiosResponse } from 'axios'

import Response from "../../../classes/response/Response"
import Encryption from "../../../functions/encryption/Encrypt"

export default async (req, res) => {
    const credentials = req.body

    try {
        let response = await mockLogin(credentials) 
        handleResponse(response, res)
    } catch (error) {
        res.status(400).body(new Response('ERROR', error, null))
    }
}

const logout = async (credential): Promise<Response<string>> => {
    const url = 'https://truly-yours.com/login'
    let dataResponse: Response<string>
    let response: AxiosResponse
    
    try {
        response = await axios.post(
            url,
            credential,
            {
                headers: {
                    'Content-Type' : 'application/json',
                }
            }
        )

        dataResponse = response.data
        dataResponse.data = Encryption.textEncrypt(dataResponse.data, process.env.TOKEN_HASH)
    } catch(error) {
        dataResponse = handleErrorResponse(error)
    }

    return dataResponse
}

const mockLogin = async (credential): Promise<Response<string>> => {
    let username = process.env.STATIC_USERNAME
    let password = process.env.STATIC_PASSWORD
    let token = process.env.STATIC_TOKEN
    let tokenHash = process.env.TOKEN_HASH 

    let encrypted = Encryption.textEncrypt(token,tokenHash)

    if (credential.userName == username && credential.password == password) {
        return new Response<string>(Status.SUCCESS, 'login succesfull', encrypted)
    } else {
        return new Response<string>(Status.UNAUTHORIZED, 'login failure', null)
    }
}