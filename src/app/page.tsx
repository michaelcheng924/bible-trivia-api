import { getTrivia, addOneToCompletedCount } from "@/lib/trivia-db";

export default async function Home() {
  const { trivia } = await getTrivia();
  console.log("=====", trivia);

  async function action(data: FormData) {
    "use server";

    const title = data.get("title");
    if (!title || typeof title !== "string") {
      return;
    }

    // call server action
    await addOneToCompletedCount();
  }

  return (
    <div>
      <button onClick={action}>ADD</button>
    </div>
  );
}
