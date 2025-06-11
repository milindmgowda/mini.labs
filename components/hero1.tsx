"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import Editor from '@monaco-editor/react';

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  badge = "Explore our marketplace",
  heading = "Run, Share & Explore JavaScript \nRight from Your Browser",
  description = "Write powerful JavaScript scripts. Run them instantly.\nNo setup. No installs. Just code.\n\nPerfect for quick prototypes, demos, learning, or sharing code snippets with others — all without leaving your browser.",
  buttons = {
    primary: {
      text: "🚀 Launch Playground",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "View on GitHub",
      url: "https://www.shadcnblocks.com",
    },
  },
}: Hero1Props) => {
  const code = `
  // This knowledge, once reserved for elite cat whisperers,
  // is now printed to your humble console — for free.
  async function getCatFact() {
  try {
    const response = await fetch('https://catfact.ninja/fact');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Cat Fact:', data.fact);
  } catch (error) {
    console.error('Error fetching cat fact:', error);
  }
}

getCatFact();`;
  return (
    <section className="py-32 flex justify-center min-h-screen px-4">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div
            className="max-h-96 w-full rounded-md object-cover border-2"
          >
            <Editor height="30vh" theme="vs-dark"defaultLanguage="javascript" defaultValue={code} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
