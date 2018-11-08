declare type Omit<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

export namespace global {
    type EffectResult = (() => void) | void;

    /**
     * Remove properties `K` from `T`.
     *
     * @internal
     */
}