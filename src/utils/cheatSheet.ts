// import React from 'react';
//
// function pickProp(user: User, property: UserProps) {
//   return user[property];
// }
//
// type User = {
//   name: string;
//   age: number;
//   address?: boolean;
// };
//
// const userObj: User = {
//   name: 'Raf',
//   age: 33,
//   address: true,
// };
//
// type UserProps = keyof User;
// type UserPorp = typeof userObj;
// type Users = keyof typeof userObj;
// type PickPropReturnType = ReturnType<typeof pickProp>;
// type UserWithoutName = Omit<User, 'name'>;
// type UserPickProps = Pick<User, 'name' | 'age'>;
// type UserPartial = Partial<User>;
//
// //////------
//
// type DbConfig = {
//   link: string;
//   port: number;
//   timeout?: number;
// };
//
// //It will force DbConfig, even without the props it will pass
// const conn1 = {link: 'http://db1', port: 122} as DbConfig;
//
// //It will set the type as DbConfig and won't let inference happens
// const conn2: DbConfig = {link: 'http://db1', port: 122, timeout: 100};
// //This shouldn't be undefined, because timeout is set to 100
// const x = conn2.timeout;
//
// //Satisfies is a mixing of both, but allowing inference
// // const conn3 = {link: 'http://db1', port: 122} satisfies DbConfig;
// //This will make sure timeout is a number and not undefined
// // const y = conn3.timeout
//
// /////=== GENERICS
//
// type Video = {
//   title: string;
//   duration: number;
// };
//
// const video: Video = {
//   title: 'XXX',
//   duration: 333,
// };
//
// //Creating a function with a generic type, it will allow it to receive any object
// //In this case, it has to be an object (because of Record)
// //The first argument received it will be a string, and the second one the user will define
// function pickProp2<T extends Record<string, unknown>>(
//   obj: T,
//   property: keyof T,
// ) {
//   return obj[property];
// }
//
// pickProp2(video, 'title');
//
// pickProp2(userObj, 'name');
