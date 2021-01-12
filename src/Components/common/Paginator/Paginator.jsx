import s from "./Paginator.module.css";
import React, { useState } from "react";
import arrowLeft from "../../../img/arrowLeft.svg";
import arrowRight from "../../../img/arrowRight.svg";

const Paginator = ({
    totalItemsCount,
    pageSize,
    currentPage,
    onPageChanged,
    portionSize = 10,
}) => {
    const pageCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const pageNumberButtons = pages
        .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => (
            <button
                className={`${s.pageNumber} ${p === currentPage && s.selected}`}
                onClick={() => onPageChanged(p)}
                key={p}
            >
                {p}
            </button>
        ));

    return (
        <div className={s.pages}>
            {portionNumber > 1 && (
                <button
                    className={s.arrowButtons}
                    onClick={() => {
                        setPortionNumber(portionNumber - 1);
                        onPageChanged(rightPortionPageNumber - portionSize);
                    }}
                >
                    <img src={arrowLeft} alt="left" />
                </button>
            )}

            {pageNumberButtons}

            {portionNumber < portionCount && (
                <button
                    className={s.arrowButtons}
                    onClick={() => {
                        setPortionNumber(portionNumber + 1);
                        onPageChanged(leftPortionPageNumber + portionSize);
                    }}
                >
                    <img src={arrowRight} alt="right" />
                </button>
            )}
        </div>
    );
};

export default Paginator;
