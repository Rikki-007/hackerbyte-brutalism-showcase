import { type FormEvent, useState } from "react";
import { Button } from "../ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  }

  return (
    <section className="border-y-2 border-hb-black bg-hb-black">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-3xl text-hb-white sm:text-4xl">
          GET NOTIFIED WHEN SOMETHING <span className="text-hb-green">BREAKS PRODUCTION</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-sans text-hb-white/60">
          Weekly digest of new extensions, security advisories, and the occasional unhinged changelog entry. No
          spam. We don't have a marketing team.
        </p>

        {submitted ? (
          <div className="mx-auto mt-8 max-w-md border-2 border-hb-green bg-hb-black px-6 py-4 font-mono text-hb-green">
            $ subscribe --email={email}
            <br />
            → 200 OK. Welcome to the list.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@localhost"
              className="flex-1 border-2 border-hb-white bg-hb-black px-4 py-3 font-mono text-sm text-hb-white placeholder:text-hb-white/40 focus:outline-none focus:ring-2 focus:ring-hb-green"
            />
            <Button type="submit" variant="primary">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
