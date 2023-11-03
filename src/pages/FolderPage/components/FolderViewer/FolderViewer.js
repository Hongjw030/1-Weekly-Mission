import { useEffect, useState } from "react";
import useAsync from "apis/useAsync";
import { getFolderList } from "apis/getFolderList";
import { getAllCards } from "apis/getAllCards";
import FolderNameButton from "pages/FolderPage/components/FolderNameButton/FolderNameButton";
import { CardList } from "commons/components";
import styles from "./FolderViewer.module.scss";

const DEFAULT_FOLDER = { id: "", name: "전체" };

function FolderViewer() {
  const [folderList, setFolderList] = useState([]);
  const [pending, error, getFolderListAsync] = useAsync(getFolderList);
  const [cardList, setCardList] = useState([]);
  const getter = async () => {
    const allFolders = await getFolderListAsync();
    setFolderList(allFolders?.data);
  };

  const getFolderCards = async (id = "") => {
    const result = await getAllCards(id);
    setCardList(() => {
      return [...result.data];
    });
    return;
  };

  useEffect(() => {
    getter();
    getFolderCards();
  }, []);

  return (
    <>
      <form>
        <div className={styles["folder-buttons-section"]}>
          <FolderNameButton
            folder={DEFAULT_FOLDER}
            onChange={getFolderCards}
            key=""
          />
          {folderList.map((folder) => {
            return (
              <FolderNameButton
                folder={folder}
                onChange={getFolderCards}
                key={folder.id}
              />
            );
          })}
        </div>
        <button type="button" className={styles["add-folder-button"]}>
          폴더 추가+
        </button>
      </form>
      <div className={styles["card-list-section"]}>
        <CardList cardList={cardList} />
      </div>
    </>
  );
}

export default FolderViewer;
