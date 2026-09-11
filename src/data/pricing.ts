import type { PricingTier } from "../types";

export const pricingTiers: PricingTier[] = [
  {
    id: "script-kiddie",
    name: "Script Kiddie",
    price: 0,
    billing: "forever",
    tagline: "Everything you need to stop copy-pasting from Stack Overflow",
    cta: "Start for free",
    accent: "black",
    features: [
      "Unlimited free & open-source extensions",
      "Up to 3 paid extensions on trial",
      "Community changelog access",
      "Public review posting",
      "Standard install speed",
    ],
  },
  {
    id: "root-access",
    name: "Root Access",
    price: 12,
    billing: "per month",
    tagline: "For the dev who has opinions about their prompt segments",
    cta: "Get root",
    accent: "green",
    highlighted: true,
    features: [
      "Everything in Script Kiddie",
      "Unlimited paid extension installs",
      "Priority CDN — sub-second installs",
      "Private extension forks & patches",
      "Early access to beta releases",
      "Verified badge on your reviews",
    ],
  },
  {
    id: "mainframe",
    name: "Mainframe",
    price: 39,
    billing: "per seat / month",
    tagline: "Team-wide tooling with an audit trail your compliance team won't hate",
    cta: "Provision team",
    accent: "yellow",
    features: [
      "Everything in Root Access",
      "Centralized team install manifests",
      "SSO + SCIM provisioning",
      "Org-wide license & CVE auditing",
      "Private extension registry",
      "Dedicated incident-response channel",
    ],
  },
];

export const pricingFaq = [
  {
    question: "Can I cancel Root Access whenever I want?",
    answer:
      "Yes. Cancel from the CLI with `hb billing cancel` or the dashboard. You keep access until the end of the billing period — no dark patterns, no retention call.",
  },
  {
    question: "Do free extensions ever get paywalled later?",
    answer:
      "No. Anything published as free/open-source stays that way. Authors can launch a separate paid \"Pro\" extension, but they can't relicense an existing free one out from under you.",
  },
  {
    question: "What happens to my installs if I downgrade?",
    answer:
      "Paid extensions installed under Root Access keep running until their next update, then lock to read-only mode until you resubscribe or buy a perpetual license from the author directly.",
  },
  {
    question: "Is Mainframe billing per seat or per install?",
    answer:
      "Per seat. One engineer, one seat, unlimited machines and installs for that person. We don't nickel-and-dime you for reinstalling on a new laptop.",
  },
];
