import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
  BlogIcon,
  YouTubeIcon,
  FiverrIcon,
  InstagramIcon,
} from '@/components/SocialIcons'
import logoGitHub from '@/images/logos/github.svg'
import logoVSCode from '@/images/logos/vscode.svg'
import logoBlog from '@/images/logos/blog.svg'
import logoYouTube from '@/images/logos/youtube.svg'
import profilePic from '@/images/photos/profilePic.jpg'
import image1 from '@/images/photos/6.jpg'
import image2 from '@/images/photos/2.jpg'
import image3 from '@/images/photos/5.jpg'
import image4 from '@/images/photos/4.JPG'
import image5 from '@/images/photos/7.jpg'
import poppyAiLogo from '@/images/logos/poppyai.jpeg'
import NazaWebLogo from '@/images/logos/nazaweb.png'
import DevthinksLogo from '@/images/logos/DevthinksLogo.png'
import NeruLendingLogo from '@/images/logos/NeruLendingLogo.jpeg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40"
    >
      <h2 className="flex text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        <MailIcon className="text-primary-500 h-6 w-6 flex-none" />
        <span className="ml-3">Connect with Me</span>
      </h2>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Get updates on web development, tech mentoring opportunities, and
        insights from my journey as a full-stack developer and founder.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="focus:border-primary-500 focus:ring-primary-500/10 dark:focus:border-primary-400 dark:focus:ring-primary-400/10 min-w-0 flex-auto appearance-none rounded-md border border-neutral-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-neutral-800/5 placeholder:text-neutral-400 focus:ring-4 focus:outline-hidden sm:text-sm dark:border-neutral-700 dark:bg-neutral-700/[0.15] dark:text-neutral-200 dark:placeholder:text-neutral-500"
        />
        <Button
          type="submit"
          className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-300 ml-4 flex-none"
        >
          Subscribe
        </Button>
      </div>
    </form>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Poppy AI - CleverProgrammer',
      title: 'Full Stack Web Developer',
      logo: poppyAiLogo,
      start: 'August 2024',
      end: 'January 2025',
    },
    {
      company: 'NazaWEb - SaaS Design Studio',
      title: 'Full Stack Web Developer',
      logo: NazaWebLogo,
      start: 'August 2023',
      end: 'June 2024',
    },
    {
      company: 'DevThinks',
      title: 'Founder',
      logo: DevthinksLogo,
      start: 'December 2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },

    {
      company: 'NazaWEb - SaaS Design Studio',
      title: 'Full Stack Web Developer & Web3 Coach',
      logo: NazaWebLogo,
      start: 'February 2023',
      end: 'April 2023',
    },
    {
      company: 'Neru Lending',
      title: 'Lead Developer',
      logo: NeruLendingLogo,
      start: 'August 2021',
      end: 'January 2022',
    },
  ]

  return (
    <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
      <h2 className="flex text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        <BriefcaseIcon className="text-primary-500 h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="#"
        variant="secondary"
        className="group mt-6 w-full bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-neutral-400 transition group-active:stroke-neutral-600 dark:group-hover:stroke-neutral-50 dark:group-active:stroke-neutral-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-800 sm:text-5xl dark:text-neutral-100">
            Full-Stack Developer BlockChain & AI Enthusiast
          </h1>
          <p className="mt-6 text-base text-neutral-600 dark:text-neutral-400">
            I'm Nasir Iqbal, a full-stack web developer, tech mentor. With
            expertise in Python, Django, Node.js, React, and Next.js, I
            specialize in building scalable web applications and mentoring
            aspiring developers. Based in Islamabad, I've helped 100+ students
            master JavaScript and React through one-on-one coaching.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://instagram.com/geekynasir"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
              target="_blank"
              className="hover:text-primary-500 dark:hover:text-primary-400 text-neutral-500 dark:text-neutral-400"
            />
            <SocialLink
              href="https://github.com/geekynasir"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
              className="hover:text-primary-500 dark:hover:text-primary-400 text-neutral-500 dark:text-neutral-400"
            />
            <SocialLink
              href="https://www.linkedin.com/in/geekynasir"
              target="_blank"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              className="hover:text-primary-500 dark:hover:text-primary-400 text-neutral-500 dark:text-neutral-400"
            />
            <SocialLink
              href="https://www.fiverr.com/devthinks159"
              aria-label="Visit on Fiverr"
              target="_blank"
              icon={FiverrIcon}
              className="hover:text-primary-500 dark:hover:text-primary-400 text-neutral-500 dark:text-neutral-400"
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
