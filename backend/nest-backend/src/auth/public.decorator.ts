import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

/** Skip JWT when used on a handler or controller class. */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
