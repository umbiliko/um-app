import { ReactNode } from 'react';
import { IButton, IComponent, IField, IForm, ILink, IList, IListItem, ISelect, IToggle, ITree, ITreeItem } from 'um-ts';

export const Button = 'Button';
export const Divider = 'Divider';
export const Field = 'Field';
export const Form = 'Form';
export const Header = 'Header';
export const Link = 'Link';
export const List = 'List';
export const ListItem = 'ListItem';
export const Select = 'Select';
export const Toggle = 'Toggle';
export const Tree = 'Tree';
export const TreeItem = 'TreeItem';

export type Visual = {
    Button: { type: typeof Button } & IButton;
    Divider: { type: typeof Divider } & { display?: string; };
    Field: { type: typeof Field } & IField;
    Form: { type: typeof Form } & IForm;
    Header: { type: typeof Header } & IComponent;
    Link: { type: typeof Link } & ILink;
    List: { type: typeof List } & IList;
    ListItem: { type: typeof ListItem } & IListItem;
    Select: { type: typeof Select } & ISelect;
    Toggle: { type: typeof Toggle } & IToggle;
    Tree: { type: typeof Tree } & ITree;
    TreeItem: { type: typeof TreeItem } & ITreeItem;
}

export type visual =
    Visual[typeof Button] |
    Visual[typeof Divider] |
    Visual[typeof Field] |
    Visual[typeof Header] |
    Visual[typeof Link] |
    Visual[typeof List] |
    Visual[typeof ListItem] |
    Visual[typeof Select] |
    Visual[typeof Toggle] |
    Visual[typeof Tree] |
    Visual[typeof TreeItem];

export type renderer = (visual: visual) => ReactNode;
