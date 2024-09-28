"use client";

import Layout from "../components/layout";
import { Card, Button } from "antd";
import React, { useState } from "react";

// function showRepeatable(repeatable) {
//   if (repeatable) {
//     return (
//       <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//         <label>Repeatable Goal Frequency:</label>
//         <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//           <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//             <label>Daily</label>
//             <input type="radio" id="daily" name="repeat" value="daily" />
//           </div>
//           <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//             <label>Weekly</label>
//             <input type="radio" id="weekly" name="repeat" value="weekly" />
//           </div>
//           <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//             <label>Monthly</label>
//             <input type="radio" id="monthly" name="repeat" value="monthly" />
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//         <label>Goal Deadline:</label>
//         <input type="date" />
//       </div>
//     );
//   }
// }

export default function CreateGoal() {
  //   const [repeatable, setRepeatable] = useState(false);
  const [goalName, setGoalName] = useState("");
  const [goalDescription, setGoalDescription] = useState("");
  const [goalFrequency, setGoalFrequency] = useState(0);
  const [defaultIncrement, setDefaultIncrement] = useState(0);

  //   const handleCheckboxChange = (event) => {
  //     setRepeatable(event.target.checked);
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
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
          {/* <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <label>Repeatable Goal?</label>
          <input
            type="checkbox"
            value={repeatable}
            onChange={handleCheckboxChange}
          />
        </div>
        {showRepeatable(repeatable)} */}
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <label>Repeatable Goal Frequency:</label>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <label>Daily</label>
                <input type="radio" id="daily" name="repeat" value="daily" />
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <label>Weekly</label>
                <input type="radio" id="weekly" name="repeat" value="weekly" />
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <label>Monthly</label>
                <input
                  type="radio"
                  id="monthly"
                  name="repeat"
                  value="monthly"
                />
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <label>Goal Frequency: </label>
            <input
              className="input-box"
              type="number"
              value={goalFrequency}
              onChange={(e) => setGoalFrequency(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <label>Default Increment: </label>
            <input
              className="input-box"
              type="number"
              value={defaultIncrement}
              onChange={(e) => setDefaultIncrement(e.target.value)}
            />
          </div>

          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Card>
    </Layout>
  );
}
