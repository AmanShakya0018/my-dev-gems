'use client';

import { useState, useRef, useEffect } from 'react';
import { Plus, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What makes ForgeUI unique?",
    answer: "ForgeUI stands out with its intuitive design, and seamless developer experience. We prioritize both flexibility and performance to enhance your workflow.",
  },
  {
    question: "Is ForgeUI compatible with Next.js and other frameworks?",
    answer: "Yes! ForgeUI is optimized for Next.js and works seamlessly with React projects. It follows best practices for performance and accessibility across different frameworks.",
  },
  {
    question: "Can I customize the components?",
    answer: "Absolutely! ForgeUI is designed for customization. You can easily modify styles using Tailwind CSS and tweak components to fit your project's design language.",
  },
  {
    question: "How often do you update ForgeUI?",
    answer: "We continuously improve ForgeUI by adding new components, enhancing performance, and incorporating user feedback. Follow our GitHub repository for updates and releases.",
  },
  {
    question: "What kind of support is available?",
    answer: "We offer extensive support through our documentation, community forums, and GitHub discussions. Developers can also contribute, request features, and report issues to keep ForgeUI evolving.",
  },
  {
    question: "How does the pricing work?",
    answer: "ForgeUI is completely free and open-source, making it accessible to all developers. No hidden costs—just a library of high-quality components you can use instantly.",
  },
];

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (index: number) => {
    setAnimatingIndex(index);
    setOpenItem(openItem === index ? null : index);
  };

  useEffect(() => {
    if (animatingIndex !== null) {
      const timeout = setTimeout(() => {
        setAnimatingIndex(null);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [animatingIndex]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full max-w-6xl mx-auto px-4 py-16 dark:text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-medium mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-center">
          Everything you need to know about our platform.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openItem === index;
          return (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-colors duration-300 ${isOpen
                ? 'dark:bg-neutral-900 bg-black/80 border border-neutral-800'
                : 'dark:bg-neutral-900/80 bg-black/80 border border-neutral-800/50 hover:border-neutral-800'
                }`}

            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="text-gray-200 font-medium">{item.question}</span>
                {isOpen ? (
                  <X className="w-5 h-5 text-gray-400" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </button>

              <div
                ref={el => { contentRefs.current[index] = el; }}
                style={{
                  maxHeight: isOpen
                    ? contentRefs.current[index]?.scrollHeight + 'px'
                    : '0px',
                  opacity: isOpen ? 1 : 0,
                  transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s',
                  overflow: 'hidden',
                }}
              >
                <div className={`p-5 pt-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-2'}`}
                  style={{
                    pointerEvents: isOpen ? 'auto' : 'none',
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default FaqSection;