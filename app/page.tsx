"use client";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link href="/tasks">
        <button
          className="bg-green-500 p-2 rounded-sm
        text-white cursor-pointer hover:scale-110 m-10
        "
        >
          to the kanban
        </button>
      </Link>
    </div>
  );
};

export default page;
