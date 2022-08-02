import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    //todo: tarea dispatch
    dispatch(savingNewNote());

    const { uid } = getState().auth;
    //*uid  ya tenemos el uid
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;
    //*dispatch
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
    //*dispatch (newNota)
    //*dispatch (activateNote)
  };
};
