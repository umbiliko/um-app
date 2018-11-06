import { ReactInstance } from 'react';
import { AppBarVisual } from './AppBarVisual';
import { AvatarVisual } from './AvatarVisual';
import { BackdropVisual } from './BackdropVisual';
import { BadgeVisual } from './BadgeVisual';
import { BottomNavigationActionVisual } from './BottomNavigationActionVisual';
import { BottomNavigationVisual } from './BottomNavigationVisual';
import { ButtonVisual } from './ButtonVisual';
import { CardActionAreaVisual } from './CardActionAreaVisual';
import { CardActionsVisual } from './CardActionsVisual';
import { CardContentVisual } from './CardContentVisual';
import { CardHeaderVisual } from './CardHeaderVisual';
import { CardMediaVisual } from './CardMediaVisual';
import { CardVisual } from './CardVisual';
import { CheckboxVisual } from './CheckboxVisual';
import { ChipVisual } from './ChipVisual';
import { CircularProgressVisual } from './CircularProgressVisual';
import { CollapseVisual } from './CollapseVisual';
import { DialogActionsVisual } from './DialogActionsVisual';
import { DialogContentVisual } from './DialogContentVisual';
import { DialogContentTextVisual } from './DialogContentTextVisual';
import { DialogTitleVisual } from './DialogTitleVisual';
import { DialogVisual } from './DialogVisual';
import { DividerVisual } from './DividerVisual';
import { DrawerVisual } from './DrawerVisual';
import { FadeVisual } from './FadeVisual';

import { PaperVisual } from './PaperVisual';

import { TypographyVisual } from './TypographyVisual';

export const AppBar = 'AppBar';
export const Avatar = 'Avatar';
export const Backdrop = 'Backdrop';
export const Badge = 'Badge';
export const BottomNavigationAction = 'BottomNavigationAction';
export const BottomNavigation = 'BottomNavigation';
export const Button = 'Button';
export const CardActionArea = 'CardActionArea';
export const CardActions = 'CardActions';
export const CardContent = 'CardContent';
export const CardHeader = 'CardHeader';
export const CardMedia = 'CardMedia';
export const Card = 'Card';
export const Checkbox = 'Checkbox';
export const Chip = 'Chip';
export const CircularProgress = 'CircularProgress';
export const Collapse = 'Collapse';
export const Controls = 'Controls';
export const DialogActions = 'DialogActions';
export const DialogContent = 'DialogContent';
export const DialogContentText = 'DialogContentText';
export const DialogTitle = 'DialogTitle';
export const Dialog  = 'Dialog';
export const Divider = './Divider';
export const Drawer = 'Drawer';

export const Fade = 'Fade';

export const Paper = 'Paper';

export const Typography = 'Typography';

export interface Visual {
    AppBar: AppBarVisual & {
        type: typeof AppBar;
    };
    Avatar: AvatarVisual & {
        type: typeof Avatar;
    };
    Backdrop: BackdropVisual & {
        type: typeof Backdrop;
    };
    Badge: BadgeVisual & {
        type: typeof Badge;
    },
    BottomNavigationAction: BottomNavigationActionVisual & {
        type: typeof BottomNavigationAction;
    };
    BottomNavigation: BottomNavigationVisual & {
        type: typeof BottomNavigation;
    };
    Button: ButtonVisual & {
        type: typeof Button;
    };
    CardActionArea: CardActionAreaVisual & {
        type: typeof CardActionArea;
    };
    CardActions: CardActionsVisual & {
        type: typeof CardActions;
    };
    CardContent: CardContentVisual & {
        type: typeof CardContent;
    };
    CardHeader: CardHeaderVisual & {
        type: typeof CardHeader;
    };
    CardMedia: CardMediaVisual & {
        type: typeof CardMedia;
    };
    Card: CardVisual & {
        type: typeof Card;
    };
    Checkbox: CheckboxVisual & {
        type: typeof Checkbox;
    };
    Chip: ChipVisual & {
        type: typeof Chip;
    };
    CircularProgress: CircularProgressVisual & {
        type: typeof CircularProgress;
    };
    Collapse: CollapseVisual & {
        type: typeof Collapse;
    };
    Controls: {
        type: typeof Controls;
    };
    DialogActions: DialogActionsVisual & {
        type: typeof DialogActions;
    };
    DialogContent: DialogContentVisual & {
        type: typeof DialogContent;
    };
    DialogContentText: DialogContentTextVisual & {
        type: typeof DialogContentText;
    };
    DialogTitle: DialogTitleVisual & {
        type: typeof DialogTitle;
    };
    Dialog: DialogVisual & {
        type: typeof Dialog;
    };
    Divider: DividerVisual & {
        type: typeof Divider;
    };
    Drawer: DrawerVisual & {
        type: typeof Drawer;
    };
    Fade: FadeVisual & {
        type: typeof Fade;
    };
    Paper: PaperVisual & {
        type: typeof Paper;
    };
    Typography: TypographyVisual & {
        type: typeof Typography;
    }
}

export type Presenter = (schema: {}, events: {}, root: Visual[keyof Visual]) => ReactInstance;