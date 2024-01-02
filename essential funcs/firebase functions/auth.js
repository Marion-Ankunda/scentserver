// import { signInWithEmailAndPassword } from "firebase/auth";
// import { app, auth } from "./firebase_init";
// import { getBusiness } from "./userFuncs/fb_business";
// import { getUser } from "./userFuncs/fb_user";
// import { cliq_notify } from "../../../components/reuseable/notificationsToast/onNotify";
// import { refresh } from "../dataStarter";

// export function signIn(email, password) {
//     signInWithEmailAndPassword(auth, email.trim(), password)
//         .then(async function () {
//             let userData = await getUser(auth.currentUser.uid)
//             return userData;
//         }).catch((err) => {
//             console.log(err)
//         })
// }
// export async function signOut() {
//     try {
//         await auth.signOut();
//     } catch (error) {
//         console.log(error);

//     }
// }
// export async function checkIfSignedIn() {
//     return auth.onAuthStateChanged(
//         user => {
//             if (user == null) {
//                 signOut()
//                 return false;
//             }
//         });
// }

