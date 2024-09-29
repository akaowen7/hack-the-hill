"use client";

import Layout from "../components/layout";
import { useSearchParams } from "next/navigation";
import PegBoard from "../components/pegBoard/pegBoard";
import React, { useState, useEffect } from "react";
import { Card, Button, Modal, InputNumber, Progress } from "antd";
import { Suspense } from "react";

function everything() {
  const searchParams = useSearchParams();

  const [goal, setGoal] = useState(null);
  const [isLoggingOpen, setIsLoggingOpen] = useState(false);

  console.log(searchParams.get("id"));

  useEffect(() => {
    fetch("http://localhost:3000/api/goal?goalId=" + searchParams.get("id"))
      .then((response) => response.json())
      .then((json) => {
        console.log(json.rows[0]);
        return setGoal(json.rows[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Card title={goal.name}>
      <div className="flex flex-col gap-4">
        <p>{goal.description}</p>
        <p>{isLoggingOpen}</p>
        <PegBoard
          num={goal.completed}
          type={goal.frequencyInterval === 1 ? "Dots" : "Pills"}
        />
        <div>
          <p>
            {goal.frequencyInterval === 1
              ? "Today's progress: "
              : "This week's progress:"}
          </p>
          <Progress
            type="line"
            percent={(100 * goal.todayProgress) / goal.totalProgress}
            steps={goal.totalProgress}
            showInfo={false}
          ></Progress>
        </div>

        <Button type="primary" onClick={() => setIsLoggingOpen(true)}>
          Log
        </Button>

        <Button type="primary" onClick={() => sendToDetails(goal.id)}>
          View Details
        </Button>

        <Modal
          title={goal.name}
          open={goal.isLoggingOpen}
          onCancel={() => setIsLoggingOpen(false)}
        >
          <p>Increment by </p>
          <InputNumber
            min={0}
            max={goal.defaultIncrement * 10}
            defaultValue={goal.defaultIncrement}
          />
        </Modal>
      </div>
    </Card>
  );
}

export default function GoalDetails() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <everything />
      </Suspense>
    </Layout>
  );
}
