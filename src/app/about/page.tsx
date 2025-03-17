import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Nasir, a full-stack developer passionate about building impactful solutions and mentoring the next generation of developers.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Nasir Iqbal"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hey there! I'm Nasir 👋 A developer who loves building impactful
            solutions.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              🚀 Since 2019, I've been on an exciting journey in the world of
              development. From crafting barter trading platforms to building
              decentralized trust systems on Ethereum, I've had the privilege of
              working on some fascinating projects.
            </p>
            <p>
              👨‍🏫 One of my greatest passions is sharing knowledge. I've mentored
              over 100 students in JavaScript and React, earning 5-star reviews
              along the way. There's something incredibly fulfilling about
              helping others grow in their tech journey.
            </p>
            <p>
              💻 My tech stack is diverse - I'm fluent in JavaScript/TypeScript,
              Python, React, Next.js, and Django. At Poppy AI, I built payment
              automation systems that saved countless hours, and at NazaWeb, I
              developed blockchain experiences!
            </p>
            <p>
              🌟 When I'm not deep in code, you might find me exploring the
              streets of Islamabad or planning my next project. Recently, I've
              been diving into powerlifting 🏋️‍♂️ - because building strength is
              just as exciting as building applications! I believe in
              maintaining a healthy balance between tech and life - though I
              must admit, I can debug code faster than I can decide what to have
              for lunch! ☕
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/geekynasir" icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/geekynasir"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/geekynasir/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="mailto:nasir@nasiriqbal.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              nasir@nasiriqbal.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
