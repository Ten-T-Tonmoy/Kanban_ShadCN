"use client";
import TextEditor from "@/components/myComponents/TextEditor";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { DatePickerDemo } from "@/components/myComponents/DatePicker";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "../components/Navbar";
export default function Random() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <Navbar />
      <div className=" flex h-[100vh] flex-col gap-4 justify-center items-center">
        <div className="w-[60vw] text-center gap-4 flex flex-col">
          <Button className=" cursor-pointer" variant="destructive">
            ShadCn button
          </Button>
          <Progress value={33} />
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md w-[] border"
        />
        <DatePickerDemo />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <TextEditor />
    </>
  );
}
