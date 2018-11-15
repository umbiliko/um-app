import * as React from 'react';
import { Suspense } from 'react';
import Img from './components/Img';

export default () => {
    return (
        <div className="HomePage">
            <Suspense
                fallback={(
                    <img alt="Low quality Logo" src="/assets/logo-blur.jpg" />
                )}
                maxDuration={500}
            >
                <Img alt="Big Logo" src="/assets/logo-xl.png" />
            </Suspense>
        </div>
    );
};
