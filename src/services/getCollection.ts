import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export type UsersTypes = {
  id?: string;
  name: string;
  avatar: string;
  timeStamp?: string;
  recentText?: string;
};

export async function getCollection(
  route: string,
  setData: React.Dispatch<React.SetStateAction<any[]>>
) {
  const data = (await getDocs(collection(db, route)))
    .docChanges()
    .map((e) => e.doc.data());
  setData(data);
}
