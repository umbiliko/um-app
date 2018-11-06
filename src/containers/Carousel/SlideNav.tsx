import * as React from 'react';

export interface SlideNavProps extends React.HTMLAttributes<HTMLLIElement> {
    id: string;
    image: string;
    isCurrent: boolean;
    takenFocus: boolean;
    title: string;
}

export default function SlideNav({
                                         id,
                                         image,
                                         isCurrent,
                                         takenFocus,
                                         title,
                                         children
                                     }: SlideNavProps) {
    return (
        <li
            aria-labelledby={id}
            aria-hidden={!isCurrent}
            className="slide"
            style={{ backgroundImage: `url(${image})` }}
            tabIndex={-1}
        >{children}</li>
    );
}