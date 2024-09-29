"use client";

import { Card, Button, Progress, Modal, InputNumber } from "antd";
import PegBoard from "./pegBoard/pegBoard";
import { useState } from "react";

async function logProgress(newProgressAmount) {
  const dataJson = JSON.stringify({ todayProgress: newProgressAmount });
  try {
    // Send a POST request to the API endpoint
    const response = await fetch("http://localhost:3000/api/goal", {
      method: "POST",
      body: dataJson,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}

export default function GoalDisplayCard({ goal }) {
  const {
    name,
    todayProgress,
    totalProgress,
    frqeuncyInterval,
    completed,
    defaultIncrement,
  } = goal;

  const [isLoggingOpen, setIsLoggingOpen] = useState(false);
  const [incrementValue, setIncrementValue] = useState(frqeuncyInterval);

  return (
    <Card title={name}>
      <div className="flex flex-col gap-4">
        <p>{isLoggingOpen}</p>
        <PegBoard
          num={completed}
          type={frqeuncyInterval === 1 ? "Dots" : "Pills"}
        />
        <div>
          <p>
            {frqeuncyInterval === 1
              ? "Today's progress: "
              : "This week's progress:"}
          </p>
          <Progress
            type="line"
            percent={(100 * todayProgress) / totalProgress}
            steps={totalProgress}
            showInfo={false}
          ></Progress>
        </div>

        <Button type="primary" onClick={() => setIsLoggingOpen(true)}>
          Log
        </Button>

        <Modal
          title={name}
          open={isLoggingOpen}
          onCancel={() => setIsLoggingOpen(false)}
          onOk={() => logProgress(todayProgress + incrementValue)}
        >
          <p>Increment by </p>
          <InputNumber
            min={0}
            max={defaultIncrement * 10}
            value={incrementValue}
          />
        </Modal>
      </div>
    </Card>
  );
}
