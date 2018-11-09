import Key from './Key';

export default interface Visual<P> {
    type: string;
    props: P;
    key: Key | null;
}

