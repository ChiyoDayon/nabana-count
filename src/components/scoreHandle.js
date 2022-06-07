import { collection, doc, getDoc, getDocs, increment, setDoc, updateDoc } from "@firebase/firestore";
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
        //value: increment(1)
        value: (await setValue())+1
    });
}

const getAllDoc = async () => {
    const dataCol = collection(db, database.collection);
    const docSnapshot = await getDocs(dataCol);
    const docList = docSnapshot.docs.map(doc => doc.data());
    return docList;
}

const getAllValue = async () => {
    let values = 0;
    const data = await getAllDoc(db,database.collection);
    data.forEach(e => {
        values = values + e.value
    });
    return values;
}

export {checkLog,setValue,addData,getAllValue};