/*StarButton 컴포넌트:
  Card 컴포넌트의 좌측 상단 별모양 버튼.
*/

import { useState } from "react";
import Image from "next/image";
import { CardInterface } from "@/types";
import styles from "./StarButton.module.scss";

function StarButton({ card }: { card: CardInterface }) {
  const [isFilled, setIsFilled] = useState(false);
  const handleStarButton = () => {
    setIsFilled(!isFilled);
  };
  return (
    <>
      <button className={styles["star-button"]} onClick={handleStarButton}>
        {isFilled ? (
          <Image
            src="icons/filled-start-icon.svg"
            width={34}
            height={34}
            alt="filled"
          />
        ) : (
          <Image
            src="icons/no-filled-star-icon.svg"
            width={34}
            height={34}
            alt="not filled"
          />
        )}
      </button>
    </>
  );
}

export default StarButton;
