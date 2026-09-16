import { Layout, Smartphone, Search, CheckCircle } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Layout,
      title: "Custom Website Design",
      description: "Tailored multi-page websites built to showcase your services, build instant trust, and capture high-intent leads.",
      features: ["Custom UI/UX Design", "Content & Copy Alignment", "Contact & Lead Forms", "Speed & Security Setup"],
    },
    {
      icon: Smartphone,
      title: "Website Redesign",
      description: "Transform an outdated, DIY-looking site into a modern, high-converting digital storefront that outshines competitors.",
      features: ["Modern Design Refresh", "Mobile UX Optimization", "Re-platforming & Migration", "Improved Conversion Flow"],
    },
    {
      icon: Search,
      title: "Local SEO & Discovery",
      description: "Get discovered by local clients actively searching for your services on Google with search-ready architecture.",
      features: ["On-Page SEO Optimization", "Google Business Setup", "Schema Markup", "Fast Page Loading"],
    },
  ];

  return (
    <section id="services" data-webild-section="ServicesSection" className="bg-background">
      <div className="w-content-width mx-auto flex flex-col">
        <div className="flex flex-col items-center text-center gap-4 max-w-content-width mx-auto">
          <div className="px-3.5 py-1 text-sm card rounded-full text-accent font-medium">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Everything your business needs to stand out online.
          </h2>
          <p className="text-lg text-accent">
            From initial concept to final launch and ongoing care, we deliver end-to-end web solutions built for results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="card p-8 rounded-theme flex flex-col justify-between gap-6 hover:border-accent/40 transition-all">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl primary-button flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary-cta-text" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-accent leading-relaxed">{service.description}</p>
                </div>

                <div className="border-t border-card/60 pt-6 flex flex-col gap-2.5">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2.5 text-sm text-foreground/90">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}