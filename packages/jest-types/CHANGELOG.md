# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][51]; this project adheres to
[Semantic Versioning][52].

### [1.1.3][53] (2022-01-03)

#### ⚙️ Build system

- **packages:** update shields.io maintenance badge to 2022 ([b63bbb7][54])

### [1.1.2][1] (2021-12-28)

#### 🪄 Fixes

- **packages/mongo-types:** narrower InternalAuthBearerEntry type ([10613b2][2])

#### ⚙️ Build system

- Deprecate @xunnamius/mongo-types; merge @xunnamius/mongo-types into next-utils
  ([06f38d4][3])

### [1.1.1][4] (2021-12-27)

#### ✨ Features

- **packages:** add @xunnamius/mongo-types package ([497c08e][5])

#### ⚙️ Build system

- **package-lock:** add @xunnamius/mongo-types to workspaces ([b5dd3c0][6])
- **packages/jest-types:** update package description ([8291786][7])

## [1.1.0][8] (2021-12-26)

#### ✨ Features

- **packages/jest-types:** add asMockedClass to complement asMockedFunction
  ([11234c0][9])

### [1.0.6][10] (2021-12-12)

#### 🪄 Fixes

- **packages:** use proper monorepo imports and dependencies ([b1c37f0][11])

### [1.0.5][12] (2021-11-21)

#### 🪄 Fixes

- **packages/jest-types:** pull in jest type defs without incident
  ([f31e4ff][13])

#### ⚙️ Build system

- Differentiate between esm and bundler distributables ([f089f57][14])

### [1.0.4][15] (2021-10-26)

#### ⚙️ Build system

- **package-ws:** fix changelog regeneration bug in conventional-changelog-cli
  ([ca04091][16])

### [1.0.3][17] (2021-10-23)

#### ⚙️ Build system

- Output actual ESM distributable ([92b3d3a][18])

### [1.0.2][19] (2021-10-20)

#### 🪄 Fixes

- **packages:** ensure package is tree-shakable ([4a7406f][20])

### [1.0.1][21] (2021-10-20)

#### 🪄 Fixes

- **packages:** ensure import aliases are translated properly in dist types
  ([7612400][22])

#### ⚙️ Build system

- **packages:** add missing peer dependencies ([d6385f2][23])

## [1.0.0][24] (2021-10-19)

#### ✨ Features

- **.gitignore:** add .gitignore ([67f5e63][25])
- **package:** add new all-types package ([bb00737][26])
- **packages:** breakout source into monorepos ([f8e890c][27])
- Transmute @ergodark/types and @ergodark/next-types into a monorepo
  ([3bdb38d][28])

#### ⚙️ Build system

- Add conventional-config-projector and initial semantic-release configs
  ([8d2340c][29])
- **babel:** modernize babel config ([1c20134][30])
- **conventional:** update to work with monorepo structure ([4808695][31])
- **env:** add env config example ([7124bb8][32])
- **eslintrc:** modernize eslint config ([22870f4][33])
- **expect-env:** add expect-env (not as package) ([aa40396][34])
- **fossa:** add fossa config ([d62457f][35])
- **gitignore:** ignore local .npmrc ([2ffd325][36])
- **gitignore:** ignore root and non-root dirs (instead of just root)
  ([94c248f][37])
- **husky:** add husky commit hooks ([e3f07f7][38])
- Import configs from projector ([3e6f45b][39])
- **package:** configure npm workspace monorepo support; update deps
  ([8eef8df][40])
- **package:** fix npm clean script ([6e8ce0d][41])
- **packages:** configure monorepo packages ([3692953][42])
- **packages:** fix build-changelog ([e6a2201][43])
- **packages:** fix build-dist ([faf387a][44])
- **packages:** update type exports to be more robust ([3881362][45])
- **release:** enable semrel & conventional-changelog monorepo support
  ([6bb980e][46])
- Remove redundant install instructions ([c65cb0e][47])
- **spellcheck-commit:** fix spellchecker ([6db1f11][48])
- **tsconfig.json:** prepare tsconfig for pipeline ([f7de015][49])
- **webpack:** compile output with webpack ([d521c0e][50])

[1]:
  https://github.com/Xunnamius/typescript-utils/compare/jest-types@1.1.1...jest-types@1.1.2
[2]:
  https://github.com/Xunnamius/typescript-utils/commit/10613b280f0fb9ddb1927869e16cea1051d4441e
[3]:
  https://github.com/Xunnamius/typescript-utils/commit/06f38d4002388ada772858c29fc81616858c5ae8
[4]:
  https://github.com/Xunnamius/typescript-utils/compare/jest-types@1.1.0...jest-types@1.1.1
[5]:
  https://github.com/Xunnamius/typescript-utils/commit/497c08e5f0786856e087ff157e3d730a8a703097
[6]:
  https://github.com/Xunnamius/typescript-utils/commit/b5dd3c0ddfd356d2ecfbe8b94439088745e6d950
[7]:
  https://github.com/Xunnamius/typescript-utils/commit/82917867b9acd6582ce8611b0280e938d9fecb1a
[8]:
  https://github.com/Xunnamius/typescript-utils/compare/jest-types@1.0.6...jest-types@1.1.0
[9]:
  https://github.com/Xunnamius/typescript-utils/commit/11234c0202b421ce874fbe9b702c1930d1322981
[10]:
  https://github.com/Xunnamius/typescript-utils/compare/jest-types@1.0.5...jest-types@1.0.6
[11]:
  https://github.com/Xunnamius/typescript-utils/commit/b1c37f0332c5408202d7642769f3a1aeedfa7192
[12]:
  https://github.com/Xunnamius/typescript-utils/compare/jest-types@1.0.4...jest-types@1.0.5
[13]:
  https://github.com/Xunnamius/typescript-utils/commit/f31e4ff5d728e0247e54068d548912aeabbcae6e
[14]:
  https://github.com/Xunnamius/typescript-utils/commit/f089f575da900541e71db5c39ad5615e5ecf3639
[15]:
  https://github.com/Xunnamius/typescript-utils/compare/jest-types@1.0.3...jest-types@1.0.4
[16]:
  https://github.com/Xunnamius/typescript-utils/commit/ca040911eef4fca128c377b479298a5414984035
[17]:
  https://github.com/Xunnamius/typescript-utils/compare/jest-types@1.0.2...jest-types@1.0.3
[18]:
  https://github.com/Xunnamius/typescript-utils/commit/92b3d3a3b2941443f169d47f4af5a52fea7f56e1
[19]:
  https://github.com/Xunnamius/typescript-utils/compare/jest-types@1.0.1...jest-types@1.0.2
[20]:
  https://github.com/Xunnamius/typescript-utils/commit/4a7406fb409130a8d600e74ef587d3faf9026b87
[21]:
  https://github.com/Xunnamius/typescript-utils/compare/jest-types@1.0.0...jest-types@1.0.1
[22]:
  https://github.com/Xunnamius/typescript-utils/commit/76124005a0af5a2af18d462353485c2a7a8d5bfd
[23]:
  https://github.com/Xunnamius/typescript-utils/commit/d6385f2f5314e985fcc406c0a2543128f249d885
[24]:
  https://github.com/Xunnamius/typescript-utils/compare/67f5e63863018babf847f4bbf21960b91eb1e7b8...jest-types@1.0.0
[25]:
  https://github.com/Xunnamius/typescript-utils/commit/67f5e63863018babf847f4bbf21960b91eb1e7b8
[26]:
  https://github.com/Xunnamius/typescript-utils/commit/bb00737a6b11e041836bb85f30ceadd8196cc1b6
[27]:
  https://github.com/Xunnamius/typescript-utils/commit/f8e890cb7b60726f9fb416653cb81a43dfb98e54
[28]:
  https://github.com/Xunnamius/typescript-utils/commit/3bdb38d8bd7979b8b9dbb8f2639aa1349468d660
[29]:
  https://github.com/Xunnamius/typescript-utils/commit/8d2340c4bc9af4282fe7e78679ad296bedd15f65
[30]:
  https://github.com/Xunnamius/typescript-utils/commit/1c201343df5d01a95cae187b0c3b496c7678adf3
[31]:
  https://github.com/Xunnamius/typescript-utils/commit/48086952bb3570b03812e3eb8f607a3ca27d4229
[32]:
  https://github.com/Xunnamius/typescript-utils/commit/7124bb819c6f6aeac861ff88c054edd470f04c45
[33]:
  https://github.com/Xunnamius/typescript-utils/commit/22870f4c65ffd8eafeaacf201912951dc62abec0
[34]:
  https://github.com/Xunnamius/typescript-utils/commit/aa40396f4cda8ec6b983e2bf423fef95b0660cd5
[35]:
  https://github.com/Xunnamius/typescript-utils/commit/d62457f26654d6e275b3415675c535c4d014e13e
[36]:
  https://github.com/Xunnamius/typescript-utils/commit/2ffd325268043b775e67bb2e0a561c44d1e45e24
[37]:
  https://github.com/Xunnamius/typescript-utils/commit/94c248f245f753b98c44e5f72955735aa958b81c
[38]:
  https://github.com/Xunnamius/typescript-utils/commit/e3f07f73f7a39cc7d897a7507c793620afe6c006
[39]:
  https://github.com/Xunnamius/typescript-utils/commit/3e6f45b73b6af25af008c542bbb0bdc2a544d186
[40]:
  https://github.com/Xunnamius/typescript-utils/commit/8eef8df98bb7539d105b91b6d254b78f56ca6f86
[41]:
  https://github.com/Xunnamius/typescript-utils/commit/6e8ce0d0a945a5ff4c65c9400df387b51197af11
[42]:
  https://github.com/Xunnamius/typescript-utils/commit/3692953ca8156babf7b1e7584e042bc09820bce6
[43]:
  https://github.com/Xunnamius/typescript-utils/commit/e6a2201cea079bf34e9c2ef8d7fed216ea7911ca
[44]:
  https://github.com/Xunnamius/typescript-utils/commit/faf387a2da48fb51e02cd76017aa745198000efd
[45]:
  https://github.com/Xunnamius/typescript-utils/commit/38813620d45258fcbc9e774031bfe9ed0510eef8
[46]:
  https://github.com/Xunnamius/typescript-utils/commit/6bb980e31f1a73ff3261e67c4337c5ca9572cb85
[47]:
  https://github.com/Xunnamius/typescript-utils/commit/c65cb0e7604b52f7484ed3399a37dbac3a9b2e8f
[48]:
  https://github.com/Xunnamius/typescript-utils/commit/6db1f11391d869949f480d367d3312eddc3c5eb7
[49]:
  https://github.com/Xunnamius/typescript-utils/commit/f7de015b99cd4c0156f3187e53b9eb06a5985721
[50]:
  https://github.com/Xunnamius/typescript-utils/commit/d521c0ee45d86580f95528f987c8e92077b64e8f
[51]: https://conventionalcommits.org
[52]: https://semver.org
[53]:
  https://github.com/Xunnamius/typescript-utils/compare/jest-types@1.1.2...jest-types@1.1.3
[54]:
  https://github.com/Xunnamius/typescript-utils/commit/b63bbb7cabe47e9eeb3ab72cd536fabcac6cbc07
