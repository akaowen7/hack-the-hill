"use client";

import Layout from "../components/layout";
import { Card } from "antd";
import React, { useState } from "react";

function showRepeatable(repeatable) {
  if (repeatable) {
    return (
      <div>
        <h2>Repeatable Goal Frequency</h2>
        <input type="text" />
      </div>
    );
  } else {
    return (
      <div>
        <h2>Goal Deadline</h2>
        <input type="text" />
      </div>
    );
  }
}

export default function CreateGoal() {
  const [repeatable, setRepeatable] = useState(false);
  const [goalName, setGoalName] = useState("");
  const [goalDescription, setGoalDescription] = useState("");

  const handleCheckboxChange = (event) => {
    setRepeatable(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <Layout>
      <Card title="Create Goal" />

      <Card title="Goal Details">
        <h2>Goal Name</h2>
        <input
          type="text"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
        />
        <h2>Goal Description</h2>
        <input
          type="text"
          value={goalDescription}
          onChange={(e) => setGoalDescription(e.target.value)}
        />
        <h2>Repeatable Goal?</h2>
        <input
          type="checkbox"
          value={repeatable}
          onChange={handleCheckboxChange}
        />
        {showRepeatable(repeatable)}
      </Card>

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </Layout>
  );
}
