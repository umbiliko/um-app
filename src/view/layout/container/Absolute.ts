import Layout from './Anchor';

export interface Absolute {
    // This configuation option is to be applied to child items of a container managed by this layout (ie. configured
    // with layout:'anchor').
    // This value is what tells the layout how an item should be anchored to the container. items added to an
    // AnchorLayout accept an anchoring-specific config property of anchor which is a string containing two values: the
    // horizontal anchor value and the vertical anchor value (for example, '100% 50%'). The following types of anchor
    // values are supported:
    //
    // * Percentage : Any value between 1 and 100, expressed as a percentage.
    // The first anchor is the percentage width that the item should take up within the container, and the second is the
    // percentage height.
    //
    // * Offsets : Any positive or negative integer value.
    // his is a raw adjustment where the first anchor is the offset from the right edge of the container, and the second
    // is the offset from the bottom edge.
    //
    // * Sides : Valid values are right (or r) and bottom (or b)
    // Either the container must have a fixed size or an anchorSize config value defined at render time in order for
    // these to have any effect.
    //
    // * Mixed
    // Anchor values can also be mixed as needed. For example, to render the width offset from the container right edge
    // by 50 pixels and 75% of the container's height use:
    anchor?: string;

    // Default anchor for all child container items applied if no anchor or specific width is set on the child item.
    defaultAnchor?: string;

    // True indicates that changes to one item in this layout do not effect the layout in general. This may need to be
    // set to false if Ext.Component.autoScroll is enabled for the container.
    //
    // Defaults to: true
    ignoreOnContextChange?: boolean;

    // An optional extra CSS class that will be added to the container. This can be useful for adding customized styles
    // to the container or any of its children using standard CSS rules.
    // Defaults to: undefined
    itemCls?: string;

    // Set to true to leave space for a vertical scrollbar (if the OS shows space-consuming scrollbars) regardless of
    // whether a scrollbar is needed.
    //
    // This is useful if content height changes during application usage, but you do not want the calculated width of
    // child items to change when a scrollbar appears or disappears. The scrollbar will appear in the reserved space,
    // and the calculated width of child Components will not change.
    reserveScrollbar?: boolean;
}

export const AbsoluteTypeName = 'Absolute';

export default interface AbsoluteLayout extends Absolute, Omit<Layout, 'type'> {
    type: typeof AbsoluteTypeName;
}
