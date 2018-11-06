import * as React from 'react';

/* only rerenders if props change */
const Spinner = React.memo(props => (
    <div>{"Loading..."}</div>
));

export default Spinner;