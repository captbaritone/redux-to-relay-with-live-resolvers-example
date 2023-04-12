import { SKDB } from "skdb";

const resetSKDBOnReload = true;

// TODO(SKDB): I don't think SKDB has interpolation yet?
function applyWildcards(query, wildcards) {
  if (Array.isArray(wildcards)) {
    for (const wildcard of wildcards) {
      if (typeof wildcard === "string") {
        query = query.replace("?", `'${wildcard}'`);
      } else {
        query = query.replace("?", wildcard);
      }
    }
  } else if (wildcards !== undefined) {
    throw new Error("wildcards must be an array");
  }
  return query;
}

async function init() {
  const skdb = await SKDB.create(resetSKDBOnReload);

  // For debugging
  window.__DB = skdb;

  let i = 0;

  DB = {
    // Run a query and return the results as an array of objects
    sql(query, wildcards) {
      //console.log("query", query, wildcards);
      const result = skdb.sql(applyWildcards(query, wildcards));
      // console.log(result);
      return result;
    },
    // Run a query and get the first row
    first(query, wildcards) {
      // console.log("query", query, wildcards);
      const result = skdb.sql(applyWildcards(query, wildcards))[0];
      // console.log(result);
      return result;
    },
    // TODO(SKDB): I don't believe SKDB has AUTOINCREMENT support?
    nextId() {
      return i++;
    },
  };

  // Setup the database.

  DB.sql(
    "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, text TEXT, completed INTEGER)"
  );
  DB.sql(
    "CREATE TABLE IF NOT EXISTS settings (name TEXT PRIMARY KEY, value TEXT)"
  );
  DB.sql(
    `INSERT INTO settings (name, value) VALUES ('visibilityFilter', 'show_all')`
  );
  DB.sql(
    `INSERT INTO todos (id, text, completed) VALUES (?, 'Use Relay with SQL', 0)`,
    [DB.nextId()]
  );
  DB.sql(
    `INSERT INTO todos (id, text, completed) VALUES (?, 'Use Relay with SKDB', 0)`,
    [DB.nextId()]
  );
}

export let DB = null;

export const onReady = init();
