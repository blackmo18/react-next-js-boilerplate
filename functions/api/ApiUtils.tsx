import Response from "../../classes/response/Response";
import ApiResponseSate from '../../classes/payload/ApiResponseState'

export function detApiState<T>(response: Response<T>, successMessage?: string): ApiResponseSate {
    let api = new  ApiResponseSate()

    if (response.code === 'SUCCESS') {
      api.success = true
      api.error = false
      api.message = successMessage || response.message
    } else {
      api.success = false
      api.error = true
      api.message = response.message
    }

    return api
}