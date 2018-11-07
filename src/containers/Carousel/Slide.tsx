import * as React from 'react';
import { useEffect, useRef } from 'react';

export interface SlideProps extends React.HTMLAttributes<HTMLLIElement> {
    id: string;
    image: string;
    isCurrent: boolean;
    takeFocus: boolean;
    title: string;
}

export default function Slide({
    id,
    image,
    isCurrent,
    takeFocus,
    title,
    children
                               }: SlideProps) {

    const ref = useRef();
    useEffect(
        () => {
            if (isCurrent && takeFocus) {
                ref.current.focus();
            }
        },
        [isCurrent, takeFocus]
    );

    return (
        <li
            aria-labelledby={id}
            aria-hidden={!isCurrent}
            className="slide"
            ref={ref}
            style={{ backgroundImage: `url(${image})` }}
            tabIndex={-1}
        >
            <div className="slide-content">
                <h2 id={id}>{title}</h2>
                {children}
            </div>
        </li>
    );
}