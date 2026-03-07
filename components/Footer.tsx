import { PERSON } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-dim">
          © {new Date().getFullYear()} ExploitCraft · Bangladesh
        </p>
        <p className="font-mono text-xs text-dim">
          ⚠ All tools for authorized security testing only.
        </p>
        <div className="flex gap-6">
          <a
            href={PERSON.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-dim hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSON.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-dim hover:text-accent transition-colors"
          >
            Twitter
          </a>
          <a
            href={`mailto:${PERSON.email}`}
            className="text-xs text-dim hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
