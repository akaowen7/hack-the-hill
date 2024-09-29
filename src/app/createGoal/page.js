"use client";

import Layout from "../components/layout";
import { Card, Button } from "antd";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function CreateGoal() {
  const router = useRouter();

  // if no user id cookie, redirect to login page
  const userId = Cookies.get("userId");
  if (!userId) {
    router.push("/login");
  }

  //   const [repeatable, setRepeatable] = useState(false);
  const [goalName, setGoalName] = useState("");
  const [goalDescription, setGoalDescription] = useState("");
  const [goalPeriod, setGoalPeriod] = useState(1);
  const [goalTarget, setGoalTarget] = useState(3);
  const [defaultIncrement, setDefaultIncrement] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const goalData = {
      name: goalName,
      description: goalDescription,
      userId: userId, // -------------------------- TODO: Update this to the actual user ID
      totalProgress: goalTarget,
      frequencyType: goalPeriod,
      defaultIncrement,
    };

    // Convert the object to a JSON string if needed
    const goalDataJson = JSON.stringify(goalData);

    // Send to database
    try {
      // Send a POST request to the API endpoint
      const response = await fetch(process.env.VERCEL_URL + "/api/goal", {
        method: "POST",
        body: goalDataJson,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Response Data:", responseData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    // Add your form submission logic here
    console.log(goalDataJson);

    // redirect to the goals page
    router.push("/");
  };

  return (
    <Layout>
      <Card title="Create New Goal">
        <div className="flex flex-col gap-4">
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <label>Goal Name: </label>
            <input
              className="input-box"
              type="text"
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <label>Goal Description:</label>
            <input
              className="input-box"
              type="text"
              value={goalDescription}
              onChange={(e) => setGoalDescription(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <label>Repeatable Goal Frequency:</label>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <label>Daily</label>
                <input
                  type="radio"
                  id="daily"
                  name="repeat"
                  value={0}
                  checked={goalPeriod === 0}
                  onChange={(e) => setGoalPeriod(Number(e.target.value))}
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <label>Weekly</label>
                <input
                  type="radio"
                  id="weekly"
                  name="repeat"
                  value={1}
                  checked={goalPeriod === 1}
                  onChange={(e) => setGoalPeriod(Number(e.target.value))}
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <label>Monthly</label>
                <input
                  type="radio"
                  id="monthly"
                  name="repeat"
                  value={2}
                  checked={goalPeriod === 2}
                  onChange={(e) => setGoalPeriod(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-4">
              <label>Goal Target: </label>
              <input
                className="input-box"
                type="number"
                value={goalTarget}
                onChange={(e) => setGoalTarget(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label>Default Increment: </label>
              <input
                className="input-box"
                type="number"
                value={defaultIncrement}
                onChange={(e) => setDefaultIncrement(e.target.value)}
              />
            </div>
          </div>

          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Card>
    </Layout>
  );
}
