import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const goalId = searchParams.get("goalId");

  try {
    if (!userId) throw new Error("Goal ID is required");
    const { rows, fields } =
      await sql`select * from goals where goal_id = ${goalId};`;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// add a goal
export async function POST(request) {
  // const { searchParams } = new URL(request.url);
  const { name, description, userId, defaultIncrement } = await request.json();
  console.log({ name, description, userId, defaultIncrement });

  try {
    // if (!goal) throw new Error("Goal is required");
    const { rows } =
      await sql`insert into goals (name, description, user_id, defaultIncrement) 
      values (${name}, ${description}, ${userId}, ${defaultIncrement}) returning id as id;`;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// update a goal
export async function PUT(request) {
  const {
    goalId,
    name,
    description,
    defaultIncrement,
    completed,
    todayProgress,
    totalProgress,
  } = await request.json();

  try {
    // if (!goal) throw new Error("Goal is required");
    // const { rows } = await sql

    let updates = [];

    // for each element of the request body, if it exists, add it to the updates array
    if (name) updates.push(`name = '${name}'`);
    if (description) updates.push(`description = '${description}'`);
    if (defaultIncrement)
      updates.push(`defaultIncrement = ${defaultIncrement}`);
    if (completed) updates.push(`completed = ${completed}`);
    if (todayProgress) updates.push(`todayProgress = ${todayProgress}`);
    if (totalProgress) updates.push(`totalProgress = ${totalProgress}`);

    const { rows } =
      await sql`update goals set name = 'asdfasd' where id = 1 returning id as id;`;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error }, { status: 500 });
  }
}