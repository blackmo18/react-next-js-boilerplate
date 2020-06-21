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
