import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const goalId = searchParams.get("goalId");

  try {
    if (!goalId) throw new Error("Goal ID is required");
    const { rows } = await sql`select * from goals where id = ${goalId};`;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// add a goal
export async function POST(request) {
  // const { searchParams } = new URL(request.url);
  const {
    name,
    description,
    userId,
    defaultIncrement,
    totalProgress,
    frequencyType,
  } = await request.json();

  try {
    const { rows } =
      await sql`insert into goals (name, description, user_id, defaultIncrement, totalProgress, frequencyType, completed, todayProgress) 
      values (${name}, ${description}, ${userId}, ${defaultIncrement}, ${totalProgress}, ${frequencyType}, 0, 0) returning id as id;`;
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

    let stringParams = [];
    let queryParams = [];

    // for each element of the request body, if it exists, add it to the updates array
    if (name) {
      stringParams.push(`name = $${stringParams.length + 1}`);
      queryParams.push(name);
    }
    if (description) {
      stringParams.push(`description = $${stringParams.length + 1}`);
      queryParams.push(description);
    }
    if (defaultIncrement) {
      stringParams.push(`defaultIncrement = $${stringParams.length + 1}`);
      queryParams.push(defaultIncrement);
    }
    if (completed) {
      stringParams.push(`completed = $${stringParams.length + 1}`);
      queryParams.push(completed);
    }
    if (todayProgress) {
      stringParams.push(`todayProgress = $${stringParams.length + 1}`);
      queryParams.push(todayProgress);
    }
    if (totalProgress) {
      stringParams.push(`totalProgress = $${stringParams.length + 1}`);
      queryParams.push(totalProgress);
    }

    queryParams.push(goalId);

    console.log({
      a: `update goals set ${stringParams} where id = $${
        stringParams.length + 1
      } returning id as id;`,
      queryParams,
    });

    const { rows } = await sql.query(
      `update goals set ${stringParams} where id = $${
        stringParams.length + 1
      } returning id as id;`,
      queryParams
    );
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error }, { status: 500 });
  }
}
