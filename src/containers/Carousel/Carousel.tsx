import * as React from 'react';

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {

}

export default function Controls({
                                     children
                                 }: CarouselProps) {
    return (
        <ul>{children}</ul>
    );
}