import * as React from 'react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {

}

export default function Alert({...props}: AlertProps) {
    return (
        <div {...props} />
    );
}