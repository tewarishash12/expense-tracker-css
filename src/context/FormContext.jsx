import { createContext, useContext } from "react";

const FormContext = createContext({});

export function useFormValues() {
    return useContext(FormContext);
}

export default FormContext;