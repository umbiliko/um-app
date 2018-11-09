import { Layout } from '../primitives';

export interface Accordion {

}

export const AccordionTypeName = 'Accordion';

export default interface AccordionLayout extends Accordion, Layout {
    type: typeof AccordionTypeName;
}
