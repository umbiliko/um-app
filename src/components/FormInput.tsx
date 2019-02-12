import * as React from 'react';

export interface  FormInputProps extends React.HTMLAttributes<HTMLInputElement> {
}

export default ({...props}: FormInputProps) => (
    <input {...props} />
);