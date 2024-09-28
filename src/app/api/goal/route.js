import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const goalId = searchParams.get("goalId");

  try {
    if (!goalId) throw new Error("Goal ID is required");
    const goal = await sql`GET FROM Goals WHERE id = ${goalId};`;
    return NextResponse.json({ goal }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
