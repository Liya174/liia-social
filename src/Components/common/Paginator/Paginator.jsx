import s from "./Paginator.module.css";
import React from "react";

const Paginator = ({
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged,
}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pageNumbers = [];
    for (let i = 1; i <= 10; i++) {
        pageNumbers.push(i);
    }

    const pageNumberButtons = pageNumbers.map((p) => (
        <button
            className={`${s.pageNumber} ${p === currentPage && s.selected}`}
            onClick={() => onPageChanged(p)}
            key={p}
        >
            {p}
        </button>
    ));

    return (
        <div className={s.pageNumbers}>
            {pageNumberButtons}
            <div>...</div>
            <button
                className={`${s.pageNumber} ${
                    pagesCount === currentPage && s.selected
                }`}
                onClick={() => onPageChanged(pagesCount)}
                key={pagesCount}
            >
                {pagesCount}
            </button>
        </div>
    );
};

export default Paginator;
