import ProjectCard from "@/app/components/common/project-card"
import TotalVisits from "@/app/components/common/total-visits"
import UserCard from "@/app/components/common/user-card"
import { PlusIcon } from "lucide-react"
import Link from "next/link"

interface ProfilePageProps {
  params: Promise<{ profileId: string }>
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { profileId } = await params

  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center items-center font-bold gap-1 py-2 bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)]">
        <span>You're currently on a free trial.</span>
        <Link href={`/${profileId}/upgrade`}>
          <button className="text-accent-green ">Upgrade now!</button>
        </Link>
      </div>
      <div className="w-1/2 flex justify-center h-min">
        <UserCard />
      </div>
      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
        <ProjectCard imgPath="project1" />
        <ProjectCard imgPath="project1" />
        <ProjectCard imgPath="project1" />
        <ProjectCard imgPath="project1" />
        <ProjectCard imgPath="project1" />
        <ProjectCard imgPath="project1" />
        <ProjectCard imgPath="project1" />
        <button className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border border-dashed border-border-secondary">
          <PlusIcon className="size-10 text-accent-green" />
          <span className="font-bold text-xl">New project</span>
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
        <TotalVisits />
      </div>
    </div>
  )
}