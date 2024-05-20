import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { v4 as uuidv4} from "uuid";


export const getCurrentProfile = async () => {
  const { userId } = auth();
  if (!userId) return null;
  const nutriTrackUser = await db.user.findUnique({
    where: {
      authId: userId,
    },
  });
  return nutriTrackUser;
};

export const initProfile = async () => {
  let currentUser = await getCurrentProfile();
  if (!currentUser) {
    const { userId } = auth();
    if (!userId) return null;
    currentUser = await db.user.create({
      data: {
        id: uuidv4(),
        authId: userId,
        userNameNutritrack: "",
        showPublicDiet: false,
      },
    });
  }
  return currentUser;
}