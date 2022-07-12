import { selectLiveDB } from "../../store";
import { DB } from "../../db";

/**
 * @RelayResolver
 * @fieldName visibility_filter
 * @onType Root
 * @live
 *
 * The current active visibility filter.
 */
export default function RootVisibleTodosResolver() {
  return selectLiveDB(() => {
    return DB.first(
      "SELECT value FROM settings WHERE name = 'visibilityFilter' LIMIT 1;"
    ).value;
  });
}
