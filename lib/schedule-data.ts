export type ScheduleItem = {
  time: string
  title: string
  category: string
  memo?: string
  mapQuery?: string
  officialUrl?: string
  travelInfo?: {
    method: string
    duration: string
    detail?: string
  }
}

export const day1Schedule: ScheduleItem[] = [
  {
    time: "10:00",
    title: "上尾を出発",
    category: "出発",
    memo: "車2台で移動。途中SAで休憩を挟む。",
    travelInfo: {
      method: "車",
      duration: "約1時間30分",
      detail: "関越自動車道 → 渋川伊香保IC → 水沢方面へ",
    },
  },
  {
    time: "12:00",
    title: "水沢うどん 釜吉",
    category: "昼食",
    memo: "人気店のため早めに到着。",
    mapQuery: "群馬県吾妻郡草津町草津469-6",
    officialUrl: "https://tabelog.com/gunma/A1004/A100402/10024874/",
    travelInfo: {
      method: "車",
      duration: "約15分",
      detail: "水沢エリアから石段街方面へ下る",
    },
  },
  {
    time: "14:00",
    title: "伊香保 石段街",
    category: "観光",
    memo: "365段の石段の両脇にお土産屋さんや射的、温泉まんじゅうなどの食べ歩きが楽しめます。石段の頂上には伊香保神社があり、さらに奥には河鹿橋や朱色の美しい渓谷も。夜はおいしい夕食が待っているので、食べ歩きはほどほどに！",
    mapQuery: "伊香保温泉石段街 〒377-0102 群馬県渋川市伊香保町伊香保76-5",
    officialUrl: "https://www.jalan.net/news/article/838236/",
    travelInfo: {
      method: "車",
      duration: "約5分",
      detail: "石段街から旅館までは近距離",
    },
  },
  {
    time: "15:30",
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
    travelInfo: {
      method: "車",
      duration: "約5分",
      detail: "旅館からグリーン牧場はすぐ近く",
    },
  },
  {
    time: "10:15",
    title: "伊香保グリーン牧場",
    category: "観光",
    memo: "広大な牧場で動物たちとふれあえるスポット。シープドッグショーや馬・うさぎ・ヤギとのふれあい体験、バター作り体験なども楽しめます。BBQハウスでランチも可能。春は牧場内に咲く桜も見どころです。",
    mapQuery: "伊香保グリーン牧場",
    officialUrl: "https://www.greenbokujo.jp/",
    travelInfo: {
      method: "車",
      duration: "約10分",
      detail: "牧場を出て渋川伊香保ICへ",
    },
  },
  {
    time: "14:00",
    title: "帰路へ",
    category: "出発",
    memo: "渋川伊香保ICから関越道へ。",
    travelInfo: {
      method: "車（高速）",
      duration: "約1時間30分",
      detail: "関越自動車道 → 上尾方面へ",
    },
  },
  {
    time: "16:00",
    title: "上尾に到着・解散",
    category: "到着",
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
