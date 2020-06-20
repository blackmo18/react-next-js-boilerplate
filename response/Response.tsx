/**
 * Generic Response Class
 * @field code - represents any form identification or type of response
 * @field message - response message
 * @field data -  repsonse data
 * @author blackmo18
 */
export default class Response<T> {
    public constructor(code: string, message: string, data: T) {
        this.code = code
        this.message = message
        this.data = data
    }
    public code: string
    public message: string
    public data: T
}
