import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://ads_h24s_user:e3RBuUUnxHN3eDchLG4CnMYUdOY30Wse@dpg-cr75tci3esus738aon60-a.oregon-postgres.render.com/ads_h24s';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});