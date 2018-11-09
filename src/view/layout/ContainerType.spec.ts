import ContainerType, {
    AbsoluteTypeName,
    AccordionTypeName,
    AnchorTypeName,
    AutoTypeName,
    BorderTypeName,
    BoxTypeName,
    CardTypeName,
    CheckboxGroupTypeName,
    ColumnTypeName,
    ContainerTypeName,
    FitTypeName,
    FormTypeName,
    HBoxTypeName,
    TableTypeName,
    VBoxTypeName
} from './index';

function testType(layout: ContainerType[keyof ContainerType]) {
    switch (layout.type) {
        case AbsoluteTypeName:
            return 'Absolute';
        case AccordionTypeName:
            return 'Accordion';
        case AnchorTypeName:
            return 'Anchor';
        case AutoTypeName:
            return 'Auto';
        case BorderTypeName:
            return 'Border';
        case BoxTypeName:
            return 'Box';
        case CardTypeName:
            return 'Card';
        case CheckboxGroupTypeName:
            return 'CheckboxGroup';
        case ColumnTypeName:
            return 'Column';
        case ContainerTypeName:
            return 'Container';
        case FitTypeName:
            return 'Fit';
        case FormTypeName:
            return 'Form';
        case HBoxTypeName:
            return 'HBox';
        case TableTypeName:
            return 'Table';
        case VBoxTypeName:
            return 'VBox';
    }
}

describe('layout with correct type name', () => {
    expect(testType({ type: 'Absolute' })).toEqual('Absolute');
    expect(testType({ type: 'Accordion' })).toEqual('Accordion');
    expect(testType({ type: 'Anchor' })).toEqual('Anchor');
    expect(testType({ type: 'Auto' })).toEqual('Auto');
    expect(testType({ type: 'Box' })).toEqual('Box');
    expect(testType({ type: 'Card' })).toEqual('Card');
    expect(testType({ type: 'CheckboxGroup' })).toEqual('CheckboxGroup');
    expect(testType({ type: 'Fit' })).toEqual('Fit');
    expect(testType({ type: 'Form' })).toEqual('Form');
    expect(testType({ type: 'HBox' })).toEqual('HBox');
    expect(testType({ type: 'Table' })).toEqual('Table');
    expect(testType({ type: 'VBox' })).toEqual('VBox');
});