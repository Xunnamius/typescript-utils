import type { PageConfig, NextPage, NextApiHandler } from 'next';

/**
 * This type is used to show a NextPage or NextApiHandler exports a `Config`
 * object.
 */
export type WithConfig<T extends NextPage | NextApiHandler> = T & { config?: PageConfig };
