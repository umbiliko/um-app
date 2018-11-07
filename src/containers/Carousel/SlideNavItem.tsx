import * as React from 'react';

export interface SlideNavItemProps extends React.HTMLAttributes<HTMLLIElement> {
    isCurrent: boolean;
    takenFocus: boolean;
    title: string;
}

const style(isCurrent: boolean) = {
    color: '#fff', opacity: isCurrent ? 1 : 0.5
}

export default function SlideNavItem({
                                   isCurrent,
                                   takenFocus,
                                   title,
                                   ...props
                               }: SlideNavItemProps) {
    return (
        <li
            className="slide"
            tabIndex={-1}
            style={style(isCurrent)}
            {...props}
        >

        </li>
    );
}