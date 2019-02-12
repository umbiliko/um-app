import * as React from 'react';

export interface  FormProps extends React.HTMLAttributes<HTMLFormElement> {
}

export default ({...props}: FormProps) => (
    <form {...props}>
    </form>
);