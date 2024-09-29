import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  try {
    if (!username) throw new Error("Username is required");
    const { rows } =
      await sql`select exists(select 1 from users where UPPER(name) = UPPER(${username})) as exists;`;
    if (rows[0].exists) {
      console.log("User exists");
      const { rows } =
        await sql`select * from users where UPPER(name) = UPPER(${username})`;
      return NextResponse.json({ user: rows[0] });
    } else {
      console.log("User does not exist, making user");
      const { rows } =
        await sql`insert into users(name) values(${username}) returning *`;
      return NextResponse.json({ user: rows[0] });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
