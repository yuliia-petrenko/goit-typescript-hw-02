import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  isLoading: boolean;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick, isLoading }) => {
  return (

    <div className={css.btn}>
      <button className={css.loadMoreBtn} onClick={onClick} disabled={isLoading}>
      {isLoading ? "Loading" : "Load more"}
    </button>
    </div>
  );
};

export default LoadMoreBtn;
