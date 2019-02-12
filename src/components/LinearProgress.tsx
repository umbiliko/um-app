import * as React from 'react';
import useProgress from 'src/effects/useProgress';

export interface LinearProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    animate: boolean;
    duration: number;
}

export default function LinearProgress({
                                   animate,
                                   duration
                               }: LinearProgressProps) {
    const progress = useProgress(animate, duration);

    return (
        <div
            className="linear-progress"
            style={{ }}
            tabIndex={-1}
        >
            <div
                style={{ width: `${progress * 100}%` }}
            />
        </div>
    );
}