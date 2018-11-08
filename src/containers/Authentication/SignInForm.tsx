import * as React from 'react';

export interface  SignInProps extends React.HTMLAttributes<HTMLFormElement> {
}

export default ({...props}: SignInProps) => (
    <form {...props}>
    </form>
);