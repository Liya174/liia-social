import s from "./FormsControls.module.css";

export const Element = (Element) => ({
    input,
    meta: [touched, error],
    ...props
}) => {
    const hasError = touched && error;
    return (
        <>
            <Element
                {...props}
                {...input}
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
