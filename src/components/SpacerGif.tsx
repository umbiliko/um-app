import * as React from 'react';

export interface SpaceGifProps extends React.HTMLAttributes<HTMLDivElement> {

}

export default function SpaceGif(props: SpaceGifProps) {
    return (
        <div {...props} />
    );
}