import * as React from 'react';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {

}

export default function Row({...props}: RowProps) {
    return (
        <div {...props} />
    );
}