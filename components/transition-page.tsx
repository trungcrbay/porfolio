'use client'
import { useEffect, useRef } from "react";

const TransitionPage = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const opacityRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            opacityRef.current!.style.opacity = "1";

        }, 2500);
    }, []);
    return (
        <div className="opacity-0 transition-splash" ref={opacityRef}>
            {children}
        </div>

    )
}

export default TransitionPage;