import * as React from 'react';

/* only rerenders if domains change */
const Spinner = React.memo(
    (props: { size: number | 'sm' | 'md' | 'lg' | 'xl' }) => {
        return (
            <div>{"Loading..."}</div>
        );
    }
);

export default Spinner;
