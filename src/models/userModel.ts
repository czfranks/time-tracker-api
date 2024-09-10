import pool from '../config/db';

interface User {
  name: string;
  email: string;
  role: string;
  rate: Number;
}

export const getUsers = async () => {
  const res = await pool.query('select * from users');
  return res.rows;
};

export const createUser = async (user: User) => {
  const sql =
    'insert into users(name, email, role, rate) values($1, $2, $3, $4) returning *';
  const values = Object.values(user);
  const res = await pool.query(sql, values);
  return res.rows[0];
};

/* 
(async () => {
  const newUser: User = {
    name: 'franks',
    email: 'franksdev@mail.com',
    role: 'Full Stack Developer',
    rate: 23,
  };
  console.log(await createUser(newUser));
})(); 
*/
