import s from "./FormsControls.module.css";

export const Element = (Element) => (props) => {
    const { input, meta } = props;
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
