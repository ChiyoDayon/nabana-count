import { doc, getDoc, increment, setDoc, updateDoc } from "@firebase/firestore";
import db from "../firebase";

const database = {
    collection: 'counter',
    id: 'dev'
}

const createDoc = async () => {
    await setDoc(doc(db, database.collection, database.id), {
        value: 0
    }); 
}

const setValue = async () => {
    const docSnap = await getDoc(doc(db, database.collection, database.id));
    const getValue = docSnap.data().value;
    return getValue;
}

const checkLog = async () => {
    const docSnap = await getDoc(doc(db, database.collection, database.id));
    if (!docSnap.exists()) createDoc();
}

const addData = async () => {
    await updateDoc(doc(db, database.collection, database.id), {
        value: increment(1)
    });
}

export {checkLog,setValue,addData};