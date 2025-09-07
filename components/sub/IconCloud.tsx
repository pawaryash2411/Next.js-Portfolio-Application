import { IconCloud } from "../ui/iconCloudEssentials"

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
//   "nextdotjs",
//   "prisma",
  "amazonaws",
//   "postgresql",
  "firebase",
  "nginx",
  "vercel",
//   "testinglibrary",
//   "jest",
//   "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
//   "sonarqube",
  "figma",
]

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden p10">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
