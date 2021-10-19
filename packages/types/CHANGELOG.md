# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][30]; this project adheres to
[Semantic Versioning][31].

## [1.1.0][32] (2021-10-19)

#### ✨ Features

- **package:** add new all-types package ([bb00737][2])
- **packages:** breakout source into monorepos ([f8e890c][3])

#### ⚙️ Build system

- Add conventional-config-projector and initial semantic-release configs
  ([8d2340c][4])
- **babel:** modernize babel config ([1c20134][5])
- **conventional:** update to work with monorepo structure ([4808695][6])
- **env:** add env config example ([7124bb8][7])
- **eslintrc:** modernize eslint config ([22870f4][8])
- **expect-env:** add expect-env (not as package) ([aa40396][9])
- **fossa:** add fossa config ([d62457f][10])
- **gitignore:** ignore local .npmrc ([2ffd325][11])
- **gitignore:** ignore root and non-root dirs (instead of just root)
  ([94c248f][12])
- **husky:** add husky commit hooks ([e3f07f7][13])
- Import configs from projector ([3e6f45b][14])
- **package:** configure npm workspace monorepo support; update deps
  ([8eef8df][15])
- **package:** fix npm clean script ([6e8ce0d][16])
- **packages:** configure monorepo packages ([3692953][17])
- **packages:** fix build-changelog ([e6a2201][18])
- **packages:** fix build-dist ([568a384][19])
- **spellcheck-commit:** fix spellchecker ([6db1f11][20])

## [0.0.0-development][1] (2021-10-19)

#### ✨ Features

- **package:** add new all-types package ([bb00737][2])
- **packages:** breakout source into monorepos ([f8e890c][3])

#### ⚙️ Build system

- Add conventional-config-projector and initial semantic-release configs
  ([8d2340c][4])
- **babel:** modernize babel config ([1c20134][5])
- **conventional:** update to work with monorepo structure ([4808695][6])
- **env:** add env config example ([7124bb8][7])
- **eslintrc:** modernize eslint config ([22870f4][8])
- **expect-env:** add expect-env (not as package) ([aa40396][9])
- **fossa:** add fossa config ([d62457f][10])
- **gitignore:** ignore local .npmrc ([2ffd325][11])
- **gitignore:** ignore root and non-root dirs (instead of just root)
  ([94c248f][12])
- **husky:** add husky commit hooks ([e3f07f7][13])
- Import configs from projector ([3e6f45b][14])
- **package:** configure npm workspace monorepo support; update deps
  ([8eef8df][15])
- **package:** fix npm clean script ([6e8ce0d][16])
- **packages:** configure monorepo packages ([3692953][17])
- **packages:** fix build-changelog ([e6a2201][18])
- **packages:** fix build-dist ([568a384][19])
- **spellcheck-commit:** fix spellchecker ([6db1f11][20])

### [1.0.3][21] (2021-10-18)

#### 🪄 Fixes

- **packages/types/src/index.ts:** JsonRegExp.flags is now optional
  ([479d3f6][22])

### [1.0.2][23] (2021-10-18)

#### ⚙️ Build system

- **tsconfig.json:** prepare tsconfig for pipeline ([f7de015][24])

### [1.0.1][25] (2021-10-18)

#### ⚙️ Build system

- Remove redundant install instructions ([c65cb0e][26])

## [1.0.0][27] (2021-10-18)

#### ✨ Features

- **.gitignore:** add .gitignore ([67f5e63][28])
- Transmute @ergodark/types and @ergodark/next-types into a monorepo
  ([3bdb38d][29])

[1]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.3...types@0.0.0-development
[2]:
  https://github.com/Xunnamius/typescript-utils/commit/bb00737a6b11e041836bb85f30ceadd8196cc1b6
[3]:
  https://github.com/Xunnamius/typescript-utils/commit/f8e890cb7b60726f9fb416653cb81a43dfb98e54
[4]:
  https://github.com/Xunnamius/typescript-utils/commit/8d2340c4bc9af4282fe7e78679ad296bedd15f65
[5]:
  https://github.com/Xunnamius/typescript-utils/commit/1c201343df5d01a95cae187b0c3b496c7678adf3
[6]:
  https://github.com/Xunnamius/typescript-utils/commit/48086952bb3570b03812e3eb8f607a3ca27d4229
[7]:
  https://github.com/Xunnamius/typescript-utils/commit/7124bb819c6f6aeac861ff88c054edd470f04c45
[8]:
  https://github.com/Xunnamius/typescript-utils/commit/22870f4c65ffd8eafeaacf201912951dc62abec0
[9]:
  https://github.com/Xunnamius/typescript-utils/commit/aa40396f4cda8ec6b983e2bf423fef95b0660cd5
[10]:
  https://github.com/Xunnamius/typescript-utils/commit/d62457f26654d6e275b3415675c535c4d014e13e
[11]:
  https://github.com/Xunnamius/typescript-utils/commit/2ffd325268043b775e67bb2e0a561c44d1e45e24
[12]:
  https://github.com/Xunnamius/typescript-utils/commit/94c248f245f753b98c44e5f72955735aa958b81c
[13]:
  https://github.com/Xunnamius/typescript-utils/commit/e3f07f73f7a39cc7d897a7507c793620afe6c006
[14]:
  https://github.com/Xunnamius/typescript-utils/commit/3e6f45b73b6af25af008c542bbb0bdc2a544d186
[15]:
  https://github.com/Xunnamius/typescript-utils/commit/8eef8df98bb7539d105b91b6d254b78f56ca6f86
[16]:
  https://github.com/Xunnamius/typescript-utils/commit/6e8ce0d0a945a5ff4c65c9400df387b51197af11
[17]:
  https://github.com/Xunnamius/typescript-utils/commit/3692953ca8156babf7b1e7584e042bc09820bce6
[18]:
  https://github.com/Xunnamius/typescript-utils/commit/e6a2201cea079bf34e9c2ef8d7fed216ea7911ca
[19]:
  https://github.com/Xunnamius/typescript-utils/commit/568a38492bace0662e89082bc32bfd4ebbc1d528
[20]:
  https://github.com/Xunnamius/typescript-utils/commit/6db1f11391d869949f480d367d3312eddc3c5eb7
[21]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.2...types@1.0.3
[22]:
  https://github.com/Xunnamius/typescript-utils/commit/479d3f6e974f5646505e0fa7c41ae99360873002
[23]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.1...types@1.0.2
[24]:
  https://github.com/Xunnamius/typescript-utils/commit/f7de015b99cd4c0156f3187e53b9eb06a5985721
[25]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.0...types@1.0.1
[26]:
  https://github.com/Xunnamius/typescript-utils/commit/c65cb0e7604b52f7484ed3399a37dbac3a9b2e8f
[27]:
  https://github.com/Xunnamius/typescript-utils/compare/67f5e63863018babf847f4bbf21960b91eb1e7b8...types@1.0.0
[28]:
  https://github.com/Xunnamius/typescript-utils/commit/67f5e63863018babf847f4bbf21960b91eb1e7b8
[29]:
  https://github.com/Xunnamius/typescript-utils/commit/3bdb38d8bd7979b8b9dbb8f2639aa1349468d660
[30]: https://conventionalcommits.org
[31]: https://semver.org
[32]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.3...types@1.1.0
