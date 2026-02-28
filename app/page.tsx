import { TripHeader } from "@/components/trip-header"
import { ScheduleTimeline } from "@/components/schedule-timeline"
import { Heart } from "lucide-react"

export default function TripItinerary() {
  return (
    <main className="mx-auto min-h-screen max-w-lg bg-background">
      <TripHeader />
      <ScheduleTimeline />
      <footer className="flex items-center justify-center gap-1.5 px-4 py-6 text-sm text-muted-foreground">
        <span>{"楽しい旅行にしよう"}</span>
        <Heart className="size-4 fill-accent text-accent" />
      </footer>
    </main>
  )
}
