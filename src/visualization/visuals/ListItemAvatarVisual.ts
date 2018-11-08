import { StandardVisual } from './StandardVisual';

export interface ListItemAvatarVisual extends StandardVisual<{}, ListItemAvatarClassKey> {}

export type ListItemAvatarClassKey = 'root' | 'icon';

declare const ListItemAvatar: React.ComponentType<ListItemAvatarProps>;

export default ListItemAvatar;
