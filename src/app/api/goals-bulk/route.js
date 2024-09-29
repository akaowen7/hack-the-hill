import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// body should look like this:
// {
//   "goalIds": [1,3]
// }

export async function PUT(request) {
  const { goalIds } = await request.json();
  console.log(goalIds);

  try {
    if (!goalIds) throw new Error("Goal IDs is required");

    let stringParams = [];
    for (let i = 0; i < goalIds.length; i++) {
      stringParams.push(`$${i + 1}`);
    }

    const { rows } = await sql.query(
      `select * from goals where id in (${stringParams.join(", ")})`,
      goalIds
    );
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
