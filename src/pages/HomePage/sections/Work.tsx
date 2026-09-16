import { ExternalLink, Check } from "lucide-react";

export default function WorkSection() {
  const projects = [
    {
      title: "Apex Plumbing & Heating",
      category: "Local Service Business",
      description: "A sleek, high-converting site featuring instant online booking and service area mapping.",
      results: "+140% Increase in online booking inquiries",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      tags: ["Redesign", "Local SEO", "Booking Integration"],
    },
    {
      title: "Lumina Dental Studio",
      category: "Healthcare & Wellness",
      description: "Modern, warm, and professional design that puts anxious patients at ease and highlights core treatments.",
      results: "3x More appointment requests in month 1",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      tags: ["Custom Design", "Mobile-First", "Lead Capture"],
    },
    {
      title: "Verde Landscape & Design",
      category: "Contractor & Construction",
      description: "Visual portfolio-focused site showcasing stunning transformations with interactive quote forms.",
      results: "2.5x Increase in high-value contract leads",
      image: "https://images.unsplash.com/photo-1558904541-efa8c196b27d?auto=format&fit=crop&w=800&q=80",
      tags: ["Portfolio", "Custom Copy", "Fast Loading"],
    },
  ];

  return (
    <section id="work" data-webild-section="WorkSection" className="bg-background">
      <div className="w-content-width mx-auto flex flex-col">
        <div className="flex flex-col items-center text-center gap-4 max-w-content-width mx-auto">
          <div className="px-3.5 py-1 text-sm card rounded-full text-accent font-medium">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Crafted for real business growth.
          </h2>
          <p className="text-lg text-accent">
            Explore how we've helped small businesses elevate their online image and turn visitors into loyal clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card rounded-theme overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative aspect-video overflow-hidden bg-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-xs font-medium text-foreground">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-accent leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="px-2.5 py-0.5 text-xs card rounded-md text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-card/60 border-t border-card/60 flex items-center gap-2 text-xs font-medium text-foreground">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{project.results}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}