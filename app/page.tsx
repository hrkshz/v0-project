import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, ExternalLink, Clock, Car, Utensils, Hotel, Footprints, Camera, Mountain, AlertCircle } from "lucide-react"
import Link from "next/link"

type ScheduleItemType = "departure" | "lunch" | "arrival" | "tourism" | "accommodation" | "dinner" | "breakfast";

interface ScheduleItem {
  id: string;
  time: string;
  type: ScheduleItemType;
  title: string;
  googleMapUrl?: string;
  officialUrl?: string;
  parkingInfo?: string;
  alert?: string;
  memo?: string;
}

const day1Schedule: ScheduleItem[] = [
  {
    id: "d1-1",
    time: "10:00",
    type: "departure",
    title: "上尾を出発",
    memo: "車2台で移動。関越自動車道で渋川伊香保ICへ。途中SAでトイレ休憩。",
  },
  {
    id: "d1-2",
    time: "12:00",
    type: "lunch",
    title: "水沢うどん 大澤屋 第一店舗",
    googleMapUrl: "https://maps.google.com/?q=水沢うどん+大澤屋",
    officialUrl: "https://www.osawaya.co.jp/",
    parkingInfo: "無料の超大型駐車場あり（店舗前・平坦）",
    memo: "群馬名物「水沢うどん」の超人気店。店舗前は階段がなく完全平坦で歩きやすく、店内も広いため大人数でもゆったりと食事が楽しめます。",
  },
  {
    id: "d1-3",
    time: "13:30",
    type: "arrival",
    title: "伊香保温泉（旅館 古久家）に到着・駐車",
    googleMapUrl: "https://maps.google.com/?q=伊香保温泉+古久家",
    parkingInfo: "旅館の目の前に無料駐車場あり（約50〜55台）。満車時は第2駐車場も無料。",
    alert: "⚠要事前確認: 15時のチェックイン前に駐車可能か、事前に「0279-72-3322」へ電話で確認しておくこと！",
  },
  {
    id: "d1-4",
    time: "14:00",
    type: "tourism",
    title: "徒歩で伊香保 石段街へ",
    googleMapUrl: "https://maps.google.com/?q=伊香保+石段街",
    alert: "🚶旅館から石段街まで徒歩1分！車は置いたまま向かいます。",
    memo: "365段の石段の両脇に射的や温泉まんじゅうなどの食べ歩きが楽しめます。段数が多いので歩きやすい靴が必須です！\n体力に自信のない方は中段のカフェや足湯でゆっくりと風景を楽しんで。体力に自信のある方は頂上の伊香保神社（縁結びや健康運）でお参りし、さらに奥の河鹿橋や渓谷の散策がおすすめ。\n※夜はおいしい夕食が待っているので、食べ歩きはほどほどに！",
  },
  {
    id: "d1-5",
    time: "15:00",
    type: "accommodation",
    title: "古久家（チェックイン）",
    officialUrl: "https://kokuyaryokan.com/",
  },
  {
    id: "d1-6",
    time: "18:00",
    type: "dinner",
    title: "旅館にて夕食＆温泉",
  },
];

const day2Schedule: ScheduleItem[] = [
  {
    id: "d2-1",
    time: "08:00",
    type: "breakfast",
    title: "旅館にて朝食",
  },
  {
    id: "d2-2",
    time: "10:00",
    type: "departure",
    title: "チェックアウト",
  },
  {
    id: "d2-3",
    time: "10:15",
    type: "tourism",
    title: "伊香保グリーン牧場",
    googleMapUrl: "https://maps.google.com/?q=伊香保グリーン牧場",
    officialUrl: "https://www.greenbokujo.jp/",
    parkingInfo: "あり（700円/1日）",
    memo: "大迫力のシープドッグショーや、動物たちとのふれあいが楽しめるスポット。自然の中で思いっきりリフレッシュできます。",
  },
  {
    id: "d2-4",
    time: "14:00",
    type: "departure",
    title: "帰路へ",
    memo: "渋川伊香保ICから関越自動車道へ。",
  },
  {
    id: "d2-5",
    time: "16:00",
    type: "arrival",
    title: "上尾に到着・解散",
  },
];

const getTypeIcon = (type: ScheduleItemType) => {
  switch (type) {
    case "departure":
      return <Car className="h-5 w-5 text-blue-500" />;
    case "lunch":
      return <Utensils className="h-5 w-5 text-orange-500" />;
    case "arrival":
      return <MapPin className="h-5 w-5 text-red-500" />;
    case "tourism":
      return <Mountain className="h-5 w-5 text-green-600" />;
    case "accommodation":
      return <Hotel className="h-5 w-5 text-purple-600" />;
    case "dinner":
    case "breakfast":
      return <Utensils className="h-5 w-5 text-orange-600" />;
    default:
      return <Clock className="h-5 w-5 text-gray-500" />;
  }
};

const getTypeName = (type: ScheduleItemType) => {
  switch (type) {
    case "departure": return "出発";
    case "lunch": return "昼食";
    case "arrival": return "到着";
    case "tourism": return "観光";
    case "accommodation": return "宿泊";
    case "dinner": return "夕食";
    case "breakfast": return "朝食";
    default: return "予定";
  }
};

const ScheduleCard = ({ item }: { item: ScheduleItem }) => {
  return (
    <Card className="mb-6 overflow-hidden border-none shadow-sm ring-1 ring-black/5 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          {/* Timeline & Icon */}
          <div className="flex flex-col items-center select-none pt-1">
            <span className="text-lg font-bold tracking-tight text-gray-800">{item.time}</span>
            <div className="my-2 rounded-full bg-slate-100 p-2 ring-1 ring-slate-200">
              {getTypeIcon(item.type)}
            </div>
            <span className="text-sm font-medium text-muted-foreground">{getTypeName(item.type)}</span>
          </div>

          {/* Details */}
          <div className="flex-1 pb-1">
            <h3 className="text-xl font-bold leading-tight text-gray-900 mb-3 pt-1">
              {item.title}
            </h3>

            {/* Actions */}
            <div className="flex flex-col gap-3 my-4">
              {item.googleMapUrl && (
                <Button asChild size="lg" className="w-full text-base font-bold bg-primary hover:bg-primary/90 shadow-md">
                  <Link href={item.googleMapUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-2 h-5 w-5" />
                    Googleマップで開く
                  </Link>
                </Button>
              )}
              {item.officialUrl && (
                <Button asChild variant="outline" size="lg" className="w-full text-base border-primary/20 hover:bg-primary/5">
                  <Link href={item.officialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    公式サイトを開く
                  </Link>
                </Button>
              )}
            </div>

            {/* Alerts & Badges */}
            <div className="flex flex-col gap-2 mb-4">
              {item.parkingInfo && (
                <div className="inline-flex items-start gap-2 rounded-md bg-blue-50 p-3 text-blue-900 border border-blue-100">
                  <Car className="h-5 w-5 shrink-0 mt-0.5 text-blue-600" />
                  <span className="text-base font-medium leading-snug">{item.parkingInfo}</span>
                </div>
              )}
              {item.alert && (
                <div className="inline-flex items-start gap-2 rounded-md bg-rose-50 p-3 text-rose-900 border border-rose-200 shadow-sm">
                  <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-rose-600" />
                  <span className="text-base font-bold leading-snug">{item.alert}</span>
                </div>
              )}
            </div>

            {/* Memo */}
            {item.memo && (
              <div className="mt-3 rounded-lg bg-slate-50 p-4 border border-slate-100 text-gray-700">
                <p className="text-base leading-relaxed whitespace-pre-wrap">
                  {item.memo}
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function TripItinerary() {
  return (
    <main className="mx-auto min-h-screen max-w-[420px] bg-[#fcf9f2] pb-12">
      {/* Header */}
      <header className="px-5 py-8 text-center bg-gradient-to-b from-[#f9ebdb] to-[#fcf9f2]">
        <Badge variant="outline" className="mb-3 border-orange-200 text-orange-700 bg-orange-50 text-sm px-3 py-1 font-medium">
          2025年 家族旅行
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">
          伊香保温泉の旅 ♨️
        </h1>
        <p className="text-lg text-gray-600 font-medium">
          3月14日(土) 〜 15日(日)
        </p>
      </header>

      {/* Main Content */}
      <div className="px-4">
        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 h-14 p-1 bg-slate-200/50 rounded-xl">
            <TabsTrigger value="day1" className="text-base font-bold rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
              Day 1 (3/14)
            </TabsTrigger>
            <TabsTrigger value="day2" className="text-base font-bold rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
              Day 2 (3/15)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="day1" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <div className="space-y-2">
              {day1Schedule.map((item) => (
                <ScheduleCard key={item.id} item={item} />
              ))}
            </div>
            <div className="text-center pt-8 pb-4">
              <p className="text-lg font-bold text-gray-500">今日も一日お疲れ様でした🥂</p>
            </div>
          </TabsContent>

          <TabsContent value="day2" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <div className="space-y-2">
              {day2Schedule.map((item) => (
                <ScheduleCard key={item.id} item={item} />
              ))}
            </div>
            <div className="text-center pt-8 pb-4">
              <p className="text-lg font-bold text-gray-500">気をつけて帰りましょう🚗</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
