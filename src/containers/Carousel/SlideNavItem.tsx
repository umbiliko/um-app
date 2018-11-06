import * as React from 'react';

export interface SlideNavItemProps extends React.HTMLAttributes<HTMLLIElement> {
    id: string;
    image: string;
    isCurrent: boolean;
    takenFocus: boolean;
    title: string;
}

export default function SlideNavItem({
                                   id,
                                   image,
                                   isCurrent,
                                   takenFocus,
                                   title,
                                   children
                               }: SlideNavItemProps) {
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