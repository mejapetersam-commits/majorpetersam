import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Major Petersam — Voice. Stage. Strategy." },
      {
        name: "description",
        content:
          "Major Petersam is a communication consultant powered by voice, facilitation, and audience engagement — voiceover, MC, global moderation, and L&D.",
      },
      { property: "og:title", content: "Major Petersam — Communication Consultant" },
      {
        property: "og:description",
        content:
          "Lighting the world with optimism and connection, one voice at a time. Book Major for voiceover, MC, panel moderation, and training.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});
