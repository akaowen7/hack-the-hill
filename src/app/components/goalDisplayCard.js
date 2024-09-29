"use client";

import { Card, Button, Progress, Modal, InputNumber } from "antd";
import PegBoard from "./pegBoard/pegBoard";
import { useState } from "react";
import { useRouter } from "next/navigation";

async function logProgress(data) {
  console.log(data);

  const dataJson = JSON.stringify(data);
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_HTTP_URL +
        process.env.NEXT_PUBLIC_VERCEL_URL +
        "/api/goal",
      {
        method: "PUT",
        body: dataJson,
      }
    );

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
    todayprogress,
    totalprogress,
    frequencytype,
    completed,
    defaultincrement,
    id,
  } = goal;

  console.log(goal);

  const [isLoggingOpen, setIsLoggingOpen] = useState(false);
  const [incrementValue, setIncrementValue] = useState(defaultincrement);
  const [updatedTodayProgress, setUpdatedTodayProgress] =
    useState(todayprogress);

  const router = useRouter();

  function sendToDetails(id) {
    console.log("goal id: ", id);
    router.push(`/goalDetails?id=${id}`);
  }

  return (
    <Card title={name} className="mb-4">
      <div className="flex flex-col gap-4">
        <p>{isLoggingOpen}</p>
        <PegBoard
          num={completed}
          type={frequencytype === 0 ? "Dots" : "Pills"}
          todayCompleted={updatedTodayProgress >= totalprogress}
        />
        <div>
          <p>
            {frequencytype === 0
              ? "Today's progress: "
              : "This week's progress:"}
          </p>
          <Progress
            type="line"
            percent={(100 * updatedTodayProgress) / totalprogress}
            steps={totalprogress}
            showInfo={false}
          ></Progress>
        </div>

        <Button type="primary" onClick={() => setIsLoggingOpen(true)}>
          Log
        </Button>

        <Button type="primary" onClick={() => sendToDetails(id)}>
          View Details
        </Button>

        <Modal
          title={name}
          open={isLoggingOpen}
          onCancel={() => setIsLoggingOpen(false)}
          onOk={() => {
            logProgress({
              goalId: goal.id,
              todayProgress: incrementValue + updatedTodayProgress,
            });
            setUpdatedTodayProgress(updatedTodayProgress + incrementValue);
            setIsLoggingOpen(false);
          }}
        >
          <p>Increment by </p>
          <InputNumber
            min={0}
            max={defaultincrement * 10}
            value={incrementValue}
            onChange={(e) => setIncrementValue(e)}
          />
        </Modal>
      </div>
    </Card>
  );
}
