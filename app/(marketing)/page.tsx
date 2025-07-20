import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { D3AnimatedChart } from "@/components/d3-animated-chart"
import { FeaturePollChart } from "@/components/feature-poll-chart"

import { SignupButtonWithModal } from "./components/SingUpButtonWithModal"

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.instagram}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            find your crew.
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            A Sports Social Network Connecting You & Your Community to Sports
            Venues around the World.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Help Shape the Future — From the Ground Up. <br /></p>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            We&apos;re building a new
            iOS app and you&apos;re invited to be a part of our journey. Not just as
            a first gen user, but as a co-creator. You&apos;ll get early access
            to new features and prototypes and help shape our future, and have a
            real say in where we go next. Don&apos;t like something? Let&apos;s take
            a vote — and we&apos;ll change it. This is your chance to shape an
            app in real time and follow the journey as it grows into our
            collective vision. Sign up below to test the app super early, share
            your feedback, and follow along as we grow !
          </p>
          <br />
          <div className="space-x-0">
            <SignupButtonWithModal title="Sign Up" />
            &nbsp;&nbsp;&nbsp;
            <Link
              href="mailto:info@crewters.com"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
      <section className="container flex max-w-[64rem] flex-row items-center justify-center py-2 md:py-6 lg:py-12">
        <Image
          src="/images/screen6.png"
          alt="Crewters Sports Map Image"
          width={350}
          height={200}
          // className="rounded-lg bg-background"
          className={cn(
            "h-[var(--radix-select-trigger-height)] w-1/6 md:w-1/3 min-w-[var(--radix-select-trigger-width)]"
          )}
          priority
        />
        <Image
          src="/images/screen7.png"
          alt="Crewters Sports Map Image"
          width={300}
          height={150}
          // className="rounded-lg bg-background"
          className={cn(
            "h-[var(--radix-select-trigger-height)] w-1/6 md:w-1/3 min-w-[var(--radix-select-trigger-width)]"
          )}
          priority
        />
        <Image
          src="/images/screen12.png"
          alt="Crewters Sports Map Image"
          width={350}
          height={200}
          // className="rounded-lg bg-background"
          className={cn(
            "h-[var(--radix-select-trigger-height)] w-1/6 md:w-1/3 min-w-[var(--radix-select-trigger-width)]"
          )}
          priority
        />
        <Image
          src="/images/screen13.png"
          alt="Crewters Sports Map Image"
          width={300}
          height={150}
          // className="rounded-lg bg-background"
          className={cn(
            "h-[var(--radix-select-trigger-height)] w-1/6 md:w-1/3 min-w-[var(--radix-select-trigger-width)]"
          )}
          priority
        />
        <Image
          src="/images/screen5.png"
          alt="Crewters Sports Map Image"
          width={300}
          height={150}
          // className="rounded-lg bg-background"
          className={cn(
            "h-[var(--radix-select-trigger-height)] w-1/6 md:w-1/3 min-w-[var(--radix-select-trigger-width)]"
          )}
          priority
        />
          <Image
            src="/images/screen9.png"
            alt="Crewters Sports Map Image"
            width={300}
            height={150}
            // className="rounded-lg bg-background"
            className={cn(
              "h-[var(--radix-select-trigger-height)] w-1/6 md:w-1/3 min-w-[var(--radix-select-trigger-width)]"
            )}
            priority
          />
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is a community motivated effort to build a sports
            social network that connects you with your friends, teams, and local
            sports venues.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <i className="fa-solid text-[1.8rem] fa-location-dot"></i>
              <div className="space-y-2">
                <h3 className="font-bold">Events</h3>
                <p className="text-sm text-muted-foreground">
                  Create or join a sports event anywhere in the world.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <i className="fa-solid text-[1.8rem] fa-hand-fist"></i>
              <div className="space-y-2">
                <h3 className="font-bold">Challenges</h3>
                <p className="text-sm text-muted-foreground">
                  Challenge anyone in our network to a game.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <i className="fa-solid text-[1.8rem] fa-feather-pointed"></i>
              <div className="space-y-2">
                <h3 className="font-bold">Teams</h3>
                <h3 className="font-bold text-muted-foreground">
                  Teams - In Progress
                </h3>
                <p className="text-sm text-muted-foreground">
                  Join a Team or create your own.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <i className="fa-solid text-[1.8rem] fa-layer-group"></i>
              <div className="space-y-2">
                <h3 className="font-bold">Leagues</h3>
                <h3 className="font-bold text-muted-foreground">
                  Leagues - In Progress
                </h3>
                <p className="text-sm text-muted-foreground">
                  Compete in a League with your friends or other teams in your
                  area.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <i className="fa-solid text-[1.8rem] fa-chart-column"></i>
              <div className="space-y-2">
                <h3 className="font-bold">Stats</h3>
                <h3 className="font-bold text-muted-foreground">
                  Stats - In Progress
                </h3>
                <p className="text-sm text-muted-foreground">
                  Track your games and set your own personal sports goals.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <i className="fa-solid text-[1.8rem] fa-trophy"></i>
              <div className="space-y-2">
                <h3 className="font-bold">Trophies</h3>
                <h3 className="font-bold text-muted-foreground">
                  Trophies - In Progress
                </h3>
                <p className="text-sm text-muted-foreground">
                  Earn trophies as you play and complete challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          {/* <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Crewters also includes a built-in chat system, allowing you to
            communicate with your friends and teammates. You can also share
            photos and videos of your games, and follow your friends&apos;
            activities. <br />
          </p> */}
        </div>
      </section>
      <section className="container flex max-w-[64rem] flex-col items-center justify-center gap-4 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold text-center mb-8">
            Build With Us: Vote for What&apos;s Next
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
            This app is dedicated to providing users with the best possible
            gamified sports experience. Help us prioritize what to build next by
            voting for your favorite features and create the ultimate sports
            community platform.
          </p>
          <FeaturePollChart
            data={[
              { feature: "Teams", votes: 156 },
              { feature: "Leagues", votes: 132 },
              { feature: "Stats", votes: 98 },
              { feature: "Trophies", votes: 87 },
              // { feature: "Venue Booking", votes: 87 },
              { feature: "Challenges", votes: 76 },
              { feature: "Chat", votes: 65 },
            ]}
          />
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Want to suggest a new feature?
            </p>
            <SignupButtonWithModal title="Sign Up" />
          </div>
        </div>
      </section>
      <section className="container flex max-w-[64rem] flex-col items-center justify-center gap-4 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Community Growth
          </h2>
          <D3AnimatedChart
            data={[10, 30, 50, 70, 90, 70, 50, 80, 60, 90, 100, 120]}
            width={800}
            height={400}
          />
          <p className="text-center text-muted-foreground mt-2 max-w-2xl mx-auto">
            Join our growing community of sports enthusiasts and venues across
            the world.
          </p>
        </div>
      </section>
      <section className="container flex max-w-[64rem] flex-col items-center justify-center gap-4 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Join the Crewters Community
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Crewters is a community-driven project that aims to connect people
            with their friends, teams, and local sports venues. Whether
            you&apos;re looking to join a team, challenge your friends, or just
            find a place to play, Crewters has you covered. <br />
            <br />
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Developers, apply to join the Crewters community on GitHub
            </Link>
            &nbsp; to contribute, report issues, or just follow along with the
            development of this project.
            <br />
            <br />
            Sports Tech Fans, Sign Up below to become a beta tester for our app
            where you can download the app early and decide what features you
            would like to see us build next.
          </p>
          <br />
          <SignupButtonWithModal title="Join the Crew" />
        </div>
      </section>
      {/* <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly CIC
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Crewters is a Community Interest Company and powered by open source
            software. <br /> The code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </section> */}
    </>
  )
}
