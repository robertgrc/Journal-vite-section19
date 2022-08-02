import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    //*uid  ya tenemos el uid
    const newNote = {
      title: "",
      body: "hi camila",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    const setDocResp = await setDoc(newDoc, newNote);

    console.log({ newDoc, setDocResp });
    //*dispatch
    //*dispatch (newNota)
    //*dispatch (activateNote)
  };
};
