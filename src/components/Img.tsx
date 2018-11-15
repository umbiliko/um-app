import * as React from 'react';
import { unstable_createResource as createResource } from 'react-cache';

// https://github.com/palmerhq/the-platform

const ImageResource = createResource(
    (src: string) => new Promise(
        resolve => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.src = src;
        })
);

export default ({ alt, src, ...props }: React.HTMLAttributes<HTMLImageElement> & { alt: string; src: string; }) => {
    ImageResource.read(src); // <- this is going to look for the nearest Suspend ancestor and pause it
    return (
        <img alt={alt} src={src} {...props} />
    );
};
