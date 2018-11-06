import * as React from 'react';

export interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    id: string;
    image: string;
    isCurrent: boolean;
    takenFocus: boolean;
    title: string;
}

export default function IconButton({
                                   id,
                                   image,
                                   isCurrent,
                                   takenFocus,
                                   title,
                                   children
                               }: IconButtonProps) {
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