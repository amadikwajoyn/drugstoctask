import { addDoc, collection, deleteDoc, getDocs, updateDoc } from "@firebase/firestore";
import { nanoid } from "nanoid";
import firebase from "../firebase";

export const createCollection = async (name, data) => {
  try {
    const docRef = await addDoc(collection(firebase.database, name), {
      ...data,
      id: nanoid(),
      createdAt: new Date().toString(),
    });

    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getAllCollections = async (name) => {
  let data = [];
  const querySnapshot = await getDocs(collection(firebase.database, name));
  querySnapshot.forEach((doc) => {
    data = [...data, { task: doc.data(), ref: doc.ref }];
  });

  return data;
};

export const deleteCollection = async (ref, tasks, setTasks) => {
  deleteDoc(ref).then(() => {
      const n = tasks.filter((task) => task.ref !== ref)
      setTasks(n)
  });
};

export const updateCollection = async (ref, task, update) => {
    const n = await updateDoc(ref, { ...task, ...update })

    return n
}
