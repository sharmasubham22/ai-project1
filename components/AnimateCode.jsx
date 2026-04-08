'use client';

import {
  Code,
  CodeBlock,
  CodeHeader,
} from '@/components/animate-ui/components/animate/code';
import { Code2 } from 'lucide-react';

export const AnimateCode = ({
  duration,
  delay,
  writing,
  cursor,
}) => {
  return (
    <Code
      key={`${duration}-${delay}-${writing}-${cursor}`}
      className="w-full sm:w-110 h-120 border-none text-left"
      code={`import { useEffect, useState } from "react";
import {Sun, Moon} from 'lucide-react';

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-2 rounded text-text-primary"
    >
      {darkMode ? (
        <Sun
          strokeWidth={1.5}
          className="cursor-pointer hover:text-brand-medium"
        />
      ) : (
        <Moon
          strokeWidth={1.5}
          className="cursor-pointer hover:text-brand-medium"
        />
      )}
    </button>
  );
}`}
    >
      <CodeHeader icon={Code2} copyButton>
        dark-mode.jsx
      </CodeHeader>

      <CodeBlock
        cursor={cursor}
        lang="jsx"
        writing={writing}
        duration={duration}
        delay={delay}
      />
    </Code>
  );
};