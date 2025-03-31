import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProgramTab from "./components/ProgramTab";
import CalendarTab from "./components/CalendarTab";
import TrackerTab from "./components/TrackerTab";

export default function App() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Dunk Training App</h1>
      <Tabs defaultValue="program">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="program">Program</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="tracker">Tracker</TabsTrigger>
        </TabsList>
        <TabsContent value="program"><ProgramTab /></TabsContent>
        <TabsContent value="calendar"><CalendarTab /></TabsContent>
        <TabsContent value="tracker"><TrackerTab /></TabsContent>
      </Tabs>
    </div>
  );
}