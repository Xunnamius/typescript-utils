# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][45]; this project adheres to
[Semantic Versioning][46].

### [1.1.8][47] (2021-12-12)

#### 🪄 Fixes

- **packages/types:** JsonError.message should be JsonError.error
  ([46a9067][48])

### [1.1.7][1] (2021-11-21)

#### ⚙️ Build system

- Differentiate between esm and bundler distributables ([f089f57][2])

### [1.1.6][3] (2021-10-26)

#### ⚙️ Build system

- **package-ws:** fix changelog regeneration bug in conventional-changelog-cli
  ([ca04091][4])

### [1.1.5][5] (2021-10-23)

#### ⚙️ Build system

- Output actual ESM distributable ([92b3d3a][6])

### [1.1.4][7] (2021-10-20)

#### 🪄 Fixes

- **packages:** ensure package is tree-shakable ([4a7406f][8])

### [1.1.3][9] (2021-10-20)

#### 🪄 Fixes

- **packages:** ensure import aliases are translated properly in dist types
  ([7612400][10])

### [1.1.2][11] (2021-10-19)

#### ⚙️ Build system

- **packages:** update type exports to be more robust ([3881362][12])

### [1.1.1][13] (2021-10-19)

#### ⚙️ Build system

- **release:** enable semrel & conventional-changelog monorepo support
  ([6bb980e][14])
- **webpack:** compile output with webpack ([d521c0e][15])

## [1.1.0][16] (2021-10-19)

#### ✨ Features

- **package:** add new all-types package ([bb00737][17])
- **packages:** breakout source into monorepos ([f8e890c][18])

#### ⚙️ Build system

- Add conventional-config-projector and initial semantic-release configs
  ([8d2340c][19])
- **babel:** modernize babel config ([1c20134][20])
- **conventional:** update to work with monorepo structure ([4808695][21])
- **env:** add env config example ([7124bb8][22])
- **eslintrc:** modernize eslint config ([22870f4][23])
- **expect-env:** add expect-env (not as package) ([aa40396][24])
- **fossa:** add fossa config ([d62457f][25])
- **gitignore:** ignore local .npmrc ([2ffd325][26])
- **gitignore:** ignore root and non-root dirs (instead of just root)
  ([94c248f][27])
- **husky:** add husky commit hooks ([e3f07f7][28])
- Import configs from projector ([3e6f45b][29])
- **package:** configure npm workspace monorepo support; update deps
  ([8eef8df][30])
- **package:** fix npm clean script ([6e8ce0d][31])
- **packages:** configure monorepo packages ([3692953][32])
- **packages:** fix build-changelog ([e6a2201][33])
- **packages:** fix build-dist ([568a384][34])
- **spellcheck-commit:** fix spellchecker ([6db1f11][35])

### [1.0.3][36] (2021-10-18)

#### 🪄 Fixes

- **packages/types/src/index.ts:** JsonRegExp.flags is now optional
  ([479d3f6][37])

### [1.0.2][38] (2021-10-18)

#### ⚙️ Build system

- **tsconfig.json:** prepare tsconfig for pipeline ([f7de015][39])

### [1.0.1][40] (2021-10-18)

#### ⚙️ Build system

- Remove redundant install instructions ([c65cb0e][41])

## [1.0.0][42] (2021-10-18)

#### ✨ Features

- **.gitignore:** add .gitignore ([67f5e63][43])
- Transmute @ergodark/types and @ergodark/next-types into a monorepo
  ([3bdb38d][44])

[1]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.6...types@1.1.7
[2]:
  https://github.com/Xunnamius/typescript-utils/commit/f089f575da900541e71db5c39ad5615e5ecf3639
[3]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.5...types@1.1.6
[4]:
  https://github.com/Xunnamius/typescript-utils/commit/ca040911eef4fca128c377b479298a5414984035
[5]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.4...types@1.1.5
[6]:
  https://github.com/Xunnamius/typescript-utils/commit/92b3d3a3b2941443f169d47f4af5a52fea7f56e1
[7]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.3...types@1.1.4
[8]:
  https://github.com/Xunnamius/typescript-utils/commit/4a7406fb409130a8d600e74ef587d3faf9026b87
[9]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.2...types@1.1.3
[10]:
  https://github.com/Xunnamius/typescript-utils/commit/76124005a0af5a2af18d462353485c2a7a8d5bfd
[11]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.1...types@1.1.2
[12]:
  https://github.com/Xunnamius/typescript-utils/commit/38813620d45258fcbc9e774031bfe9ed0510eef8
[13]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.0...types@1.1.1
[14]:
  https://github.com/Xunnamius/typescript-utils/commit/6bb980e31f1a73ff3261e67c4337c5ca9572cb85
[15]:
  https://github.com/Xunnamius/typescript-utils/commit/d521c0ee45d86580f95528f987c8e92077b64e8f
[16]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.3...types@1.1.0
[17]:
  https://github.com/Xunnamius/typescript-utils/commit/bb00737a6b11e041836bb85f30ceadd8196cc1b6
[18]:
  https://github.com/Xunnamius/typescript-utils/commit/f8e890cb7b60726f9fb416653cb81a43dfb98e54
[19]:
  https://github.com/Xunnamius/typescript-utils/commit/8d2340c4bc9af4282fe7e78679ad296bedd15f65
[20]:
  https://github.com/Xunnamius/typescript-utils/commit/1c201343df5d01a95cae187b0c3b496c7678adf3
[21]:
  https://github.com/Xunnamius/typescript-utils/commit/48086952bb3570b03812e3eb8f607a3ca27d4229
[22]:
  https://github.com/Xunnamius/typescript-utils/commit/7124bb819c6f6aeac861ff88c054edd470f04c45
[23]:
  https://github.com/Xunnamius/typescript-utils/commit/22870f4c65ffd8eafeaacf201912951dc62abec0
[24]:
  https://github.com/Xunnamius/typescript-utils/commit/aa40396f4cda8ec6b983e2bf423fef95b0660cd5
[25]:
  https://github.com/Xunnamius/typescript-utils/commit/d62457f26654d6e275b3415675c535c4d014e13e
[26]:
  https://github.com/Xunnamius/typescript-utils/commit/2ffd325268043b775e67bb2e0a561c44d1e45e24
[27]:
  https://github.com/Xunnamius/typescript-utils/commit/94c248f245f753b98c44e5f72955735aa958b81c
[28]:
  https://github.com/Xunnamius/typescript-utils/commit/e3f07f73f7a39cc7d897a7507c793620afe6c006
[29]:
  https://github.com/Xunnamius/typescript-utils/commit/3e6f45b73b6af25af008c542bbb0bdc2a544d186
[30]:
  https://github.com/Xunnamius/typescript-utils/commit/8eef8df98bb7539d105b91b6d254b78f56ca6f86
[31]:
  https://github.com/Xunnamius/typescript-utils/commit/6e8ce0d0a945a5ff4c65c9400df387b51197af11
[32]:
  https://github.com/Xunnamius/typescript-utils/commit/3692953ca8156babf7b1e7584e042bc09820bce6
[33]:
  https://github.com/Xunnamius/typescript-utils/commit/e6a2201cea079bf34e9c2ef8d7fed216ea7911ca
[34]:
  https://github.com/Xunnamius/typescript-utils/commit/568a38492bace0662e89082bc32bfd4ebbc1d528
[35]:
  https://github.com/Xunnamius/typescript-utils/commit/6db1f11391d869949f480d367d3312eddc3c5eb7
[36]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.2...types@1.0.3
[37]:
  https://github.com/Xunnamius/typescript-utils/commit/479d3f6e974f5646505e0fa7c41ae99360873002
[38]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.1...types@1.0.2
[39]:
  https://github.com/Xunnamius/typescript-utils/commit/f7de015b99cd4c0156f3187e53b9eb06a5985721
[40]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.0...types@1.0.1
[41]:
  https://github.com/Xunnamius/typescript-utils/commit/c65cb0e7604b52f7484ed3399a37dbac3a9b2e8f
[42]:
  https://github.com/Xunnamius/typescript-utils/compare/67f5e63863018babf847f4bbf21960b91eb1e7b8...types@1.0.0
[43]:
  https://github.com/Xunnamius/typescript-utils/commit/67f5e63863018babf847f4bbf21960b91eb1e7b8
[44]:
  https://github.com/Xunnamius/typescript-utils/commit/3bdb38d8bd7979b8b9dbb8f2639aa1349468d660
[45]: https://conventionalcommits.org
[46]: https://semver.org
[47]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.7...types@1.1.8
[48]:
  https://github.com/Xunnamius/typescript-utils/commit/46a90672973325908a7c2fd51b0f60375ac2f646
