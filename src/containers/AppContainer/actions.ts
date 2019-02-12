export const GOTO = "GOTO";
export const NEXT = "NEXT";
export const PAUSE = "PAUSE";
export const PLAY = "PLAY";
export const PREV = "PREV";
export const PROGRESS = "PROGRESS";

export const goBackward = () => ({
    type: PREV
});

export const goForeward = () => ({
    type: NEXT
});

export const goTo = (index: number) => ({
    index,
    type: GOTO
});

export const pause = () => ({
    type: PAUSE
});

export const play = () => ({
    type: PLAY
});