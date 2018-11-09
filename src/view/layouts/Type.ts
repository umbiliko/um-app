import { default as AbsoluteLayout } from './Absolute';
import { default as AccordionLayout } from './Accordion';
import { default as AnchorLayout } from './Anchor';
import { default as AutoLayout } from './Auto';
import { default as BorderLayout } from './Border';
import { default as BoxLayout } from './Box';
import { default as CardLayout } from './Card';
import { default as CheckboxGroupLayout } from './CheckboxGroup';
import { default as ColumnLayout } from './Column';
import { default as ContainerLayout } from './Container';
import { default as FitLayout } from './Fit';
import { default as FormLayout } from './Form';
import { default as HBoxLayout } from './HBox';
import { default as TableLayout } from './Table';
import { default as VBoxLayout } from './VBox';

export default interface LayoutType {
    Absolute: AbsoluteLayout;
    Accordion: AccordionLayout;
    Anchor: AnchorLayout;
    Auto: AutoLayout;
    Border: BorderLayout;
    Box: BoxLayout;
    Card: CardLayout;
    CheckboxGroup: CheckboxGroupLayout;
    Column: ColumnLayout;
    Container: ContainerLayout;
    Fit: FitLayout;
    Form: FormLayout;
    HBox: HBoxLayout;
    Table: TableLayout;
    VBox: VBoxLayout;
}
