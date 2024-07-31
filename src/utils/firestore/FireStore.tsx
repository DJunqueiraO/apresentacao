import {DocumentData, WithFieldValue, doc, getDoc, setDoc} from "firebase/firestore"
import {dataBank} from "../Utils"

export const firestore = {
    get: async (
        path: string, 
        documentId: string
    ) => {
        const reference = doc(dataBank, path, documentId)
        const response = await getDoc(reference)
        return response.data()  
    },
    post: async (
        path: string, 
        documentId: string,
        data: WithFieldValue<DocumentData>
    ) => {
        return setDoc(doc(dataBank, path, documentId), data)
    },
    clear: async (
        path: string, 
        documentId: string
    ) => {
        return setDoc(doc(dataBank, path, documentId), {})
    }
}