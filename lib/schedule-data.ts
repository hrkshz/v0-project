export type ScheduleItem = {
  time: string
  title: string
  category: string
  memo?: string
  mapQuery?: string
  officialUrl?: string
}

export const day1Schedule: ScheduleItem[] = [
  {
    time: "09:30",
    title: "上尾を出発",
    category: "出発",
    memo: "車2台で移動。途中SAで休憩を挟む。",
    mapQuery: "上尾市",
  },
  {
    time: "11:30",
    title: "水沢うどん 釜吉",
    category: "昼食",
    memo: "人気店のため早めに到着。",
    mapQuery: "水沢うどん 釜吉 渋川市",
    officialUrl: "https://tabelog.com/gunma/A1004/A100402/10024874/",
  },
  {
    time: "13:30",
    title: "伊香保 石段街",
    category: "観光",
    memo: "高低差あり。88歳のおじいちゃん/おばあちゃんは上の神社付近まで車で移動推奨。子供たちは下から散策。",
    mapQuery: "伊香保 石段街",
    officialUrl: "https://www.jalan.net/news/article/838236/",
  },
  {
    time: "15:00",
    title: "古久家（チェックイン）",
    category: "宿泊",
    mapQuery: "伊香保温泉 古久家旅館",
    officialUrl: "https://kokuyaryokan.com/",
  },
  {
    time: "18:00",
    title: "旅館にて夕食＆温泉",
    category: "夕食",
  },
]

export const day2Schedule: ScheduleItem[] = [
  {
    time: "08:00",
    title: "旅館にて朝食",
    category: "朝食",
  },
  {
    time: "10:00",
    title: "チェックアウト",
    category: "出発",
  },
  {
    time: "10:15",
    title: "伊香保グリーン牧場",
    category: "観光",
    memo: "10歳の子供たちが全力で遊べるスポット！シープドッグショーなどを楽しむ。",
    mapQuery: "伊香保グリーン牧場",
    officialUrl: "https://www.greenbokujo.jp/",
  },
  {
    time: "14:00",
    title: "帰路へ",
    category: "出発",
    memo: "渋川伊香保ICから関越道へ。",
    mapQuery: "渋川伊香保IC",
  },
  {
    time: "16:00",
    title: "上尾に到着・解散",
    category: "到着",
    mapQuery: "上尾市",
  },
]

export function getCategoryIcon(category: string): string {
  switch (category) {
    case "出発":
      return "car"
    case "昼食":
    case "夕食":
    case "朝食":
      return "utensils"
    case "観光":
      return "camera"
    case "宿泊":
      return "bed"
    case "到着":
      return "flag"
    default:
      return "circle"
  }
}

export function getCategoryColor(category: string): string {
  switch (category) {
    case "出発":
    case "到着":
      return "bg-primary/15 text-primary border-primary/30"
    case "昼食":
    case "夕食":
    case "朝食":
      return "bg-accent/20 text-accent-foreground border-accent/40"
    case "観光":
      return "bg-primary/10 text-primary border-primary/25"
    case "宿泊":
      return "bg-secondary text-secondary-foreground border-border"
    default:
      return "bg-muted text-muted-foreground border-border"
  }
}
