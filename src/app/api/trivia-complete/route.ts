import { addOneToCompletedCount } from "@/lib/trivia-db";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const slug = body.slug;

  const { trivia } = await addOneToCompletedCount(slug);

  return Response.json(trivia, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
