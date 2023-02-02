import initSqlJs from "sql.js";

// Required to let webpack 4 know it needs to copy the wasm file to our assets
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";

async function init() {
  const SQL = await initSqlJs({ locateFile: () => sqlWasm });
  const db = new SQL.Database();
  window.__DB = db;

  DB = {
    // Run a query and return the results as an array of objects
    query(query, wildcards) {
      const result = db.exec(query, wildcards);
      // Assume only one statement per query
      const firstResult = result[0];
      if (firstResult == null) {
        return [];
      }

      // Convert raw SQL results into a row of objects
      return firstResult.values.map((row) => {
        const result = {};
        for (let i = 0; i < firstResult.columns.length; i++) {
          result[firstResult.columns[i]] = row[i];
        }
        return result;
      });
    },
    // Run a query and get the first row
    first(query, wildcards) {
      return DB.query(query, wildcards)[0];
    },
    // Run a query and ignore the results
    run(query, wildcards) {
      return db.run(query, wildcards);
    },
  };

  // Setup the database.
  DB.run(
    `
        CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, completed INTEGER);
        CREATE TABLE IF NOT EXISTS settings (name TEXT PRIMARY KEY, value TEXT);
        INSERT INTO settings (name, value) VALUES ("visibilityFilter", "show_all");
        INSERT INTO todos (text, completed) VALUES ("Use Relay with SQL", false);
    `
  );
}

export let DB = null;

export const onReady = init();
