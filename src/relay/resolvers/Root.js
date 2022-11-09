// TODO: Make filter an enum
/**
 * @RelayResolver Root.todos(first: Int, filter: String): TodoConnection
 */
export function todos(args) {
  const first = args?.first || 1000;
  const filter = args?.filter || "ALL";
  return { first, filter };
}
