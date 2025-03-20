import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'My Setup & Tools',
  description:
    'A curated collection of hardware, software, and tools I use for full-stack development, AI/ML work, and content creation.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="My Development Setup & Creative Workspace"
      intro="As a full-stack developer who works with both Mac and Windows, here's my dual-platform setup that helps me stay productive. From AI-powered development tools to cross-platform testing devices, these are the tools that power my daily workflow."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="MacBook Pro M1 (2020) 16GB RAM">
            My primary development machine for on-the-go work. The M1 chip
            provides excellent performance while maintaining incredible battery
            life.
          </Tool>
          <Tool title="Custom Gaming PC (RTX 3060Ti, AMD Ryzen 5700X3D)">
            My powerhouse desktop for gaming and resource-intensive development
            tasks. Perfect for running multiple environments and handling heavy
            workloads.
          </Tool>
          <Tool title="ASUS PG329Q 32-inch 2K IPS 175Hz Monitor">
            My main display - a perfect balance of size, resolution, and refresh
            rate. The IPS panel provides excellent color accuracy for both
            development and content creation.
          </Tool>
          <Tool title="Dual 24-inch HP Bezel-less Monitors">
            Secondary displays for enhanced productivity. The bezel-less design
            creates a seamless multi-monitor experience.
          </Tool>
          <Tool title="ASUS Gaming Chair">
            Comfortable gaming chair that provides good support during long
            coding sessions.
          </Tool>
          <Tool title="Cougar Gaming Desk">
            Spacious gaming desk that accommodates my multi-monitor setup and
            provides plenty of workspace.
          </Tool>
          <Tool title="Mobile Devices">
            Galaxy S24 Ultra and iPhone 15 Pro for cross-platform testing and
            development. Sony ZV-E10 camera for content creation.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Cursor">
            My primary code editor of choice. The AI-powered features and clean
            interface make it incredibly efficient for development.
          </Tool>
          <Tool title="WebStorm">
            Powerful IDE for JavaScript and TypeScript development. The deep
            language understanding and refactoring tools are invaluable.
          </Tool>
          <Tool title="Visual Studio Code">
            Versatile editor with an amazing ecosystem of extensions. Perfect
            for quick edits and diverse programming languages.
          </Tool>
          <Tool title="PyCharm">
            My go-to IDE for Python development. The intelligent code assistance
            and debugging capabilities are unmatched.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Essential tool for UI/UX design and collaboration. Perfect for
            creating and sharing design systems.
          </Tool>
          <Tool title="Miro Boards">
            Digital whiteboard for brainstorming, planning, and visual
            collaboration with teams.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            My central hub for note-taking, documentation, and project
            management. The flexibility and organization features are
            game-changing.
          </Tool>
          <Tool title="Poppy AI">
            Proud to have contributed to this innovative AI platform. Using it
            daily for enhanced productivity and automation tasks.
          </Tool>
          <Tool title="Calendly">
            Streamlines meeting scheduling and time management. Makes it easy to
            coordinate across different time zones.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
