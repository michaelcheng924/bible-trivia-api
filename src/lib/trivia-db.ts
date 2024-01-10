import { Trivia } from "@/models/Trivia";
import connectDB from "./connect-db";

export async function getTrivia() {
  try {
    await connectDB();

    const trivia = await Trivia.find().exec();

    return {
      trivia,
    };
  } catch (error) {
    return { error };
  }
}

export async function addOneToCompletedCount(slug: string) {
  try {
    await connectDB();

    const trivia = await Trivia.findOneAndUpdate(
      { slug },
      { $inc: { completedCount: 1 } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    ).exec();

    return {
      trivia,
    };
  } catch (error) {
    return { error };
  }
}
