interface ProjectCardProps {
  imgPath: string
}

export default function ProjectCard({ imgPath }: ProjectCardProps) {
  return (
    <div className="w-[340px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
        <img src={`/${imgPath}.jpg`} alt="Project 1" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-accent-green">
          10 Clicks
        </span>
        <div className="flex flex-col">
          <span className="text-white font-bold text-xl">Project 1</span>
          <span className="text-content-body text-sm">Description of the project</span>
        </div>
      </div>
    </div>
  )
}