import React from 'react';

function pickProp(user: User, property: UserProps) {
  return user[property];
}

type User = {
  name: string;
  age: number;
  address?: boolean;
};

const userObj: User = {
  name: 'Raf',
  age: 33,
  address: true,
};

type UserProps = keyof User;
type UserPorp = typeof userObj;
type Users = keyof typeof userObj;
type PickPropReturnType = ReturnType<typeof pickProp>;
type UserWithoutName = Omit<User, 'name'>;
type UserPickProps = Pick<User, 'name' | 'age'>;
type UserPartial = Partial<User>;

//////------

type DbCOnfig = {
  link: string;
  port: number;
};

const conn1 = {link: 'http://db1', port: 122} as DbCOnfig;
const conn2: DbCOnfig = {link: 'http://db1', port: 122};
// const conn3 = {link: 'http://db1', port: 122} satisfies DbCOnfig;
