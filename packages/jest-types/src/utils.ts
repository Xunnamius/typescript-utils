import type { AnyFunction } from 'pkgverse/types/src';
import '@types/jest';

/**
 * Returns `fn` (via `jest.fn()`) wrapped with Jest mock type definitions.
 */
export function asMockedFunction<T extends AnyFunction = never>(): jest.MockedFunction<T>;
export function asMockedFunction<T extends AnyFunction>(fn: T): jest.MockedFunction<T>;
export function asMockedFunction<T extends AnyFunction>(fn?: T): jest.MockedFunction<T> {
  return (fn || jest.fn()) as unknown as jest.MockedFunction<T>;
}