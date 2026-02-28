import { CalendarDays, Droplets } from "lucide-react"

export function TripHeader() {
  return (
    <header className="relative overflow-hidden rounded-b-3xl">
      <div className="absolute inset-0">
        <img
          src="/images/ikaho-header.jpg"
          alt="伊香保温泉の風景"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/70" />
      </div>
      <div className="relative flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="mb-3 flex items-center gap-2 text-primary-foreground/80">
          <Droplets className="size-5" />
          <span className="text-sm font-medium tracking-wider">
            {"Spring Onsen Trip"}
          </span>
          <Droplets className="size-5" />
        </div>
        <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          {"伊香保 家族旅行"}
        </h1>
        <div className="mt-4 flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-primary-foreground backdrop-blur-sm">
          <CalendarDays className="size-4" />
          <span className="text-base font-medium">
            {"3月14日(土) 〜 3月15日(日)"}
          </span>
        </div>
      </div>
    </header>
  )
}
