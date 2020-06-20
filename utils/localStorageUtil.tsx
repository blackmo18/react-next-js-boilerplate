export function saveLocal<T>(key:string, value: T) {
    let strObj = JSON.stringify(value)
    localStorage.setItem(key, strObj)
}

export async function getLocal<T>(key: string): Promise<T> {
    let strObj  = localStorage.getItem(key)
    const parseObj: T = await JSON.parse(strObj)

    return parseObj
}

export async function getLocalS(key: string) {
    let strObj  = localStorage.getItem(key)
    const parseObj =  JSON.parse(strObj)

    return await JSON.parse(parseObj)
}

export function clearStorageOn(key: string) {
    localStorage.removeItem(key)
}

export function clearStorage() {
    localStorage.clear()
} 