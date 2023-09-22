import {useState} from 'react'

export const useStateAsObject = initialState => {
    const [value, setValue] = useState(initialState)
    const getValue = () => (value)
    return {get: getValue, set: setValue}
}