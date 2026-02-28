"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScheduleCard } from "@/components/schedule-card"
import { day1Schedule, day2Schedule } from "@/lib/schedule-data"
import { Sun, Sunrise } from "lucide-react"

export function ScheduleTimeline() {
  return (
    <Tabs defaultValue="day1" className="w-full">
      <div className="sticky top-0 z-10 bg-background/95 px-4 pb-3 pt-4 backdrop-blur-md">
        <TabsList className="grid h-14 w-full grid-cols-2 rounded-2xl bg-muted p-1.5">
          <TabsTrigger
            value="day1"
            className="flex items-center gap-2 rounded-xl text-base font-semibold data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-md"
          >
            <Sun className="size-5" />
            <div className="flex flex-col items-start leading-tight">
              <span>{"Day 1"}</span>
              <span className="text-xs font-normal text-muted-foreground">
                {"3/14(土)"}
              </span>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="day2"
            className="flex items-center gap-2 rounded-xl text-base font-semibold data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-md"
          >
            <Sunrise className="size-5" />
            <div className="flex flex-col items-start leading-tight">
              <span>{"Day 2"}</span>
              <span className="text-xs font-normal text-muted-foreground">
                {"3/15(日)"}
              </span>
            </div>
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="day1" className="mt-0 px-4 pt-2">
        <div className="space-y-0">
          {day1Schedule.map((item, index) => (
            <ScheduleCard
              key={`day1-${index}`}
              item={item}
              isLast={index === day1Schedule.length - 1}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="day2" className="mt-0 px-4 pt-2">
        <div className="space-y-0">
          {day2Schedule.map((item, index) => (
            <ScheduleCard
              key={`day2-${index}`}
              item={item}
              isLast={index === day2Schedule.length - 1}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
