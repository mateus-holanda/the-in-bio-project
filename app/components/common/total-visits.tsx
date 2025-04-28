import { TrendingUpIcon } from "lucide-react"

export default function TotalVisits() {
  return (
    <div className="w-min whitespace-nowrap flex items-center gap-5 bg-background-secondary border border-border-primary px-8 py-3 rounded-xl shadow-lg">
      <span className="font-bold text-white">Total visits</span>
      <div className="flex items-center gap-2 text-accent-green">
        <span className="text-3xl font-bold">2536</span>
        <TrendingUpIcon />
      </div>
      {/* <div className="flex items-center gap-2">
        <button>Portal</button>
        <button>Leave</button>
      </div> */}
    </div>
  )
}