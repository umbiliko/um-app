import * as React from 'react';

export interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
}

export default function IconButton(props: IconButtonProps) {
    return (
        <button {...props} />
    );
}