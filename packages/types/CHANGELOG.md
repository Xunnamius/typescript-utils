# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][63]; this project adheres to
[Semantic Versioning][64].

### [1.2.3][65] (2022-05-30)

#### 🪄 Fixes

- **packages/types:** make UnixEpochMs a normal number type ([75a23d7][66])

### [1.2.2][1] (2022-01-03)

#### ⚙️ Build system

- **packages:** update shields.io maintenance badge to 2022 ([b63bbb7][2])

### [1.2.1][3] (2021-12-28)

#### 🪄 Fixes

- **packages/mongo-types:** narrower InternalAuthBearerEntry type ([10613b2][4])
- **packages/types:** actually export ValidHttpMethod ([21cb3ee][5])

#### ⚙️ Build system

- Deprecate @xunnamius/mongo-types; merge @xunnamius/mongo-types into next-utils
  ([06f38d4][6])

## [1.2.0][7] (2021-12-27)

#### ✨ Features

- **packages:** add @xunnamius/mongo-types package ([497c08e][8])
- **packages:** add validHTTPMethods, ValidHttpMethod, UnixEpochMs exports
  ([790b69c][9])

#### ⚙️ Build system

- **package-lock:** add @xunnamius/mongo-types to workspaces ([b5dd3c0][10])

### [1.1.10][11] (2021-12-26)

#### 🪄 Fixes

- **packages/types:** remove "declare" from AnyKey, AnyFunction type exports
  ([e0ed947][12])

### [1.1.9][13] (2021-12-12)

#### 🪄 Fixes

- **packages/types:** use proper monorepo imports and dependencies
  ([579d71a][14])

### [1.1.8][15] (2021-12-12)

#### 🪄 Fixes

- **packages/types:** JsonError.message should be JsonError.error
  ([46a9067][16])

### [1.1.7][17] (2021-11-21)

#### ⚙️ Build system

- Differentiate between esm and bundler distributables ([f089f57][18])

### [1.1.6][19] (2021-10-26)

#### ⚙️ Build system

- **package-ws:** fix changelog regeneration bug in conventional-changelog-cli
  ([ca04091][20])

### [1.1.5][21] (2021-10-23)

#### ⚙️ Build system

- Output actual ESM distributable ([92b3d3a][22])

### [1.1.4][23] (2021-10-20)

#### 🪄 Fixes

- **packages:** ensure package is tree-shakable ([4a7406f][24])

### [1.1.3][25] (2021-10-20)

#### 🪄 Fixes

- **packages:** ensure import aliases are translated properly in dist types
  ([7612400][26])

#### ⚙️ Build system

- **packages:** add missing peer dependencies ([d6385f2][27])

### [1.1.2][28] (2021-10-19)

#### ⚙️ Build system

- **packages:** update type exports to be more robust ([3881362][29])

### [1.1.1][30] (2021-10-19)

#### ⚙️ Build system

- **packages:** fix build-dist ([faf387a][31])
- **release:** enable semrel & conventional-changelog monorepo support
  ([6bb980e][32])
- **webpack:** compile output with webpack ([d521c0e][33])

## [1.1.0][34] (2021-10-19)

#### ✨ Features

- **package:** add new all-types package ([bb00737][35])
- **packages:** breakout source into monorepos ([f8e890c][36])

#### ⚙️ Build system

- Add conventional-config-projector and initial semantic-release configs
  ([8d2340c][37])
- **babel:** modernize babel config ([1c20134][38])
- **conventional:** update to work with monorepo structure ([4808695][39])
- **env:** add env config example ([7124bb8][40])
- **eslintrc:** modernize eslint config ([22870f4][41])
- **expect-env:** add expect-env (not as package) ([aa40396][42])
- **fossa:** add fossa config ([d62457f][43])
- **gitignore:** ignore local .npmrc ([2ffd325][44])
- **gitignore:** ignore root and non-root dirs (instead of just root)
  ([94c248f][45])
- **husky:** add husky commit hooks ([e3f07f7][46])
- Import configs from projector ([3e6f45b][47])
- **package:** configure npm workspace monorepo support; update deps
  ([8eef8df][48])
- **package:** fix npm clean script ([6e8ce0d][49])
- **packages:** configure monorepo packages ([3692953][50])
- **packages:** fix build-changelog ([e6a2201][51])
- **packages:** fix build-dist ([568a384][52])
- **spellcheck-commit:** fix spellchecker ([6db1f11][53])

### [1.0.3][54] (2021-10-18)

#### 🪄 Fixes

- **packages/types/src/index.ts:** JsonRegExp.flags is now optional
  ([479d3f6][55])

### [1.0.2][56] (2021-10-18)

#### ⚙️ Build system

- **tsconfig.json:** prepare tsconfig for pipeline ([f7de015][57])

### [1.0.1][58] (2021-10-18)

#### ⚙️ Build system

- Remove redundant install instructions ([c65cb0e][59])

## [1.0.0][60] (2021-10-18)

#### ✨ Features

- **.gitignore:** add .gitignore ([67f5e63][61])
- Transmute @ergodark/types and @ergodark/next-types into a monorepo
  ([3bdb38d][62])

[1]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.2.1...types@1.2.2
[2]:
  https://github.com/Xunnamius/typescript-utils/commit/b63bbb7cabe47e9eeb3ab72cd536fabcac6cbc07
[3]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.2.0...types@1.2.1
[4]:
  https://github.com/Xunnamius/typescript-utils/commit/10613b280f0fb9ddb1927869e16cea1051d4441e
[5]:
  https://github.com/Xunnamius/typescript-utils/commit/21cb3ee1b4e405d7aab2ecb62cf29a4b07d6cdc7
[6]:
  https://github.com/Xunnamius/typescript-utils/commit/06f38d4002388ada772858c29fc81616858c5ae8
[7]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.10...types@1.2.0
[8]:
  https://github.com/Xunnamius/typescript-utils/commit/497c08e5f0786856e087ff157e3d730a8a703097
[9]:
  https://github.com/Xunnamius/typescript-utils/commit/790b69ca864bef505dba8acc940386be025bc37c
[10]:
  https://github.com/Xunnamius/typescript-utils/commit/b5dd3c0ddfd356d2ecfbe8b94439088745e6d950
[11]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.9...types@1.1.10
[12]:
  https://github.com/Xunnamius/typescript-utils/commit/e0ed9478c3e7e8b1aa21c9a6af7a637c3c3ac023
[13]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.8...types@1.1.9
[14]:
  https://github.com/Xunnamius/typescript-utils/commit/579d71ab611e348ca8fd4682a00df4b7aeccee43
[15]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.7...types@1.1.8
[16]:
  https://github.com/Xunnamius/typescript-utils/commit/46a90672973325908a7c2fd51b0f60375ac2f646
[17]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.6...types@1.1.7
[18]:
  https://github.com/Xunnamius/typescript-utils/commit/f089f575da900541e71db5c39ad5615e5ecf3639
[19]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.5...types@1.1.6
[20]:
  https://github.com/Xunnamius/typescript-utils/commit/ca040911eef4fca128c377b479298a5414984035
[21]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.4...types@1.1.5
[22]:
  https://github.com/Xunnamius/typescript-utils/commit/92b3d3a3b2941443f169d47f4af5a52fea7f56e1
[23]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.3...types@1.1.4
[24]:
  https://github.com/Xunnamius/typescript-utils/commit/4a7406fb409130a8d600e74ef587d3faf9026b87
[25]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.2...types@1.1.3
[26]:
  https://github.com/Xunnamius/typescript-utils/commit/76124005a0af5a2af18d462353485c2a7a8d5bfd
[27]:
  https://github.com/Xunnamius/typescript-utils/commit/d6385f2f5314e985fcc406c0a2543128f249d885
[28]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.1...types@1.1.2
[29]:
  https://github.com/Xunnamius/typescript-utils/commit/38813620d45258fcbc9e774031bfe9ed0510eef8
[30]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.1.0...types@1.1.1
[31]:
  https://github.com/Xunnamius/typescript-utils/commit/faf387a2da48fb51e02cd76017aa745198000efd
[32]:
  https://github.com/Xunnamius/typescript-utils/commit/6bb980e31f1a73ff3261e67c4337c5ca9572cb85
[33]:
  https://github.com/Xunnamius/typescript-utils/commit/d521c0ee45d86580f95528f987c8e92077b64e8f
[34]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.3...types@1.1.0
[35]:
  https://github.com/Xunnamius/typescript-utils/commit/bb00737a6b11e041836bb85f30ceadd8196cc1b6
[36]:
  https://github.com/Xunnamius/typescript-utils/commit/f8e890cb7b60726f9fb416653cb81a43dfb98e54
[37]:
  https://github.com/Xunnamius/typescript-utils/commit/8d2340c4bc9af4282fe7e78679ad296bedd15f65
[38]:
  https://github.com/Xunnamius/typescript-utils/commit/1c201343df5d01a95cae187b0c3b496c7678adf3
[39]:
  https://github.com/Xunnamius/typescript-utils/commit/48086952bb3570b03812e3eb8f607a3ca27d4229
[40]:
  https://github.com/Xunnamius/typescript-utils/commit/7124bb819c6f6aeac861ff88c054edd470f04c45
[41]:
  https://github.com/Xunnamius/typescript-utils/commit/22870f4c65ffd8eafeaacf201912951dc62abec0
[42]:
  https://github.com/Xunnamius/typescript-utils/commit/aa40396f4cda8ec6b983e2bf423fef95b0660cd5
[43]:
  https://github.com/Xunnamius/typescript-utils/commit/d62457f26654d6e275b3415675c535c4d014e13e
[44]:
  https://github.com/Xunnamius/typescript-utils/commit/2ffd325268043b775e67bb2e0a561c44d1e45e24
[45]:
  https://github.com/Xunnamius/typescript-utils/commit/94c248f245f753b98c44e5f72955735aa958b81c
[46]:
  https://github.com/Xunnamius/typescript-utils/commit/e3f07f73f7a39cc7d897a7507c793620afe6c006
[47]:
  https://github.com/Xunnamius/typescript-utils/commit/3e6f45b73b6af25af008c542bbb0bdc2a544d186
[48]:
  https://github.com/Xunnamius/typescript-utils/commit/8eef8df98bb7539d105b91b6d254b78f56ca6f86
[49]:
  https://github.com/Xunnamius/typescript-utils/commit/6e8ce0d0a945a5ff4c65c9400df387b51197af11
[50]:
  https://github.com/Xunnamius/typescript-utils/commit/3692953ca8156babf7b1e7584e042bc09820bce6
[51]:
  https://github.com/Xunnamius/typescript-utils/commit/e6a2201cea079bf34e9c2ef8d7fed216ea7911ca
[52]:
  https://github.com/Xunnamius/typescript-utils/commit/568a38492bace0662e89082bc32bfd4ebbc1d528
[53]:
  https://github.com/Xunnamius/typescript-utils/commit/6db1f11391d869949f480d367d3312eddc3c5eb7
[54]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.2...types@1.0.3
[55]:
  https://github.com/Xunnamius/typescript-utils/commit/479d3f6e974f5646505e0fa7c41ae99360873002
[56]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.1...types@1.0.2
[57]:
  https://github.com/Xunnamius/typescript-utils/commit/f7de015b99cd4c0156f3187e53b9eb06a5985721
[58]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.0.0...types@1.0.1
[59]:
  https://github.com/Xunnamius/typescript-utils/commit/c65cb0e7604b52f7484ed3399a37dbac3a9b2e8f
[60]:
  https://github.com/Xunnamius/typescript-utils/compare/67f5e63863018babf847f4bbf21960b91eb1e7b8...types@1.0.0
[61]:
  https://github.com/Xunnamius/typescript-utils/commit/67f5e63863018babf847f4bbf21960b91eb1e7b8
[62]:
  https://github.com/Xunnamius/typescript-utils/commit/3bdb38d8bd7979b8b9dbb8f2639aa1349468d660
[63]: https://conventionalcommits.org
[64]: https://semver.org
[65]:
  https://github.com/Xunnamius/typescript-utils/compare/types@1.2.2...types@1.2.3
[66]:
  https://github.com/Xunnamius/typescript-utils/commit/75a23d727dbc8f5ffac0b7706dbe97b511ab8a56
