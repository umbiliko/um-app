import * as React from 'react';
import useProgress from 'src/effects/useProgress';

export interface CicularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    animate: boolean;
    time: number;
}

export default function CircularProgress({
                                           animate,
                                           time
                                       }: CicularProgressProps) {
    const progress = useProgress(animate, time);

    return (
        <div
            className="circular-progress"
            style={{ }}
            tabIndex={-1}
        >
            <div
                style={{ width: `${progress * 100}%` }}
            />
        </div>
    );
}