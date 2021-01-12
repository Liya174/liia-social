import s from "./FormsControls.module.css";

// const FormControl = ({ input, meta: [touched, error], children, ...props }) => {
//     const hasError = touched && error;
//     return (
//         <>
//             <div
//                 {...props}
//                 {...input}
//                 className={`${props.className} ${hasError ? s.error : ""}`}
//             ></div>
//             {props.type !== "checkbox" ? (
//                 <div className={`${s.errorText} ${hasError ? s.errorOn : ""}`}>
//                     {error}
//                 </div>
//             ) : (
//                 ""
//             )}
//         </>
//     );
// };

export const Element = (Element) => ({
    // input,
    meta: [touched, error],
    ...props
}) => {
    const hasError = touched && error;
    return (
        <>
            <Element
                {...props}
                // {...input}
                className={`${props.className} ${hasError ? s.error : ""}`}
            />
            {props.type !== "checkbox" ? (
                <div className={`${s.errorText} ${hasError ? s.errorOn : ""}`}>
                    {error}
                </div>
            ) : (
                ""
            )}
        </>
    );
};
