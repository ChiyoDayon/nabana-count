const strId = 'id';

const rand = (max,min)=>{
    return Math.floor(Math.random() * (max - min)) + min;
}

const makeID = () => {
    let key = Date.now().toString();
    let r = '';
    for (let index = 0; index < key.length; index++) {
        r = r + key.charAt(index) + String.fromCharCode(rand(65,90)) + String.fromCharCode(rand(97,122));
    }
    return r;
}

const checkLog = () => {
    if (localStorage.getItem(strId)==null) {
        localStorage.setItem(strId, makeID());
    }
}

const getId = () => {
    checkLog();
    return localStorage.getItem(strId);
}

export default getId;