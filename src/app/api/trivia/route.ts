import { getTrivia } from "@/lib/trivia-db";

export const dynamic = "force-dynamic";

export async function GET() {
  const { trivia } = await getTrivia();

  return new Response(JSON.stringify(trivia), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
