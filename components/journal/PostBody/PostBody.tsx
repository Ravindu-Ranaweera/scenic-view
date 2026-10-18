import type { PostBlock } from "@/lib/types";

import styles from "./PostBody.module.css";

/**
 * Renders the structured article blocks.
 *
 * Deliberately not dangerouslySetInnerHTML: the copy came from a Word
 * document, so it is treated as text and React escapes it.
 */
export function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className={styles.body}>
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return <h2 key={index}>{block.text}</h2>;
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className={styles.list}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}
