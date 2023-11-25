import { CardInterface, ModalInterface } from "src/types";
import Card from "../Card/Card";
import styles from "./CardList.module.scss";

interface CardListProps {
  cardList: CardInterface[];
  onClick: (m: ModalInterface) => void;
}

function CardList({ cardList, onClick }: CardListProps) {
  if (!cardList) {
    return <div className={styles["no-card-list"]}> 잘못된 접근입니다.</div>;
  }
  if (cardList.length === 0) {
    return (
      <div className={styles["no-card-list"]}> 저장된 링크가 없습니다.</div>
    );
  }
  return (
    <section className={styles["card-section"]}>
      {cardList?.map((card: CardInterface) => {
        return <Card card={card} key={card.id} onClick={onClick} />;
      })}
    </section>
  );
}

export default CardList;
