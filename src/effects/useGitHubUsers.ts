import { useEffect, useState } from 'react';

export default () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data); // set users in state
            });
    }, []); // empty array because we only run once
};
