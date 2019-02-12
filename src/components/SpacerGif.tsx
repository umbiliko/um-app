import * as React from 'react';

export interface SpacerGifProps extends React.HTMLAttributes<HTMLDivElement> {
    width: string;
}

export default function SpacerGif({ width, ...props }: SpacerGifProps) {
    return (
        <div style={{ width }} {...props} />
    );
}