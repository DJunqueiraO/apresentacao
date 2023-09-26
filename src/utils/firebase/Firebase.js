import {initializeApp} from 'firebase/app'
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
import {getAnalytics} from "firebase/analytics"

const config = {
    apiKey: "AIzaSyByw6alm_DzGQAEfs9flMA0QGO5isFlLOQ",
    authDomain: "apresentacao-57ade.firebaseapp.com",
    projectId: "apresentacao-57ade",
    storageBucket: "apresentacao-57ade.appspot.com",
    messagingSenderId: "68138814848",
    appId: "1:68138814848:web:bb9945ea2464a363388565",
    measurementId: "G-4MR3308J94"
}

const app = initializeApp(config)

export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)