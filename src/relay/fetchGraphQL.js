// Our app currently only uses client side data. However, Relay expects each
// query to read _some_ server data. To satisfy that requirement for now, we
// use an arbitrary server that returns the same data, even though that data is
// ignored.
async function fetchGraphQL(text, variables) {
  // Return dummy data for now.
  return {
    data: {
      dummy_server_field: null,
    },
    errors: [],
  };
}

export default fetchGraphQL;
