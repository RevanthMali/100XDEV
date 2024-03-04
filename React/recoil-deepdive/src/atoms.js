import {atom, selector} from "recoil"

export const networkAtom = atom({
    key:"networkAtom",
    default:9
});
export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
});
export const messagingAtom = atom({
    key:"messagingAtom",
    default:0
});
export const notificationAtom = atom({
    key:"notificationAtom",
    default:10
});
// selector derives the value from the other factors which values are changing like messagecount,networkcount,notificationcount;
export const totalnotificationcount = selector({ 
    key : "totalnotificationcount", // this value depends on following values like networkAtom,messagingAtom,notificationAtom...
    get: ({get})=>{
        const networkAtomcount = get(networkAtom);
        const messagingAtomcount = get(messagingAtom);
        const jobsAtomcount  = get(jobsAtom);
        const notificationAtomcount = get(notificationAtom);
        return networkAtomcount + jobsAtomcount + notificationAtomcount + messagingAtomcount
    }
})
 