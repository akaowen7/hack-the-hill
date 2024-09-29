"use client";

import Layout from "../components/layout";
import { useSearchParams } from "next/navigation";

export default async function GoalDetails() {
  // Get the goalID from the URL
  const searchParams = useSearchParams();
  const res = await fetch(
    "http://localhost:3000/api/goal?id=" + searchParams.get("id")
  );
  const goal = (await res.json()).rows;

  const {
    name,
    todayProgress,
    totalProgress,
    frequencyInterval,
    completed,
    defaultIncrement,
    id,
  } = goal;
  return (
    <Card title={name}>
      <div className="flex flex-col gap-4">
        <p>{isLoggingOpen}</p>
        <PegBoard
          num={completed}
          type={frequencyInterval === 1 ? "Dots" : "Pills"}
        />
        <div>
          <p>
            {frequencyInterval === 1
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

        <Button type="primary" onClick={() => sendToDetails(id)}>
          View Details
        </Button>

        <Modal
          title={name}
          open={isLoggingOpen}
          onCancel={() => setIsLoggingOpen(false)}
        >
          <p>Increment by </p>
          <InputNumber
            min={0}
            max={defaultIncrement * 10}
            defaultValue={defaultIncrement}
          />
        </Modal>
      </div>
    </Card>
  );
}
