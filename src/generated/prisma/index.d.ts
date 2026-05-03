
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Logs
 * 
 */
export type Logs = $Result.DefaultSelection<Prisma.$LogsPayload>
/**
 * Model DoctorsComments
 * 
 */
export type DoctorsComments = $Result.DefaultSelection<Prisma.$DoctorsCommentsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Roles: {
  admin: 'admin',
  doctor: 'doctor',
  patient: 'patient'
};

export type Roles = (typeof Roles)[keyof typeof Roles]

}

export type Roles = $Enums.Roles

export const Roles: typeof $Enums.Roles

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logs`: Exposes CRUD operations for the **Logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.logs.findMany()
    * ```
    */
  get logs(): Prisma.LogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorsComments`: Exposes CRUD operations for the **DoctorsComments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorsComments
    * const doctorsComments = await prisma.doctorsComments.findMany()
    * ```
    */
  get doctorsComments(): Prisma.DoctorsCommentsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Logs: 'Logs',
    DoctorsComments: 'DoctorsComments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "logs" | "doctorsComments"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Logs: {
        payload: Prisma.$LogsPayload<ExtArgs>
        fields: Prisma.LogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>
          }
          findFirst: {
            args: Prisma.LogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>
          }
          findMany: {
            args: Prisma.LogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>[]
          }
          create: {
            args: Prisma.LogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>
          }
          createMany: {
            args: Prisma.LogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>[]
          }
          delete: {
            args: Prisma.LogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>
          }
          update: {
            args: Prisma.LogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>
          }
          deleteMany: {
            args: Prisma.LogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>[]
          }
          upsert: {
            args: Prisma.LogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsPayload>
          }
          aggregate: {
            args: Prisma.LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogs>
          }
          groupBy: {
            args: Prisma.LogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogsCountArgs<ExtArgs>
            result: $Utils.Optional<LogsCountAggregateOutputType> | number
          }
        }
      }
      DoctorsComments: {
        payload: Prisma.$DoctorsCommentsPayload<ExtArgs>
        fields: Prisma.DoctorsCommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorsCommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsCommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorsCommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsCommentsPayload>
          }
          findFirst: {
            args: Prisma.DoctorsCommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsCommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorsCommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsCommentsPayload>
          }
          findMany: {
            args: Prisma.DoctorsCommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsCommentsPayload>[]
          }
          create: {
            args: Prisma.DoctorsCommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsCommentsPayload>
          }
          createMany: {
            args: Prisma.DoctorsCommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorsCommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsCommentsPayload>[]
          }
          delete: {
            args: Prisma.DoctorsCommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsCommentsPayload>
          }
          update: {
            args: Prisma.DoctorsCommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsCommentsPayload>
          }
          deleteMany: {
            args: Prisma.DoctorsCommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorsCommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorsCommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsCommentsPayload>[]
          }
          upsert: {
            args: Prisma.DoctorsCommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsCommentsPayload>
          }
          aggregate: {
            args: Prisma.DoctorsCommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorsComments>
          }
          groupBy: {
            args: Prisma.DoctorsCommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorsCommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorsCommentsCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorsCommentsCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    logs?: LogsOmit
    doctorsComments?: DoctorsCommentsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    doctor: number
    patient: number
    doctorsComments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserCountOutputTypeCountDoctorArgs
    patient?: boolean | UserCountOutputTypeCountPatientArgs
    doctorsComments?: boolean | UserCountOutputTypeCountDoctorsCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDoctorsCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorsCommentsWhereInput
  }


  /**
   * Count Type LogsCountOutputType
   */

  export type LogsCountOutputType = {
    doctorsComments: number
  }

  export type LogsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorsComments?: boolean | LogsCountOutputTypeCountDoctorsCommentsArgs
  }

  // Custom InputTypes
  /**
   * LogsCountOutputType without action
   */
  export type LogsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsCountOutputType
     */
    select?: LogsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LogsCountOutputType without action
   */
  export type LogsCountOutputTypeCountDoctorsCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorsCommentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Roles | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Roles | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    uuid: string
    name: string
    email: string
    password: string
    role: $Enums.Roles
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    doctor?: boolean | User$doctorArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
    doctorsComments?: boolean | User$doctorsCommentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "name" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | User$doctorArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
    doctorsComments?: boolean | User$doctorsCommentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      doctor: Prisma.$LogsPayload<ExtArgs>[]
      patient: Prisma.$LogsPayload<ExtArgs>[]
      doctorsComments: Prisma.$DoctorsCommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      name: string
      email: string
      password: string
      role: $Enums.Roles
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends User$doctorArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patient<T extends User$patientArgs<ExtArgs> = {}>(args?: Subset<T, User$patientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctorsComments<T extends User$doctorsCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorsCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorsCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly uuid: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Roles'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.doctor
   */
  export type User$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsInclude<ExtArgs> | null
    where?: LogsWhereInput
    orderBy?: LogsOrderByWithRelationInput | LogsOrderByWithRelationInput[]
    cursor?: LogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * User.patient
   */
  export type User$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsInclude<ExtArgs> | null
    where?: LogsWhereInput
    orderBy?: LogsOrderByWithRelationInput | LogsOrderByWithRelationInput[]
    cursor?: LogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * User.doctorsComments
   */
  export type User$doctorsCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsComments
     */
    select?: DoctorsCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorsComments
     */
    omit?: DoctorsCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsCommentsInclude<ExtArgs> | null
    where?: DoctorsCommentsWhereInput
    orderBy?: DoctorsCommentsOrderByWithRelationInput | DoctorsCommentsOrderByWithRelationInput[]
    cursor?: DoctorsCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorsCommentsScalarFieldEnum | DoctorsCommentsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Logs
   */

  export type AggregateLogs = {
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  export type LogsAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
  }

  export type LogsSumAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
  }

  export type LogsMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    doctorId: number | null
    patientId: number | null
    filePath: string | null
    createdAt: Date | null
  }

  export type LogsMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    doctorId: number | null
    patientId: number | null
    filePath: string | null
    createdAt: Date | null
  }

  export type LogsCountAggregateOutputType = {
    id: number
    uuid: number
    doctorId: number
    patientId: number
    filePath: number
    createdAt: number
    _all: number
  }


  export type LogsAvgAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
  }

  export type LogsSumAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
  }

  export type LogsMinAggregateInputType = {
    id?: true
    uuid?: true
    doctorId?: true
    patientId?: true
    filePath?: true
    createdAt?: true
  }

  export type LogsMaxAggregateInputType = {
    id?: true
    uuid?: true
    doctorId?: true
    patientId?: true
    filePath?: true
    createdAt?: true
  }

  export type LogsCountAggregateInputType = {
    id?: true
    uuid?: true
    doctorId?: true
    patientId?: true
    filePath?: true
    createdAt?: true
    _all?: true
  }

  export type LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to aggregate.
     */
    where?: LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogsOrderByWithRelationInput | LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogsMaxAggregateInputType
  }

  export type GetLogsAggregateType<T extends LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogs[P]>
      : GetScalarType<T[P], AggregateLogs[P]>
  }




  export type LogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogsWhereInput
    orderBy?: LogsOrderByWithAggregationInput | LogsOrderByWithAggregationInput[]
    by: LogsScalarFieldEnum[] | LogsScalarFieldEnum
    having?: LogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogsCountAggregateInputType | true
    _avg?: LogsAvgAggregateInputType
    _sum?: LogsSumAggregateInputType
    _min?: LogsMinAggregateInputType
    _max?: LogsMaxAggregateInputType
  }

  export type LogsGroupByOutputType = {
    id: number
    uuid: string
    doctorId: number
    patientId: number
    filePath: string
    createdAt: Date
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  type GetLogsGroupByPayload<T extends LogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogsGroupByOutputType[P]>
            : GetScalarType<T[P], LogsGroupByOutputType[P]>
        }
      >
    >


  export type LogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    doctorId?: boolean
    patientId?: boolean
    filePath?: boolean
    createdAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    doctorsComments?: boolean | Logs$doctorsCommentsArgs<ExtArgs>
    _count?: boolean | LogsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logs"]>

  export type LogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    doctorId?: boolean
    patientId?: boolean
    filePath?: boolean
    createdAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logs"]>

  export type LogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    doctorId?: boolean
    patientId?: boolean
    filePath?: boolean
    createdAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logs"]>

  export type LogsSelectScalar = {
    id?: boolean
    uuid?: boolean
    doctorId?: boolean
    patientId?: boolean
    filePath?: boolean
    createdAt?: boolean
  }

  export type LogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "doctorId" | "patientId" | "filePath" | "createdAt", ExtArgs["result"]["logs"]>
  export type LogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    doctorsComments?: boolean | Logs$doctorsCommentsArgs<ExtArgs>
    _count?: boolean | LogsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LogsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LogsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Logs"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
      patient: Prisma.$UserPayload<ExtArgs>
      doctorsComments: Prisma.$DoctorsCommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      doctorId: number
      patientId: number
      filePath: string
      createdAt: Date
    }, ExtArgs["result"]["logs"]>
    composites: {}
  }

  type LogsGetPayload<S extends boolean | null | undefined | LogsDefaultArgs> = $Result.GetResult<Prisma.$LogsPayload, S>

  type LogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogsCountAggregateInputType | true
    }

  export interface LogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Logs'], meta: { name: 'Logs' } }
    /**
     * Find zero or one Logs that matches the filter.
     * @param {LogsFindUniqueArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogsFindUniqueArgs>(args: SelectSubset<T, LogsFindUniqueArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogsFindUniqueOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogsFindUniqueOrThrowArgs>(args: SelectSubset<T, LogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsFindFirstArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogsFindFirstArgs>(args?: SelectSubset<T, LogsFindFirstArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsFindFirstOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogsFindFirstOrThrowArgs>(args?: SelectSubset<T, LogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.logs.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logsWithIdOnly = await prisma.logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogsFindManyArgs>(args?: SelectSubset<T, LogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logs.
     * @param {LogsCreateArgs} args - Arguments to create a Logs.
     * @example
     * // Create one Logs
     * const Logs = await prisma.logs.create({
     *   data: {
     *     // ... data to create a Logs
     *   }
     * })
     * 
     */
    create<T extends LogsCreateArgs>(args: SelectSubset<T, LogsCreateArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogsCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogsCreateManyArgs>(args?: SelectSubset<T, LogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogsCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logsWithIdOnly = await prisma.logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogsCreateManyAndReturnArgs>(args?: SelectSubset<T, LogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Logs.
     * @param {LogsDeleteArgs} args - Arguments to delete one Logs.
     * @example
     * // Delete one Logs
     * const Logs = await prisma.logs.delete({
     *   where: {
     *     // ... filter to delete one Logs
     *   }
     * })
     * 
     */
    delete<T extends LogsDeleteArgs>(args: SelectSubset<T, LogsDeleteArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logs.
     * @param {LogsUpdateArgs} args - Arguments to update one Logs.
     * @example
     * // Update one Logs
     * const logs = await prisma.logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogsUpdateArgs>(args: SelectSubset<T, LogsUpdateArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogsDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogsDeleteManyArgs>(args?: SelectSubset<T, LogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogsUpdateManyArgs>(args: SelectSubset<T, LogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {LogsUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logsWithIdOnly = await prisma.logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogsUpdateManyAndReturnArgs>(args: SelectSubset<T, LogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Logs.
     * @param {LogsUpsertArgs} args - Arguments to update or create a Logs.
     * @example
     * // Update or create a Logs
     * const logs = await prisma.logs.upsert({
     *   create: {
     *     // ... data to create a Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logs we want to update
     *   }
     * })
     */
    upsert<T extends LogsUpsertArgs>(args: SelectSubset<T, LogsUpsertArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.logs.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogsCountArgs>(
      args?: Subset<T, LogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogsAggregateArgs>(args: Subset<T, LogsAggregateArgs>): Prisma.PrismaPromise<GetLogsAggregateType<T>>

    /**
     * Group by Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsGroupByArgs} args - Group by arguments.
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
      T extends LogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogsGroupByArgs['orderBy'] }
        : { orderBy?: LogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Logs model
   */
  readonly fields: LogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctorsComments<T extends Logs$doctorsCommentsArgs<ExtArgs> = {}>(args?: Subset<T, Logs$doctorsCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorsCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Logs model
   */
  interface LogsFieldRefs {
    readonly id: FieldRef<"Logs", 'Int'>
    readonly uuid: FieldRef<"Logs", 'String'>
    readonly doctorId: FieldRef<"Logs", 'Int'>
    readonly patientId: FieldRef<"Logs", 'Int'>
    readonly filePath: FieldRef<"Logs", 'String'>
    readonly createdAt: FieldRef<"Logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Logs findUnique
   */
  export type LogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where: LogsWhereUniqueInput
  }

  /**
   * Logs findUniqueOrThrow
   */
  export type LogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where: LogsWhereUniqueInput
  }

  /**
   * Logs findFirst
   */
  export type LogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogsOrderByWithRelationInput | LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * Logs findFirstOrThrow
   */
  export type LogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogsOrderByWithRelationInput | LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * Logs findMany
   */
  export type LogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogsOrderByWithRelationInput | LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * Logs create
   */
  export type LogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsInclude<ExtArgs> | null
    /**
     * The data needed to create a Logs.
     */
    data: XOR<LogsCreateInput, LogsUncheckedCreateInput>
  }

  /**
   * Logs createMany
   */
  export type LogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogsCreateManyInput | LogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Logs createManyAndReturn
   */
  export type LogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogsCreateManyInput | LogsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Logs update
   */
  export type LogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsInclude<ExtArgs> | null
    /**
     * The data needed to update a Logs.
     */
    data: XOR<LogsUpdateInput, LogsUncheckedUpdateInput>
    /**
     * Choose, which Logs to update.
     */
    where: LogsWhereUniqueInput
  }

  /**
   * Logs updateMany
   */
  export type LogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogsUpdateManyMutationInput, LogsUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogsWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Logs updateManyAndReturn
   */
  export type LogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * The data used to update Logs.
     */
    data: XOR<LogsUpdateManyMutationInput, LogsUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogsWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Logs upsert
   */
  export type LogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsInclude<ExtArgs> | null
    /**
     * The filter to search for the Logs to update in case it exists.
     */
    where: LogsWhereUniqueInput
    /**
     * In case the Logs found by the `where` argument doesn't exist, create a new Logs with this data.
     */
    create: XOR<LogsCreateInput, LogsUncheckedCreateInput>
    /**
     * In case the Logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogsUpdateInput, LogsUncheckedUpdateInput>
  }

  /**
   * Logs delete
   */
  export type LogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsInclude<ExtArgs> | null
    /**
     * Filter which Logs to delete.
     */
    where: LogsWhereUniqueInput
  }

  /**
   * Logs deleteMany
   */
  export type LogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogsWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Logs.doctorsComments
   */
  export type Logs$doctorsCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsComments
     */
    select?: DoctorsCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorsComments
     */
    omit?: DoctorsCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsCommentsInclude<ExtArgs> | null
    where?: DoctorsCommentsWhereInput
    orderBy?: DoctorsCommentsOrderByWithRelationInput | DoctorsCommentsOrderByWithRelationInput[]
    cursor?: DoctorsCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorsCommentsScalarFieldEnum | DoctorsCommentsScalarFieldEnum[]
  }

  /**
   * Logs without action
   */
  export type LogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logs
     */
    select?: LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logs
     */
    omit?: LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsInclude<ExtArgs> | null
  }


  /**
   * Model DoctorsComments
   */

  export type AggregateDoctorsComments = {
    _count: DoctorsCommentsCountAggregateOutputType | null
    _avg: DoctorsCommentsAvgAggregateOutputType | null
    _sum: DoctorsCommentsSumAggregateOutputType | null
    _min: DoctorsCommentsMinAggregateOutputType | null
    _max: DoctorsCommentsMaxAggregateOutputType | null
  }

  export type DoctorsCommentsAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
    logId: number | null
  }

  export type DoctorsCommentsSumAggregateOutputType = {
    id: number | null
    doctorId: number | null
    logId: number | null
  }

  export type DoctorsCommentsMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    doctorId: number | null
    logId: number | null
    content: string | null
    createdAt: Date | null
  }

  export type DoctorsCommentsMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    doctorId: number | null
    logId: number | null
    content: string | null
    createdAt: Date | null
  }

  export type DoctorsCommentsCountAggregateOutputType = {
    id: number
    uuid: number
    doctorId: number
    logId: number
    content: number
    createdAt: number
    _all: number
  }


  export type DoctorsCommentsAvgAggregateInputType = {
    id?: true
    doctorId?: true
    logId?: true
  }

  export type DoctorsCommentsSumAggregateInputType = {
    id?: true
    doctorId?: true
    logId?: true
  }

  export type DoctorsCommentsMinAggregateInputType = {
    id?: true
    uuid?: true
    doctorId?: true
    logId?: true
    content?: true
    createdAt?: true
  }

  export type DoctorsCommentsMaxAggregateInputType = {
    id?: true
    uuid?: true
    doctorId?: true
    logId?: true
    content?: true
    createdAt?: true
  }

  export type DoctorsCommentsCountAggregateInputType = {
    id?: true
    uuid?: true
    doctorId?: true
    logId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type DoctorsCommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorsComments to aggregate.
     */
    where?: DoctorsCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorsComments to fetch.
     */
    orderBy?: DoctorsCommentsOrderByWithRelationInput | DoctorsCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorsCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorsComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorsComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorsComments
    **/
    _count?: true | DoctorsCommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorsCommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorsCommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorsCommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorsCommentsMaxAggregateInputType
  }

  export type GetDoctorsCommentsAggregateType<T extends DoctorsCommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorsComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorsComments[P]>
      : GetScalarType<T[P], AggregateDoctorsComments[P]>
  }




  export type DoctorsCommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorsCommentsWhereInput
    orderBy?: DoctorsCommentsOrderByWithAggregationInput | DoctorsCommentsOrderByWithAggregationInput[]
    by: DoctorsCommentsScalarFieldEnum[] | DoctorsCommentsScalarFieldEnum
    having?: DoctorsCommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorsCommentsCountAggregateInputType | true
    _avg?: DoctorsCommentsAvgAggregateInputType
    _sum?: DoctorsCommentsSumAggregateInputType
    _min?: DoctorsCommentsMinAggregateInputType
    _max?: DoctorsCommentsMaxAggregateInputType
  }

  export type DoctorsCommentsGroupByOutputType = {
    id: number
    uuid: string
    doctorId: number
    logId: number
    content: string
    createdAt: Date
    _count: DoctorsCommentsCountAggregateOutputType | null
    _avg: DoctorsCommentsAvgAggregateOutputType | null
    _sum: DoctorsCommentsSumAggregateOutputType | null
    _min: DoctorsCommentsMinAggregateOutputType | null
    _max: DoctorsCommentsMaxAggregateOutputType | null
  }

  type GetDoctorsCommentsGroupByPayload<T extends DoctorsCommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorsCommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorsCommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorsCommentsGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorsCommentsGroupByOutputType[P]>
        }
      >
    >


  export type DoctorsCommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    doctorId?: boolean
    logId?: boolean
    content?: boolean
    createdAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    log?: boolean | LogsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorsComments"]>

  export type DoctorsCommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    doctorId?: boolean
    logId?: boolean
    content?: boolean
    createdAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    log?: boolean | LogsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorsComments"]>

  export type DoctorsCommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    doctorId?: boolean
    logId?: boolean
    content?: boolean
    createdAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    log?: boolean | LogsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorsComments"]>

  export type DoctorsCommentsSelectScalar = {
    id?: boolean
    uuid?: boolean
    doctorId?: boolean
    logId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type DoctorsCommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "doctorId" | "logId" | "content" | "createdAt", ExtArgs["result"]["doctorsComments"]>
  export type DoctorsCommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    log?: boolean | LogsDefaultArgs<ExtArgs>
  }
  export type DoctorsCommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    log?: boolean | LogsDefaultArgs<ExtArgs>
  }
  export type DoctorsCommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    log?: boolean | LogsDefaultArgs<ExtArgs>
  }

  export type $DoctorsCommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorsComments"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
      log: Prisma.$LogsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      doctorId: number
      logId: number
      content: string
      createdAt: Date
    }, ExtArgs["result"]["doctorsComments"]>
    composites: {}
  }

  type DoctorsCommentsGetPayload<S extends boolean | null | undefined | DoctorsCommentsDefaultArgs> = $Result.GetResult<Prisma.$DoctorsCommentsPayload, S>

  type DoctorsCommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorsCommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorsCommentsCountAggregateInputType | true
    }

  export interface DoctorsCommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorsComments'], meta: { name: 'DoctorsComments' } }
    /**
     * Find zero or one DoctorsComments that matches the filter.
     * @param {DoctorsCommentsFindUniqueArgs} args - Arguments to find a DoctorsComments
     * @example
     * // Get one DoctorsComments
     * const doctorsComments = await prisma.doctorsComments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorsCommentsFindUniqueArgs>(args: SelectSubset<T, DoctorsCommentsFindUniqueArgs<ExtArgs>>): Prisma__DoctorsCommentsClient<$Result.GetResult<Prisma.$DoctorsCommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorsComments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorsCommentsFindUniqueOrThrowArgs} args - Arguments to find a DoctorsComments
     * @example
     * // Get one DoctorsComments
     * const doctorsComments = await prisma.doctorsComments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorsCommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorsCommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorsCommentsClient<$Result.GetResult<Prisma.$DoctorsCommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorsComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsCommentsFindFirstArgs} args - Arguments to find a DoctorsComments
     * @example
     * // Get one DoctorsComments
     * const doctorsComments = await prisma.doctorsComments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorsCommentsFindFirstArgs>(args?: SelectSubset<T, DoctorsCommentsFindFirstArgs<ExtArgs>>): Prisma__DoctorsCommentsClient<$Result.GetResult<Prisma.$DoctorsCommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorsComments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsCommentsFindFirstOrThrowArgs} args - Arguments to find a DoctorsComments
     * @example
     * // Get one DoctorsComments
     * const doctorsComments = await prisma.doctorsComments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorsCommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorsCommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorsCommentsClient<$Result.GetResult<Prisma.$DoctorsCommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorsComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsCommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorsComments
     * const doctorsComments = await prisma.doctorsComments.findMany()
     * 
     * // Get first 10 DoctorsComments
     * const doctorsComments = await prisma.doctorsComments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorsCommentsWithIdOnly = await prisma.doctorsComments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorsCommentsFindManyArgs>(args?: SelectSubset<T, DoctorsCommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorsCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorsComments.
     * @param {DoctorsCommentsCreateArgs} args - Arguments to create a DoctorsComments.
     * @example
     * // Create one DoctorsComments
     * const DoctorsComments = await prisma.doctorsComments.create({
     *   data: {
     *     // ... data to create a DoctorsComments
     *   }
     * })
     * 
     */
    create<T extends DoctorsCommentsCreateArgs>(args: SelectSubset<T, DoctorsCommentsCreateArgs<ExtArgs>>): Prisma__DoctorsCommentsClient<$Result.GetResult<Prisma.$DoctorsCommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorsComments.
     * @param {DoctorsCommentsCreateManyArgs} args - Arguments to create many DoctorsComments.
     * @example
     * // Create many DoctorsComments
     * const doctorsComments = await prisma.doctorsComments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorsCommentsCreateManyArgs>(args?: SelectSubset<T, DoctorsCommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorsComments and returns the data saved in the database.
     * @param {DoctorsCommentsCreateManyAndReturnArgs} args - Arguments to create many DoctorsComments.
     * @example
     * // Create many DoctorsComments
     * const doctorsComments = await prisma.doctorsComments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorsComments and only return the `id`
     * const doctorsCommentsWithIdOnly = await prisma.doctorsComments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorsCommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorsCommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorsCommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorsComments.
     * @param {DoctorsCommentsDeleteArgs} args - Arguments to delete one DoctorsComments.
     * @example
     * // Delete one DoctorsComments
     * const DoctorsComments = await prisma.doctorsComments.delete({
     *   where: {
     *     // ... filter to delete one DoctorsComments
     *   }
     * })
     * 
     */
    delete<T extends DoctorsCommentsDeleteArgs>(args: SelectSubset<T, DoctorsCommentsDeleteArgs<ExtArgs>>): Prisma__DoctorsCommentsClient<$Result.GetResult<Prisma.$DoctorsCommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorsComments.
     * @param {DoctorsCommentsUpdateArgs} args - Arguments to update one DoctorsComments.
     * @example
     * // Update one DoctorsComments
     * const doctorsComments = await prisma.doctorsComments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorsCommentsUpdateArgs>(args: SelectSubset<T, DoctorsCommentsUpdateArgs<ExtArgs>>): Prisma__DoctorsCommentsClient<$Result.GetResult<Prisma.$DoctorsCommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorsComments.
     * @param {DoctorsCommentsDeleteManyArgs} args - Arguments to filter DoctorsComments to delete.
     * @example
     * // Delete a few DoctorsComments
     * const { count } = await prisma.doctorsComments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorsCommentsDeleteManyArgs>(args?: SelectSubset<T, DoctorsCommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorsComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsCommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorsComments
     * const doctorsComments = await prisma.doctorsComments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorsCommentsUpdateManyArgs>(args: SelectSubset<T, DoctorsCommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorsComments and returns the data updated in the database.
     * @param {DoctorsCommentsUpdateManyAndReturnArgs} args - Arguments to update many DoctorsComments.
     * @example
     * // Update many DoctorsComments
     * const doctorsComments = await prisma.doctorsComments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorsComments and only return the `id`
     * const doctorsCommentsWithIdOnly = await prisma.doctorsComments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorsCommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorsCommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorsCommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorsComments.
     * @param {DoctorsCommentsUpsertArgs} args - Arguments to update or create a DoctorsComments.
     * @example
     * // Update or create a DoctorsComments
     * const doctorsComments = await prisma.doctorsComments.upsert({
     *   create: {
     *     // ... data to create a DoctorsComments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorsComments we want to update
     *   }
     * })
     */
    upsert<T extends DoctorsCommentsUpsertArgs>(args: SelectSubset<T, DoctorsCommentsUpsertArgs<ExtArgs>>): Prisma__DoctorsCommentsClient<$Result.GetResult<Prisma.$DoctorsCommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorsComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsCommentsCountArgs} args - Arguments to filter DoctorsComments to count.
     * @example
     * // Count the number of DoctorsComments
     * const count = await prisma.doctorsComments.count({
     *   where: {
     *     // ... the filter for the DoctorsComments we want to count
     *   }
     * })
    **/
    count<T extends DoctorsCommentsCountArgs>(
      args?: Subset<T, DoctorsCommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorsCommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorsComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsCommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorsCommentsAggregateArgs>(args: Subset<T, DoctorsCommentsAggregateArgs>): Prisma.PrismaPromise<GetDoctorsCommentsAggregateType<T>>

    /**
     * Group by DoctorsComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsCommentsGroupByArgs} args - Group by arguments.
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
      T extends DoctorsCommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorsCommentsGroupByArgs['orderBy'] }
        : { orderBy?: DoctorsCommentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorsCommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorsCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorsComments model
   */
  readonly fields: DoctorsCommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorsComments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorsCommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    log<T extends LogsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LogsDefaultArgs<ExtArgs>>): Prisma__LogsClient<$Result.GetResult<Prisma.$LogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DoctorsComments model
   */
  interface DoctorsCommentsFieldRefs {
    readonly id: FieldRef<"DoctorsComments", 'Int'>
    readonly uuid: FieldRef<"DoctorsComments", 'String'>
    readonly doctorId: FieldRef<"DoctorsComments", 'Int'>
    readonly logId: FieldRef<"DoctorsComments", 'Int'>
    readonly content: FieldRef<"DoctorsComments", 'String'>
    readonly createdAt: FieldRef<"DoctorsComments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoctorsComments findUnique
   */
  export type DoctorsCommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsComments
     */
    select?: DoctorsCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorsComments
     */
    omit?: DoctorsCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsCommentsInclude<ExtArgs> | null
    /**
     * Filter, which DoctorsComments to fetch.
     */
    where: DoctorsCommentsWhereUniqueInput
  }

  /**
   * DoctorsComments findUniqueOrThrow
   */
  export type DoctorsCommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsComments
     */
    select?: DoctorsCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorsComments
     */
    omit?: DoctorsCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsCommentsInclude<ExtArgs> | null
    /**
     * Filter, which DoctorsComments to fetch.
     */
    where: DoctorsCommentsWhereUniqueInput
  }

  /**
   * DoctorsComments findFirst
   */
  export type DoctorsCommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsComments
     */
    select?: DoctorsCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorsComments
     */
    omit?: DoctorsCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsCommentsInclude<ExtArgs> | null
    /**
     * Filter, which DoctorsComments to fetch.
     */
    where?: DoctorsCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorsComments to fetch.
     */
    orderBy?: DoctorsCommentsOrderByWithRelationInput | DoctorsCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorsComments.
     */
    cursor?: DoctorsCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorsComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorsComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorsComments.
     */
    distinct?: DoctorsCommentsScalarFieldEnum | DoctorsCommentsScalarFieldEnum[]
  }

  /**
   * DoctorsComments findFirstOrThrow
   */
  export type DoctorsCommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsComments
     */
    select?: DoctorsCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorsComments
     */
    omit?: DoctorsCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsCommentsInclude<ExtArgs> | null
    /**
     * Filter, which DoctorsComments to fetch.
     */
    where?: DoctorsCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorsComments to fetch.
     */
    orderBy?: DoctorsCommentsOrderByWithRelationInput | DoctorsCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorsComments.
     */
    cursor?: DoctorsCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorsComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorsComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorsComments.
     */
    distinct?: DoctorsCommentsScalarFieldEnum | DoctorsCommentsScalarFieldEnum[]
  }

  /**
   * DoctorsComments findMany
   */
  export type DoctorsCommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsComments
     */
    select?: DoctorsCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorsComments
     */
    omit?: DoctorsCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsCommentsInclude<ExtArgs> | null
    /**
     * Filter, which DoctorsComments to fetch.
     */
    where?: DoctorsCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorsComments to fetch.
     */
    orderBy?: DoctorsCommentsOrderByWithRelationInput | DoctorsCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorsComments.
     */
    cursor?: DoctorsCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorsComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorsComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorsComments.
     */
    distinct?: DoctorsCommentsScalarFieldEnum | DoctorsCommentsScalarFieldEnum[]
  }

  /**
   * DoctorsComments create
   */
  export type DoctorsCommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsComments
     */
    select?: DoctorsCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorsComments
     */
    omit?: DoctorsCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsCommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorsComments.
     */
    data: XOR<DoctorsCommentsCreateInput, DoctorsCommentsUncheckedCreateInput>
  }

  /**
   * DoctorsComments createMany
   */
  export type DoctorsCommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorsComments.
     */
    data: DoctorsCommentsCreateManyInput | DoctorsCommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorsComments createManyAndReturn
   */
  export type DoctorsCommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsComments
     */
    select?: DoctorsCommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorsComments
     */
    omit?: DoctorsCommentsOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorsComments.
     */
    data: DoctorsCommentsCreateManyInput | DoctorsCommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsCommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorsComments update
   */
  export type DoctorsCommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsComments
     */
    select?: DoctorsCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorsComments
     */
    omit?: DoctorsCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsCommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorsComments.
     */
    data: XOR<DoctorsCommentsUpdateInput, DoctorsCommentsUncheckedUpdateInput>
    /**
     * Choose, which DoctorsComments to update.
     */
    where: DoctorsCommentsWhereUniqueInput
  }

  /**
   * DoctorsComments updateMany
   */
  export type DoctorsCommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorsComments.
     */
    data: XOR<DoctorsCommentsUpdateManyMutationInput, DoctorsCommentsUncheckedUpdateManyInput>
    /**
     * Filter which DoctorsComments to update
     */
    where?: DoctorsCommentsWhereInput
    /**
     * Limit how many DoctorsComments to update.
     */
    limit?: number
  }

  /**
   * DoctorsComments updateManyAndReturn
   */
  export type DoctorsCommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsComments
     */
    select?: DoctorsCommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorsComments
     */
    omit?: DoctorsCommentsOmit<ExtArgs> | null
    /**
     * The data used to update DoctorsComments.
     */
    data: XOR<DoctorsCommentsUpdateManyMutationInput, DoctorsCommentsUncheckedUpdateManyInput>
    /**
     * Filter which DoctorsComments to update
     */
    where?: DoctorsCommentsWhereInput
    /**
     * Limit how many DoctorsComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsCommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorsComments upsert
   */
  export type DoctorsCommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsComments
     */
    select?: DoctorsCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorsComments
     */
    omit?: DoctorsCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsCommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorsComments to update in case it exists.
     */
    where: DoctorsCommentsWhereUniqueInput
    /**
     * In case the DoctorsComments found by the `where` argument doesn't exist, create a new DoctorsComments with this data.
     */
    create: XOR<DoctorsCommentsCreateInput, DoctorsCommentsUncheckedCreateInput>
    /**
     * In case the DoctorsComments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorsCommentsUpdateInput, DoctorsCommentsUncheckedUpdateInput>
  }

  /**
   * DoctorsComments delete
   */
  export type DoctorsCommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsComments
     */
    select?: DoctorsCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorsComments
     */
    omit?: DoctorsCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsCommentsInclude<ExtArgs> | null
    /**
     * Filter which DoctorsComments to delete.
     */
    where: DoctorsCommentsWhereUniqueInput
  }

  /**
   * DoctorsComments deleteMany
   */
  export type DoctorsCommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorsComments to delete
     */
    where?: DoctorsCommentsWhereInput
    /**
     * Limit how many DoctorsComments to delete.
     */
    limit?: number
  }

  /**
   * DoctorsComments without action
   */
  export type DoctorsCommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsComments
     */
    select?: DoctorsCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorsComments
     */
    omit?: DoctorsCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsCommentsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LogsScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    doctorId: 'doctorId',
    patientId: 'patientId',
    filePath: 'filePath',
    createdAt: 'createdAt'
  };

  export type LogsScalarFieldEnum = (typeof LogsScalarFieldEnum)[keyof typeof LogsScalarFieldEnum]


  export const DoctorsCommentsScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    doctorId: 'doctorId',
    logId: 'logId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type DoctorsCommentsScalarFieldEnum = (typeof DoctorsCommentsScalarFieldEnum)[keyof typeof DoctorsCommentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Roles'
   */
  export type EnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles'>
    


  /**
   * Reference to a field of type 'Roles[]'
   */
  export type ListEnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    uuid?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    createdAt?: DateTimeFilter<"User"> | Date | string
    doctor?: LogsListRelationFilter
    patient?: LogsListRelationFilter
    doctorsComments?: DoctorsCommentsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    doctor?: LogsOrderByRelationAggregateInput
    patient?: LogsOrderByRelationAggregateInput
    doctorsComments?: DoctorsCommentsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    createdAt?: DateTimeFilter<"User"> | Date | string
    doctor?: LogsListRelationFilter
    patient?: LogsListRelationFilter
    doctorsComments?: DoctorsCommentsListRelationFilter
  }, "id" | "uuid" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    uuid?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRolesWithAggregatesFilter<"User"> | $Enums.Roles
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LogsWhereInput = {
    AND?: LogsWhereInput | LogsWhereInput[]
    OR?: LogsWhereInput[]
    NOT?: LogsWhereInput | LogsWhereInput[]
    id?: IntFilter<"Logs"> | number
    uuid?: UuidFilter<"Logs"> | string
    doctorId?: IntFilter<"Logs"> | number
    patientId?: IntFilter<"Logs"> | number
    filePath?: StringFilter<"Logs"> | string
    createdAt?: DateTimeFilter<"Logs"> | Date | string
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    doctorsComments?: DoctorsCommentsListRelationFilter
  }

  export type LogsOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    doctor?: UserOrderByWithRelationInput
    patient?: UserOrderByWithRelationInput
    doctorsComments?: DoctorsCommentsOrderByRelationAggregateInput
  }

  export type LogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: LogsWhereInput | LogsWhereInput[]
    OR?: LogsWhereInput[]
    NOT?: LogsWhereInput | LogsWhereInput[]
    doctorId?: IntFilter<"Logs"> | number
    patientId?: IntFilter<"Logs"> | number
    filePath?: StringFilter<"Logs"> | string
    createdAt?: DateTimeFilter<"Logs"> | Date | string
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    doctorsComments?: DoctorsCommentsListRelationFilter
  }, "id" | "uuid">

  export type LogsOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    _count?: LogsCountOrderByAggregateInput
    _avg?: LogsAvgOrderByAggregateInput
    _max?: LogsMaxOrderByAggregateInput
    _min?: LogsMinOrderByAggregateInput
    _sum?: LogsSumOrderByAggregateInput
  }

  export type LogsScalarWhereWithAggregatesInput = {
    AND?: LogsScalarWhereWithAggregatesInput | LogsScalarWhereWithAggregatesInput[]
    OR?: LogsScalarWhereWithAggregatesInput[]
    NOT?: LogsScalarWhereWithAggregatesInput | LogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Logs"> | number
    uuid?: UuidWithAggregatesFilter<"Logs"> | string
    doctorId?: IntWithAggregatesFilter<"Logs"> | number
    patientId?: IntWithAggregatesFilter<"Logs"> | number
    filePath?: StringWithAggregatesFilter<"Logs"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Logs"> | Date | string
  }

  export type DoctorsCommentsWhereInput = {
    AND?: DoctorsCommentsWhereInput | DoctorsCommentsWhereInput[]
    OR?: DoctorsCommentsWhereInput[]
    NOT?: DoctorsCommentsWhereInput | DoctorsCommentsWhereInput[]
    id?: IntFilter<"DoctorsComments"> | number
    uuid?: UuidFilter<"DoctorsComments"> | string
    doctorId?: IntFilter<"DoctorsComments"> | number
    logId?: IntFilter<"DoctorsComments"> | number
    content?: StringFilter<"DoctorsComments"> | string
    createdAt?: DateTimeFilter<"DoctorsComments"> | Date | string
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    log?: XOR<LogsScalarRelationFilter, LogsWhereInput>
  }

  export type DoctorsCommentsOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    doctorId?: SortOrder
    logId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    doctor?: UserOrderByWithRelationInput
    log?: LogsOrderByWithRelationInput
  }

  export type DoctorsCommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: DoctorsCommentsWhereInput | DoctorsCommentsWhereInput[]
    OR?: DoctorsCommentsWhereInput[]
    NOT?: DoctorsCommentsWhereInput | DoctorsCommentsWhereInput[]
    doctorId?: IntFilter<"DoctorsComments"> | number
    logId?: IntFilter<"DoctorsComments"> | number
    content?: StringFilter<"DoctorsComments"> | string
    createdAt?: DateTimeFilter<"DoctorsComments"> | Date | string
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    log?: XOR<LogsScalarRelationFilter, LogsWhereInput>
  }, "id" | "uuid">

  export type DoctorsCommentsOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    doctorId?: SortOrder
    logId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: DoctorsCommentsCountOrderByAggregateInput
    _avg?: DoctorsCommentsAvgOrderByAggregateInput
    _max?: DoctorsCommentsMaxOrderByAggregateInput
    _min?: DoctorsCommentsMinOrderByAggregateInput
    _sum?: DoctorsCommentsSumOrderByAggregateInput
  }

  export type DoctorsCommentsScalarWhereWithAggregatesInput = {
    AND?: DoctorsCommentsScalarWhereWithAggregatesInput | DoctorsCommentsScalarWhereWithAggregatesInput[]
    OR?: DoctorsCommentsScalarWhereWithAggregatesInput[]
    NOT?: DoctorsCommentsScalarWhereWithAggregatesInput | DoctorsCommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DoctorsComments"> | number
    uuid?: UuidWithAggregatesFilter<"DoctorsComments"> | string
    doctorId?: IntWithAggregatesFilter<"DoctorsComments"> | number
    logId?: IntWithAggregatesFilter<"DoctorsComments"> | number
    content?: StringWithAggregatesFilter<"DoctorsComments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DoctorsComments"> | Date | string
  }

  export type UserCreateInput = {
    uuid?: string
    name: string
    email: string
    password: string
    role: $Enums.Roles
    createdAt?: Date | string
    doctor?: LogsCreateNestedManyWithoutDoctorInput
    patient?: LogsCreateNestedManyWithoutPatientInput
    doctorsComments?: DoctorsCommentsCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    password: string
    role: $Enums.Roles
    createdAt?: Date | string
    doctor?: LogsUncheckedCreateNestedManyWithoutDoctorInput
    patient?: LogsUncheckedCreateNestedManyWithoutPatientInput
    doctorsComments?: DoctorsCommentsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: LogsUpdateManyWithoutDoctorNestedInput
    patient?: LogsUpdateManyWithoutPatientNestedInput
    doctorsComments?: DoctorsCommentsUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: LogsUncheckedUpdateManyWithoutDoctorNestedInput
    patient?: LogsUncheckedUpdateManyWithoutPatientNestedInput
    doctorsComments?: DoctorsCommentsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    password: string
    role: $Enums.Roles
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsCreateInput = {
    uuid?: string
    filePath: string
    createdAt?: Date | string
    doctor: UserCreateNestedOneWithoutDoctorInput
    patient: UserCreateNestedOneWithoutPatientInput
    doctorsComments?: DoctorsCommentsCreateNestedManyWithoutLogInput
  }

  export type LogsUncheckedCreateInput = {
    id?: number
    uuid?: string
    doctorId: number
    patientId: number
    filePath: string
    createdAt?: Date | string
    doctorsComments?: DoctorsCommentsUncheckedCreateNestedManyWithoutLogInput
  }

  export type LogsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutDoctorNestedInput
    patient?: UserUpdateOneRequiredWithoutPatientNestedInput
    doctorsComments?: DoctorsCommentsUpdateManyWithoutLogNestedInput
  }

  export type LogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorsComments?: DoctorsCommentsUncheckedUpdateManyWithoutLogNestedInput
  }

  export type LogsCreateManyInput = {
    id?: number
    uuid?: string
    doctorId: number
    patientId: number
    filePath: string
    createdAt?: Date | string
  }

  export type LogsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorsCommentsCreateInput = {
    uuid?: string
    content: string
    createdAt?: Date | string
    doctor: UserCreateNestedOneWithoutDoctorsCommentsInput
    log: LogsCreateNestedOneWithoutDoctorsCommentsInput
  }

  export type DoctorsCommentsUncheckedCreateInput = {
    id?: number
    uuid?: string
    doctorId: number
    logId: number
    content: string
    createdAt?: Date | string
  }

  export type DoctorsCommentsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutDoctorsCommentsNestedInput
    log?: LogsUpdateOneRequiredWithoutDoctorsCommentsNestedInput
  }

  export type DoctorsCommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    logId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorsCommentsCreateManyInput = {
    id?: number
    uuid?: string
    doctorId: number
    logId: number
    content: string
    createdAt?: Date | string
  }

  export type DoctorsCommentsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorsCommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    logId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LogsListRelationFilter = {
    every?: LogsWhereInput
    some?: LogsWhereInput
    none?: LogsWhereInput
  }

  export type DoctorsCommentsListRelationFilter = {
    every?: DoctorsCommentsWhereInput
    some?: DoctorsCommentsWhereInput
    none?: DoctorsCommentsWhereInput
  }

  export type LogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorsCommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LogsCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
  }

  export type LogsAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type LogsMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
  }

  export type LogsMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
  }

  export type LogsSumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type LogsScalarRelationFilter = {
    is?: LogsWhereInput
    isNot?: LogsWhereInput
  }

  export type DoctorsCommentsCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    doctorId?: SortOrder
    logId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorsCommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    logId?: SortOrder
  }

  export type DoctorsCommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    doctorId?: SortOrder
    logId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorsCommentsMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    doctorId?: SortOrder
    logId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorsCommentsSumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    logId?: SortOrder
  }

  export type LogsCreateNestedManyWithoutDoctorInput = {
    create?: XOR<LogsCreateWithoutDoctorInput, LogsUncheckedCreateWithoutDoctorInput> | LogsCreateWithoutDoctorInput[] | LogsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LogsCreateOrConnectWithoutDoctorInput | LogsCreateOrConnectWithoutDoctorInput[]
    createMany?: LogsCreateManyDoctorInputEnvelope
    connect?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
  }

  export type LogsCreateNestedManyWithoutPatientInput = {
    create?: XOR<LogsCreateWithoutPatientInput, LogsUncheckedCreateWithoutPatientInput> | LogsCreateWithoutPatientInput[] | LogsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LogsCreateOrConnectWithoutPatientInput | LogsCreateOrConnectWithoutPatientInput[]
    createMany?: LogsCreateManyPatientInputEnvelope
    connect?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
  }

  export type DoctorsCommentsCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorsCommentsCreateWithoutDoctorInput, DoctorsCommentsUncheckedCreateWithoutDoctorInput> | DoctorsCommentsCreateWithoutDoctorInput[] | DoctorsCommentsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorsCommentsCreateOrConnectWithoutDoctorInput | DoctorsCommentsCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorsCommentsCreateManyDoctorInputEnvelope
    connect?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
  }

  export type LogsUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<LogsCreateWithoutDoctorInput, LogsUncheckedCreateWithoutDoctorInput> | LogsCreateWithoutDoctorInput[] | LogsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LogsCreateOrConnectWithoutDoctorInput | LogsCreateOrConnectWithoutDoctorInput[]
    createMany?: LogsCreateManyDoctorInputEnvelope
    connect?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
  }

  export type LogsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<LogsCreateWithoutPatientInput, LogsUncheckedCreateWithoutPatientInput> | LogsCreateWithoutPatientInput[] | LogsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LogsCreateOrConnectWithoutPatientInput | LogsCreateOrConnectWithoutPatientInput[]
    createMany?: LogsCreateManyPatientInputEnvelope
    connect?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
  }

  export type DoctorsCommentsUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorsCommentsCreateWithoutDoctorInput, DoctorsCommentsUncheckedCreateWithoutDoctorInput> | DoctorsCommentsCreateWithoutDoctorInput[] | DoctorsCommentsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorsCommentsCreateOrConnectWithoutDoctorInput | DoctorsCommentsCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorsCommentsCreateManyDoctorInputEnvelope
    connect?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolesFieldUpdateOperationsInput = {
    set?: $Enums.Roles
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LogsUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<LogsCreateWithoutDoctorInput, LogsUncheckedCreateWithoutDoctorInput> | LogsCreateWithoutDoctorInput[] | LogsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LogsCreateOrConnectWithoutDoctorInput | LogsCreateOrConnectWithoutDoctorInput[]
    upsert?: LogsUpsertWithWhereUniqueWithoutDoctorInput | LogsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: LogsCreateManyDoctorInputEnvelope
    set?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    disconnect?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    delete?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    connect?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    update?: LogsUpdateWithWhereUniqueWithoutDoctorInput | LogsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: LogsUpdateManyWithWhereWithoutDoctorInput | LogsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: LogsScalarWhereInput | LogsScalarWhereInput[]
  }

  export type LogsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LogsCreateWithoutPatientInput, LogsUncheckedCreateWithoutPatientInput> | LogsCreateWithoutPatientInput[] | LogsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LogsCreateOrConnectWithoutPatientInput | LogsCreateOrConnectWithoutPatientInput[]
    upsert?: LogsUpsertWithWhereUniqueWithoutPatientInput | LogsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LogsCreateManyPatientInputEnvelope
    set?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    disconnect?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    delete?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    connect?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    update?: LogsUpdateWithWhereUniqueWithoutPatientInput | LogsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LogsUpdateManyWithWhereWithoutPatientInput | LogsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LogsScalarWhereInput | LogsScalarWhereInput[]
  }

  export type DoctorsCommentsUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorsCommentsCreateWithoutDoctorInput, DoctorsCommentsUncheckedCreateWithoutDoctorInput> | DoctorsCommentsCreateWithoutDoctorInput[] | DoctorsCommentsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorsCommentsCreateOrConnectWithoutDoctorInput | DoctorsCommentsCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorsCommentsUpsertWithWhereUniqueWithoutDoctorInput | DoctorsCommentsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorsCommentsCreateManyDoctorInputEnvelope
    set?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    disconnect?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    delete?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    connect?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    update?: DoctorsCommentsUpdateWithWhereUniqueWithoutDoctorInput | DoctorsCommentsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorsCommentsUpdateManyWithWhereWithoutDoctorInput | DoctorsCommentsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorsCommentsScalarWhereInput | DoctorsCommentsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LogsUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<LogsCreateWithoutDoctorInput, LogsUncheckedCreateWithoutDoctorInput> | LogsCreateWithoutDoctorInput[] | LogsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LogsCreateOrConnectWithoutDoctorInput | LogsCreateOrConnectWithoutDoctorInput[]
    upsert?: LogsUpsertWithWhereUniqueWithoutDoctorInput | LogsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: LogsCreateManyDoctorInputEnvelope
    set?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    disconnect?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    delete?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    connect?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    update?: LogsUpdateWithWhereUniqueWithoutDoctorInput | LogsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: LogsUpdateManyWithWhereWithoutDoctorInput | LogsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: LogsScalarWhereInput | LogsScalarWhereInput[]
  }

  export type LogsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LogsCreateWithoutPatientInput, LogsUncheckedCreateWithoutPatientInput> | LogsCreateWithoutPatientInput[] | LogsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LogsCreateOrConnectWithoutPatientInput | LogsCreateOrConnectWithoutPatientInput[]
    upsert?: LogsUpsertWithWhereUniqueWithoutPatientInput | LogsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LogsCreateManyPatientInputEnvelope
    set?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    disconnect?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    delete?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    connect?: LogsWhereUniqueInput | LogsWhereUniqueInput[]
    update?: LogsUpdateWithWhereUniqueWithoutPatientInput | LogsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LogsUpdateManyWithWhereWithoutPatientInput | LogsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LogsScalarWhereInput | LogsScalarWhereInput[]
  }

  export type DoctorsCommentsUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorsCommentsCreateWithoutDoctorInput, DoctorsCommentsUncheckedCreateWithoutDoctorInput> | DoctorsCommentsCreateWithoutDoctorInput[] | DoctorsCommentsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorsCommentsCreateOrConnectWithoutDoctorInput | DoctorsCommentsCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorsCommentsUpsertWithWhereUniqueWithoutDoctorInput | DoctorsCommentsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorsCommentsCreateManyDoctorInputEnvelope
    set?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    disconnect?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    delete?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    connect?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    update?: DoctorsCommentsUpdateWithWhereUniqueWithoutDoctorInput | DoctorsCommentsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorsCommentsUpdateManyWithWhereWithoutDoctorInput | DoctorsCommentsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorsCommentsScalarWhereInput | DoctorsCommentsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDoctorInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPatientInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    connect?: UserWhereUniqueInput
  }

  export type DoctorsCommentsCreateNestedManyWithoutLogInput = {
    create?: XOR<DoctorsCommentsCreateWithoutLogInput, DoctorsCommentsUncheckedCreateWithoutLogInput> | DoctorsCommentsCreateWithoutLogInput[] | DoctorsCommentsUncheckedCreateWithoutLogInput[]
    connectOrCreate?: DoctorsCommentsCreateOrConnectWithoutLogInput | DoctorsCommentsCreateOrConnectWithoutLogInput[]
    createMany?: DoctorsCommentsCreateManyLogInputEnvelope
    connect?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
  }

  export type DoctorsCommentsUncheckedCreateNestedManyWithoutLogInput = {
    create?: XOR<DoctorsCommentsCreateWithoutLogInput, DoctorsCommentsUncheckedCreateWithoutLogInput> | DoctorsCommentsCreateWithoutLogInput[] | DoctorsCommentsUncheckedCreateWithoutLogInput[]
    connectOrCreate?: DoctorsCommentsCreateOrConnectWithoutLogInput | DoctorsCommentsCreateOrConnectWithoutLogInput[]
    createMany?: DoctorsCommentsCreateManyLogInputEnvelope
    connect?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    upsert?: UserUpsertWithoutDoctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorInput, UserUpdateWithoutDoctorInput>, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type UserUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    upsert?: UserUpsertWithoutPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientInput, UserUpdateWithoutPatientInput>, UserUncheckedUpdateWithoutPatientInput>
  }

  export type DoctorsCommentsUpdateManyWithoutLogNestedInput = {
    create?: XOR<DoctorsCommentsCreateWithoutLogInput, DoctorsCommentsUncheckedCreateWithoutLogInput> | DoctorsCommentsCreateWithoutLogInput[] | DoctorsCommentsUncheckedCreateWithoutLogInput[]
    connectOrCreate?: DoctorsCommentsCreateOrConnectWithoutLogInput | DoctorsCommentsCreateOrConnectWithoutLogInput[]
    upsert?: DoctorsCommentsUpsertWithWhereUniqueWithoutLogInput | DoctorsCommentsUpsertWithWhereUniqueWithoutLogInput[]
    createMany?: DoctorsCommentsCreateManyLogInputEnvelope
    set?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    disconnect?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    delete?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    connect?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    update?: DoctorsCommentsUpdateWithWhereUniqueWithoutLogInput | DoctorsCommentsUpdateWithWhereUniqueWithoutLogInput[]
    updateMany?: DoctorsCommentsUpdateManyWithWhereWithoutLogInput | DoctorsCommentsUpdateManyWithWhereWithoutLogInput[]
    deleteMany?: DoctorsCommentsScalarWhereInput | DoctorsCommentsScalarWhereInput[]
  }

  export type DoctorsCommentsUncheckedUpdateManyWithoutLogNestedInput = {
    create?: XOR<DoctorsCommentsCreateWithoutLogInput, DoctorsCommentsUncheckedCreateWithoutLogInput> | DoctorsCommentsCreateWithoutLogInput[] | DoctorsCommentsUncheckedCreateWithoutLogInput[]
    connectOrCreate?: DoctorsCommentsCreateOrConnectWithoutLogInput | DoctorsCommentsCreateOrConnectWithoutLogInput[]
    upsert?: DoctorsCommentsUpsertWithWhereUniqueWithoutLogInput | DoctorsCommentsUpsertWithWhereUniqueWithoutLogInput[]
    createMany?: DoctorsCommentsCreateManyLogInputEnvelope
    set?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    disconnect?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    delete?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    connect?: DoctorsCommentsWhereUniqueInput | DoctorsCommentsWhereUniqueInput[]
    update?: DoctorsCommentsUpdateWithWhereUniqueWithoutLogInput | DoctorsCommentsUpdateWithWhereUniqueWithoutLogInput[]
    updateMany?: DoctorsCommentsUpdateManyWithWhereWithoutLogInput | DoctorsCommentsUpdateManyWithWhereWithoutLogInput[]
    deleteMany?: DoctorsCommentsScalarWhereInput | DoctorsCommentsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDoctorsCommentsInput = {
    create?: XOR<UserCreateWithoutDoctorsCommentsInput, UserUncheckedCreateWithoutDoctorsCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorsCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type LogsCreateNestedOneWithoutDoctorsCommentsInput = {
    create?: XOR<LogsCreateWithoutDoctorsCommentsInput, LogsUncheckedCreateWithoutDoctorsCommentsInput>
    connectOrCreate?: LogsCreateOrConnectWithoutDoctorsCommentsInput
    connect?: LogsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDoctorsCommentsNestedInput = {
    create?: XOR<UserCreateWithoutDoctorsCommentsInput, UserUncheckedCreateWithoutDoctorsCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorsCommentsInput
    upsert?: UserUpsertWithoutDoctorsCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorsCommentsInput, UserUpdateWithoutDoctorsCommentsInput>, UserUncheckedUpdateWithoutDoctorsCommentsInput>
  }

  export type LogsUpdateOneRequiredWithoutDoctorsCommentsNestedInput = {
    create?: XOR<LogsCreateWithoutDoctorsCommentsInput, LogsUncheckedCreateWithoutDoctorsCommentsInput>
    connectOrCreate?: LogsCreateOrConnectWithoutDoctorsCommentsInput
    upsert?: LogsUpsertWithoutDoctorsCommentsInput
    connect?: LogsWhereUniqueInput
    update?: XOR<XOR<LogsUpdateToOneWithWhereWithoutDoctorsCommentsInput, LogsUpdateWithoutDoctorsCommentsInput>, LogsUncheckedUpdateWithoutDoctorsCommentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LogsCreateWithoutDoctorInput = {
    uuid?: string
    filePath: string
    createdAt?: Date | string
    patient: UserCreateNestedOneWithoutPatientInput
    doctorsComments?: DoctorsCommentsCreateNestedManyWithoutLogInput
  }

  export type LogsUncheckedCreateWithoutDoctorInput = {
    id?: number
    uuid?: string
    patientId: number
    filePath: string
    createdAt?: Date | string
    doctorsComments?: DoctorsCommentsUncheckedCreateNestedManyWithoutLogInput
  }

  export type LogsCreateOrConnectWithoutDoctorInput = {
    where: LogsWhereUniqueInput
    create: XOR<LogsCreateWithoutDoctorInput, LogsUncheckedCreateWithoutDoctorInput>
  }

  export type LogsCreateManyDoctorInputEnvelope = {
    data: LogsCreateManyDoctorInput | LogsCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type LogsCreateWithoutPatientInput = {
    uuid?: string
    filePath: string
    createdAt?: Date | string
    doctor: UserCreateNestedOneWithoutDoctorInput
    doctorsComments?: DoctorsCommentsCreateNestedManyWithoutLogInput
  }

  export type LogsUncheckedCreateWithoutPatientInput = {
    id?: number
    uuid?: string
    doctorId: number
    filePath: string
    createdAt?: Date | string
    doctorsComments?: DoctorsCommentsUncheckedCreateNestedManyWithoutLogInput
  }

  export type LogsCreateOrConnectWithoutPatientInput = {
    where: LogsWhereUniqueInput
    create: XOR<LogsCreateWithoutPatientInput, LogsUncheckedCreateWithoutPatientInput>
  }

  export type LogsCreateManyPatientInputEnvelope = {
    data: LogsCreateManyPatientInput | LogsCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type DoctorsCommentsCreateWithoutDoctorInput = {
    uuid?: string
    content: string
    createdAt?: Date | string
    log: LogsCreateNestedOneWithoutDoctorsCommentsInput
  }

  export type DoctorsCommentsUncheckedCreateWithoutDoctorInput = {
    id?: number
    uuid?: string
    logId: number
    content: string
    createdAt?: Date | string
  }

  export type DoctorsCommentsCreateOrConnectWithoutDoctorInput = {
    where: DoctorsCommentsWhereUniqueInput
    create: XOR<DoctorsCommentsCreateWithoutDoctorInput, DoctorsCommentsUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorsCommentsCreateManyDoctorInputEnvelope = {
    data: DoctorsCommentsCreateManyDoctorInput | DoctorsCommentsCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type LogsUpsertWithWhereUniqueWithoutDoctorInput = {
    where: LogsWhereUniqueInput
    update: XOR<LogsUpdateWithoutDoctorInput, LogsUncheckedUpdateWithoutDoctorInput>
    create: XOR<LogsCreateWithoutDoctorInput, LogsUncheckedCreateWithoutDoctorInput>
  }

  export type LogsUpdateWithWhereUniqueWithoutDoctorInput = {
    where: LogsWhereUniqueInput
    data: XOR<LogsUpdateWithoutDoctorInput, LogsUncheckedUpdateWithoutDoctorInput>
  }

  export type LogsUpdateManyWithWhereWithoutDoctorInput = {
    where: LogsScalarWhereInput
    data: XOR<LogsUpdateManyMutationInput, LogsUncheckedUpdateManyWithoutDoctorInput>
  }

  export type LogsScalarWhereInput = {
    AND?: LogsScalarWhereInput | LogsScalarWhereInput[]
    OR?: LogsScalarWhereInput[]
    NOT?: LogsScalarWhereInput | LogsScalarWhereInput[]
    id?: IntFilter<"Logs"> | number
    uuid?: UuidFilter<"Logs"> | string
    doctorId?: IntFilter<"Logs"> | number
    patientId?: IntFilter<"Logs"> | number
    filePath?: StringFilter<"Logs"> | string
    createdAt?: DateTimeFilter<"Logs"> | Date | string
  }

  export type LogsUpsertWithWhereUniqueWithoutPatientInput = {
    where: LogsWhereUniqueInput
    update: XOR<LogsUpdateWithoutPatientInput, LogsUncheckedUpdateWithoutPatientInput>
    create: XOR<LogsCreateWithoutPatientInput, LogsUncheckedCreateWithoutPatientInput>
  }

  export type LogsUpdateWithWhereUniqueWithoutPatientInput = {
    where: LogsWhereUniqueInput
    data: XOR<LogsUpdateWithoutPatientInput, LogsUncheckedUpdateWithoutPatientInput>
  }

  export type LogsUpdateManyWithWhereWithoutPatientInput = {
    where: LogsScalarWhereInput
    data: XOR<LogsUpdateManyMutationInput, LogsUncheckedUpdateManyWithoutPatientInput>
  }

  export type DoctorsCommentsUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorsCommentsWhereUniqueInput
    update: XOR<DoctorsCommentsUpdateWithoutDoctorInput, DoctorsCommentsUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorsCommentsCreateWithoutDoctorInput, DoctorsCommentsUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorsCommentsUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorsCommentsWhereUniqueInput
    data: XOR<DoctorsCommentsUpdateWithoutDoctorInput, DoctorsCommentsUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorsCommentsUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorsCommentsScalarWhereInput
    data: XOR<DoctorsCommentsUpdateManyMutationInput, DoctorsCommentsUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorsCommentsScalarWhereInput = {
    AND?: DoctorsCommentsScalarWhereInput | DoctorsCommentsScalarWhereInput[]
    OR?: DoctorsCommentsScalarWhereInput[]
    NOT?: DoctorsCommentsScalarWhereInput | DoctorsCommentsScalarWhereInput[]
    id?: IntFilter<"DoctorsComments"> | number
    uuid?: UuidFilter<"DoctorsComments"> | string
    doctorId?: IntFilter<"DoctorsComments"> | number
    logId?: IntFilter<"DoctorsComments"> | number
    content?: StringFilter<"DoctorsComments"> | string
    createdAt?: DateTimeFilter<"DoctorsComments"> | Date | string
  }

  export type UserCreateWithoutDoctorInput = {
    uuid?: string
    name: string
    email: string
    password: string
    role: $Enums.Roles
    createdAt?: Date | string
    patient?: LogsCreateNestedManyWithoutPatientInput
    doctorsComments?: DoctorsCommentsCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateWithoutDoctorInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    password: string
    role: $Enums.Roles
    createdAt?: Date | string
    patient?: LogsUncheckedCreateNestedManyWithoutPatientInput
    doctorsComments?: DoctorsCommentsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
  }

  export type UserCreateWithoutPatientInput = {
    uuid?: string
    name: string
    email: string
    password: string
    role: $Enums.Roles
    createdAt?: Date | string
    doctor?: LogsCreateNestedManyWithoutDoctorInput
    doctorsComments?: DoctorsCommentsCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateWithoutPatientInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    password: string
    role: $Enums.Roles
    createdAt?: Date | string
    doctor?: LogsUncheckedCreateNestedManyWithoutDoctorInput
    doctorsComments?: DoctorsCommentsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
  }

  export type DoctorsCommentsCreateWithoutLogInput = {
    uuid?: string
    content: string
    createdAt?: Date | string
    doctor: UserCreateNestedOneWithoutDoctorsCommentsInput
  }

  export type DoctorsCommentsUncheckedCreateWithoutLogInput = {
    id?: number
    uuid?: string
    doctorId: number
    content: string
    createdAt?: Date | string
  }

  export type DoctorsCommentsCreateOrConnectWithoutLogInput = {
    where: DoctorsCommentsWhereUniqueInput
    create: XOR<DoctorsCommentsCreateWithoutLogInput, DoctorsCommentsUncheckedCreateWithoutLogInput>
  }

  export type DoctorsCommentsCreateManyLogInputEnvelope = {
    data: DoctorsCommentsCreateManyLogInput | DoctorsCommentsCreateManyLogInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDoctorInput = {
    update: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type UserUpdateWithoutDoctorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: LogsUpdateManyWithoutPatientNestedInput
    doctorsComments?: DoctorsCommentsUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: LogsUncheckedUpdateManyWithoutPatientNestedInput
    doctorsComments?: DoctorsCommentsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserUpsertWithoutPatientInput = {
    update: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
  }

  export type UserUpdateWithoutPatientInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: LogsUpdateManyWithoutDoctorNestedInput
    doctorsComments?: DoctorsCommentsUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: LogsUncheckedUpdateManyWithoutDoctorNestedInput
    doctorsComments?: DoctorsCommentsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorsCommentsUpsertWithWhereUniqueWithoutLogInput = {
    where: DoctorsCommentsWhereUniqueInput
    update: XOR<DoctorsCommentsUpdateWithoutLogInput, DoctorsCommentsUncheckedUpdateWithoutLogInput>
    create: XOR<DoctorsCommentsCreateWithoutLogInput, DoctorsCommentsUncheckedCreateWithoutLogInput>
  }

  export type DoctorsCommentsUpdateWithWhereUniqueWithoutLogInput = {
    where: DoctorsCommentsWhereUniqueInput
    data: XOR<DoctorsCommentsUpdateWithoutLogInput, DoctorsCommentsUncheckedUpdateWithoutLogInput>
  }

  export type DoctorsCommentsUpdateManyWithWhereWithoutLogInput = {
    where: DoctorsCommentsScalarWhereInput
    data: XOR<DoctorsCommentsUpdateManyMutationInput, DoctorsCommentsUncheckedUpdateManyWithoutLogInput>
  }

  export type UserCreateWithoutDoctorsCommentsInput = {
    uuid?: string
    name: string
    email: string
    password: string
    role: $Enums.Roles
    createdAt?: Date | string
    doctor?: LogsCreateNestedManyWithoutDoctorInput
    patient?: LogsCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutDoctorsCommentsInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    password: string
    role: $Enums.Roles
    createdAt?: Date | string
    doctor?: LogsUncheckedCreateNestedManyWithoutDoctorInput
    patient?: LogsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutDoctorsCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorsCommentsInput, UserUncheckedCreateWithoutDoctorsCommentsInput>
  }

  export type LogsCreateWithoutDoctorsCommentsInput = {
    uuid?: string
    filePath: string
    createdAt?: Date | string
    doctor: UserCreateNestedOneWithoutDoctorInput
    patient: UserCreateNestedOneWithoutPatientInput
  }

  export type LogsUncheckedCreateWithoutDoctorsCommentsInput = {
    id?: number
    uuid?: string
    doctorId: number
    patientId: number
    filePath: string
    createdAt?: Date | string
  }

  export type LogsCreateOrConnectWithoutDoctorsCommentsInput = {
    where: LogsWhereUniqueInput
    create: XOR<LogsCreateWithoutDoctorsCommentsInput, LogsUncheckedCreateWithoutDoctorsCommentsInput>
  }

  export type UserUpsertWithoutDoctorsCommentsInput = {
    update: XOR<UserUpdateWithoutDoctorsCommentsInput, UserUncheckedUpdateWithoutDoctorsCommentsInput>
    create: XOR<UserCreateWithoutDoctorsCommentsInput, UserUncheckedCreateWithoutDoctorsCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorsCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorsCommentsInput, UserUncheckedUpdateWithoutDoctorsCommentsInput>
  }

  export type UserUpdateWithoutDoctorsCommentsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: LogsUpdateManyWithoutDoctorNestedInput
    patient?: LogsUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorsCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: LogsUncheckedUpdateManyWithoutDoctorNestedInput
    patient?: LogsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type LogsUpsertWithoutDoctorsCommentsInput = {
    update: XOR<LogsUpdateWithoutDoctorsCommentsInput, LogsUncheckedUpdateWithoutDoctorsCommentsInput>
    create: XOR<LogsCreateWithoutDoctorsCommentsInput, LogsUncheckedCreateWithoutDoctorsCommentsInput>
    where?: LogsWhereInput
  }

  export type LogsUpdateToOneWithWhereWithoutDoctorsCommentsInput = {
    where?: LogsWhereInput
    data: XOR<LogsUpdateWithoutDoctorsCommentsInput, LogsUncheckedUpdateWithoutDoctorsCommentsInput>
  }

  export type LogsUpdateWithoutDoctorsCommentsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutDoctorNestedInput
    patient?: UserUpdateOneRequiredWithoutPatientNestedInput
  }

  export type LogsUncheckedUpdateWithoutDoctorsCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsCreateManyDoctorInput = {
    id?: number
    uuid?: string
    patientId: number
    filePath: string
    createdAt?: Date | string
  }

  export type LogsCreateManyPatientInput = {
    id?: number
    uuid?: string
    doctorId: number
    filePath: string
    createdAt?: Date | string
  }

  export type DoctorsCommentsCreateManyDoctorInput = {
    id?: number
    uuid?: string
    logId: number
    content: string
    createdAt?: Date | string
  }

  export type LogsUpdateWithoutDoctorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: UserUpdateOneRequiredWithoutPatientNestedInput
    doctorsComments?: DoctorsCommentsUpdateManyWithoutLogNestedInput
  }

  export type LogsUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    patientId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorsComments?: DoctorsCommentsUncheckedUpdateManyWithoutLogNestedInput
  }

  export type LogsUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    patientId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsUpdateWithoutPatientInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorsComments?: DoctorsCommentsUpdateManyWithoutLogNestedInput
  }

  export type LogsUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorsComments?: DoctorsCommentsUncheckedUpdateManyWithoutLogNestedInput
  }

  export type LogsUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorsCommentsUpdateWithoutDoctorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: LogsUpdateOneRequiredWithoutDoctorsCommentsNestedInput
  }

  export type DoctorsCommentsUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    logId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorsCommentsUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    logId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorsCommentsCreateManyLogInput = {
    id?: number
    uuid?: string
    doctorId: number
    content: string
    createdAt?: Date | string
  }

  export type DoctorsCommentsUpdateWithoutLogInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutDoctorsCommentsNestedInput
  }

  export type DoctorsCommentsUncheckedUpdateWithoutLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorsCommentsUncheckedUpdateManyWithoutLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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