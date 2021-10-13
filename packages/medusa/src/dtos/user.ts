export type CreateData<T> = {
  [K in keyof T]: Reflect.getMetadata("Createable", T, T[K]) ? K : never
}

export type UpdateData<T> = {
  [K in keyof T]: Reflect.getMetadata("Updateable", T, T[K]) ? K : never
}
