import * as React from 'react';

interface Slide {
    content: any;
    image: string;
    title: string;
}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    slides: Slide[];
}

export default function Carousel({
                                     children
                                 }: CarouselProps) {
    return (
        <div>{children}</div>
    );
}