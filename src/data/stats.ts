import type { Stat } from "../types";

export const stats: Stat[] = [
  { label: "Extensions Published", value: "1,204" },
  { label: "Total Installs", value: "8.3M" },
  { label: "Active Developers", value: "312K" },
  { label: "Avg. Rating", value: "4.6 / 5" },
];

export const terminalDemoCommands = [
  {
    label: "Install the CLI",
    command: "curl -fsSL https://get.hackerbyte.dev | sh",
  },
  {
    label: "Authenticate",
    command: "hb auth login",
  },
  {
    label: "Search the registry",
    command: "hb search terminal theme",
  },
  {
    label: "Install an extension",
    command: "hb install rice-tty",
  },
  {
    label: "List installed extensions",
    command: "hb list --installed",
  },
  {
    label: "Update everything",
    command: "hb update --all",
  },
];
