import * as React from 'react';
import { lazy, Suspense, createFactory } from 'react';
// https://scotch.io/bar-talk/whats-new-in-react-166
const OtherComponent = lazy((): Promise<any> => import('./examples'));
const AnotherComponent = lazy((): Promise<any> => import('./examples'));

// const Fetcher = createFetcher(() => fetch(''));

export default () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <section>
                    <OtherComponent />
                    <AnotherComponent />
                </section>
            </Suspense>
        </div>
    );
}
