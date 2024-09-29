"use client";

import { Input, Button } from "antd";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    if (!username) {
      alert("Username is required");
      return;
    }
    // send request to get login endpoint
    const response = await fetch(`/api/login?username=${username}`);
    const userId = (await response.json()).user.id;

    console.log(userId);

    // set user id in cookies
    Cookies.set("userId", userId);

    // redirect to home page
    router.push("/");
  };

  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="flex flex-col gap-4 my-auto">
        <p className="flex text-center">
          Enter your username
          <br />
          <br />
          If you do not have an account, one will be created for you
          <br />
        </p>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="primary" onClick={handleSubmit}>
          Login / Sign Up
        </Button>
      </div>
    </div>
  );
}
