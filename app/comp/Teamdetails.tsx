import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'

export default function TeamDetails({
  name = "John Doe",
  role = "Software Engineer",
  passion = "Building intuitive user interfaces",
  bio = "John is a passionate software engineer with over 5 years of experience in web development. He specializes in React and loves creating efficient, scalable applications.",
  avatarUrl = "/placeholder.svg?height=200&width=200",
  github = "johndoe",
  linkedin = "johndoe",
  twitter = "johndoe"
}) {
  return (
    <Card className="w-64 mx-auto">
      <CardContent className="flex flex-col items-center p-6 space-y-4">
        <Avatar className="h-32 w-32">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="space-y-2 text-center">
          <h3 className="text-2xl font-bold leading-none">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        <p className="text-sm text-center">Passionate about {passion}</p>
        <p className="text-sm text-center">{bio}</p>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" asChild>
            <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}