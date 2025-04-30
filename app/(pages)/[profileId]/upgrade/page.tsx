import Header from "@/app/components/landing-page/header";
import Button from "@/app/components/ui/button";

export default function UpgradePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Header />
      <h2 className="text-2xl font-bold">Choose your subscription plan</h2>
      <div className="flex gap-4">
        <Button>$4.99 / month</Button>
        <Button>$49.99 for life</Button>
      </div>
    </div>
  )
}