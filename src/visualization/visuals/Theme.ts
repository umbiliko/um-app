/*import {Shape, ShapeOptions} from "../material-ui/shape";
import {Breakpoints, BreakpointsOptions} from "../material-ui/createBreakpoints";
import {Mixins, MixinsOptions} from "../material-ui/createMixins";
import {Overrides} from "../material-ui/overrides";
import {ComponentsProps} from "../material-ui/props";
import {Shadows} from "../material-ui/shadows";
import {Spacing, SpacingOptions} from "../material-ui/spacing";
import {Transitions, TransitionsOptions} from "../material-ui/transitions";
import {Typography, TypographyOptions} from "../material-ui/createTypography";
import {ZIndex, ZIndexOptions} from "../material-ui/zIndex";*/
import { Palette, PaletteOptions } from './Palette';
import { TypographyVisual, TypographyOptions } from './TypographyVisual';

export type Direction = 'ltr' | 'rtl';

export interface ThemeOptions {
    // shape?: ShapeOptions;
    // breakpoints?: BreakpointsOptions;
    direction?: Direction;
    // mixins?: MixinsOptions;
    // overrides?: Overrides;
    palette?: PaletteOptions;
    // props?: ComponentsProps;
    // shadows?: Shadows;
    // spacing?: SpacingOptions;
    // transitions?: TransitionsOptions;
    typography?: TypographyOptions;
    // zIndex?: ZIndexOptions;
}

export interface Theme {
    // shape: Shape;
    // breakpoints: Breakpoints;
    direction: Direction;
    // mixins: Mixins;
    // overrides?: Overrides;
    palette: Palette;
    // props?: ComponentsProps;
    // shadows: Shadows;
    // spacing: Spacing;
    // transitions: Transitions;
    typography: TypographyVisual;
    // zIndex: ZIndex;
}