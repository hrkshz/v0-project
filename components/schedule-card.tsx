import {
  Car,
  UtensilsCrossed,
  Camera,
  BedDouble,
  Flag,
  Circle,
  MapPin,
  Globe,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { ScheduleItem } from "@/lib/schedule-data"

function getCategoryIcon(category: string) {
  const iconClass = "size-4"
  switch (category) {
    case "出発":
    case "到着":
      return <Car className={iconClass} />
    case "昼食":
    case "夕食":
    case "朝食":
      return <UtensilsCrossed className={iconClass} />
    case "観光":
      return <Camera className={iconClass} />
    case "宿泊":
      return <BedDouble className={iconClass} />
    default:
      return <Circle className={iconClass} />
  }
}

function getCategoryStyles(category: string) {
  switch (category) {
    case "出発":
    case "到着":
      return {
        badge: "bg-primary/15 text-primary border-primary/30",
        dot: "bg-primary",
        line: "bg-primary/20",
      }
    case "昼食":
    case "夕食":
    case "朝食":
      return {
        badge: "bg-accent/30 text-foreground border-accent/50",
        dot: "bg-accent",
        line: "bg-accent/30",
      }
    case "観光":
      return {
        badge: "bg-primary/10 text-primary border-primary/25",
        dot: "bg-primary/80",
        line: "bg-primary/15",
      }
    case "宿泊":
      return {
        badge: "bg-secondary text-secondary-foreground border-border",
        dot: "bg-muted-foreground",
        line: "bg-muted-foreground/20",
      }
    default:
      return {
        badge: "bg-muted text-muted-foreground border-border",
        dot: "bg-muted-foreground",
        line: "bg-muted-foreground/20",
      }
  }
}

type ScheduleCardProps = {
  item: ScheduleItem
  isLast: boolean
}

export function ScheduleCard({ item, isLast }: ScheduleCardProps) {
  const styles = getCategoryStyles(item.category)
  const googleMapsUrl = item.mapQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery)}`
    : null

  return (
    <div className="relative flex gap-4">
      {/* Timeline */}
      <div className="flex flex-col items-center pt-1">
        <div
          className={`size-3.5 shrink-0 rounded-full ${styles.dot} ring-4 ring-background`}
        />
        {!isLast && (
          <div className={`w-0.5 flex-1 ${styles.line}`} />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 pb-8 ${isLast ? "pb-2" : ""}`}>
        {/* Time */}
        <p className="mb-1.5 text-sm font-semibold text-muted-foreground">
          {item.time}
        </p>

        {/* Card */}
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <Badge
              variant="outline"
              className={`${styles.badge} shrink-0 gap-1 rounded-lg px-2.5 py-1 text-xs font-medium`}
            >
              {getCategoryIcon(item.category)}
              {item.category}
            </Badge>
            <h3 className="flex-1 text-lg font-bold leading-snug text-foreground">
              {item.title}
            </h3>
          </div>

          {/* Memo */}
          {item.memo && (
            <div className="mt-3 flex items-start gap-2 rounded-lg bg-muted/60 px-3 py-2.5">
              <Info className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {item.memo}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          {(googleMapsUrl || item.officialUrl) && (
            <div className="mt-3 flex flex-wrap gap-2">
              {googleMapsUrl && (
                <Button
                  asChild
                  size="lg"
                  className="h-12 flex-1 gap-2 rounded-xl text-base font-semibold"
                >
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="size-5" />
                    {"Google\u30DE\u30C3\u30D7"}
                  </a>
                </Button>
              )}
              {item.officialUrl && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 flex-1 gap-2 rounded-xl text-base font-medium"
                >
                  <a
                    href={item.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="size-5" />
                    {"公式サイト"}
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
