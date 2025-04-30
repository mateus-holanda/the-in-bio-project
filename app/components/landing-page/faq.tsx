const faqItems = [
  {
    title: "How does portfolio and link creation work with The In Bio Project?",
    description:
      "With The In Bio Project, you can create a professional portfolio and a link page in just a few minutes. Our platform offers customizable templates and an easy-to-use interface so you can showcase your work and organize your links efficiently.",
  },
  {
    title: "Is there a free trial period?",
    description:
      "Yes! We offer a 7-day free trial with no commitment. This allows you to explore all the features of our platform before deciding on a subscription.",
  },
  {
    title: "Can I customize the design of my portfolio?",
    description:
      "Yes! With The In Bio Project, you can customize the colors, fonts, and layout of your portfolio to ensure it reflects your personal brand.",
  },
  {
    title: "Do I need technical skills to use the platform?",
    description:
      "No! Our platform was designed to be simple and intuitive, so no technical knowledge is required. You can create and customize your portfolio and links without any hassle.",
  },
  {
    title: "What happens if I cancel my subscription?",
    description:
      "You can cancel your subscription at any time. Your portfolio and link page will remain available until the end of the paid period, but after that, premium features will be deactivated.",
  },
  {
    title: "Can I share my portfolio on social media?",
    description:
      "Yes! You can easily share your portfolio and link page on your social media through a personalized link.",
  },
]

export default function FAQ() {
  return (
    <div className="my-20 flex flex-col items-center gap-16">
      <h3 className="text-4xl font-bold text-white">Frequently Asked Questions</h3>
      <div className="md:columns-2 columns-1 space-y-4">
        {faqItems.map(({ title, description }, index) => (
          <FAQItem key={index} title={title} description={description} />
        ))}
      </div>
    </div>
  )
}

interface FAQItemProps {
  title: string
  description: string
}

function FAQItem({ title, description }: FAQItemProps) {
  return (
    <div className="w-[351px] h-min flex flex-col gap-3 p-5 rounded-2xl border border-border-primary bg-background-primary">
      <p className="font-bold text-white">{title}</p>
      <p className="text-content-body">{description}</p>
    </div>
  )
}