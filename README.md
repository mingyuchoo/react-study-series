<p align="center">
  <a href="https://github.com/mingyuchoo/react-study-series/blob/main/LICENSE"><img alt="license" src="https://img.shields.io/github/license/mingyuchoo/react-study-series"/></a>
  <a href="https://github.com/mingyuchoo/react-study-series/issues"><img alt="Issues" src="https://img.shields.io/github/issues/mingyuchoo/react-study-series?color=appveyor" /></a>
  <a href="https://github.com/mingyuchoo/react-study-series/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/mingyuchoo/react-study-series?color=appveyor" /></a>
</p>

# react-study-series

## Prerequisites

```bash
$ npm install --global pnpm
```

## How to create scaffold project

### Option 1
```bash
$ pnpm create vite
.../share/pnpm/store/v3/tmp/dlx-17135    |   +1 +
.../share/pnpm/store/v3/tmp/dlx-17135    | Progress: resolved 1, reused 0, downloaded 1, added 1, done
✔ Project name: … vite-project
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC

Scaffolding project in /home/mgch/workspace/vite-project...

Done. Now run:

  cd vite-project
  pnpm install
  pnpm run dev
```

### Option 2

```bash
$ pnpm create vite <project-name> --template <template-name>
$ cd <project-name>
$ pnpm install
$ pnpm run dev
```

#### Templates can choose

- vanilla
- vanilla-ts
- vue
- vue-ts
- react
- react-ts
- react-swc
- react-swc-ts
- preact
- preact-ts
- lit
- lit-ts
- svelte
- svelte-ts
- solid
- solid-ts
- qwik
- qwik-ts

## References

- <https://vitejs.dev/guide/>

