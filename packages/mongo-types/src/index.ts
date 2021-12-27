import type { HttpStatusCode, UnixEpochMs } from '@xunnamius/types';

// ? So typedoc-plugin-markdown can pick them up
export type { HttpStatusCode, UnixEpochMs };

/**
 * This string is guaranteed never to appear in dummy data generated during
 * tests. In production, this string can be used to represent a `null` or
 * non-existent token. This string cannot be used for authenticated HTTP access
 * to the API.
 */
export const NULL_BEARER_TOKEN = '00000000-0000-0000-0000-000000000000';

/**
 * This string is used by database initialization and activity simulation
 * scripts. This string cannot be used for authenticated HTTP access to the API.
 */
export const MACHINE_BEARER_TOKEN = '11111111-1111-1111-1111-111111111111';

/**
 * This string allows authenticated API access only when running in a test
 * environment (i.e. `NODE_ENV=test`). This string cannot be used for
 * authenticated HTTP access to the API in production.
 */
export const DUMMY_BEARER_TOKEN = '12349b61-83a7-4036-b060-213784b491';

/**
 * This string is guaranteed to be rate limited when running in a test
 * environment (i.e. `NODE_ENV=test`). This string cannot be used for
 * authenticated HTTP access to the API in production.
 */
export const BANNED_BEARER_TOKEN = 'banned-h54e-6rt7-gctfh-hrftdygct0';

/**
 * This string can be used to authenticate with local and non-production
 * deployments. This string cannot be used for authenticated HTTP access to the
 * API in production.
 */
export const DEV_BEARER_TOKEN = 'dev-xunn-dev-294a-536h-9751-rydmj';

/**
 * The shape of a basic credentials entry in the well-known "auth" collection.
 * **More complex credential types must extend from this base type.**
 */
export type InternalAuthEntry = {
  owner: { name: string };
  scheme: string;
  token: Record<string, unknown>;
};

/**
 * The shape of a bearer token entry in the well-known "auth" collection.
 */
export interface InternalAuthBearerEntry extends InternalAuthEntry {
  scheme: 'bearer';
  token: {
    bearer: string;
  };
}

/**
 * The shape of an entry in the well-known "request log" collection.
 */
export type InternalRequestLogEntry = {
  ip: string | null;
  header: string | null;
  route: string | null;
  method: string | null;
  resStatusCode: HttpStatusCode;
  createdAt: UnixEpochMs;
};

/**
 * The shape of an entry in the well-known "limited log" collection.
 */
export type InternalLimitedLogEntry =
  | {
      until: UnixEpochMs;
      ip: string | null;
      header?: never;
    }
  | {
      until: UnixEpochMs;
      ip?: never;
      header: string | null;
    };
