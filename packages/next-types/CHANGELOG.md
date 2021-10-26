# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][34]; this project adheres to
[Semantic Versioning][35].

### [1.0.4][36] (2021-10-26)

#### ⚙️ Build system

- **package-ws:** fix changelog regeneration bug in conventional-changelog-cli
  ([ca04091][37])

### [1.0.3][1] (2021-10-23)

#### ⚙️ Build system

- Output actual ESM distributable ([92b3d3a][2])

### [1.0.2][3] (2021-10-20)

#### 🪄 Fixes

- **packages:** ensure package is tree-shakable ([4a7406f][4])

### [1.0.1][5] (2021-10-20)

#### 🪄 Fixes

- **packages:** ensure import aliases are translated properly in dist types
  ([7612400][6])

## [1.0.0][7] (2021-10-19)

#### ✨ Features

- **.gitignore:** add .gitignore ([67f5e63][8])
- **package:** add new all-types package ([bb00737][9])
- **packages:** breakout source into monorepos ([f8e890c][10])
- Transmute @ergodark/types and @ergodark/next-types into a monorepo
  ([3bdb38d][11])

#### ⚙️ Build system

- Add conventional-config-projector and initial semantic-release configs
  ([8d2340c][12])
- **babel:** modernize babel config ([1c20134][13])
- **conventional:** update to work with monorepo structure ([4808695][14])
- **env:** add env config example ([7124bb8][15])
- **eslintrc:** modernize eslint config ([22870f4][16])
- **expect-env:** add expect-env (not as package) ([aa40396][17])
- **fossa:** add fossa config ([d62457f][18])
- **gitignore:** ignore local .npmrc ([2ffd325][19])
- **gitignore:** ignore root and non-root dirs (instead of just root)
  ([94c248f][20])
- **husky:** add husky commit hooks ([e3f07f7][21])
- Import configs from projector ([3e6f45b][22])
- **package:** configure npm workspace monorepo support; update deps
  ([8eef8df][23])
- **package:** fix npm clean script ([6e8ce0d][24])
- **packages:** configure monorepo packages ([3692953][25])
- **packages:** fix build-changelog ([e6a2201][26])
- **packages:** fix build-dist ([49a38c4][27])
- **packages:** update type exports to be more robust ([3881362][28])
- **release:** enable semrel & conventional-changelog monorepo support
  ([6bb980e][29])
- Remove redundant install instructions ([c65cb0e][30])
- **spellcheck-commit:** fix spellchecker ([6db1f11][31])
- **tsconfig.json:** prepare tsconfig for pipeline ([f7de015][32])
- **webpack:** compile output with webpack ([d521c0e][33])

[1]:
  https://github.com/Xunnamius/typescript-utils/compare/next-types@1.0.2...next-types@1.0.3
[2]:
  https://github.com/Xunnamius/typescript-utils/commit/92b3d3a3b2941443f169d47f4af5a52fea7f56e1
[3]:
  https://github.com/Xunnamius/typescript-utils/compare/next-types@1.0.1...next-types@1.0.2
[4]:
  https://github.com/Xunnamius/typescript-utils/commit/4a7406fb409130a8d600e74ef587d3faf9026b87
[5]:
  https://github.com/Xunnamius/typescript-utils/compare/next-types@1.0.0...next-types@1.0.1
[6]:
  https://github.com/Xunnamius/typescript-utils/commit/76124005a0af5a2af18d462353485c2a7a8d5bfd
[7]:
  https://github.com/Xunnamius/typescript-utils/compare/67f5e63863018babf847f4bbf21960b91eb1e7b8...next-types@1.0.0
[8]:
  https://github.com/Xunnamius/typescript-utils/commit/67f5e63863018babf847f4bbf21960b91eb1e7b8
[9]:
  https://github.com/Xunnamius/typescript-utils/commit/bb00737a6b11e041836bb85f30ceadd8196cc1b6
[10]:
  https://github.com/Xunnamius/typescript-utils/commit/f8e890cb7b60726f9fb416653cb81a43dfb98e54
[11]:
  https://github.com/Xunnamius/typescript-utils/commit/3bdb38d8bd7979b8b9dbb8f2639aa1349468d660
[12]:
  https://github.com/Xunnamius/typescript-utils/commit/8d2340c4bc9af4282fe7e78679ad296bedd15f65
[13]:
  https://github.com/Xunnamius/typescript-utils/commit/1c201343df5d01a95cae187b0c3b496c7678adf3
[14]:
  https://github.com/Xunnamius/typescript-utils/commit/48086952bb3570b03812e3eb8f607a3ca27d4229
[15]:
  https://github.com/Xunnamius/typescript-utils/commit/7124bb819c6f6aeac861ff88c054edd470f04c45
[16]:
  https://github.com/Xunnamius/typescript-utils/commit/22870f4c65ffd8eafeaacf201912951dc62abec0
[17]:
  https://github.com/Xunnamius/typescript-utils/commit/aa40396f4cda8ec6b983e2bf423fef95b0660cd5
[18]:
  https://github.com/Xunnamius/typescript-utils/commit/d62457f26654d6e275b3415675c535c4d014e13e
[19]:
  https://github.com/Xunnamius/typescript-utils/commit/2ffd325268043b775e67bb2e0a561c44d1e45e24
[20]:
  https://github.com/Xunnamius/typescript-utils/commit/94c248f245f753b98c44e5f72955735aa958b81c
[21]:
  https://github.com/Xunnamius/typescript-utils/commit/e3f07f73f7a39cc7d897a7507c793620afe6c006
[22]:
  https://github.com/Xunnamius/typescript-utils/commit/3e6f45b73b6af25af008c542bbb0bdc2a544d186
[23]:
  https://github.com/Xunnamius/typescript-utils/commit/8eef8df98bb7539d105b91b6d254b78f56ca6f86
[24]:
  https://github.com/Xunnamius/typescript-utils/commit/6e8ce0d0a945a5ff4c65c9400df387b51197af11
[25]:
  https://github.com/Xunnamius/typescript-utils/commit/3692953ca8156babf7b1e7584e042bc09820bce6
[26]:
  https://github.com/Xunnamius/typescript-utils/commit/e6a2201cea079bf34e9c2ef8d7fed216ea7911ca
[27]:
  https://github.com/Xunnamius/typescript-utils/commit/49a38c4d83646afc588b29f6d2b8aeb12e679568
[28]:
  https://github.com/Xunnamius/typescript-utils/commit/38813620d45258fcbc9e774031bfe9ed0510eef8
[29]:
  https://github.com/Xunnamius/typescript-utils/commit/6bb980e31f1a73ff3261e67c4337c5ca9572cb85
[30]:
  https://github.com/Xunnamius/typescript-utils/commit/c65cb0e7604b52f7484ed3399a37dbac3a9b2e8f
[31]:
  https://github.com/Xunnamius/typescript-utils/commit/6db1f11391d869949f480d367d3312eddc3c5eb7
[32]:
  https://github.com/Xunnamius/typescript-utils/commit/f7de015b99cd4c0156f3187e53b9eb06a5985721
[33]:
  https://github.com/Xunnamius/typescript-utils/commit/d521c0ee45d86580f95528f987c8e92077b64e8f
[34]: https://conventionalcommits.org
[35]: https://semver.org
[36]:
  https://github.com/Xunnamius/typescript-utils/compare/next-types@1.0.3...next-types@1.0.4
[37]:
  https://github.com/Xunnamius/typescript-utils/commit/ca040911eef4fca128c377b479298a5414984035
