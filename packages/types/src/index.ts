import type { JsonObject } from 'type-fest';

/**
 * `JSON.parse()` by default cannot serialize and deserialize regular
 * expressions. With ES6, regular expressions can be represented by their
 * `source` and `flags` properties. This type represents a serialized regular
 * expression with respect to those properties.
 */
export type JsonRegExp = { source: string; flags?: string };

/**
 * Generic success JSON result object.
 */
export type JsonSuccess = JsonObject & { success: true };

/**
 * Generic failure JSON result object.
 */
export type JsonError = JsonObject & { message: string; success: false };

/**
 * All valid HTTP status codes and several bespoke ones, including the
 * non-existent HTTP status code 555.
 */
export type HttpStatusCode =
  | 100
  | 101
  | 102
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 419
  | 420
  | 420
  | 422
  | 423
  | 424
  | 424
  | 425
  | 426
  | 428
  | 429
  | 431
  | 444
  | 449
  | 450
  | 451
  | 451
  | 494
  | 495
  | 496
  | 497
  | 499
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 509
  | 510
  | 511
  | 555
  | 598
  | 599;
