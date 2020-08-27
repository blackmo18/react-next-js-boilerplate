import Response from "../../classes/response/Response";
import { Status } from "../../classes/response/Status";

export function handleResponse<T>(response: Response<T>, res) {
    switch (response.code) {
        case Status.SUCCESS: {
            res.status(200).json(response)
            break;
        }

        case Status.UNAUTHORIZED: {
            res.status(401).json(response)
            break;
        }

        case Status.FAILED : {
            res.status(400).json(response)
            break;
        }

        default: {
            res.status(400).json(response)
        }
    }
}

export function handleErrorResponse<T>(error): Response<T> {
    if (error.response) {
        if (error.response.status === 401 && error.response.data==='') {
            return new Response<T>(Status.UNAUTHORIZED, 'Request Unauthorized. Try re login your account', null)
        }

        const dataReturn: Response<T> = error.response.data
        if (dataReturn) {
            return dataReturn
        } else {
            return new Response<T>(Status.ERROR, error.message, null)
        }
    } else {
        return new Response<T>(Status.ERROR, error.message, null)
    }
}
