# Example: Migrating a Redux App to Relay using Live Resolvers

[Relay Resolvers](https://relay.dev/docs/next/guides/relay-resolvers/) are a feature in [Relay](https://relay.dev) which allows you to model derived state in your Relay GraphQL schema. Live Resolvers (currently undocumented) are an experimental variant of Relay Resolvers which allow you to expose non-Relay dynamic client state in your Relay GraphQL schema.

While useful on thier own, they can be combined to provide an incremental migration path from a legacy client data provider -- like Redux -- onto Relay.

In this repository we aim to migrate an [example Redux app](https://github.com/reduxjs/redux/tree/master/examples/todomvc) to Relay incrementally.

## Caveats

This example is a bit strained since it is only modeling client state. In most real apps you would have a combination of client and server state.

**This repository is an exporatory work in progress.**

## Migration Steps

### 1. Expose Redux selectors as Live Resolvers in the Relay GraphQL Schema

**Status** Completed

First we schematize the Redux state, and it's derived selector state, in a GraphQL schema using Live Resolvers.

### 2. Migrate components to consume state via Relay APIs

**Status** Completed

Replace all instances of `mapStateToProps` with components locally declaring their data dependenceis via `useFragment` with a single `useLazyLoadQuery` at the application root.

At this point all state in the app is read via Relay APIs.

### 3. Move selector logic into Relay Resolvers

**Satus** TODO

Now that all calls to selectors have been replaced by GraphQL reads, selectors are now just an implementation detail of Relay Resolvers. We can now move that code directly into the Resovlers, disolving the selectors in the process.

### 4. Modify the Redux store to read/write from the Relay Store

**Satus** TODO

Using Relay's [Client Schema Extension](https://relay.dev/docs/guides/client-schema-extensions/) feature, we can store local state in the Graph. Here we replace the Redux store with a new class which implements the same interface. This new class uses the Relay store as its source of truth. `Store.dispatch(action)` result in writing to the Relay store (and notifying all subscribers) and `Store.getState()` reads from the Relay Store and derives a backwards compatibile state object.

### 5. Migrate Live Resolers to read directly from the Relay Store

**Satus** TODO

Once the store implementation has moved to using the Relay store as its source of truth, Live Resolvers can bypass their subscriptions to the Redux store, and instead read directly from the Relay store.

# Using this Repo:

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn relay`

This will run the Relay compiler. Use `yarn relay watch` to start the compiler in watch mode.
