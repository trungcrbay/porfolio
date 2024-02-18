'use client'
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalPortalInterface = {
    children: React.ReactNode;
    show?: boolean;
    onClose?: () => void;
    selector: string;
};
const ClientPortal = ({ children, selector, show }: ModalPortalInterface) => {
    const ref = useRef<Element | null>(null);
    useEffect(() => {
        ref.current = document.getElementById(selector);
    }, [selector]);
    return show && ref.current ? createPortal(children, ref.current) : null;
};
export default ClientPortal;
