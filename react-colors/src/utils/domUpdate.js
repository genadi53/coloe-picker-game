import { useEffect } from "react";

export const useDomUpdate = (query) => {
    let element;

    useEffect(() => {
        element = document.querySelector(query);
    }, []);

    useEffect(() => {
        console.log('Element updated!' + element);
    }, [element]);


}