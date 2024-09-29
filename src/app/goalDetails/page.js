import Layout from "../components/layout";
import { useParams } from "react-router-dom";

export default function GoalDetails() {
  const { id } = useParams();

  return (
    <Layout>
      <p>goal details {id}</p>
    </Layout>
  );
}
