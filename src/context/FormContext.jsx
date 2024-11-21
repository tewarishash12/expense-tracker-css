import { createContext, useContext, useState } from "react";

const FormContext = createContext({});

export function useFormValues() {
    return useContext(FormContext);
}

export const FormValuesProvider = ({ children }) => {
    const [formValues, setFormValues] = useState({});
    const setFormValue = (value, key) => {
        setFormValues(currentFormValues => ({...currentFormValues, [key]: value }));
    };
    const resetFormValues = () => {
        setFormValues({});
    };
    return (
        <FormContext.Provider value={{ formValues, setFormValue, resetFormValues, setFormValues }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;