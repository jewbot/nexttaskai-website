import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { IPhoneAscii } from './IPhoneAscii';
import { TerminalPrompt } from './TerminalPrompt';
import { TypingEffect } from './TypingEffect';

export function Terminal() {
  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-lg border border-green-500/20">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-green-500/20 bg-black/40">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <TerminalIcon size={14} />
              <span className="text-sm">nexttask.ai</span>
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 space-y-6">
            <TerminalPrompt>
              <TypingEffect text="Welcome to NextTask.ai - Crafting AI-Powered iOS Experiences" />
            </TerminalPrompt>
            
            <IPhoneAscii />
            
            <TerminalPrompt>
              <TypingEffect text="Our mission: Revolutionizing productivity through AI" />
            </TerminalPrompt>
            
            <div className="border-t border-green-500/20 pt-4 mt-8">
              <p className="text-sm opacity-70">Email 'help@nexttask.ai' for available commands or any inquiries.</p>
              <p className="text-sm opacity-70">© 2024 NextTask AI Inc. | Building the future of AI-powered apps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
