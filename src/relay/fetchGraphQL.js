// Our app currently only uses client side data. However, Relay expects each
// query to read _some_ server data. To satisfy that requirement for now, we
// use an arbitrary server that returns the same data, even though that data is
// ignored.
async function fetchGraphQL(text, variables) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(
    "https://swapi-graphql.netlify.app/.netlify/functions/index",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    }
  );

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
