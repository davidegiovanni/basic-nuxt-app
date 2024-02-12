import type { ReactNode } from "react";
import { useRef } from "react";
import type { Attributes as AttributesModel, BlockUI } from "~/models";

import PageBlock from "~/components/base/Website/Block";
import Attributes from "~/services/template/custom-attributes";
import Metadata from "~/services/template/custom-metadata-style";
import { motion } from "framer-motion";

export const Page = function PageLayout({ blocks, metadata }: PageLayoutProps) {
  const blockRef = useRef<HTMLDivElement>(null);
  const attributes: AttributesModel = {};

  return (
    <motion.div
      ref={blockRef} 
      className={`Page group OverridePage`}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        delay: 0,
        duration: 0.4,
        ease: "easeInOut"
      }}
      >
      <Attributes applyTo={blockRef} attributes={attributes} />
      <Metadata applyTo={blockRef} metadata={metadata} />
      {blocks.map((block, index) => (
        <PageBlock key={`block-${index}`} index={index} block={block} />
      ))}
    </motion.div>
  );
};

export type PageLayoutProps = {
  blocks: BlockUI[];

  children?: ReactNode;
  metadata: Record<string, string>;
};
