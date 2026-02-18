"use client";
import React from "react";

export default function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button
        onClick={() => {
          console.log("HEY")
          setCount(count + 1)
        }}
      style={{borderWidth: "1px", borderColor: "black"}}>
        Click Me
      </button>

      <br />

      <p>The Count is {count}</p>
    </div>
  );
}
