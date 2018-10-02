import * as React from 'react';
import { IconButton } from '@material-ui/core';
import { Button, Link, List, renderer } from '../types';

export const render: renderer = visual => {

    switch (visual.type) {
        case Button:
            return (<IconButton />);

        case Link:
            return (<IconButton />);

        case List:
            return (<IconButton />);

        default:
            return null;
    }
}