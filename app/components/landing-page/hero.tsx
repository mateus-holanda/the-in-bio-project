import ProjectCard from "../common/project-card"
import TotalVisits from "../common/total-visits"
import UserCard from "../common/user-card"
import Button from "../ui/button"
import TextInput from "../ui/text-input"

export default function Hero() {
  return (
    <div className="flex h-screen">
      <div className="w-full flex flex-col gap-2 mt-[35vh]">
        <h1 className="text-5xl font-bold text-white leading-[64px]">
          Your projects and social networks within a single link
        </h1>
        <h2 className="text-xl leading-6">
          Create your own project's page and share it with the world.
          <br />
          Track all engagement through clicks with Analytics.
        </h2>
        <div className="flex items-center gap-2 w-full mt-[10vh]">
          <span className="text-white text-xl">theinbioproject.com/</span>
          <TextInput name="link" placeholder="Your link" />
          <Button>Create now</Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
        <div className="relative">
          <UserCard />
          <div className="absolute -bottom-[5%] -right-[15%]">
            <TotalVisits />
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10">
            <ProjectCard imgPath="project2" />
          </div>
          <div className="absolute -top-[5%] -left-[55%] -z-10">
            <ProjectCard imgPath="project1" />
          </div>
        </div>
      </div>
    </div>
  )
}