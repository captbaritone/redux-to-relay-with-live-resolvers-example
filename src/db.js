import initSqlJs from "sql.js";

// Required to let webpack 4 know it needs to copy the wasm file to our assets
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";

async function init() {
  const SQL = await initSqlJs({ locateFile: () => sqlWasm });
  DB = new SQL.Database();
  DB.exec(
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
