import { StructuredData } from "./structured-data"

const faqs = [
  {
    question: "What is Crewters?",
    answer:
      "Crewters is a sports social network that connects you with your friends, teams, and local sports venues around the world. It's a community-driven iOS app that helps you find sports events, venues, and connect with other sports enthusiasts.",
  },
  {
    question: "How does Crewters work?",
    answer:
      "Crewters allows you to create or join sports events, challenge friends to games, join teams, compete in leagues, track your stats, and earn trophies. You can discover sports venues worldwide and connect with the sports community in your area.",
  },
  {
    question: "Is Crewters free to use?",
    answer:
      "Yes, Crewters is free to use. Sign up to become a beta tester and get early access to new features as we build them.",
  },
  {
    question: "What platforms is Crewters available on?",
    answer:
      "Crewters is currently available as an iOS app. We're building the platform from the ground up with community input.",
  },
  {
    question: "How can I join Crewters?",
    answer:
      "You can sign up on our website to become a beta tester. This gives you early access to the app and the opportunity to vote on features and help shape the platform.",
  },
  {
    question: "What features does Crewters offer?",
    answer:
      "Crewters offers events (create/join sports events), challenges (challenge friends to games), teams (join or create teams), leagues (compete in local leagues), stats tracking, trophies, and a comprehensive sports venue directory.",
  },
  {
    question: "Can I find sports venues near me?",
    answer:
      "Yes! Crewters has a global directory of sports venues. You can discover sports venues around the world and find the perfect place to play your favorite sports.",
  },
  {
    question: "How is Crewters different from other sports apps?",
    answer:
      "Crewters is community-driven with user voting on features, provides a comprehensive social network for all sports (not just one sport), includes gamification with trophies and achievements, and offers a global venue directory. It's built by and for the sports community.",
  },
  {
    question: "Can developers contribute to Crewters?",
    answer:
      "Yes! Crewters is open-source and welcomes community contributions. Developers can apply to join the Crewters community on GitHub to contribute, report issues, or follow along with development.",
  },
  {
    question: "What makes Crewters a community-driven platform?",
    answer:
      "Crewters is built with community input. Users can vote on features, provide feedback during beta testing, and help shape the platform's future. We take votes on what to build next and prioritize features based on community demand.",
  },
]

export function FAQSection() {
  const structuredData = {
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <StructuredData type="FAQPage" data={structuredData} />
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Everything you need to know about Crewters
          </p>
        </div>
        <div className="mx-auto max-w-[58rem] space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-lg border bg-background p-6"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>{faq.question}</span>
                <span className="transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}

