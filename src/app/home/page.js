import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import {Card} from "antd";

export default function Home() {
  return (
    <Layout> 
      <p>Hello</p>
      <Card title="Card" >
      <p>Card content</p>
      </Card>
      <Link href="/about">About</Link>
    </Layout>
  );
}
