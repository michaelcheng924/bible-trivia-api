import { getTrivia } from "@/lib/trivia-db";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug") || "";

  const { trivia } = await getTrivia(slug);
  console.log("=====", trivia);
  return new Response(JSON.stringify(trivia), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
