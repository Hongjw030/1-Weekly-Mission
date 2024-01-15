/*FolderModifier 컴포넌트:
  각 folder의 수정, 삭제, 공유 버튼 컴포넌트로, 전체 폴더에선 렌더링되지 않음.
*/

import Image from "next/image";
import { useState } from "react";

import FolderDeleteModal from "@/modals/FolderDeleteModal/FolderDeleteModal";

import styles from "./FolderModifier.module.scss";
import FolderEditModal from "@/modals/FolderEditModal/FolderEditModal";

interface FolderModifierProps {
  folderId: string;
  folderTitle: string;
}

function FolderTitle({ title }: { title: string }) {
  return <h1 className={styles["folder-title"]}>{title}</h1>;
}

function FolderModifier({ folderId, folderTitle }: FolderModifierProps) {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const closeDeleteModal = () => {
    setTimeout(() => setIsOpenDelete(false), 200);
  };
  const closeEditModal = () => {
    setTimeout(() => setIsOpenEdit(false), 200);
  };

  return (
    <div className={styles["modifier-container"]}>
      {isOpenDelete && (
        <FolderDeleteModal
          folderId={folderId}
          folderTitle={folderTitle ?? ""}
          onBlur={closeDeleteModal}
        />
      )}
      {isOpenEdit && (
        <FolderEditModal
          folderId={folderId}
          folderTitle={folderTitle ?? ""}
          onBlur={closeEditModal}
        />
      )}
      <FolderTitle title={folderTitle ?? ""} />
      <div>
        <div className={styles["button-modifier"]}>
          <button>
            <Image
              src="/icons/share-icon.svg"
              width={19}
              height={19}
              alt="share icon"
            />
            공유
          </button>
          <button onClick={() => setIsOpenEdit(true)}>
            <Image
              src="/icons/rename-icon.svg"
              width={19}
              height={19}
              alt="share icon"
            />
            이름 변경
          </button>
          <button onClick={() => setIsOpenDelete(true)}>
            <Image
              src="/icons/delete-icon.svg"
              width={19}
              height={19}
              alt="share icon"
            />
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

export default FolderModifier;