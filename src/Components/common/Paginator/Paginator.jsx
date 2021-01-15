import s from "./Paginator.module.css";
import cn from "classnames";
import React, { useState } from "react";
import arrowLeft from "../../../img/arrowLeft.svg";
import arrowRight from "../../../img/arrowRight.svg";
import doubleArrow from "../../../img/doubleArrow.svg";

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
                className={cn(s.pageNumber, {
                    [s.selected]: p === currentPage,
                })}
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
                    className={cn(s.arrowButtons, s.arrowLeft)}
                    onClick={() => {
                        setPortionNumber(portionNumber - 1);
                        onPageChanged(rightPortionPageNumber - portionSize);
                    }}
                >
                    <img src={doubleArrow} alt="left" />
                </button>
            )}

            {currentPage > 1 && (
                <button
                    className={s.arrowButtons}
                    onClick={() => {
                        onPageChanged(currentPage - 1);
                        currentPage === leftPortionPageNumber &&
                            setPortionNumber(portionNumber - 1);
                    }}
                >
                    <img src={arrowLeft} alt="left" />
                </button>
            )}

            {pageNumberButtons}

            {currentPage < totalItemsCount && (
                <button
                    className={s.arrowButtons}
                    onClick={() => {
                        onPageChanged(currentPage + 1);
                        currentPage === rightPortionPageNumber &&
                            setPortionNumber(portionNumber + 1);
                    }}
                >
                    <img src={arrowRight} alt="right" />
                </button>
            )}

            {portionNumber < portionCount && (
                <button
                    className={s.arrowButtons}
                    onClick={() => {
                        setPortionNumber(portionNumber + 1);
                        onPageChanged(leftPortionPageNumber + portionSize);
                    }}
                >
                    <img src={doubleArrow} alt="right" />
                </button>
            )}
        </div>
    );
};

export default Paginator;
