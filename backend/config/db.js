import Pool from 'pg-pool'
//connect to postgresql

const pool = new Pool({
  user: "postgres",
  password: "qw12qw12",
  host: "localhost",
  port: 5432,
  database: "todo"
});

export default pool
