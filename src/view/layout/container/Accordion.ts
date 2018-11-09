import Layout from './Box';

export interface Accordion {

}

export const AccordionTypeName = 'Accordion';

export default interface AccordionLayout extends Accordion, Omit<Layout, 'type'> {
    type: typeof AccordionTypeName;
}
