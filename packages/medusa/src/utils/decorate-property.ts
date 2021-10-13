// type to hand-pick properties from T based on a Condition
// e.g. pick all properties from User that are of type string would be:
// Actionable<User, string>
export type Actionable<T, Condition> = {
  [Key in keyof T]: T[Key] extends Condition ? Key : never
}

// type to filter out properties that are of type never ^^
export type FilteredActionables<T, Condition> = Actionable<
  T,
  Condition
>[keyof T]

// type to get a subset of properties from T based on a Condition
export type PartialEntity<T, Condition> = Pick<
  T,
  FilteredActionables<T, Condition>
>
