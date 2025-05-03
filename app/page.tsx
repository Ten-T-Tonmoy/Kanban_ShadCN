"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import MyTabs from "@/components/myComponents/Mytabs";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { DatePickerDemo } from "@/components/myComponents/DatePicker";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className=" flex h-[100vh] flex-col gap-4 justify-center items-center">
      <div className="w-[60vw] text-center gap-4 flex flex-col">
        <Button className=" cursor-pointer" variant="destructive">
          ShadCn button
        </Button>
        <MyTabs />
        <Progress value={33} />
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md w-[] border"
      />
      <DatePickerDemo />
    </div>
  );
}
