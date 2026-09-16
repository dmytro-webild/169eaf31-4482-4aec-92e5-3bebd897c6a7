import { CheckCircle2 } from "lucide-react";

export default function PromiseSection() {
  const promises = [
    {
      title: "No Cookie-Cutter Templates",
      description: "Every website is custom designed to reflect the unique craft, authority, and quality of your business.",
    },
    {
      title: "Built for Mobile First",
      description: "Over 70% of your potential clients browse on mobile. We ensure seamless booking and navigation on all screens.",
    },
    {
      title: "Designed to Convert",
      description: "Strategic layout, clear call-to-actions, and persuasive copy structure turn casual visitors into paying clients.",
    },
    {
      title: "Fast & Search Engine Ready",
      description: "Optimized performance, lightweight code, and foundational SEO ensure your business gets discovered easily.",
    },
  ];

  return (
    <section id="why-us" data-webild-section="PromiseSection" className="bg-background border-t border-card/40">
      <div className="w-content-width mx-auto flex flex-col">
        <div className="flex flex-col items-center text-center gap-4 max-w-content-width mx-auto">
          <div className="px-3.5 py-1 text-sm card rounded-full text-accent font-medium">
            The Sightworthy Promise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Websites worthy of the business behind them.
          </h2>
          <p className="text-lg text-accent">
            We don't just build pages—we build digital assets designed to establish credibility and fuel growth for small businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promises.map((item, index) => (
            <div key={index} className="card p-8 rounded-theme flex gap-4 items-start">
              <div className="p-2.5 rounded-xl primary-button shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5 text-primary-cta-text" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-accent leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}