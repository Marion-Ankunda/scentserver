// import { auth } from "firebase-admin";
const { auth } = require("firebase-admin");
const { getAuth } = require("firebase-admin/auth");
const { createUserWithEmailAndPassword, signOut, } = require("firebase/auth");

async function signUpfunc(email, password) {
    try {
        return await createUserWithEmailAndPassword(auth, email, password).then((e) => {
            console.log({ access: e.user.accessToken, refresh: e.user.refreshToken, uid: e.user.uid, email: e.user.email });
            return ({ access: e.user.accessToken, refresh: e.user.refreshToken, uid: e.user.uid, email: e.user.email })
        })
    } catch (error) {
        console.log(error);
    }
}

async function signOutfunc(uid) {
    try {
        return signOut(auth).then((e) => {
            console.log(e);
            return true
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = { signUpfunc,signOutfunc }