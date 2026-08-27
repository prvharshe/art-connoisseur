import type { Work } from "@/lib/schema";

type ExplainerProps = {
  work: Work;
};

export function Explainer({ work }: ExplainerProps) {
  return (
    <section className="explainer" aria-labelledby="explainer-heading">
      <h2 id="explainer-heading" className="explainer__heading">
        After looking
      </h2>
      {work.explainer.map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}
      <ol className="sources">
        {work.sources.map((source) => (
          <li key={source.label}>
            {source.href ? (
              <a href={source.href} rel="noreferrer">
                {source.label}
              </a>
            ) : (
              source.label
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
