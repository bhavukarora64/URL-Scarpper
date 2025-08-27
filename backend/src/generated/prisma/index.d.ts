
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model headings
 * 
 */
export type headings = $Result.DefaultSelection<Prisma.$headingsPayload>
/**
 * Model links
 * 
 */
export type links = $Result.DefaultSelection<Prisma.$linksPayload>
/**
 * Model url_analyses
 * 
 */
export type url_analyses = $Result.DefaultSelection<Prisma.$url_analysesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const links_type: {
  internal: 'internal',
  external: 'external',
  broken: 'broken'
};

export type links_type = (typeof links_type)[keyof typeof links_type]

}

export type links_type = $Enums.links_type

export const links_type: typeof $Enums.links_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Headings
 * const headings = await prisma.headings.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Headings
   * const headings = await prisma.headings.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.headings`: Exposes CRUD operations for the **headings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Headings
    * const headings = await prisma.headings.findMany()
    * ```
    */
  get headings(): Prisma.headingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.links`: Exposes CRUD operations for the **links** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.links.findMany()
    * ```
    */
  get links(): Prisma.linksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.url_analyses`: Exposes CRUD operations for the **url_analyses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Url_analyses
    * const url_analyses = await prisma.url_analyses.findMany()
    * ```
    */
  get url_analyses(): Prisma.url_analysesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    headings: 'headings',
    links: 'links',
    url_analyses: 'url_analyses',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "headings" | "links" | "url_analyses" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      headings: {
        payload: Prisma.$headingsPayload<ExtArgs>
        fields: Prisma.headingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.headingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.headingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>
          }
          findFirst: {
            args: Prisma.headingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.headingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>
          }
          findMany: {
            args: Prisma.headingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>[]
          }
          create: {
            args: Prisma.headingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>
          }
          createMany: {
            args: Prisma.headingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.headingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>
          }
          update: {
            args: Prisma.headingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>
          }
          deleteMany: {
            args: Prisma.headingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.headingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.headingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>
          }
          aggregate: {
            args: Prisma.HeadingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeadings>
          }
          groupBy: {
            args: Prisma.headingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeadingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.headingsCountArgs<ExtArgs>
            result: $Utils.Optional<HeadingsCountAggregateOutputType> | number
          }
        }
      }
      links: {
        payload: Prisma.$linksPayload<ExtArgs>
        fields: Prisma.linksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.linksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.linksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload>
          }
          findFirst: {
            args: Prisma.linksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.linksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload>
          }
          findMany: {
            args: Prisma.linksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload>[]
          }
          create: {
            args: Prisma.linksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload>
          }
          createMany: {
            args: Prisma.linksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.linksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload>
          }
          update: {
            args: Prisma.linksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload>
          }
          deleteMany: {
            args: Prisma.linksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.linksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.linksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload>
          }
          aggregate: {
            args: Prisma.LinksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinks>
          }
          groupBy: {
            args: Prisma.linksGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinksGroupByOutputType>[]
          }
          count: {
            args: Prisma.linksCountArgs<ExtArgs>
            result: $Utils.Optional<LinksCountAggregateOutputType> | number
          }
        }
      }
      url_analyses: {
        payload: Prisma.$url_analysesPayload<ExtArgs>
        fields: Prisma.url_analysesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.url_analysesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_analysesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.url_analysesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_analysesPayload>
          }
          findFirst: {
            args: Prisma.url_analysesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_analysesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.url_analysesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_analysesPayload>
          }
          findMany: {
            args: Prisma.url_analysesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_analysesPayload>[]
          }
          create: {
            args: Prisma.url_analysesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_analysesPayload>
          }
          createMany: {
            args: Prisma.url_analysesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.url_analysesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_analysesPayload>
          }
          update: {
            args: Prisma.url_analysesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_analysesPayload>
          }
          deleteMany: {
            args: Prisma.url_analysesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.url_analysesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.url_analysesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_analysesPayload>
          }
          aggregate: {
            args: Prisma.Url_analysesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrl_analyses>
          }
          groupBy: {
            args: Prisma.url_analysesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Url_analysesGroupByOutputType>[]
          }
          count: {
            args: Prisma.url_analysesCountArgs<ExtArgs>
            result: $Utils.Optional<Url_analysesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    headings?: headingsOmit
    links?: linksOmit
    url_analyses?: url_analysesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Url_analysesCountOutputType
   */

  export type Url_analysesCountOutputType = {
    headings: number
    links: number
  }

  export type Url_analysesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    headings?: boolean | Url_analysesCountOutputTypeCountHeadingsArgs
    links?: boolean | Url_analysesCountOutputTypeCountLinksArgs
  }

  // Custom InputTypes
  /**
   * Url_analysesCountOutputType without action
   */
  export type Url_analysesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url_analysesCountOutputType
     */
    select?: Url_analysesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Url_analysesCountOutputType without action
   */
  export type Url_analysesCountOutputTypeCountHeadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: headingsWhereInput
  }

  /**
   * Url_analysesCountOutputType without action
   */
  export type Url_analysesCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: linksWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    url_analyses: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url_analyses?: boolean | UsersCountOutputTypeCountUrl_analysesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUrl_analysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: url_analysesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model headings
   */

  export type AggregateHeadings = {
    _count: HeadingsCountAggregateOutputType | null
    _avg: HeadingsAvgAggregateOutputType | null
    _sum: HeadingsSumAggregateOutputType | null
    _min: HeadingsMinAggregateOutputType | null
    _max: HeadingsMaxAggregateOutputType | null
  }

  export type HeadingsAvgAggregateOutputType = {
    id: number | null
    analysis_id: number | null
    h1: number | null
    h2: number | null
    h3: number | null
    h4: number | null
    h5: number | null
    h6: number | null
  }

  export type HeadingsSumAggregateOutputType = {
    id: number | null
    analysis_id: number | null
    h1: number | null
    h2: number | null
    h3: number | null
    h4: number | null
    h5: number | null
    h6: number | null
  }

  export type HeadingsMinAggregateOutputType = {
    id: number | null
    analysis_id: number | null
    h1: number | null
    h2: number | null
    h3: number | null
    h4: number | null
    h5: number | null
    h6: number | null
  }

  export type HeadingsMaxAggregateOutputType = {
    id: number | null
    analysis_id: number | null
    h1: number | null
    h2: number | null
    h3: number | null
    h4: number | null
    h5: number | null
    h6: number | null
  }

  export type HeadingsCountAggregateOutputType = {
    id: number
    analysis_id: number
    h1: number
    h2: number
    h3: number
    h4: number
    h5: number
    h6: number
    _all: number
  }


  export type HeadingsAvgAggregateInputType = {
    id?: true
    analysis_id?: true
    h1?: true
    h2?: true
    h3?: true
    h4?: true
    h5?: true
    h6?: true
  }

  export type HeadingsSumAggregateInputType = {
    id?: true
    analysis_id?: true
    h1?: true
    h2?: true
    h3?: true
    h4?: true
    h5?: true
    h6?: true
  }

  export type HeadingsMinAggregateInputType = {
    id?: true
    analysis_id?: true
    h1?: true
    h2?: true
    h3?: true
    h4?: true
    h5?: true
    h6?: true
  }

  export type HeadingsMaxAggregateInputType = {
    id?: true
    analysis_id?: true
    h1?: true
    h2?: true
    h3?: true
    h4?: true
    h5?: true
    h6?: true
  }

  export type HeadingsCountAggregateInputType = {
    id?: true
    analysis_id?: true
    h1?: true
    h2?: true
    h3?: true
    h4?: true
    h5?: true
    h6?: true
    _all?: true
  }

  export type HeadingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which headings to aggregate.
     */
    where?: headingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of headings to fetch.
     */
    orderBy?: headingsOrderByWithRelationInput | headingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: headingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` headings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned headings
    **/
    _count?: true | HeadingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeadingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeadingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeadingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeadingsMaxAggregateInputType
  }

  export type GetHeadingsAggregateType<T extends HeadingsAggregateArgs> = {
        [P in keyof T & keyof AggregateHeadings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeadings[P]>
      : GetScalarType<T[P], AggregateHeadings[P]>
  }




  export type headingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: headingsWhereInput
    orderBy?: headingsOrderByWithAggregationInput | headingsOrderByWithAggregationInput[]
    by: HeadingsScalarFieldEnum[] | HeadingsScalarFieldEnum
    having?: headingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeadingsCountAggregateInputType | true
    _avg?: HeadingsAvgAggregateInputType
    _sum?: HeadingsSumAggregateInputType
    _min?: HeadingsMinAggregateInputType
    _max?: HeadingsMaxAggregateInputType
  }

  export type HeadingsGroupByOutputType = {
    id: number
    analysis_id: number
    h1: number | null
    h2: number | null
    h3: number | null
    h4: number | null
    h5: number | null
    h6: number | null
    _count: HeadingsCountAggregateOutputType | null
    _avg: HeadingsAvgAggregateOutputType | null
    _sum: HeadingsSumAggregateOutputType | null
    _min: HeadingsMinAggregateOutputType | null
    _max: HeadingsMaxAggregateOutputType | null
  }

  type GetHeadingsGroupByPayload<T extends headingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeadingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeadingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeadingsGroupByOutputType[P]>
            : GetScalarType<T[P], HeadingsGroupByOutputType[P]>
        }
      >
    >


  export type headingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysis_id?: boolean
    h1?: boolean
    h2?: boolean
    h3?: boolean
    h4?: boolean
    h5?: boolean
    h6?: boolean
    url_analyses?: boolean | url_analysesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headings"]>



  export type headingsSelectScalar = {
    id?: boolean
    analysis_id?: boolean
    h1?: boolean
    h2?: boolean
    h3?: boolean
    h4?: boolean
    h5?: boolean
    h6?: boolean
  }

  export type headingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "analysis_id" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6", ExtArgs["result"]["headings"]>
  export type headingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url_analyses?: boolean | url_analysesDefaultArgs<ExtArgs>
  }

  export type $headingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "headings"
    objects: {
      url_analyses: Prisma.$url_analysesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      analysis_id: number
      h1: number | null
      h2: number | null
      h3: number | null
      h4: number | null
      h5: number | null
      h6: number | null
    }, ExtArgs["result"]["headings"]>
    composites: {}
  }

  type headingsGetPayload<S extends boolean | null | undefined | headingsDefaultArgs> = $Result.GetResult<Prisma.$headingsPayload, S>

  type headingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<headingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeadingsCountAggregateInputType | true
    }

  export interface headingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['headings'], meta: { name: 'headings' } }
    /**
     * Find zero or one Headings that matches the filter.
     * @param {headingsFindUniqueArgs} args - Arguments to find a Headings
     * @example
     * // Get one Headings
     * const headings = await prisma.headings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends headingsFindUniqueArgs>(args: SelectSubset<T, headingsFindUniqueArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Headings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {headingsFindUniqueOrThrowArgs} args - Arguments to find a Headings
     * @example
     * // Get one Headings
     * const headings = await prisma.headings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends headingsFindUniqueOrThrowArgs>(args: SelectSubset<T, headingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Headings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {headingsFindFirstArgs} args - Arguments to find a Headings
     * @example
     * // Get one Headings
     * const headings = await prisma.headings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends headingsFindFirstArgs>(args?: SelectSubset<T, headingsFindFirstArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Headings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {headingsFindFirstOrThrowArgs} args - Arguments to find a Headings
     * @example
     * // Get one Headings
     * const headings = await prisma.headings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends headingsFindFirstOrThrowArgs>(args?: SelectSubset<T, headingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Headings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {headingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Headings
     * const headings = await prisma.headings.findMany()
     * 
     * // Get first 10 Headings
     * const headings = await prisma.headings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const headingsWithIdOnly = await prisma.headings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends headingsFindManyArgs>(args?: SelectSubset<T, headingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Headings.
     * @param {headingsCreateArgs} args - Arguments to create a Headings.
     * @example
     * // Create one Headings
     * const Headings = await prisma.headings.create({
     *   data: {
     *     // ... data to create a Headings
     *   }
     * })
     * 
     */
    create<T extends headingsCreateArgs>(args: SelectSubset<T, headingsCreateArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Headings.
     * @param {headingsCreateManyArgs} args - Arguments to create many Headings.
     * @example
     * // Create many Headings
     * const headings = await prisma.headings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends headingsCreateManyArgs>(args?: SelectSubset<T, headingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Headings.
     * @param {headingsDeleteArgs} args - Arguments to delete one Headings.
     * @example
     * // Delete one Headings
     * const Headings = await prisma.headings.delete({
     *   where: {
     *     // ... filter to delete one Headings
     *   }
     * })
     * 
     */
    delete<T extends headingsDeleteArgs>(args: SelectSubset<T, headingsDeleteArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Headings.
     * @param {headingsUpdateArgs} args - Arguments to update one Headings.
     * @example
     * // Update one Headings
     * const headings = await prisma.headings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends headingsUpdateArgs>(args: SelectSubset<T, headingsUpdateArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Headings.
     * @param {headingsDeleteManyArgs} args - Arguments to filter Headings to delete.
     * @example
     * // Delete a few Headings
     * const { count } = await prisma.headings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends headingsDeleteManyArgs>(args?: SelectSubset<T, headingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Headings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {headingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Headings
     * const headings = await prisma.headings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends headingsUpdateManyArgs>(args: SelectSubset<T, headingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Headings.
     * @param {headingsUpsertArgs} args - Arguments to update or create a Headings.
     * @example
     * // Update or create a Headings
     * const headings = await prisma.headings.upsert({
     *   create: {
     *     // ... data to create a Headings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Headings we want to update
     *   }
     * })
     */
    upsert<T extends headingsUpsertArgs>(args: SelectSubset<T, headingsUpsertArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Headings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {headingsCountArgs} args - Arguments to filter Headings to count.
     * @example
     * // Count the number of Headings
     * const count = await prisma.headings.count({
     *   where: {
     *     // ... the filter for the Headings we want to count
     *   }
     * })
    **/
    count<T extends headingsCountArgs>(
      args?: Subset<T, headingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeadingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Headings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeadingsAggregateArgs>(args: Subset<T, HeadingsAggregateArgs>): Prisma.PrismaPromise<GetHeadingsAggregateType<T>>

    /**
     * Group by Headings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {headingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends headingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: headingsGroupByArgs['orderBy'] }
        : { orderBy?: headingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, headingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeadingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the headings model
   */
  readonly fields: headingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for headings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__headingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    url_analyses<T extends url_analysesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, url_analysesDefaultArgs<ExtArgs>>): Prisma__url_analysesClient<$Result.GetResult<Prisma.$url_analysesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the headings model
   */
  interface headingsFieldRefs {
    readonly id: FieldRef<"headings", 'Int'>
    readonly analysis_id: FieldRef<"headings", 'Int'>
    readonly h1: FieldRef<"headings", 'Int'>
    readonly h2: FieldRef<"headings", 'Int'>
    readonly h3: FieldRef<"headings", 'Int'>
    readonly h4: FieldRef<"headings", 'Int'>
    readonly h5: FieldRef<"headings", 'Int'>
    readonly h6: FieldRef<"headings", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * headings findUnique
   */
  export type headingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: headingsInclude<ExtArgs> | null
    /**
     * Filter, which headings to fetch.
     */
    where: headingsWhereUniqueInput
  }

  /**
   * headings findUniqueOrThrow
   */
  export type headingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: headingsInclude<ExtArgs> | null
    /**
     * Filter, which headings to fetch.
     */
    where: headingsWhereUniqueInput
  }

  /**
   * headings findFirst
   */
  export type headingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: headingsInclude<ExtArgs> | null
    /**
     * Filter, which headings to fetch.
     */
    where?: headingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of headings to fetch.
     */
    orderBy?: headingsOrderByWithRelationInput | headingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for headings.
     */
    cursor?: headingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` headings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of headings.
     */
    distinct?: HeadingsScalarFieldEnum | HeadingsScalarFieldEnum[]
  }

  /**
   * headings findFirstOrThrow
   */
  export type headingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: headingsInclude<ExtArgs> | null
    /**
     * Filter, which headings to fetch.
     */
    where?: headingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of headings to fetch.
     */
    orderBy?: headingsOrderByWithRelationInput | headingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for headings.
     */
    cursor?: headingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` headings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of headings.
     */
    distinct?: HeadingsScalarFieldEnum | HeadingsScalarFieldEnum[]
  }

  /**
   * headings findMany
   */
  export type headingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: headingsInclude<ExtArgs> | null
    /**
     * Filter, which headings to fetch.
     */
    where?: headingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of headings to fetch.
     */
    orderBy?: headingsOrderByWithRelationInput | headingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing headings.
     */
    cursor?: headingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` headings.
     */
    skip?: number
    distinct?: HeadingsScalarFieldEnum | HeadingsScalarFieldEnum[]
  }

  /**
   * headings create
   */
  export type headingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: headingsInclude<ExtArgs> | null
    /**
     * The data needed to create a headings.
     */
    data: XOR<headingsCreateInput, headingsUncheckedCreateInput>
  }

  /**
   * headings createMany
   */
  export type headingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many headings.
     */
    data: headingsCreateManyInput | headingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * headings update
   */
  export type headingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: headingsInclude<ExtArgs> | null
    /**
     * The data needed to update a headings.
     */
    data: XOR<headingsUpdateInput, headingsUncheckedUpdateInput>
    /**
     * Choose, which headings to update.
     */
    where: headingsWhereUniqueInput
  }

  /**
   * headings updateMany
   */
  export type headingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update headings.
     */
    data: XOR<headingsUpdateManyMutationInput, headingsUncheckedUpdateManyInput>
    /**
     * Filter which headings to update
     */
    where?: headingsWhereInput
    /**
     * Limit how many headings to update.
     */
    limit?: number
  }

  /**
   * headings upsert
   */
  export type headingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: headingsInclude<ExtArgs> | null
    /**
     * The filter to search for the headings to update in case it exists.
     */
    where: headingsWhereUniqueInput
    /**
     * In case the headings found by the `where` argument doesn't exist, create a new headings with this data.
     */
    create: XOR<headingsCreateInput, headingsUncheckedCreateInput>
    /**
     * In case the headings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<headingsUpdateInput, headingsUncheckedUpdateInput>
  }

  /**
   * headings delete
   */
  export type headingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: headingsInclude<ExtArgs> | null
    /**
     * Filter which headings to delete.
     */
    where: headingsWhereUniqueInput
  }

  /**
   * headings deleteMany
   */
  export type headingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which headings to delete
     */
    where?: headingsWhereInput
    /**
     * Limit how many headings to delete.
     */
    limit?: number
  }

  /**
   * headings without action
   */
  export type headingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: headingsInclude<ExtArgs> | null
  }


  /**
   * Model links
   */

  export type AggregateLinks = {
    _count: LinksCountAggregateOutputType | null
    _avg: LinksAvgAggregateOutputType | null
    _sum: LinksSumAggregateOutputType | null
    _min: LinksMinAggregateOutputType | null
    _max: LinksMaxAggregateOutputType | null
  }

  export type LinksAvgAggregateOutputType = {
    id: number | null
    analysis_id: number | null
    status_code: number | null
  }

  export type LinksSumAggregateOutputType = {
    id: number | null
    analysis_id: number | null
    status_code: number | null
  }

  export type LinksMinAggregateOutputType = {
    id: number | null
    analysis_id: number | null
    url: string | null
    type: $Enums.links_type | null
    status_code: number | null
    error_type: string | null
  }

  export type LinksMaxAggregateOutputType = {
    id: number | null
    analysis_id: number | null
    url: string | null
    type: $Enums.links_type | null
    status_code: number | null
    error_type: string | null
  }

  export type LinksCountAggregateOutputType = {
    id: number
    analysis_id: number
    url: number
    type: number
    status_code: number
    error_type: number
    _all: number
  }


  export type LinksAvgAggregateInputType = {
    id?: true
    analysis_id?: true
    status_code?: true
  }

  export type LinksSumAggregateInputType = {
    id?: true
    analysis_id?: true
    status_code?: true
  }

  export type LinksMinAggregateInputType = {
    id?: true
    analysis_id?: true
    url?: true
    type?: true
    status_code?: true
    error_type?: true
  }

  export type LinksMaxAggregateInputType = {
    id?: true
    analysis_id?: true
    url?: true
    type?: true
    status_code?: true
    error_type?: true
  }

  export type LinksCountAggregateInputType = {
    id?: true
    analysis_id?: true
    url?: true
    type?: true
    status_code?: true
    error_type?: true
    _all?: true
  }

  export type LinksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which links to aggregate.
     */
    where?: linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of links to fetch.
     */
    orderBy?: linksOrderByWithRelationInput | linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned links
    **/
    _count?: true | LinksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinksMaxAggregateInputType
  }

  export type GetLinksAggregateType<T extends LinksAggregateArgs> = {
        [P in keyof T & keyof AggregateLinks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinks[P]>
      : GetScalarType<T[P], AggregateLinks[P]>
  }




  export type linksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: linksWhereInput
    orderBy?: linksOrderByWithAggregationInput | linksOrderByWithAggregationInput[]
    by: LinksScalarFieldEnum[] | LinksScalarFieldEnum
    having?: linksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinksCountAggregateInputType | true
    _avg?: LinksAvgAggregateInputType
    _sum?: LinksSumAggregateInputType
    _min?: LinksMinAggregateInputType
    _max?: LinksMaxAggregateInputType
  }

  export type LinksGroupByOutputType = {
    id: number
    analysis_id: number
    url: string
    type: $Enums.links_type
    status_code: number | null
    error_type: string | null
    _count: LinksCountAggregateOutputType | null
    _avg: LinksAvgAggregateOutputType | null
    _sum: LinksSumAggregateOutputType | null
    _min: LinksMinAggregateOutputType | null
    _max: LinksMaxAggregateOutputType | null
  }

  type GetLinksGroupByPayload<T extends linksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinksGroupByOutputType[P]>
            : GetScalarType<T[P], LinksGroupByOutputType[P]>
        }
      >
    >


  export type linksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysis_id?: boolean
    url?: boolean
    type?: boolean
    status_code?: boolean
    error_type?: boolean
    url_analyses?: boolean | url_analysesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["links"]>



  export type linksSelectScalar = {
    id?: boolean
    analysis_id?: boolean
    url?: boolean
    type?: boolean
    status_code?: boolean
    error_type?: boolean
  }

  export type linksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "analysis_id" | "url" | "type" | "status_code" | "error_type", ExtArgs["result"]["links"]>
  export type linksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url_analyses?: boolean | url_analysesDefaultArgs<ExtArgs>
  }

  export type $linksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "links"
    objects: {
      url_analyses: Prisma.$url_analysesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      analysis_id: number
      url: string
      type: $Enums.links_type
      status_code: number | null
      error_type: string | null
    }, ExtArgs["result"]["links"]>
    composites: {}
  }

  type linksGetPayload<S extends boolean | null | undefined | linksDefaultArgs> = $Result.GetResult<Prisma.$linksPayload, S>

  type linksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<linksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinksCountAggregateInputType | true
    }

  export interface linksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['links'], meta: { name: 'links' } }
    /**
     * Find zero or one Links that matches the filter.
     * @param {linksFindUniqueArgs} args - Arguments to find a Links
     * @example
     * // Get one Links
     * const links = await prisma.links.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends linksFindUniqueArgs>(args: SelectSubset<T, linksFindUniqueArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Links that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {linksFindUniqueOrThrowArgs} args - Arguments to find a Links
     * @example
     * // Get one Links
     * const links = await prisma.links.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends linksFindUniqueOrThrowArgs>(args: SelectSubset<T, linksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linksFindFirstArgs} args - Arguments to find a Links
     * @example
     * // Get one Links
     * const links = await prisma.links.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends linksFindFirstArgs>(args?: SelectSubset<T, linksFindFirstArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Links that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linksFindFirstOrThrowArgs} args - Arguments to find a Links
     * @example
     * // Get one Links
     * const links = await prisma.links.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends linksFindFirstOrThrowArgs>(args?: SelectSubset<T, linksFindFirstOrThrowArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.links.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.links.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linksWithIdOnly = await prisma.links.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends linksFindManyArgs>(args?: SelectSubset<T, linksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Links.
     * @param {linksCreateArgs} args - Arguments to create a Links.
     * @example
     * // Create one Links
     * const Links = await prisma.links.create({
     *   data: {
     *     // ... data to create a Links
     *   }
     * })
     * 
     */
    create<T extends linksCreateArgs>(args: SelectSubset<T, linksCreateArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {linksCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const links = await prisma.links.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends linksCreateManyArgs>(args?: SelectSubset<T, linksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Links.
     * @param {linksDeleteArgs} args - Arguments to delete one Links.
     * @example
     * // Delete one Links
     * const Links = await prisma.links.delete({
     *   where: {
     *     // ... filter to delete one Links
     *   }
     * })
     * 
     */
    delete<T extends linksDeleteArgs>(args: SelectSubset<T, linksDeleteArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Links.
     * @param {linksUpdateArgs} args - Arguments to update one Links.
     * @example
     * // Update one Links
     * const links = await prisma.links.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends linksUpdateArgs>(args: SelectSubset<T, linksUpdateArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {linksDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.links.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends linksDeleteManyArgs>(args?: SelectSubset<T, linksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const links = await prisma.links.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends linksUpdateManyArgs>(args: SelectSubset<T, linksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Links.
     * @param {linksUpsertArgs} args - Arguments to update or create a Links.
     * @example
     * // Update or create a Links
     * const links = await prisma.links.upsert({
     *   create: {
     *     // ... data to create a Links
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Links we want to update
     *   }
     * })
     */
    upsert<T extends linksUpsertArgs>(args: SelectSubset<T, linksUpsertArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linksCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.links.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends linksCountArgs>(
      args?: Subset<T, linksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinksAggregateArgs>(args: Subset<T, LinksAggregateArgs>): Prisma.PrismaPromise<GetLinksAggregateType<T>>

    /**
     * Group by Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends linksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: linksGroupByArgs['orderBy'] }
        : { orderBy?: linksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, linksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the links model
   */
  readonly fields: linksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for links.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__linksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    url_analyses<T extends url_analysesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, url_analysesDefaultArgs<ExtArgs>>): Prisma__url_analysesClient<$Result.GetResult<Prisma.$url_analysesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the links model
   */
  interface linksFieldRefs {
    readonly id: FieldRef<"links", 'Int'>
    readonly analysis_id: FieldRef<"links", 'Int'>
    readonly url: FieldRef<"links", 'String'>
    readonly type: FieldRef<"links", 'links_type'>
    readonly status_code: FieldRef<"links", 'Int'>
    readonly error_type: FieldRef<"links", 'String'>
  }
    

  // Custom InputTypes
  /**
   * links findUnique
   */
  export type linksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * Filter, which links to fetch.
     */
    where: linksWhereUniqueInput
  }

  /**
   * links findUniqueOrThrow
   */
  export type linksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * Filter, which links to fetch.
     */
    where: linksWhereUniqueInput
  }

  /**
   * links findFirst
   */
  export type linksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * Filter, which links to fetch.
     */
    where?: linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of links to fetch.
     */
    orderBy?: linksOrderByWithRelationInput | linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for links.
     */
    cursor?: linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of links.
     */
    distinct?: LinksScalarFieldEnum | LinksScalarFieldEnum[]
  }

  /**
   * links findFirstOrThrow
   */
  export type linksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * Filter, which links to fetch.
     */
    where?: linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of links to fetch.
     */
    orderBy?: linksOrderByWithRelationInput | linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for links.
     */
    cursor?: linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of links.
     */
    distinct?: LinksScalarFieldEnum | LinksScalarFieldEnum[]
  }

  /**
   * links findMany
   */
  export type linksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * Filter, which links to fetch.
     */
    where?: linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of links to fetch.
     */
    orderBy?: linksOrderByWithRelationInput | linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing links.
     */
    cursor?: linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` links.
     */
    skip?: number
    distinct?: LinksScalarFieldEnum | LinksScalarFieldEnum[]
  }

  /**
   * links create
   */
  export type linksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * The data needed to create a links.
     */
    data: XOR<linksCreateInput, linksUncheckedCreateInput>
  }

  /**
   * links createMany
   */
  export type linksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many links.
     */
    data: linksCreateManyInput | linksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * links update
   */
  export type linksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * The data needed to update a links.
     */
    data: XOR<linksUpdateInput, linksUncheckedUpdateInput>
    /**
     * Choose, which links to update.
     */
    where: linksWhereUniqueInput
  }

  /**
   * links updateMany
   */
  export type linksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update links.
     */
    data: XOR<linksUpdateManyMutationInput, linksUncheckedUpdateManyInput>
    /**
     * Filter which links to update
     */
    where?: linksWhereInput
    /**
     * Limit how many links to update.
     */
    limit?: number
  }

  /**
   * links upsert
   */
  export type linksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * The filter to search for the links to update in case it exists.
     */
    where: linksWhereUniqueInput
    /**
     * In case the links found by the `where` argument doesn't exist, create a new links with this data.
     */
    create: XOR<linksCreateInput, linksUncheckedCreateInput>
    /**
     * In case the links was found with the provided `where` argument, update it with this data.
     */
    update: XOR<linksUpdateInput, linksUncheckedUpdateInput>
  }

  /**
   * links delete
   */
  export type linksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * Filter which links to delete.
     */
    where: linksWhereUniqueInput
  }

  /**
   * links deleteMany
   */
  export type linksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which links to delete
     */
    where?: linksWhereInput
    /**
     * Limit how many links to delete.
     */
    limit?: number
  }

  /**
   * links without action
   */
  export type linksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
  }


  /**
   * Model url_analyses
   */

  export type AggregateUrl_analyses = {
    _count: Url_analysesCountAggregateOutputType | null
    _avg: Url_analysesAvgAggregateOutputType | null
    _sum: Url_analysesSumAggregateOutputType | null
    _min: Url_analysesMinAggregateOutputType | null
    _max: Url_analysesMaxAggregateOutputType | null
  }

  export type Url_analysesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    internal_links_count: number | null
    external_links_count: number | null
    broken_links_count: number | null
  }

  export type Url_analysesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    internal_links_count: number | null
    external_links_count: number | null
    broken_links_count: number | null
  }

  export type Url_analysesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    url: string | null
    title: string | null
    html_version: string | null
    login_form_present: boolean | null
    created_at: Date | null
    completed_at: Date | null
    internal_links_count: number | null
    external_links_count: number | null
    broken_links_count: number | null
  }

  export type Url_analysesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    url: string | null
    title: string | null
    html_version: string | null
    login_form_present: boolean | null
    created_at: Date | null
    completed_at: Date | null
    internal_links_count: number | null
    external_links_count: number | null
    broken_links_count: number | null
  }

  export type Url_analysesCountAggregateOutputType = {
    id: number
    user_id: number
    url: number
    title: number
    html_version: number
    login_form_present: number
    created_at: number
    completed_at: number
    internal_links_count: number
    external_links_count: number
    broken_links_count: number
    _all: number
  }


  export type Url_analysesAvgAggregateInputType = {
    id?: true
    user_id?: true
    internal_links_count?: true
    external_links_count?: true
    broken_links_count?: true
  }

  export type Url_analysesSumAggregateInputType = {
    id?: true
    user_id?: true
    internal_links_count?: true
    external_links_count?: true
    broken_links_count?: true
  }

  export type Url_analysesMinAggregateInputType = {
    id?: true
    user_id?: true
    url?: true
    title?: true
    html_version?: true
    login_form_present?: true
    created_at?: true
    completed_at?: true
    internal_links_count?: true
    external_links_count?: true
    broken_links_count?: true
  }

  export type Url_analysesMaxAggregateInputType = {
    id?: true
    user_id?: true
    url?: true
    title?: true
    html_version?: true
    login_form_present?: true
    created_at?: true
    completed_at?: true
    internal_links_count?: true
    external_links_count?: true
    broken_links_count?: true
  }

  export type Url_analysesCountAggregateInputType = {
    id?: true
    user_id?: true
    url?: true
    title?: true
    html_version?: true
    login_form_present?: true
    created_at?: true
    completed_at?: true
    internal_links_count?: true
    external_links_count?: true
    broken_links_count?: true
    _all?: true
  }

  export type Url_analysesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which url_analyses to aggregate.
     */
    where?: url_analysesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_analyses to fetch.
     */
    orderBy?: url_analysesOrderByWithRelationInput | url_analysesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: url_analysesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned url_analyses
    **/
    _count?: true | Url_analysesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Url_analysesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Url_analysesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Url_analysesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Url_analysesMaxAggregateInputType
  }

  export type GetUrl_analysesAggregateType<T extends Url_analysesAggregateArgs> = {
        [P in keyof T & keyof AggregateUrl_analyses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrl_analyses[P]>
      : GetScalarType<T[P], AggregateUrl_analyses[P]>
  }




  export type url_analysesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: url_analysesWhereInput
    orderBy?: url_analysesOrderByWithAggregationInput | url_analysesOrderByWithAggregationInput[]
    by: Url_analysesScalarFieldEnum[] | Url_analysesScalarFieldEnum
    having?: url_analysesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Url_analysesCountAggregateInputType | true
    _avg?: Url_analysesAvgAggregateInputType
    _sum?: Url_analysesSumAggregateInputType
    _min?: Url_analysesMinAggregateInputType
    _max?: Url_analysesMaxAggregateInputType
  }

  export type Url_analysesGroupByOutputType = {
    id: number
    user_id: number
    url: string
    title: string | null
    html_version: string | null
    login_form_present: boolean | null
    created_at: Date | null
    completed_at: Date | null
    internal_links_count: number | null
    external_links_count: number | null
    broken_links_count: number | null
    _count: Url_analysesCountAggregateOutputType | null
    _avg: Url_analysesAvgAggregateOutputType | null
    _sum: Url_analysesSumAggregateOutputType | null
    _min: Url_analysesMinAggregateOutputType | null
    _max: Url_analysesMaxAggregateOutputType | null
  }

  type GetUrl_analysesGroupByPayload<T extends url_analysesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Url_analysesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Url_analysesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Url_analysesGroupByOutputType[P]>
            : GetScalarType<T[P], Url_analysesGroupByOutputType[P]>
        }
      >
    >


  export type url_analysesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    url?: boolean
    title?: boolean
    html_version?: boolean
    login_form_present?: boolean
    created_at?: boolean
    completed_at?: boolean
    internal_links_count?: boolean
    external_links_count?: boolean
    broken_links_count?: boolean
    headings?: boolean | url_analyses$headingsArgs<ExtArgs>
    links?: boolean | url_analyses$linksArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Url_analysesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url_analyses"]>



  export type url_analysesSelectScalar = {
    id?: boolean
    user_id?: boolean
    url?: boolean
    title?: boolean
    html_version?: boolean
    login_form_present?: boolean
    created_at?: boolean
    completed_at?: boolean
    internal_links_count?: boolean
    external_links_count?: boolean
    broken_links_count?: boolean
  }

  export type url_analysesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "url" | "title" | "html_version" | "login_form_present" | "created_at" | "completed_at" | "internal_links_count" | "external_links_count" | "broken_links_count", ExtArgs["result"]["url_analyses"]>
  export type url_analysesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    headings?: boolean | url_analyses$headingsArgs<ExtArgs>
    links?: boolean | url_analyses$linksArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Url_analysesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $url_analysesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "url_analyses"
    objects: {
      headings: Prisma.$headingsPayload<ExtArgs>[]
      links: Prisma.$linksPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      url: string
      title: string | null
      html_version: string | null
      login_form_present: boolean | null
      created_at: Date | null
      completed_at: Date | null
      internal_links_count: number | null
      external_links_count: number | null
      broken_links_count: number | null
    }, ExtArgs["result"]["url_analyses"]>
    composites: {}
  }

  type url_analysesGetPayload<S extends boolean | null | undefined | url_analysesDefaultArgs> = $Result.GetResult<Prisma.$url_analysesPayload, S>

  type url_analysesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<url_analysesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Url_analysesCountAggregateInputType | true
    }

  export interface url_analysesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['url_analyses'], meta: { name: 'url_analyses' } }
    /**
     * Find zero or one Url_analyses that matches the filter.
     * @param {url_analysesFindUniqueArgs} args - Arguments to find a Url_analyses
     * @example
     * // Get one Url_analyses
     * const url_analyses = await prisma.url_analyses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends url_analysesFindUniqueArgs>(args: SelectSubset<T, url_analysesFindUniqueArgs<ExtArgs>>): Prisma__url_analysesClient<$Result.GetResult<Prisma.$url_analysesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Url_analyses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {url_analysesFindUniqueOrThrowArgs} args - Arguments to find a Url_analyses
     * @example
     * // Get one Url_analyses
     * const url_analyses = await prisma.url_analyses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends url_analysesFindUniqueOrThrowArgs>(args: SelectSubset<T, url_analysesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__url_analysesClient<$Result.GetResult<Prisma.$url_analysesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url_analyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_analysesFindFirstArgs} args - Arguments to find a Url_analyses
     * @example
     * // Get one Url_analyses
     * const url_analyses = await prisma.url_analyses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends url_analysesFindFirstArgs>(args?: SelectSubset<T, url_analysesFindFirstArgs<ExtArgs>>): Prisma__url_analysesClient<$Result.GetResult<Prisma.$url_analysesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url_analyses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_analysesFindFirstOrThrowArgs} args - Arguments to find a Url_analyses
     * @example
     * // Get one Url_analyses
     * const url_analyses = await prisma.url_analyses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends url_analysesFindFirstOrThrowArgs>(args?: SelectSubset<T, url_analysesFindFirstOrThrowArgs<ExtArgs>>): Prisma__url_analysesClient<$Result.GetResult<Prisma.$url_analysesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Url_analyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_analysesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Url_analyses
     * const url_analyses = await prisma.url_analyses.findMany()
     * 
     * // Get first 10 Url_analyses
     * const url_analyses = await prisma.url_analyses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const url_analysesWithIdOnly = await prisma.url_analyses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends url_analysesFindManyArgs>(args?: SelectSubset<T, url_analysesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$url_analysesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Url_analyses.
     * @param {url_analysesCreateArgs} args - Arguments to create a Url_analyses.
     * @example
     * // Create one Url_analyses
     * const Url_analyses = await prisma.url_analyses.create({
     *   data: {
     *     // ... data to create a Url_analyses
     *   }
     * })
     * 
     */
    create<T extends url_analysesCreateArgs>(args: SelectSubset<T, url_analysesCreateArgs<ExtArgs>>): Prisma__url_analysesClient<$Result.GetResult<Prisma.$url_analysesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Url_analyses.
     * @param {url_analysesCreateManyArgs} args - Arguments to create many Url_analyses.
     * @example
     * // Create many Url_analyses
     * const url_analyses = await prisma.url_analyses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends url_analysesCreateManyArgs>(args?: SelectSubset<T, url_analysesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Url_analyses.
     * @param {url_analysesDeleteArgs} args - Arguments to delete one Url_analyses.
     * @example
     * // Delete one Url_analyses
     * const Url_analyses = await prisma.url_analyses.delete({
     *   where: {
     *     // ... filter to delete one Url_analyses
     *   }
     * })
     * 
     */
    delete<T extends url_analysesDeleteArgs>(args: SelectSubset<T, url_analysesDeleteArgs<ExtArgs>>): Prisma__url_analysesClient<$Result.GetResult<Prisma.$url_analysesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Url_analyses.
     * @param {url_analysesUpdateArgs} args - Arguments to update one Url_analyses.
     * @example
     * // Update one Url_analyses
     * const url_analyses = await prisma.url_analyses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends url_analysesUpdateArgs>(args: SelectSubset<T, url_analysesUpdateArgs<ExtArgs>>): Prisma__url_analysesClient<$Result.GetResult<Prisma.$url_analysesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Url_analyses.
     * @param {url_analysesDeleteManyArgs} args - Arguments to filter Url_analyses to delete.
     * @example
     * // Delete a few Url_analyses
     * const { count } = await prisma.url_analyses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends url_analysesDeleteManyArgs>(args?: SelectSubset<T, url_analysesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Url_analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_analysesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Url_analyses
     * const url_analyses = await prisma.url_analyses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends url_analysesUpdateManyArgs>(args: SelectSubset<T, url_analysesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Url_analyses.
     * @param {url_analysesUpsertArgs} args - Arguments to update or create a Url_analyses.
     * @example
     * // Update or create a Url_analyses
     * const url_analyses = await prisma.url_analyses.upsert({
     *   create: {
     *     // ... data to create a Url_analyses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Url_analyses we want to update
     *   }
     * })
     */
    upsert<T extends url_analysesUpsertArgs>(args: SelectSubset<T, url_analysesUpsertArgs<ExtArgs>>): Prisma__url_analysesClient<$Result.GetResult<Prisma.$url_analysesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Url_analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_analysesCountArgs} args - Arguments to filter Url_analyses to count.
     * @example
     * // Count the number of Url_analyses
     * const count = await prisma.url_analyses.count({
     *   where: {
     *     // ... the filter for the Url_analyses we want to count
     *   }
     * })
    **/
    count<T extends url_analysesCountArgs>(
      args?: Subset<T, url_analysesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Url_analysesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Url_analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Url_analysesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Url_analysesAggregateArgs>(args: Subset<T, Url_analysesAggregateArgs>): Prisma.PrismaPromise<GetUrl_analysesAggregateType<T>>

    /**
     * Group by Url_analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_analysesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends url_analysesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: url_analysesGroupByArgs['orderBy'] }
        : { orderBy?: url_analysesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, url_analysesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrl_analysesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the url_analyses model
   */
  readonly fields: url_analysesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for url_analyses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__url_analysesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    headings<T extends url_analyses$headingsArgs<ExtArgs> = {}>(args?: Subset<T, url_analyses$headingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    links<T extends url_analyses$linksArgs<ExtArgs> = {}>(args?: Subset<T, url_analyses$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the url_analyses model
   */
  interface url_analysesFieldRefs {
    readonly id: FieldRef<"url_analyses", 'Int'>
    readonly user_id: FieldRef<"url_analyses", 'Int'>
    readonly url: FieldRef<"url_analyses", 'String'>
    readonly title: FieldRef<"url_analyses", 'String'>
    readonly html_version: FieldRef<"url_analyses", 'String'>
    readonly login_form_present: FieldRef<"url_analyses", 'Boolean'>
    readonly created_at: FieldRef<"url_analyses", 'DateTime'>
    readonly completed_at: FieldRef<"url_analyses", 'DateTime'>
    readonly internal_links_count: FieldRef<"url_analyses", 'Int'>
    readonly external_links_count: FieldRef<"url_analyses", 'Int'>
    readonly broken_links_count: FieldRef<"url_analyses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * url_analyses findUnique
   */
  export type url_analysesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_analyses
     */
    select?: url_analysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_analyses
     */
    omit?: url_analysesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_analysesInclude<ExtArgs> | null
    /**
     * Filter, which url_analyses to fetch.
     */
    where: url_analysesWhereUniqueInput
  }

  /**
   * url_analyses findUniqueOrThrow
   */
  export type url_analysesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_analyses
     */
    select?: url_analysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_analyses
     */
    omit?: url_analysesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_analysesInclude<ExtArgs> | null
    /**
     * Filter, which url_analyses to fetch.
     */
    where: url_analysesWhereUniqueInput
  }

  /**
   * url_analyses findFirst
   */
  export type url_analysesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_analyses
     */
    select?: url_analysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_analyses
     */
    omit?: url_analysesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_analysesInclude<ExtArgs> | null
    /**
     * Filter, which url_analyses to fetch.
     */
    where?: url_analysesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_analyses to fetch.
     */
    orderBy?: url_analysesOrderByWithRelationInput | url_analysesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for url_analyses.
     */
    cursor?: url_analysesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of url_analyses.
     */
    distinct?: Url_analysesScalarFieldEnum | Url_analysesScalarFieldEnum[]
  }

  /**
   * url_analyses findFirstOrThrow
   */
  export type url_analysesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_analyses
     */
    select?: url_analysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_analyses
     */
    omit?: url_analysesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_analysesInclude<ExtArgs> | null
    /**
     * Filter, which url_analyses to fetch.
     */
    where?: url_analysesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_analyses to fetch.
     */
    orderBy?: url_analysesOrderByWithRelationInput | url_analysesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for url_analyses.
     */
    cursor?: url_analysesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of url_analyses.
     */
    distinct?: Url_analysesScalarFieldEnum | Url_analysesScalarFieldEnum[]
  }

  /**
   * url_analyses findMany
   */
  export type url_analysesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_analyses
     */
    select?: url_analysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_analyses
     */
    omit?: url_analysesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_analysesInclude<ExtArgs> | null
    /**
     * Filter, which url_analyses to fetch.
     */
    where?: url_analysesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_analyses to fetch.
     */
    orderBy?: url_analysesOrderByWithRelationInput | url_analysesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing url_analyses.
     */
    cursor?: url_analysesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_analyses.
     */
    skip?: number
    distinct?: Url_analysesScalarFieldEnum | Url_analysesScalarFieldEnum[]
  }

  /**
   * url_analyses create
   */
  export type url_analysesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_analyses
     */
    select?: url_analysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_analyses
     */
    omit?: url_analysesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_analysesInclude<ExtArgs> | null
    /**
     * The data needed to create a url_analyses.
     */
    data: XOR<url_analysesCreateInput, url_analysesUncheckedCreateInput>
  }

  /**
   * url_analyses createMany
   */
  export type url_analysesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many url_analyses.
     */
    data: url_analysesCreateManyInput | url_analysesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * url_analyses update
   */
  export type url_analysesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_analyses
     */
    select?: url_analysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_analyses
     */
    omit?: url_analysesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_analysesInclude<ExtArgs> | null
    /**
     * The data needed to update a url_analyses.
     */
    data: XOR<url_analysesUpdateInput, url_analysesUncheckedUpdateInput>
    /**
     * Choose, which url_analyses to update.
     */
    where: url_analysesWhereUniqueInput
  }

  /**
   * url_analyses updateMany
   */
  export type url_analysesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update url_analyses.
     */
    data: XOR<url_analysesUpdateManyMutationInput, url_analysesUncheckedUpdateManyInput>
    /**
     * Filter which url_analyses to update
     */
    where?: url_analysesWhereInput
    /**
     * Limit how many url_analyses to update.
     */
    limit?: number
  }

  /**
   * url_analyses upsert
   */
  export type url_analysesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_analyses
     */
    select?: url_analysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_analyses
     */
    omit?: url_analysesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_analysesInclude<ExtArgs> | null
    /**
     * The filter to search for the url_analyses to update in case it exists.
     */
    where: url_analysesWhereUniqueInput
    /**
     * In case the url_analyses found by the `where` argument doesn't exist, create a new url_analyses with this data.
     */
    create: XOR<url_analysesCreateInput, url_analysesUncheckedCreateInput>
    /**
     * In case the url_analyses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<url_analysesUpdateInput, url_analysesUncheckedUpdateInput>
  }

  /**
   * url_analyses delete
   */
  export type url_analysesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_analyses
     */
    select?: url_analysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_analyses
     */
    omit?: url_analysesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_analysesInclude<ExtArgs> | null
    /**
     * Filter which url_analyses to delete.
     */
    where: url_analysesWhereUniqueInput
  }

  /**
   * url_analyses deleteMany
   */
  export type url_analysesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which url_analyses to delete
     */
    where?: url_analysesWhereInput
    /**
     * Limit how many url_analyses to delete.
     */
    limit?: number
  }

  /**
   * url_analyses.headings
   */
  export type url_analyses$headingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: headingsInclude<ExtArgs> | null
    where?: headingsWhereInput
    orderBy?: headingsOrderByWithRelationInput | headingsOrderByWithRelationInput[]
    cursor?: headingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HeadingsScalarFieldEnum | HeadingsScalarFieldEnum[]
  }

  /**
   * url_analyses.links
   */
  export type url_analyses$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    where?: linksWhereInput
    orderBy?: linksOrderByWithRelationInput | linksOrderByWithRelationInput[]
    cursor?: linksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinksScalarFieldEnum | LinksScalarFieldEnum[]
  }

  /**
   * url_analyses without action
   */
  export type url_analysesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_analyses
     */
    select?: url_analysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_analyses
     */
    omit?: url_analysesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_analysesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    name: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    name: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    name: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password_hash: string
    name: string | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    created_at?: boolean
    url_analyses?: boolean | users$url_analysesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "name" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url_analyses?: boolean | users$url_analysesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      url_analyses: Prisma.$url_analysesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password_hash: string
      name: string | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    url_analyses<T extends users$url_analysesArgs<ExtArgs> = {}>(args?: Subset<T, users$url_analysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$url_analysesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.url_analyses
   */
  export type users$url_analysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_analyses
     */
    select?: url_analysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_analyses
     */
    omit?: url_analysesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_analysesInclude<ExtArgs> | null
    where?: url_analysesWhereInput
    orderBy?: url_analysesOrderByWithRelationInput | url_analysesOrderByWithRelationInput[]
    cursor?: url_analysesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Url_analysesScalarFieldEnum | Url_analysesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const HeadingsScalarFieldEnum: {
    id: 'id',
    analysis_id: 'analysis_id',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6'
  };

  export type HeadingsScalarFieldEnum = (typeof HeadingsScalarFieldEnum)[keyof typeof HeadingsScalarFieldEnum]


  export const LinksScalarFieldEnum: {
    id: 'id',
    analysis_id: 'analysis_id',
    url: 'url',
    type: 'type',
    status_code: 'status_code',
    error_type: 'error_type'
  };

  export type LinksScalarFieldEnum = (typeof LinksScalarFieldEnum)[keyof typeof LinksScalarFieldEnum]


  export const Url_analysesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    url: 'url',
    title: 'title',
    html_version: 'html_version',
    login_form_present: 'login_form_present',
    created_at: 'created_at',
    completed_at: 'completed_at',
    internal_links_count: 'internal_links_count',
    external_links_count: 'external_links_count',
    broken_links_count: 'broken_links_count'
  };

  export type Url_analysesScalarFieldEnum = (typeof Url_analysesScalarFieldEnum)[keyof typeof Url_analysesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    name: 'name',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const linksOrderByRelevanceFieldEnum: {
    url: 'url',
    error_type: 'error_type'
  };

  export type linksOrderByRelevanceFieldEnum = (typeof linksOrderByRelevanceFieldEnum)[keyof typeof linksOrderByRelevanceFieldEnum]


  export const url_analysesOrderByRelevanceFieldEnum: {
    url: 'url',
    title: 'title',
    html_version: 'html_version'
  };

  export type url_analysesOrderByRelevanceFieldEnum = (typeof url_analysesOrderByRelevanceFieldEnum)[keyof typeof url_analysesOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    email: 'email',
    password_hash: 'password_hash',
    name: 'name'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'links_type'
   */
  export type Enumlinks_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'links_type'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type headingsWhereInput = {
    AND?: headingsWhereInput | headingsWhereInput[]
    OR?: headingsWhereInput[]
    NOT?: headingsWhereInput | headingsWhereInput[]
    id?: IntFilter<"headings"> | number
    analysis_id?: IntFilter<"headings"> | number
    h1?: IntNullableFilter<"headings"> | number | null
    h2?: IntNullableFilter<"headings"> | number | null
    h3?: IntNullableFilter<"headings"> | number | null
    h4?: IntNullableFilter<"headings"> | number | null
    h5?: IntNullableFilter<"headings"> | number | null
    h6?: IntNullableFilter<"headings"> | number | null
    url_analyses?: XOR<Url_analysesScalarRelationFilter, url_analysesWhereInput>
  }

  export type headingsOrderByWithRelationInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    h1?: SortOrderInput | SortOrder
    h2?: SortOrderInput | SortOrder
    h3?: SortOrderInput | SortOrder
    h4?: SortOrderInput | SortOrder
    h5?: SortOrderInput | SortOrder
    h6?: SortOrderInput | SortOrder
    url_analyses?: url_analysesOrderByWithRelationInput
  }

  export type headingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: headingsWhereInput | headingsWhereInput[]
    OR?: headingsWhereInput[]
    NOT?: headingsWhereInput | headingsWhereInput[]
    analysis_id?: IntFilter<"headings"> | number
    h1?: IntNullableFilter<"headings"> | number | null
    h2?: IntNullableFilter<"headings"> | number | null
    h3?: IntNullableFilter<"headings"> | number | null
    h4?: IntNullableFilter<"headings"> | number | null
    h5?: IntNullableFilter<"headings"> | number | null
    h6?: IntNullableFilter<"headings"> | number | null
    url_analyses?: XOR<Url_analysesScalarRelationFilter, url_analysesWhereInput>
  }, "id">

  export type headingsOrderByWithAggregationInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    h1?: SortOrderInput | SortOrder
    h2?: SortOrderInput | SortOrder
    h3?: SortOrderInput | SortOrder
    h4?: SortOrderInput | SortOrder
    h5?: SortOrderInput | SortOrder
    h6?: SortOrderInput | SortOrder
    _count?: headingsCountOrderByAggregateInput
    _avg?: headingsAvgOrderByAggregateInput
    _max?: headingsMaxOrderByAggregateInput
    _min?: headingsMinOrderByAggregateInput
    _sum?: headingsSumOrderByAggregateInput
  }

  export type headingsScalarWhereWithAggregatesInput = {
    AND?: headingsScalarWhereWithAggregatesInput | headingsScalarWhereWithAggregatesInput[]
    OR?: headingsScalarWhereWithAggregatesInput[]
    NOT?: headingsScalarWhereWithAggregatesInput | headingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"headings"> | number
    analysis_id?: IntWithAggregatesFilter<"headings"> | number
    h1?: IntNullableWithAggregatesFilter<"headings"> | number | null
    h2?: IntNullableWithAggregatesFilter<"headings"> | number | null
    h3?: IntNullableWithAggregatesFilter<"headings"> | number | null
    h4?: IntNullableWithAggregatesFilter<"headings"> | number | null
    h5?: IntNullableWithAggregatesFilter<"headings"> | number | null
    h6?: IntNullableWithAggregatesFilter<"headings"> | number | null
  }

  export type linksWhereInput = {
    AND?: linksWhereInput | linksWhereInput[]
    OR?: linksWhereInput[]
    NOT?: linksWhereInput | linksWhereInput[]
    id?: IntFilter<"links"> | number
    analysis_id?: IntFilter<"links"> | number
    url?: StringFilter<"links"> | string
    type?: Enumlinks_typeFilter<"links"> | $Enums.links_type
    status_code?: IntNullableFilter<"links"> | number | null
    error_type?: StringNullableFilter<"links"> | string | null
    url_analyses?: XOR<Url_analysesScalarRelationFilter, url_analysesWhereInput>
  }

  export type linksOrderByWithRelationInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    status_code?: SortOrderInput | SortOrder
    error_type?: SortOrderInput | SortOrder
    url_analyses?: url_analysesOrderByWithRelationInput
    _relevance?: linksOrderByRelevanceInput
  }

  export type linksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: linksWhereInput | linksWhereInput[]
    OR?: linksWhereInput[]
    NOT?: linksWhereInput | linksWhereInput[]
    analysis_id?: IntFilter<"links"> | number
    url?: StringFilter<"links"> | string
    type?: Enumlinks_typeFilter<"links"> | $Enums.links_type
    status_code?: IntNullableFilter<"links"> | number | null
    error_type?: StringNullableFilter<"links"> | string | null
    url_analyses?: XOR<Url_analysesScalarRelationFilter, url_analysesWhereInput>
  }, "id">

  export type linksOrderByWithAggregationInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    status_code?: SortOrderInput | SortOrder
    error_type?: SortOrderInput | SortOrder
    _count?: linksCountOrderByAggregateInput
    _avg?: linksAvgOrderByAggregateInput
    _max?: linksMaxOrderByAggregateInput
    _min?: linksMinOrderByAggregateInput
    _sum?: linksSumOrderByAggregateInput
  }

  export type linksScalarWhereWithAggregatesInput = {
    AND?: linksScalarWhereWithAggregatesInput | linksScalarWhereWithAggregatesInput[]
    OR?: linksScalarWhereWithAggregatesInput[]
    NOT?: linksScalarWhereWithAggregatesInput | linksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"links"> | number
    analysis_id?: IntWithAggregatesFilter<"links"> | number
    url?: StringWithAggregatesFilter<"links"> | string
    type?: Enumlinks_typeWithAggregatesFilter<"links"> | $Enums.links_type
    status_code?: IntNullableWithAggregatesFilter<"links"> | number | null
    error_type?: StringNullableWithAggregatesFilter<"links"> | string | null
  }

  export type url_analysesWhereInput = {
    AND?: url_analysesWhereInput | url_analysesWhereInput[]
    OR?: url_analysesWhereInput[]
    NOT?: url_analysesWhereInput | url_analysesWhereInput[]
    id?: IntFilter<"url_analyses"> | number
    user_id?: IntFilter<"url_analyses"> | number
    url?: StringFilter<"url_analyses"> | string
    title?: StringNullableFilter<"url_analyses"> | string | null
    html_version?: StringNullableFilter<"url_analyses"> | string | null
    login_form_present?: BoolNullableFilter<"url_analyses"> | boolean | null
    created_at?: DateTimeNullableFilter<"url_analyses"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"url_analyses"> | Date | string | null
    internal_links_count?: IntNullableFilter<"url_analyses"> | number | null
    external_links_count?: IntNullableFilter<"url_analyses"> | number | null
    broken_links_count?: IntNullableFilter<"url_analyses"> | number | null
    headings?: HeadingsListRelationFilter
    links?: LinksListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type url_analysesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    html_version?: SortOrderInput | SortOrder
    login_form_present?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    internal_links_count?: SortOrderInput | SortOrder
    external_links_count?: SortOrderInput | SortOrder
    broken_links_count?: SortOrderInput | SortOrder
    headings?: headingsOrderByRelationAggregateInput
    links?: linksOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    _relevance?: url_analysesOrderByRelevanceInput
  }

  export type url_analysesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: url_analysesWhereInput | url_analysesWhereInput[]
    OR?: url_analysesWhereInput[]
    NOT?: url_analysesWhereInput | url_analysesWhereInput[]
    user_id?: IntFilter<"url_analyses"> | number
    url?: StringFilter<"url_analyses"> | string
    title?: StringNullableFilter<"url_analyses"> | string | null
    html_version?: StringNullableFilter<"url_analyses"> | string | null
    login_form_present?: BoolNullableFilter<"url_analyses"> | boolean | null
    created_at?: DateTimeNullableFilter<"url_analyses"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"url_analyses"> | Date | string | null
    internal_links_count?: IntNullableFilter<"url_analyses"> | number | null
    external_links_count?: IntNullableFilter<"url_analyses"> | number | null
    broken_links_count?: IntNullableFilter<"url_analyses"> | number | null
    headings?: HeadingsListRelationFilter
    links?: LinksListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type url_analysesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    html_version?: SortOrderInput | SortOrder
    login_form_present?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    internal_links_count?: SortOrderInput | SortOrder
    external_links_count?: SortOrderInput | SortOrder
    broken_links_count?: SortOrderInput | SortOrder
    _count?: url_analysesCountOrderByAggregateInput
    _avg?: url_analysesAvgOrderByAggregateInput
    _max?: url_analysesMaxOrderByAggregateInput
    _min?: url_analysesMinOrderByAggregateInput
    _sum?: url_analysesSumOrderByAggregateInput
  }

  export type url_analysesScalarWhereWithAggregatesInput = {
    AND?: url_analysesScalarWhereWithAggregatesInput | url_analysesScalarWhereWithAggregatesInput[]
    OR?: url_analysesScalarWhereWithAggregatesInput[]
    NOT?: url_analysesScalarWhereWithAggregatesInput | url_analysesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"url_analyses"> | number
    user_id?: IntWithAggregatesFilter<"url_analyses"> | number
    url?: StringWithAggregatesFilter<"url_analyses"> | string
    title?: StringNullableWithAggregatesFilter<"url_analyses"> | string | null
    html_version?: StringNullableWithAggregatesFilter<"url_analyses"> | string | null
    login_form_present?: BoolNullableWithAggregatesFilter<"url_analyses"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"url_analyses"> | Date | string | null
    completed_at?: DateTimeNullableWithAggregatesFilter<"url_analyses"> | Date | string | null
    internal_links_count?: IntNullableWithAggregatesFilter<"url_analyses"> | number | null
    external_links_count?: IntNullableWithAggregatesFilter<"url_analyses"> | number | null
    broken_links_count?: IntNullableWithAggregatesFilter<"url_analyses"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    url_analyses?: Url_analysesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    url_analyses?: url_analysesOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    url_analyses?: Url_analysesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type headingsCreateInput = {
    h1?: number | null
    h2?: number | null
    h3?: number | null
    h4?: number | null
    h5?: number | null
    h6?: number | null
    url_analyses: url_analysesCreateNestedOneWithoutHeadingsInput
  }

  export type headingsUncheckedCreateInput = {
    id?: number
    analysis_id: number
    h1?: number | null
    h2?: number | null
    h3?: number | null
    h4?: number | null
    h5?: number | null
    h6?: number | null
  }

  export type headingsUpdateInput = {
    h1?: NullableIntFieldUpdateOperationsInput | number | null
    h2?: NullableIntFieldUpdateOperationsInput | number | null
    h3?: NullableIntFieldUpdateOperationsInput | number | null
    h4?: NullableIntFieldUpdateOperationsInput | number | null
    h5?: NullableIntFieldUpdateOperationsInput | number | null
    h6?: NullableIntFieldUpdateOperationsInput | number | null
    url_analyses?: url_analysesUpdateOneRequiredWithoutHeadingsNestedInput
  }

  export type headingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    analysis_id?: IntFieldUpdateOperationsInput | number
    h1?: NullableIntFieldUpdateOperationsInput | number | null
    h2?: NullableIntFieldUpdateOperationsInput | number | null
    h3?: NullableIntFieldUpdateOperationsInput | number | null
    h4?: NullableIntFieldUpdateOperationsInput | number | null
    h5?: NullableIntFieldUpdateOperationsInput | number | null
    h6?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type headingsCreateManyInput = {
    id?: number
    analysis_id: number
    h1?: number | null
    h2?: number | null
    h3?: number | null
    h4?: number | null
    h5?: number | null
    h6?: number | null
  }

  export type headingsUpdateManyMutationInput = {
    h1?: NullableIntFieldUpdateOperationsInput | number | null
    h2?: NullableIntFieldUpdateOperationsInput | number | null
    h3?: NullableIntFieldUpdateOperationsInput | number | null
    h4?: NullableIntFieldUpdateOperationsInput | number | null
    h5?: NullableIntFieldUpdateOperationsInput | number | null
    h6?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type headingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    analysis_id?: IntFieldUpdateOperationsInput | number
    h1?: NullableIntFieldUpdateOperationsInput | number | null
    h2?: NullableIntFieldUpdateOperationsInput | number | null
    h3?: NullableIntFieldUpdateOperationsInput | number | null
    h4?: NullableIntFieldUpdateOperationsInput | number | null
    h5?: NullableIntFieldUpdateOperationsInput | number | null
    h6?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type linksCreateInput = {
    url: string
    type: $Enums.links_type
    status_code?: number | null
    error_type?: string | null
    url_analyses: url_analysesCreateNestedOneWithoutLinksInput
  }

  export type linksUncheckedCreateInput = {
    id?: number
    analysis_id: number
    url: string
    type: $Enums.links_type
    status_code?: number | null
    error_type?: string | null
  }

  export type linksUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: Enumlinks_typeFieldUpdateOperationsInput | $Enums.links_type
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    error_type?: NullableStringFieldUpdateOperationsInput | string | null
    url_analyses?: url_analysesUpdateOneRequiredWithoutLinksNestedInput
  }

  export type linksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    analysis_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: Enumlinks_typeFieldUpdateOperationsInput | $Enums.links_type
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    error_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type linksCreateManyInput = {
    id?: number
    analysis_id: number
    url: string
    type: $Enums.links_type
    status_code?: number | null
    error_type?: string | null
  }

  export type linksUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: Enumlinks_typeFieldUpdateOperationsInput | $Enums.links_type
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    error_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type linksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    analysis_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: Enumlinks_typeFieldUpdateOperationsInput | $Enums.links_type
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    error_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type url_analysesCreateInput = {
    url: string
    title?: string | null
    html_version?: string | null
    login_form_present?: boolean | null
    created_at?: Date | string | null
    completed_at?: Date | string | null
    internal_links_count?: number | null
    external_links_count?: number | null
    broken_links_count?: number | null
    headings?: headingsCreateNestedManyWithoutUrl_analysesInput
    links?: linksCreateNestedManyWithoutUrl_analysesInput
    users: usersCreateNestedOneWithoutUrl_analysesInput
  }

  export type url_analysesUncheckedCreateInput = {
    id?: number
    user_id: number
    url: string
    title?: string | null
    html_version?: string | null
    login_form_present?: boolean | null
    created_at?: Date | string | null
    completed_at?: Date | string | null
    internal_links_count?: number | null
    external_links_count?: number | null
    broken_links_count?: number | null
    headings?: headingsUncheckedCreateNestedManyWithoutUrl_analysesInput
    links?: linksUncheckedCreateNestedManyWithoutUrl_analysesInput
  }

  export type url_analysesUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    html_version?: NullableStringFieldUpdateOperationsInput | string | null
    login_form_present?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    internal_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    external_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    broken_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    headings?: headingsUpdateManyWithoutUrl_analysesNestedInput
    links?: linksUpdateManyWithoutUrl_analysesNestedInput
    users?: usersUpdateOneRequiredWithoutUrl_analysesNestedInput
  }

  export type url_analysesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    html_version?: NullableStringFieldUpdateOperationsInput | string | null
    login_form_present?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    internal_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    external_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    broken_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    headings?: headingsUncheckedUpdateManyWithoutUrl_analysesNestedInput
    links?: linksUncheckedUpdateManyWithoutUrl_analysesNestedInput
  }

  export type url_analysesCreateManyInput = {
    id?: number
    user_id: number
    url: string
    title?: string | null
    html_version?: string | null
    login_form_present?: boolean | null
    created_at?: Date | string | null
    completed_at?: Date | string | null
    internal_links_count?: number | null
    external_links_count?: number | null
    broken_links_count?: number | null
  }

  export type url_analysesUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    html_version?: NullableStringFieldUpdateOperationsInput | string | null
    login_form_present?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    internal_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    external_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    broken_links_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type url_analysesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    html_version?: NullableStringFieldUpdateOperationsInput | string | null
    login_form_present?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    internal_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    external_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    broken_links_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string | null
    url_analyses?: url_analysesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string | null
    url_analyses?: url_analysesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url_analyses?: url_analysesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url_analyses?: url_analysesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Url_analysesScalarRelationFilter = {
    is?: url_analysesWhereInput
    isNot?: url_analysesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type headingsCountOrderByAggregateInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    h1?: SortOrder
    h2?: SortOrder
    h3?: SortOrder
    h4?: SortOrder
    h5?: SortOrder
    h6?: SortOrder
  }

  export type headingsAvgOrderByAggregateInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    h1?: SortOrder
    h2?: SortOrder
    h3?: SortOrder
    h4?: SortOrder
    h5?: SortOrder
    h6?: SortOrder
  }

  export type headingsMaxOrderByAggregateInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    h1?: SortOrder
    h2?: SortOrder
    h3?: SortOrder
    h4?: SortOrder
    h5?: SortOrder
    h6?: SortOrder
  }

  export type headingsMinOrderByAggregateInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    h1?: SortOrder
    h2?: SortOrder
    h3?: SortOrder
    h4?: SortOrder
    h5?: SortOrder
    h6?: SortOrder
  }

  export type headingsSumOrderByAggregateInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    h1?: SortOrder
    h2?: SortOrder
    h3?: SortOrder
    h4?: SortOrder
    h5?: SortOrder
    h6?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumlinks_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.links_type | Enumlinks_typeFieldRefInput<$PrismaModel>
    in?: $Enums.links_type[]
    notIn?: $Enums.links_type[]
    not?: NestedEnumlinks_typeFilter<$PrismaModel> | $Enums.links_type
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type linksOrderByRelevanceInput = {
    fields: linksOrderByRelevanceFieldEnum | linksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type linksCountOrderByAggregateInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    status_code?: SortOrder
    error_type?: SortOrder
  }

  export type linksAvgOrderByAggregateInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    status_code?: SortOrder
  }

  export type linksMaxOrderByAggregateInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    status_code?: SortOrder
    error_type?: SortOrder
  }

  export type linksMinOrderByAggregateInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    status_code?: SortOrder
    error_type?: SortOrder
  }

  export type linksSumOrderByAggregateInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    status_code?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumlinks_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.links_type | Enumlinks_typeFieldRefInput<$PrismaModel>
    in?: $Enums.links_type[]
    notIn?: $Enums.links_type[]
    not?: NestedEnumlinks_typeWithAggregatesFilter<$PrismaModel> | $Enums.links_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumlinks_typeFilter<$PrismaModel>
    _max?: NestedEnumlinks_typeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type HeadingsListRelationFilter = {
    every?: headingsWhereInput
    some?: headingsWhereInput
    none?: headingsWhereInput
  }

  export type LinksListRelationFilter = {
    every?: linksWhereInput
    some?: linksWhereInput
    none?: linksWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type headingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type linksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type url_analysesOrderByRelevanceInput = {
    fields: url_analysesOrderByRelevanceFieldEnum | url_analysesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type url_analysesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    html_version?: SortOrder
    login_form_present?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
    internal_links_count?: SortOrder
    external_links_count?: SortOrder
    broken_links_count?: SortOrder
  }

  export type url_analysesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    internal_links_count?: SortOrder
    external_links_count?: SortOrder
    broken_links_count?: SortOrder
  }

  export type url_analysesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    html_version?: SortOrder
    login_form_present?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
    internal_links_count?: SortOrder
    external_links_count?: SortOrder
    broken_links_count?: SortOrder
  }

  export type url_analysesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    html_version?: SortOrder
    login_form_present?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
    internal_links_count?: SortOrder
    external_links_count?: SortOrder
    broken_links_count?: SortOrder
  }

  export type url_analysesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    internal_links_count?: SortOrder
    external_links_count?: SortOrder
    broken_links_count?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Url_analysesListRelationFilter = {
    every?: url_analysesWhereInput
    some?: url_analysesWhereInput
    none?: url_analysesWhereInput
  }

  export type url_analysesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type url_analysesCreateNestedOneWithoutHeadingsInput = {
    create?: XOR<url_analysesCreateWithoutHeadingsInput, url_analysesUncheckedCreateWithoutHeadingsInput>
    connectOrCreate?: url_analysesCreateOrConnectWithoutHeadingsInput
    connect?: url_analysesWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type url_analysesUpdateOneRequiredWithoutHeadingsNestedInput = {
    create?: XOR<url_analysesCreateWithoutHeadingsInput, url_analysesUncheckedCreateWithoutHeadingsInput>
    connectOrCreate?: url_analysesCreateOrConnectWithoutHeadingsInput
    upsert?: url_analysesUpsertWithoutHeadingsInput
    connect?: url_analysesWhereUniqueInput
    update?: XOR<XOR<url_analysesUpdateToOneWithWhereWithoutHeadingsInput, url_analysesUpdateWithoutHeadingsInput>, url_analysesUncheckedUpdateWithoutHeadingsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type url_analysesCreateNestedOneWithoutLinksInput = {
    create?: XOR<url_analysesCreateWithoutLinksInput, url_analysesUncheckedCreateWithoutLinksInput>
    connectOrCreate?: url_analysesCreateOrConnectWithoutLinksInput
    connect?: url_analysesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumlinks_typeFieldUpdateOperationsInput = {
    set?: $Enums.links_type
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type url_analysesUpdateOneRequiredWithoutLinksNestedInput = {
    create?: XOR<url_analysesCreateWithoutLinksInput, url_analysesUncheckedCreateWithoutLinksInput>
    connectOrCreate?: url_analysesCreateOrConnectWithoutLinksInput
    upsert?: url_analysesUpsertWithoutLinksInput
    connect?: url_analysesWhereUniqueInput
    update?: XOR<XOR<url_analysesUpdateToOneWithWhereWithoutLinksInput, url_analysesUpdateWithoutLinksInput>, url_analysesUncheckedUpdateWithoutLinksInput>
  }

  export type headingsCreateNestedManyWithoutUrl_analysesInput = {
    create?: XOR<headingsCreateWithoutUrl_analysesInput, headingsUncheckedCreateWithoutUrl_analysesInput> | headingsCreateWithoutUrl_analysesInput[] | headingsUncheckedCreateWithoutUrl_analysesInput[]
    connectOrCreate?: headingsCreateOrConnectWithoutUrl_analysesInput | headingsCreateOrConnectWithoutUrl_analysesInput[]
    createMany?: headingsCreateManyUrl_analysesInputEnvelope
    connect?: headingsWhereUniqueInput | headingsWhereUniqueInput[]
  }

  export type linksCreateNestedManyWithoutUrl_analysesInput = {
    create?: XOR<linksCreateWithoutUrl_analysesInput, linksUncheckedCreateWithoutUrl_analysesInput> | linksCreateWithoutUrl_analysesInput[] | linksUncheckedCreateWithoutUrl_analysesInput[]
    connectOrCreate?: linksCreateOrConnectWithoutUrl_analysesInput | linksCreateOrConnectWithoutUrl_analysesInput[]
    createMany?: linksCreateManyUrl_analysesInputEnvelope
    connect?: linksWhereUniqueInput | linksWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutUrl_analysesInput = {
    create?: XOR<usersCreateWithoutUrl_analysesInput, usersUncheckedCreateWithoutUrl_analysesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUrl_analysesInput
    connect?: usersWhereUniqueInput
  }

  export type headingsUncheckedCreateNestedManyWithoutUrl_analysesInput = {
    create?: XOR<headingsCreateWithoutUrl_analysesInput, headingsUncheckedCreateWithoutUrl_analysesInput> | headingsCreateWithoutUrl_analysesInput[] | headingsUncheckedCreateWithoutUrl_analysesInput[]
    connectOrCreate?: headingsCreateOrConnectWithoutUrl_analysesInput | headingsCreateOrConnectWithoutUrl_analysesInput[]
    createMany?: headingsCreateManyUrl_analysesInputEnvelope
    connect?: headingsWhereUniqueInput | headingsWhereUniqueInput[]
  }

  export type linksUncheckedCreateNestedManyWithoutUrl_analysesInput = {
    create?: XOR<linksCreateWithoutUrl_analysesInput, linksUncheckedCreateWithoutUrl_analysesInput> | linksCreateWithoutUrl_analysesInput[] | linksUncheckedCreateWithoutUrl_analysesInput[]
    connectOrCreate?: linksCreateOrConnectWithoutUrl_analysesInput | linksCreateOrConnectWithoutUrl_analysesInput[]
    createMany?: linksCreateManyUrl_analysesInputEnvelope
    connect?: linksWhereUniqueInput | linksWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type headingsUpdateManyWithoutUrl_analysesNestedInput = {
    create?: XOR<headingsCreateWithoutUrl_analysesInput, headingsUncheckedCreateWithoutUrl_analysesInput> | headingsCreateWithoutUrl_analysesInput[] | headingsUncheckedCreateWithoutUrl_analysesInput[]
    connectOrCreate?: headingsCreateOrConnectWithoutUrl_analysesInput | headingsCreateOrConnectWithoutUrl_analysesInput[]
    upsert?: headingsUpsertWithWhereUniqueWithoutUrl_analysesInput | headingsUpsertWithWhereUniqueWithoutUrl_analysesInput[]
    createMany?: headingsCreateManyUrl_analysesInputEnvelope
    set?: headingsWhereUniqueInput | headingsWhereUniqueInput[]
    disconnect?: headingsWhereUniqueInput | headingsWhereUniqueInput[]
    delete?: headingsWhereUniqueInput | headingsWhereUniqueInput[]
    connect?: headingsWhereUniqueInput | headingsWhereUniqueInput[]
    update?: headingsUpdateWithWhereUniqueWithoutUrl_analysesInput | headingsUpdateWithWhereUniqueWithoutUrl_analysesInput[]
    updateMany?: headingsUpdateManyWithWhereWithoutUrl_analysesInput | headingsUpdateManyWithWhereWithoutUrl_analysesInput[]
    deleteMany?: headingsScalarWhereInput | headingsScalarWhereInput[]
  }

  export type linksUpdateManyWithoutUrl_analysesNestedInput = {
    create?: XOR<linksCreateWithoutUrl_analysesInput, linksUncheckedCreateWithoutUrl_analysesInput> | linksCreateWithoutUrl_analysesInput[] | linksUncheckedCreateWithoutUrl_analysesInput[]
    connectOrCreate?: linksCreateOrConnectWithoutUrl_analysesInput | linksCreateOrConnectWithoutUrl_analysesInput[]
    upsert?: linksUpsertWithWhereUniqueWithoutUrl_analysesInput | linksUpsertWithWhereUniqueWithoutUrl_analysesInput[]
    createMany?: linksCreateManyUrl_analysesInputEnvelope
    set?: linksWhereUniqueInput | linksWhereUniqueInput[]
    disconnect?: linksWhereUniqueInput | linksWhereUniqueInput[]
    delete?: linksWhereUniqueInput | linksWhereUniqueInput[]
    connect?: linksWhereUniqueInput | linksWhereUniqueInput[]
    update?: linksUpdateWithWhereUniqueWithoutUrl_analysesInput | linksUpdateWithWhereUniqueWithoutUrl_analysesInput[]
    updateMany?: linksUpdateManyWithWhereWithoutUrl_analysesInput | linksUpdateManyWithWhereWithoutUrl_analysesInput[]
    deleteMany?: linksScalarWhereInput | linksScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutUrl_analysesNestedInput = {
    create?: XOR<usersCreateWithoutUrl_analysesInput, usersUncheckedCreateWithoutUrl_analysesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUrl_analysesInput
    upsert?: usersUpsertWithoutUrl_analysesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUrl_analysesInput, usersUpdateWithoutUrl_analysesInput>, usersUncheckedUpdateWithoutUrl_analysesInput>
  }

  export type headingsUncheckedUpdateManyWithoutUrl_analysesNestedInput = {
    create?: XOR<headingsCreateWithoutUrl_analysesInput, headingsUncheckedCreateWithoutUrl_analysesInput> | headingsCreateWithoutUrl_analysesInput[] | headingsUncheckedCreateWithoutUrl_analysesInput[]
    connectOrCreate?: headingsCreateOrConnectWithoutUrl_analysesInput | headingsCreateOrConnectWithoutUrl_analysesInput[]
    upsert?: headingsUpsertWithWhereUniqueWithoutUrl_analysesInput | headingsUpsertWithWhereUniqueWithoutUrl_analysesInput[]
    createMany?: headingsCreateManyUrl_analysesInputEnvelope
    set?: headingsWhereUniqueInput | headingsWhereUniqueInput[]
    disconnect?: headingsWhereUniqueInput | headingsWhereUniqueInput[]
    delete?: headingsWhereUniqueInput | headingsWhereUniqueInput[]
    connect?: headingsWhereUniqueInput | headingsWhereUniqueInput[]
    update?: headingsUpdateWithWhereUniqueWithoutUrl_analysesInput | headingsUpdateWithWhereUniqueWithoutUrl_analysesInput[]
    updateMany?: headingsUpdateManyWithWhereWithoutUrl_analysesInput | headingsUpdateManyWithWhereWithoutUrl_analysesInput[]
    deleteMany?: headingsScalarWhereInput | headingsScalarWhereInput[]
  }

  export type linksUncheckedUpdateManyWithoutUrl_analysesNestedInput = {
    create?: XOR<linksCreateWithoutUrl_analysesInput, linksUncheckedCreateWithoutUrl_analysesInput> | linksCreateWithoutUrl_analysesInput[] | linksUncheckedCreateWithoutUrl_analysesInput[]
    connectOrCreate?: linksCreateOrConnectWithoutUrl_analysesInput | linksCreateOrConnectWithoutUrl_analysesInput[]
    upsert?: linksUpsertWithWhereUniqueWithoutUrl_analysesInput | linksUpsertWithWhereUniqueWithoutUrl_analysesInput[]
    createMany?: linksCreateManyUrl_analysesInputEnvelope
    set?: linksWhereUniqueInput | linksWhereUniqueInput[]
    disconnect?: linksWhereUniqueInput | linksWhereUniqueInput[]
    delete?: linksWhereUniqueInput | linksWhereUniqueInput[]
    connect?: linksWhereUniqueInput | linksWhereUniqueInput[]
    update?: linksUpdateWithWhereUniqueWithoutUrl_analysesInput | linksUpdateWithWhereUniqueWithoutUrl_analysesInput[]
    updateMany?: linksUpdateManyWithWhereWithoutUrl_analysesInput | linksUpdateManyWithWhereWithoutUrl_analysesInput[]
    deleteMany?: linksScalarWhereInput | linksScalarWhereInput[]
  }

  export type url_analysesCreateNestedManyWithoutUsersInput = {
    create?: XOR<url_analysesCreateWithoutUsersInput, url_analysesUncheckedCreateWithoutUsersInput> | url_analysesCreateWithoutUsersInput[] | url_analysesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: url_analysesCreateOrConnectWithoutUsersInput | url_analysesCreateOrConnectWithoutUsersInput[]
    createMany?: url_analysesCreateManyUsersInputEnvelope
    connect?: url_analysesWhereUniqueInput | url_analysesWhereUniqueInput[]
  }

  export type url_analysesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<url_analysesCreateWithoutUsersInput, url_analysesUncheckedCreateWithoutUsersInput> | url_analysesCreateWithoutUsersInput[] | url_analysesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: url_analysesCreateOrConnectWithoutUsersInput | url_analysesCreateOrConnectWithoutUsersInput[]
    createMany?: url_analysesCreateManyUsersInputEnvelope
    connect?: url_analysesWhereUniqueInput | url_analysesWhereUniqueInput[]
  }

  export type url_analysesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<url_analysesCreateWithoutUsersInput, url_analysesUncheckedCreateWithoutUsersInput> | url_analysesCreateWithoutUsersInput[] | url_analysesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: url_analysesCreateOrConnectWithoutUsersInput | url_analysesCreateOrConnectWithoutUsersInput[]
    upsert?: url_analysesUpsertWithWhereUniqueWithoutUsersInput | url_analysesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: url_analysesCreateManyUsersInputEnvelope
    set?: url_analysesWhereUniqueInput | url_analysesWhereUniqueInput[]
    disconnect?: url_analysesWhereUniqueInput | url_analysesWhereUniqueInput[]
    delete?: url_analysesWhereUniqueInput | url_analysesWhereUniqueInput[]
    connect?: url_analysesWhereUniqueInput | url_analysesWhereUniqueInput[]
    update?: url_analysesUpdateWithWhereUniqueWithoutUsersInput | url_analysesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: url_analysesUpdateManyWithWhereWithoutUsersInput | url_analysesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: url_analysesScalarWhereInput | url_analysesScalarWhereInput[]
  }

  export type url_analysesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<url_analysesCreateWithoutUsersInput, url_analysesUncheckedCreateWithoutUsersInput> | url_analysesCreateWithoutUsersInput[] | url_analysesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: url_analysesCreateOrConnectWithoutUsersInput | url_analysesCreateOrConnectWithoutUsersInput[]
    upsert?: url_analysesUpsertWithWhereUniqueWithoutUsersInput | url_analysesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: url_analysesCreateManyUsersInputEnvelope
    set?: url_analysesWhereUniqueInput | url_analysesWhereUniqueInput[]
    disconnect?: url_analysesWhereUniqueInput | url_analysesWhereUniqueInput[]
    delete?: url_analysesWhereUniqueInput | url_analysesWhereUniqueInput[]
    connect?: url_analysesWhereUniqueInput | url_analysesWhereUniqueInput[]
    update?: url_analysesUpdateWithWhereUniqueWithoutUsersInput | url_analysesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: url_analysesUpdateManyWithWhereWithoutUsersInput | url_analysesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: url_analysesScalarWhereInput | url_analysesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumlinks_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.links_type | Enumlinks_typeFieldRefInput<$PrismaModel>
    in?: $Enums.links_type[]
    notIn?: $Enums.links_type[]
    not?: NestedEnumlinks_typeFilter<$PrismaModel> | $Enums.links_type
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumlinks_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.links_type | Enumlinks_typeFieldRefInput<$PrismaModel>
    in?: $Enums.links_type[]
    notIn?: $Enums.links_type[]
    not?: NestedEnumlinks_typeWithAggregatesFilter<$PrismaModel> | $Enums.links_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumlinks_typeFilter<$PrismaModel>
    _max?: NestedEnumlinks_typeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type url_analysesCreateWithoutHeadingsInput = {
    url: string
    title?: string | null
    html_version?: string | null
    login_form_present?: boolean | null
    created_at?: Date | string | null
    completed_at?: Date | string | null
    internal_links_count?: number | null
    external_links_count?: number | null
    broken_links_count?: number | null
    links?: linksCreateNestedManyWithoutUrl_analysesInput
    users: usersCreateNestedOneWithoutUrl_analysesInput
  }

  export type url_analysesUncheckedCreateWithoutHeadingsInput = {
    id?: number
    user_id: number
    url: string
    title?: string | null
    html_version?: string | null
    login_form_present?: boolean | null
    created_at?: Date | string | null
    completed_at?: Date | string | null
    internal_links_count?: number | null
    external_links_count?: number | null
    broken_links_count?: number | null
    links?: linksUncheckedCreateNestedManyWithoutUrl_analysesInput
  }

  export type url_analysesCreateOrConnectWithoutHeadingsInput = {
    where: url_analysesWhereUniqueInput
    create: XOR<url_analysesCreateWithoutHeadingsInput, url_analysesUncheckedCreateWithoutHeadingsInput>
  }

  export type url_analysesUpsertWithoutHeadingsInput = {
    update: XOR<url_analysesUpdateWithoutHeadingsInput, url_analysesUncheckedUpdateWithoutHeadingsInput>
    create: XOR<url_analysesCreateWithoutHeadingsInput, url_analysesUncheckedCreateWithoutHeadingsInput>
    where?: url_analysesWhereInput
  }

  export type url_analysesUpdateToOneWithWhereWithoutHeadingsInput = {
    where?: url_analysesWhereInput
    data: XOR<url_analysesUpdateWithoutHeadingsInput, url_analysesUncheckedUpdateWithoutHeadingsInput>
  }

  export type url_analysesUpdateWithoutHeadingsInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    html_version?: NullableStringFieldUpdateOperationsInput | string | null
    login_form_present?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    internal_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    external_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    broken_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    links?: linksUpdateManyWithoutUrl_analysesNestedInput
    users?: usersUpdateOneRequiredWithoutUrl_analysesNestedInput
  }

  export type url_analysesUncheckedUpdateWithoutHeadingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    html_version?: NullableStringFieldUpdateOperationsInput | string | null
    login_form_present?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    internal_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    external_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    broken_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    links?: linksUncheckedUpdateManyWithoutUrl_analysesNestedInput
  }

  export type url_analysesCreateWithoutLinksInput = {
    url: string
    title?: string | null
    html_version?: string | null
    login_form_present?: boolean | null
    created_at?: Date | string | null
    completed_at?: Date | string | null
    internal_links_count?: number | null
    external_links_count?: number | null
    broken_links_count?: number | null
    headings?: headingsCreateNestedManyWithoutUrl_analysesInput
    users: usersCreateNestedOneWithoutUrl_analysesInput
  }

  export type url_analysesUncheckedCreateWithoutLinksInput = {
    id?: number
    user_id: number
    url: string
    title?: string | null
    html_version?: string | null
    login_form_present?: boolean | null
    created_at?: Date | string | null
    completed_at?: Date | string | null
    internal_links_count?: number | null
    external_links_count?: number | null
    broken_links_count?: number | null
    headings?: headingsUncheckedCreateNestedManyWithoutUrl_analysesInput
  }

  export type url_analysesCreateOrConnectWithoutLinksInput = {
    where: url_analysesWhereUniqueInput
    create: XOR<url_analysesCreateWithoutLinksInput, url_analysesUncheckedCreateWithoutLinksInput>
  }

  export type url_analysesUpsertWithoutLinksInput = {
    update: XOR<url_analysesUpdateWithoutLinksInput, url_analysesUncheckedUpdateWithoutLinksInput>
    create: XOR<url_analysesCreateWithoutLinksInput, url_analysesUncheckedCreateWithoutLinksInput>
    where?: url_analysesWhereInput
  }

  export type url_analysesUpdateToOneWithWhereWithoutLinksInput = {
    where?: url_analysesWhereInput
    data: XOR<url_analysesUpdateWithoutLinksInput, url_analysesUncheckedUpdateWithoutLinksInput>
  }

  export type url_analysesUpdateWithoutLinksInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    html_version?: NullableStringFieldUpdateOperationsInput | string | null
    login_form_present?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    internal_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    external_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    broken_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    headings?: headingsUpdateManyWithoutUrl_analysesNestedInput
    users?: usersUpdateOneRequiredWithoutUrl_analysesNestedInput
  }

  export type url_analysesUncheckedUpdateWithoutLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    html_version?: NullableStringFieldUpdateOperationsInput | string | null
    login_form_present?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    internal_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    external_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    broken_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    headings?: headingsUncheckedUpdateManyWithoutUrl_analysesNestedInput
  }

  export type headingsCreateWithoutUrl_analysesInput = {
    h1?: number | null
    h2?: number | null
    h3?: number | null
    h4?: number | null
    h5?: number | null
    h6?: number | null
  }

  export type headingsUncheckedCreateWithoutUrl_analysesInput = {
    id?: number
    h1?: number | null
    h2?: number | null
    h3?: number | null
    h4?: number | null
    h5?: number | null
    h6?: number | null
  }

  export type headingsCreateOrConnectWithoutUrl_analysesInput = {
    where: headingsWhereUniqueInput
    create: XOR<headingsCreateWithoutUrl_analysesInput, headingsUncheckedCreateWithoutUrl_analysesInput>
  }

  export type headingsCreateManyUrl_analysesInputEnvelope = {
    data: headingsCreateManyUrl_analysesInput | headingsCreateManyUrl_analysesInput[]
    skipDuplicates?: boolean
  }

  export type linksCreateWithoutUrl_analysesInput = {
    url: string
    type: $Enums.links_type
    status_code?: number | null
    error_type?: string | null
  }

  export type linksUncheckedCreateWithoutUrl_analysesInput = {
    id?: number
    url: string
    type: $Enums.links_type
    status_code?: number | null
    error_type?: string | null
  }

  export type linksCreateOrConnectWithoutUrl_analysesInput = {
    where: linksWhereUniqueInput
    create: XOR<linksCreateWithoutUrl_analysesInput, linksUncheckedCreateWithoutUrl_analysesInput>
  }

  export type linksCreateManyUrl_analysesInputEnvelope = {
    data: linksCreateManyUrl_analysesInput | linksCreateManyUrl_analysesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutUrl_analysesInput = {
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string | null
  }

  export type usersUncheckedCreateWithoutUrl_analysesInput = {
    id?: number
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string | null
  }

  export type usersCreateOrConnectWithoutUrl_analysesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUrl_analysesInput, usersUncheckedCreateWithoutUrl_analysesInput>
  }

  export type headingsUpsertWithWhereUniqueWithoutUrl_analysesInput = {
    where: headingsWhereUniqueInput
    update: XOR<headingsUpdateWithoutUrl_analysesInput, headingsUncheckedUpdateWithoutUrl_analysesInput>
    create: XOR<headingsCreateWithoutUrl_analysesInput, headingsUncheckedCreateWithoutUrl_analysesInput>
  }

  export type headingsUpdateWithWhereUniqueWithoutUrl_analysesInput = {
    where: headingsWhereUniqueInput
    data: XOR<headingsUpdateWithoutUrl_analysesInput, headingsUncheckedUpdateWithoutUrl_analysesInput>
  }

  export type headingsUpdateManyWithWhereWithoutUrl_analysesInput = {
    where: headingsScalarWhereInput
    data: XOR<headingsUpdateManyMutationInput, headingsUncheckedUpdateManyWithoutUrl_analysesInput>
  }

  export type headingsScalarWhereInput = {
    AND?: headingsScalarWhereInput | headingsScalarWhereInput[]
    OR?: headingsScalarWhereInput[]
    NOT?: headingsScalarWhereInput | headingsScalarWhereInput[]
    id?: IntFilter<"headings"> | number
    analysis_id?: IntFilter<"headings"> | number
    h1?: IntNullableFilter<"headings"> | number | null
    h2?: IntNullableFilter<"headings"> | number | null
    h3?: IntNullableFilter<"headings"> | number | null
    h4?: IntNullableFilter<"headings"> | number | null
    h5?: IntNullableFilter<"headings"> | number | null
    h6?: IntNullableFilter<"headings"> | number | null
  }

  export type linksUpsertWithWhereUniqueWithoutUrl_analysesInput = {
    where: linksWhereUniqueInput
    update: XOR<linksUpdateWithoutUrl_analysesInput, linksUncheckedUpdateWithoutUrl_analysesInput>
    create: XOR<linksCreateWithoutUrl_analysesInput, linksUncheckedCreateWithoutUrl_analysesInput>
  }

  export type linksUpdateWithWhereUniqueWithoutUrl_analysesInput = {
    where: linksWhereUniqueInput
    data: XOR<linksUpdateWithoutUrl_analysesInput, linksUncheckedUpdateWithoutUrl_analysesInput>
  }

  export type linksUpdateManyWithWhereWithoutUrl_analysesInput = {
    where: linksScalarWhereInput
    data: XOR<linksUpdateManyMutationInput, linksUncheckedUpdateManyWithoutUrl_analysesInput>
  }

  export type linksScalarWhereInput = {
    AND?: linksScalarWhereInput | linksScalarWhereInput[]
    OR?: linksScalarWhereInput[]
    NOT?: linksScalarWhereInput | linksScalarWhereInput[]
    id?: IntFilter<"links"> | number
    analysis_id?: IntFilter<"links"> | number
    url?: StringFilter<"links"> | string
    type?: Enumlinks_typeFilter<"links"> | $Enums.links_type
    status_code?: IntNullableFilter<"links"> | number | null
    error_type?: StringNullableFilter<"links"> | string | null
  }

  export type usersUpsertWithoutUrl_analysesInput = {
    update: XOR<usersUpdateWithoutUrl_analysesInput, usersUncheckedUpdateWithoutUrl_analysesInput>
    create: XOR<usersCreateWithoutUrl_analysesInput, usersUncheckedCreateWithoutUrl_analysesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUrl_analysesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUrl_analysesInput, usersUncheckedUpdateWithoutUrl_analysesInput>
  }

  export type usersUpdateWithoutUrl_analysesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateWithoutUrl_analysesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type url_analysesCreateWithoutUsersInput = {
    url: string
    title?: string | null
    html_version?: string | null
    login_form_present?: boolean | null
    created_at?: Date | string | null
    completed_at?: Date | string | null
    internal_links_count?: number | null
    external_links_count?: number | null
    broken_links_count?: number | null
    headings?: headingsCreateNestedManyWithoutUrl_analysesInput
    links?: linksCreateNestedManyWithoutUrl_analysesInput
  }

  export type url_analysesUncheckedCreateWithoutUsersInput = {
    id?: number
    url: string
    title?: string | null
    html_version?: string | null
    login_form_present?: boolean | null
    created_at?: Date | string | null
    completed_at?: Date | string | null
    internal_links_count?: number | null
    external_links_count?: number | null
    broken_links_count?: number | null
    headings?: headingsUncheckedCreateNestedManyWithoutUrl_analysesInput
    links?: linksUncheckedCreateNestedManyWithoutUrl_analysesInput
  }

  export type url_analysesCreateOrConnectWithoutUsersInput = {
    where: url_analysesWhereUniqueInput
    create: XOR<url_analysesCreateWithoutUsersInput, url_analysesUncheckedCreateWithoutUsersInput>
  }

  export type url_analysesCreateManyUsersInputEnvelope = {
    data: url_analysesCreateManyUsersInput | url_analysesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type url_analysesUpsertWithWhereUniqueWithoutUsersInput = {
    where: url_analysesWhereUniqueInput
    update: XOR<url_analysesUpdateWithoutUsersInput, url_analysesUncheckedUpdateWithoutUsersInput>
    create: XOR<url_analysesCreateWithoutUsersInput, url_analysesUncheckedCreateWithoutUsersInput>
  }

  export type url_analysesUpdateWithWhereUniqueWithoutUsersInput = {
    where: url_analysesWhereUniqueInput
    data: XOR<url_analysesUpdateWithoutUsersInput, url_analysesUncheckedUpdateWithoutUsersInput>
  }

  export type url_analysesUpdateManyWithWhereWithoutUsersInput = {
    where: url_analysesScalarWhereInput
    data: XOR<url_analysesUpdateManyMutationInput, url_analysesUncheckedUpdateManyWithoutUsersInput>
  }

  export type url_analysesScalarWhereInput = {
    AND?: url_analysesScalarWhereInput | url_analysesScalarWhereInput[]
    OR?: url_analysesScalarWhereInput[]
    NOT?: url_analysesScalarWhereInput | url_analysesScalarWhereInput[]
    id?: IntFilter<"url_analyses"> | number
    user_id?: IntFilter<"url_analyses"> | number
    url?: StringFilter<"url_analyses"> | string
    title?: StringNullableFilter<"url_analyses"> | string | null
    html_version?: StringNullableFilter<"url_analyses"> | string | null
    login_form_present?: BoolNullableFilter<"url_analyses"> | boolean | null
    created_at?: DateTimeNullableFilter<"url_analyses"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"url_analyses"> | Date | string | null
    internal_links_count?: IntNullableFilter<"url_analyses"> | number | null
    external_links_count?: IntNullableFilter<"url_analyses"> | number | null
    broken_links_count?: IntNullableFilter<"url_analyses"> | number | null
  }

  export type headingsCreateManyUrl_analysesInput = {
    id?: number
    h1?: number | null
    h2?: number | null
    h3?: number | null
    h4?: number | null
    h5?: number | null
    h6?: number | null
  }

  export type linksCreateManyUrl_analysesInput = {
    id?: number
    url: string
    type: $Enums.links_type
    status_code?: number | null
    error_type?: string | null
  }

  export type headingsUpdateWithoutUrl_analysesInput = {
    h1?: NullableIntFieldUpdateOperationsInput | number | null
    h2?: NullableIntFieldUpdateOperationsInput | number | null
    h3?: NullableIntFieldUpdateOperationsInput | number | null
    h4?: NullableIntFieldUpdateOperationsInput | number | null
    h5?: NullableIntFieldUpdateOperationsInput | number | null
    h6?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type headingsUncheckedUpdateWithoutUrl_analysesInput = {
    id?: IntFieldUpdateOperationsInput | number
    h1?: NullableIntFieldUpdateOperationsInput | number | null
    h2?: NullableIntFieldUpdateOperationsInput | number | null
    h3?: NullableIntFieldUpdateOperationsInput | number | null
    h4?: NullableIntFieldUpdateOperationsInput | number | null
    h5?: NullableIntFieldUpdateOperationsInput | number | null
    h6?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type headingsUncheckedUpdateManyWithoutUrl_analysesInput = {
    id?: IntFieldUpdateOperationsInput | number
    h1?: NullableIntFieldUpdateOperationsInput | number | null
    h2?: NullableIntFieldUpdateOperationsInput | number | null
    h3?: NullableIntFieldUpdateOperationsInput | number | null
    h4?: NullableIntFieldUpdateOperationsInput | number | null
    h5?: NullableIntFieldUpdateOperationsInput | number | null
    h6?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type linksUpdateWithoutUrl_analysesInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: Enumlinks_typeFieldUpdateOperationsInput | $Enums.links_type
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    error_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type linksUncheckedUpdateWithoutUrl_analysesInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: Enumlinks_typeFieldUpdateOperationsInput | $Enums.links_type
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    error_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type linksUncheckedUpdateManyWithoutUrl_analysesInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: Enumlinks_typeFieldUpdateOperationsInput | $Enums.links_type
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    error_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type url_analysesCreateManyUsersInput = {
    id?: number
    url: string
    title?: string | null
    html_version?: string | null
    login_form_present?: boolean | null
    created_at?: Date | string | null
    completed_at?: Date | string | null
    internal_links_count?: number | null
    external_links_count?: number | null
    broken_links_count?: number | null
  }

  export type url_analysesUpdateWithoutUsersInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    html_version?: NullableStringFieldUpdateOperationsInput | string | null
    login_form_present?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    internal_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    external_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    broken_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    headings?: headingsUpdateManyWithoutUrl_analysesNestedInput
    links?: linksUpdateManyWithoutUrl_analysesNestedInput
  }

  export type url_analysesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    html_version?: NullableStringFieldUpdateOperationsInput | string | null
    login_form_present?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    internal_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    external_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    broken_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    headings?: headingsUncheckedUpdateManyWithoutUrl_analysesNestedInput
    links?: linksUncheckedUpdateManyWithoutUrl_analysesNestedInput
  }

  export type url_analysesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    html_version?: NullableStringFieldUpdateOperationsInput | string | null
    login_form_present?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    internal_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    external_links_count?: NullableIntFieldUpdateOperationsInput | number | null
    broken_links_count?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}