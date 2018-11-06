import * as React from 'react';
import useProgress from 'src/effects/useProgress';

export interface LinearProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    animate: boolean;
    time: number;
}

export default function LinearProgress({
                                   animate,
                                   time
                               }: LinearProgressProps) {
    const progress = useProgress(animate, time);

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