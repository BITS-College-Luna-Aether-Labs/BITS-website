import { SectionReveal } from "@/components/ui/SectionReveal";

export function PageShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-white pt-[72px] dark:bg-gray-950 lg:pt-[80px]">
      <div className="site-container py-12 md:py-16">
        <SectionReveal>
          <h1 className="text-3xl font-bold text-bits-heading md:text-4xl dark:text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base text-bits-muted dark:text-gray-400">
              {description}
            </p>
          )}
        </SectionReveal>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </div>
  );
}
