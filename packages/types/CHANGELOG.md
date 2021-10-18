# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1]; this project adheres to
[Semantic Versioning][2].

## [1.1.0][3] (2021-10-18)

#### ✨ Features

- **package:** add new all-types package ([bb00737][4])
- **packages:** breakout source into monorepos ([f8e890c][5])

#### ⚙️ Build system

- Add conventional-config-projector and initial semantic-release configs
  ([8d2340c][6])
- **babel:** modernize babel config ([1c20134][7])
- **conventional:** update to work with monorepo structure ([4808695][8])
- **env:** add env config example ([7124bb8][9])
- **eslintrc:** modernize eslint config ([22870f4][10])
- **expect-env:** add expect-env (not as package) ([aa40396][11])
- **fossa:** add fossa config ([d62457f][12])
- **gitignore:** ignore root and non-root dirs (instead of just root)
  ([94c248f][13])
- **husky:** add husky commit hooks ([e3f07f7][14])
- Import configs from projector ([3e6f45b][15])
- **package:** configure npm workspace monorepo support; update deps
  ([8eef8df][16])
- **packages:** configure monorepo packages ([3692953][17])
- **packages:** fix build-changelog ([e6a2201][18])
- **spellcheck-commit:** fix spellchecker ([6db1f11][19])

### [1.0.3][20] (2021-10-18)

#### 🪄 Fixes

- **packages/types/src/index.ts:** JsonRegExp.flags is now optional
  ([479d3f6][21])

### [1.0.2][22] (2021-10-18)

#### ⚙️ Build system

- **tsconfig.json:** prepare tsconfig for pipeline ([f7de015][23])

### [1.0.1][24] (2021-10-18)

#### ⚙️ Build system

- Remove redundant install instructions ([c65cb0e][25])

## [1.0.0][26] (2021-10-18)

#### ✨ Features

- **.gitignore:** add .gitignore ([67f5e63][27])
- Transmute @ergodark/types and @ergodark/next-types into a monorepo
  ([3bdb38d][28])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.3...types@1.1.0
[4]:
  https://github.com/Xunnamius/typescript-utils/commit/bb00737a6b11e041836bb85f30ceadd8196cc1b6
[5]:
  https://github.com/Xunnamius/typescript-utils/commit/f8e890cb7b60726f9fb416653cb81a43dfb98e54
[6]:
  https://github.com/Xunnamius/typescript-utils/commit/8d2340c4bc9af4282fe7e78679ad296bedd15f65
[7]:
  https://github.com/Xunnamius/typescript-utils/commit/1c201343df5d01a95cae187b0c3b496c7678adf3
[8]:
  https://github.com/Xunnamius/typescript-utils/commit/48086952bb3570b03812e3eb8f607a3ca27d4229
[9]:
  https://github.com/Xunnamius/typescript-utils/commit/7124bb819c6f6aeac861ff88c054edd470f04c45
[10]:
  https://github.com/Xunnamius/typescript-utils/commit/22870f4c65ffd8eafeaacf201912951dc62abec0
[11]:
  https://github.com/Xunnamius/typescript-utils/commit/aa40396f4cda8ec6b983e2bf423fef95b0660cd5
[12]:
  https://github.com/Xunnamius/typescript-utils/commit/d62457f26654d6e275b3415675c535c4d014e13e
[13]:
  https://github.com/Xunnamius/typescript-utils/commit/94c248f245f753b98c44e5f72955735aa958b81c
[14]:
  https://github.com/Xunnamius/typescript-utils/commit/e3f07f73f7a39cc7d897a7507c793620afe6c006
[15]:
  https://github.com/Xunnamius/typescript-utils/commit/3e6f45b73b6af25af008c542bbb0bdc2a544d186
[16]:
  https://github.com/Xunnamius/typescript-utils/commit/8eef8df98bb7539d105b91b6d254b78f56ca6f86
[17]:
  https://github.com/Xunnamius/typescript-utils/commit/3692953ca8156babf7b1e7584e042bc09820bce6
[18]:
  https://github.com/Xunnamius/typescript-utils/commit/e6a2201cea079bf34e9c2ef8d7fed216ea7911ca
[19]:
  https://github.com/Xunnamius/typescript-utils/commit/6db1f11391d869949f480d367d3312eddc3c5eb7
[20]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.2...types@1.0.3
[21]:
  https://github.com/Xunnamius/typescript-utils/commit/479d3f6e974f5646505e0fa7c41ae99360873002
[22]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.1...types@1.0.2
[23]:
  https://github.com/Xunnamius/typescript-utils/commit/f7de015b99cd4c0156f3187e53b9eb06a5985721
[24]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.0...types@1.0.1
[25]:
  https://github.com/Xunnamius/typescript-utils/commit/c65cb0e7604b52f7484ed3399a37dbac3a9b2e8f
[26]:
  https://github.com/Xunnamius/typescript-utils/compare/67f5e63863018babf847f4bbf21960b91eb1e7b8...types@1.0.0
[27]:
  https://github.com/Xunnamius/typescript-utils/commit/67f5e63863018babf847f4bbf21960b91eb1e7b8
[28]:
  https://github.com/Xunnamius/typescript-utils/commit/3bdb38d8bd7979b8b9dbb8f2639aa1349468d660
