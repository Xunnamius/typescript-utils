import type { AnyFunction } from '@xunnamius/types';
// ? Pull in jest type definitions without importing jest or causing errors

/**
 * Returns `fn` (via `jest.fn()`) wrapped with Jest mock type definitions.
 */
export function asMockedFunction<T extends AnyFunction = never>(): jest.MockedFunction<T>;
export function asMockedFunction<T extends AnyFunction>(fn: T): jest.MockedFunction<T>;
export function asMockedFunction<T extends AnyFunction>(fn?: T): jest.MockedFunction<T> {
  return (fn || jest.fn()) as unknown as jest.MockedFunction<T>;
}

/**
 * Returns `classConstructor` (via `jest.fn()`) wrapped with Jest mock type
 * definitions.
 */
export function asMockedClass<
  T extends jest.Constructable = never
>(): jest.MockedClass<T>;
export function asMockedClass<T extends jest.Constructable>(
  constructor: T
): jest.MockedClass<T>;
export function asMockedClass<T extends jest.Constructable>(
  constructor?: T
): jest.MockedClass<T> {
  return (constructor || jest.fn()) as unknown as jest.MockedClass<T>;
}
