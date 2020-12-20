import s from "./FormsControls.module.css";

export const Element = (Element) => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            <Element
                {...props}
                {...input}
                className={`${props.className} ${hasError ? s.error : ""}`}
            />
            {props.type !== "checkbox" ? (
                <div className={`${s.errorText} ${hasError ? s.errorOn : ""}`}>
                    {meta.error}
                </div>
            ) : (
                ""
            )}
        </>
    );
};
// export const Element = (Element) => ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div
//             className={`${s.formControl} ${hasError ? s.error : ""} ${
//                 props.type === "checkbox" ? s.checkbox : ""
//             }
//                 `}
//         >
//             <Element {...props} {...input} />
//             {hasError && <div className={s.errorText}>{meta.error}</div>}
//         </div>
//     );
// };
