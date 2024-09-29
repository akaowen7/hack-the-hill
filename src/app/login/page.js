"use client";

import { Input, Button } from "antd";
import React from "react";

export default function Login() {
  const handleSubmit = async (event) => {
    console.log("Login");
  };

  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="flex flex-col gap-4 my-auto">
        <Input placeholder="Username" />
        <Button type="primary" onClick={handleSubmit}>
          Login / Sign Up
        </Button>
      </div>
    </div>
  );
}
