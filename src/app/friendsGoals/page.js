"use client";

import { Card, Button, Progress, Input } from "antd";
import PegBoard from "../components/pegBoard/pegBoard";
import Layout from "../components/layout";
import React, { useState } from "react";
import GoalDisplayCard from "../components/goalDisplayCard";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Home() {
  const [goals, setGoals] = useState([]); // Use state to store goals
  const [username, setUsername] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    console.log(username.json);
    const getId = await fetch(
      process.env.VERCEL_URL + "api/users?username=" + username
    );
    const id = await getId.json();
    console.log(id.user.id);
    const res = await fetch(
      process.env.VERCEL_URL + "/api/goals?userId=" + id.user.id
    ); // Fetch goals from API
    const data = await res.json();
    setGoals(data.rows); // Set goals in state
    console.log(goals);
    setSearched(true); // Mark search as completed
  };

  return (
    <Layout>
      <div className=" w-screen flex justify-center">
        <div className="flex flex-col gap-4 my-auto">
          <Input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button type="primary" onClick={handleSubmit}>
            Search
          </Button>
        </div>
      </div>

      {searched &&
        goals.map((goal) => <GoalDisplayCard goal={goal} key={goal.id} />)}
    </Layout>
  );
}
