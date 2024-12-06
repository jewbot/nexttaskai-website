import React from 'react';

interface TerminalPromptProps {
  children: React.ReactNode;
}

export function TerminalPrompt({ children }: TerminalPromptProps) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-green-500">$</span>
      <div className="flex-1">{children}</div>
    </div>
  );
}