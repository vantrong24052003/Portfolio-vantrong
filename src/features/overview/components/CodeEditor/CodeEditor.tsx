import React from 'react';
import { FaGem } from 'react-icons/fa';
import { VscFiles, VscSearch, VscSourceControl, VscExtensions, VscSettingsGear, VscCheckAll } from 'react-icons/vsc';
import { SyntaxType } from './types';
import type { SyntaxProps } from './types';

const Syntax: React.FC<SyntaxProps> = ({ children, type }) => {
  const colors = {
    [SyntaxType.Keyword]: 'text-primary',
    [SyntaxType.Class]: 'text-[#dcdcaa]',
    [SyntaxType.Function]: 'text-[#dcdcaa]',
    [SyntaxType.String]: 'text-[#ce9178]',
    [SyntaxType.Symbol]: 'text-[#9cdcfe]',
    [SyntaxType.Comment]: 'text-[#6a9955]',
    [SyntaxType.Number]: 'text-[#b5cea8]',
  };
  return <span className={colors[type] || 'text-gray-300'}>{children}</span>;
};

export const CodeEditor: React.FC = () => {
  return (
    <section className="w-full lg:w-6/12 h-[500px] flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-700">
      {/* Glow effect behind editor */}
      <div className="absolute -inset-1 bg-linear-to-r from-primary to-purple-900 rounded-xl blur opacity-20" />

      <div className="relative w-full h-full bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col font-mono text-sm">
        {/* Editor Header */}
        <div className="h-10 bg-[#252526] border-b border-[#333] flex items-center justify-between px-4 select-none">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-gray-400 text-xs flex items-center gap-2 border-b border-primary px-2 py-1">
              <FaGem className="text-primary text-xs" />
              <span>identity_controller.rb</span>
            </div>
          </div>
        </div>

        {/* Editor Body */}
        <div className="flex-grow flex relative">
          {/* Side Bar (Icons) */}
          <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-4 text-gray-500">
            <VscFiles className="text-xl text-gray-300" />
            <VscSearch className="text-xl" />
            <VscSourceControl className="text-xl" />
            <VscExtensions className="text-xl" />
            <div className="mt-auto items-center mb-2">
              <VscSettingsGear className="text-xl" />
            </div>
          </div>

          {/* Line Numbers */}
          <div className="w-12 bg-[#1e1e1e] border-r border-[#333] text-gray-600 text-right pr-3 pt-4 select-none flex flex-col gap-[2px]">
            {Array.from({ length: 16 }, (_, i) => (
              <span key={i + 1}>{i + 1}</span>
            ))}
          </div>

          {/* Code Content */}
          <div className="flex-grow p-4 overflow-y-auto text-gray-300 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/50">
            <pre className="whitespace-pre">
              <code>
                <Syntax type={SyntaxType.Keyword}>class</Syntax> <Syntax type={SyntaxType.Class}>IdentityController</Syntax> &lt; <Syntax type={SyntaxType.Class}>ApplicationController</Syntax>{"\n"}
                {"  "}<Syntax type={SyntaxType.Keyword}>before_action</Syntax> <Syntax type={SyntaxType.Symbol}>:authenticate_purpose!</Syntax>{"\n"}
                {"\n"}
                {"  "}<Syntax type={SyntaxType.Keyword}>def</Syntax> <Syntax type={SyntaxType.Function}>show</Syntax>{"\n"}
                {"    "}<Syntax type={SyntaxType.Symbol}>@developer</Syntax> = <Syntax type={SyntaxType.Class}>Developer</Syntax>.find_by(<Syntax type={SyntaxType.Symbol}>name:</Syntax> <Syntax type={SyntaxType.String}>'Đoàn Võ Văn Trọng'</Syntax>){"\n"}
                {"    "}{"\n"}
                {"    "}<Syntax type={SyntaxType.Keyword}>if</Syntax> <Syntax type={SyntaxType.Symbol}>@developer</Syntax>.ready?{"\n"}
                {"      "}<Syntax type={SyntaxType.Symbol}>@skills</Syntax> = {"{"}{"\n"}
                {"        "}<Syntax type={SyntaxType.Symbol}>backend:</Syntax> [<Syntax type={SyntaxType.String}>'Ruby on Rails'</Syntax>, <Syntax type={SyntaxType.String}>'Node.js'</Syntax>],{"\n"}
                {"        "}<Syntax type={SyntaxType.Symbol}>frontend:</Syntax> [<Syntax type={SyntaxType.String}>'Vue.js'</Syntax>, <Syntax type={SyntaxType.String}>'React'</Syntax>],{"\n"}
                {"        "}<Syntax type={SyntaxType.Symbol}>database:</Syntax> [<Syntax type={SyntaxType.String}>'PostgreSQL'</Syntax>, <Syntax type={SyntaxType.String}>'Redis'</Syntax>]{"\n"}
                {"      "}{"}"}{"\n"}
                {"      "}{"\n"}
                {"      "}<Syntax type={SyntaxType.Function}>render</Syntax> <Syntax type={SyntaxType.Symbol}>json:</Syntax> {"{"}{"\n"}
                {"        "}<Syntax type={SyntaxType.Symbol}>message:</Syntax> <Syntax type={SyntaxType.String}>'Ready to build scalable systems'</Syntax>,{"\n"}
                {"        "}<Syntax type={SyntaxType.Symbol}>data:</Syntax> <Syntax type={SyntaxType.Symbol}>@skills</Syntax>,{"\n"}
                {"        "}<Syntax type={SyntaxType.Symbol}>status:</Syntax> <Syntax type={SyntaxType.Number}>200</Syntax>{"\n"}
                {"      "}{"}"}{"\n"}
                {"    "}<Syntax type={SyntaxType.Keyword}>end</Syntax>{"\n"}
                {"  "}<Syntax type={SyntaxType.Keyword}>end</Syntax>{"\n"}
              </code>
            </pre>
            {/* Blinking Cursor */}
            <div className="w-2 h-5 bg-primary absolute bottom-10 left-16 animate-pulse hidden md:block" />
          </div>
        </div>

        {/* Editor Footer */}
        <div className="h-6 bg-primary text-white text-[10px] flex items-center justify-between px-3 font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><VscSourceControl /> main*</span>
            <span className="flex items-center gap-1"><VscCheckAll /> 0 errors</span>
          </div>
          <div className="flex items-center gap-3 invisible md:visible">
            <span>Ln 18, Col 5</span>
            <span>Spaces: 2</span>
            <span>UTF-8</span>
            <span>Ruby</span>
          </div>
        </div>
      </div>
    </section>
  );
};
