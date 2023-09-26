import {doc, getDoc, setDoc} from "firebase/firestore"
import {dataBank} from "../Utils"

export const firestore = {
    get: async (path, documentId) => {
        const reference = doc(dataBank, path, documentId)
        const response = await getDoc(reference)
        return response.data()  
    },
    post: async (path, documentId, data) => {
        return setDoc(doc(dataBank, path, documentId), data)
    },
    clear: async (path, documentId) => {
        return setDoc(doc(dataBank, path, documentId), {})
    }
}