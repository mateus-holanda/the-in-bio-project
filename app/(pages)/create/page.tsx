import Header from "@/app/components/landing-page/header"
import Button from "@/app/components/ui/button"
import TextInput from "@/app/components/ui/text-input"
import { RocketIcon } from "lucide-react"

export default function CreatePage() {
  return (
    <div>
      <Header />
      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Choose your link</h1>
          <RocketIcon className="size-10" />
        </div>
        <form action="" className="w-full flex items-center gap-2">
          <span className="text-white">theinbioproject.com/</span>
          <TextInput />
          <Button className="w-[126px]">Create</Button>
        </form>
        <div>
          <span className="text-accent-pink">Error</span>
        </div>
      </div>
    </div>
  )
}