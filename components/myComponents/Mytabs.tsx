"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MyTabs() {
  return (
    <Tabs defaultValue="account" className="w-full bg-gray-400">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>This is the Account tab content.</p>
      </TabsContent>
      <TabsContent value="password">
        <p>This is the Password tab content.</p>
      </TabsContent>
    </Tabs>
  );
}
