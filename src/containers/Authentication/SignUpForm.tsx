import * as React from 'react';

export interface  SignUpProps extends React.HTMLAttributes<HTMLFormElement> {
}

export default ({...props}: SignUpProps) => (
    <form {...props}>
    </form>
);