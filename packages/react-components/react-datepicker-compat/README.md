# @fluentui/react-datepicker-compat

**React Datepicker components for [Fluent UI React](https://react.fluentui.dev/)**

These are not production-ready components and **should never be used in product**. This space is useful for testing new components whose APIs might change before final release.

## Usage

To import DatePicker:

```js
import { DatePicker } from '@fluentui/react-datepicker';
```

### Examples

```jsx
<DatePicker />
```

Alternatively, run Storybook locally with:

```sh
yarn workspace @fluentui/react-datepicker-compat start
```

# Compat component

## What makes a compat component?

A compat component is a component taken from v8 and partially updated with the v9 toolset while keeping its original functionality and most of the original API surface. The most noticeable change being the removal of all v8 dependencies and using only v9 dependencies. While this is a good first step, this is not the final v9 component. We are working on a fully fleshed v9 replacement that will follow all v9 patterns and conventions.

## How publishing the package will be handled

Compat components are not added in the `@fluentui/react-components` package suite. Instead, these components should be imported from their respective package as shown above. In contrast with components that live in `@fluentui/react-components`, compat components are to be released as `0.x.x` and there won't be an unstable release (`beta/alpha`) before this release. This is due to the way we will handle versioning for changes, allowing for breaking changes when necessary.

### Versioning for changes

We will take a similar approach as v0 where we will follow this pattern:

- `breaking change (major)`: Since this is a compat component, we will allow breaking changes if absolutely necessary. To accommodate for this, we will denote those changes as a minor version in semver, i.e. `0.(change will be reflected here).x`.
- `minor and patch`: These changes will be reflected in the patch version in semver as `0.x.(change will be reflected here)`.
