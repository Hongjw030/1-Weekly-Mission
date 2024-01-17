/*toast 메세지 호출 훅*/

import toast from "react-hot-toast";

export default function useToast(isSuccess = true, content = "") {
  if (isSuccess) {
    return toast.success(content, {
      style: {
        border: "1px solid #6d6afe",
        padding: "16px",
        fontSize: "15px",
        color: "#6d6afe",
      },
      iconTheme: {
        primary: "#6d6afe",
        secondary: "#FFFAEE",
      },
    });
  }
  return toast.error(content, {
    style: {
      padding: "16px",
      fontSize: "15px",
    },
  });
}