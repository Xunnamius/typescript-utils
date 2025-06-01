# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/types\@1.0.0 (2025-06-01)

### ✨ Features

- **.gitignore:** add .gitignore ([67f5e63][3])
- **package:** add new all-types package ([bb00737][4])
- **packages/jest-types:** add asMockedClass to complement asMockedFunction ([11234c0][5])
- **packages/types:** add isError type guard ([d642ac0][6])
- **packages:** add @xunnamius/mongo-types package ([497c08e][7])
- **packages:** add validHTTPMethods, ValidHttpMethod, UnixEpochMs exports ([790b69c][8])
- **packages:** breakout source into monorepos ([f8e890c][9])
- Transmute @ergodark/types and @ergodark/next-types into a monorepo ([3bdb38d][10])

### 🪄 Fixes

- **packages/jest-types:** pull in jest type defs without incident ([f31e4ff][11])
- **packages/mongo-types:** narrower InternalAuthBearerEntry type ([10613b2][12])
- **packages/next-types:** add @xunnamius/types to peerDependencies ([61c7a9f][13])
- **packages/next-types:** use proper monorepo imports and dependencies ([3f71616][14])
- **packages/types/src/index.ts:** JsonRegExp.flags is now optional ([479d3f6][15])
- **packages/types:** actually export ValidHttpMethod ([21cb3ee][16])
- **packages/types:** JsonError.message should be JsonError.error ([46a9067][17])
- **packages/types:** make UnixEpochMs a normal number type ([75a23d7][18])
- **packages/types:** remove "declare" from AnyKey, AnyFunction type exports ([e0ed947][19])
- **packages/types:** use proper monorepo imports and dependencies ([579d71a][20])
- **packages:** ensure import aliases are translated properly in dist types ([7612400][21])
- **packages:** ensure package is tree-shakable ([4a7406f][22])
- **packages:** use proper monorepo imports and dependencies ([b1c37f0][23])
- **src:** remove some undefined http response codes ([5e9dee2][24])

### ⚙️ Build System

- Add conventional-config-projector and initial semantic-release configs ([8d2340c][25])
- **babel:** modernize babel config ([1c20134][26])
- **conventional:** update to work with monorepo structure ([4808695][27])
- Deprecate @xunnamius/mongo-types; merge @xunnamius/mongo-types into next-utils ([06f38d4][28])
- Differentiate between esm and bundler distributables ([f089f57][29])
- **env:** add env config example ([7124bb8][30])
- **eslintrc:** modernize eslint config ([22870f4][31])
- **expect-env:** add expect-env (not as package) ([aa40396][32])
- **fossa:** add fossa config ([d62457f][33])
- **gitignore:** ignore local .npmrc ([2ffd325][34])
- **gitignore:** ignore root and non-root dirs (instead of just root) ([94c248f][35])
- **husky:** add husky commit hooks ([e3f07f7][36])
- Import configs from projector ([3e6f45b][37])
- Output actual ESM distributable ([92b3d3a][38])
- **package-lock:** add @xunnamius/mongo-types to workspaces ([b5dd3c0][39])
- **package-ws:** fix changelog regeneration bug in conventional-changelog-cli ([ca04091][40])
- **package:** configure npm workspace monorepo support; update deps ([8eef8df][41])
- **package:** fix npm clean script ([6e8ce0d][42])
- **packages/jest-types:** update package description ([8291786][43])
- **packages/next-types:** update package description, remove unnecessary peer dependency ([585e790][44])
- **packages:** add missing peer dependencies ([d6385f2][45])
- **packages:** configure monorepo packages ([3692953][46])
- **packages:** fix build-changelog ([e6a2201][47])
- **packages:** fix build-dist ([faf387a][48])
- **packages:** fix build-dist ([568a384][49])
- **packages:** fix build-dist ([49a38c4][50])
- **packages:** update shields.io maintenance badge to 2022 ([b63bbb7][51])
- **packages:** update type exports to be more robust ([3881362][52])
- **release:** enable semrel & conventional-changelog monorepo support ([6bb980e][53])
- Remove redundant install instructions ([c65cb0e][54])
- **spellcheck-commit:** fix spellchecker ([6db1f11][55])
- **tsconfig.json:** prepare tsconfig for pipeline ([f7de015][56])
- **webpack:** compile output with webpack ([d521c0e][57])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/typescript-utils/commit/67f5e63863018babf847f4bbf21960b91eb1e7b8
[4]: https://github.com/Xunnamius/typescript-utils/commit/bb00737a6b11e041836bb85f30ceadd8196cc1b6
[5]: https://github.com/Xunnamius/typescript-utils/commit/11234c0202b421ce874fbe9b702c1930d1322981
[6]: https://github.com/Xunnamius/typescript-utils/commit/d642ac071a97ad68760c5d879a0d0f6f454e2ebd
[7]: https://github.com/Xunnamius/typescript-utils/commit/497c08e5f0786856e087ff157e3d730a8a703097
[8]: https://github.com/Xunnamius/typescript-utils/commit/790b69ca864bef505dba8acc940386be025bc37c
[9]: https://github.com/Xunnamius/typescript-utils/commit/f8e890cb7b60726f9fb416653cb81a43dfb98e54
[10]: https://github.com/Xunnamius/typescript-utils/commit/3bdb38d8bd7979b8b9dbb8f2639aa1349468d660
[11]: https://github.com/Xunnamius/typescript-utils/commit/f31e4ff5d728e0247e54068d548912aeabbcae6e
[12]: https://github.com/Xunnamius/typescript-utils/commit/10613b280f0fb9ddb1927869e16cea1051d4441e
[13]: https://github.com/Xunnamius/typescript-utils/commit/61c7a9fc8b32c08d1baafbd5b218782fcd180a86
[14]: https://github.com/Xunnamius/typescript-utils/commit/3f716164312c2b1819f2509c15b1894951c33c30
[15]: https://github.com/Xunnamius/typescript-utils/commit/479d3f6e974f5646505e0fa7c41ae99360873002
[16]: https://github.com/Xunnamius/typescript-utils/commit/21cb3ee1b4e405d7aab2ecb62cf29a4b07d6cdc7
[17]: https://github.com/Xunnamius/typescript-utils/commit/46a90672973325908a7c2fd51b0f60375ac2f646
[18]: https://github.com/Xunnamius/typescript-utils/commit/75a23d727dbc8f5ffac0b7706dbe97b511ab8a56
[19]: https://github.com/Xunnamius/typescript-utils/commit/e0ed9478c3e7e8b1aa21c9a6af7a637c3c3ac023
[20]: https://github.com/Xunnamius/typescript-utils/commit/579d71ab611e348ca8fd4682a00df4b7aeccee43
[21]: https://github.com/Xunnamius/typescript-utils/commit/76124005a0af5a2af18d462353485c2a7a8d5bfd
[22]: https://github.com/Xunnamius/typescript-utils/commit/4a7406fb409130a8d600e74ef587d3faf9026b87
[23]: https://github.com/Xunnamius/typescript-utils/commit/b1c37f0332c5408202d7642769f3a1aeedfa7192
[24]: https://github.com/Xunnamius/typescript-utils/commit/5e9dee267a428e6a14198d476dd47956f428e67b
[25]: https://github.com/Xunnamius/typescript-utils/commit/8d2340c4bc9af4282fe7e78679ad296bedd15f65
[26]: https://github.com/Xunnamius/typescript-utils/commit/1c201343df5d01a95cae187b0c3b496c7678adf3
[27]: https://github.com/Xunnamius/typescript-utils/commit/48086952bb3570b03812e3eb8f607a3ca27d4229
[28]: https://github.com/Xunnamius/typescript-utils/commit/06f38d4002388ada772858c29fc81616858c5ae8
[29]: https://github.com/Xunnamius/typescript-utils/commit/f089f575da900541e71db5c39ad5615e5ecf3639
[30]: https://github.com/Xunnamius/typescript-utils/commit/7124bb819c6f6aeac861ff88c054edd470f04c45
[31]: https://github.com/Xunnamius/typescript-utils/commit/22870f4c65ffd8eafeaacf201912951dc62abec0
[32]: https://github.com/Xunnamius/typescript-utils/commit/aa40396f4cda8ec6b983e2bf423fef95b0660cd5
[33]: https://github.com/Xunnamius/typescript-utils/commit/d62457f26654d6e275b3415675c535c4d014e13e
[34]: https://github.com/Xunnamius/typescript-utils/commit/2ffd325268043b775e67bb2e0a561c44d1e45e24
[35]: https://github.com/Xunnamius/typescript-utils/commit/94c248f245f753b98c44e5f72955735aa958b81c
[36]: https://github.com/Xunnamius/typescript-utils/commit/e3f07f73f7a39cc7d897a7507c793620afe6c006
[37]: https://github.com/Xunnamius/typescript-utils/commit/3e6f45b73b6af25af008c542bbb0bdc2a544d186
[38]: https://github.com/Xunnamius/typescript-utils/commit/92b3d3a3b2941443f169d47f4af5a52fea7f56e1
[39]: https://github.com/Xunnamius/typescript-utils/commit/b5dd3c0ddfd356d2ecfbe8b94439088745e6d950
[40]: https://github.com/Xunnamius/typescript-utils/commit/ca040911eef4fca128c377b479298a5414984035
[41]: https://github.com/Xunnamius/typescript-utils/commit/8eef8df98bb7539d105b91b6d254b78f56ca6f86
[42]: https://github.com/Xunnamius/typescript-utils/commit/6e8ce0d0a945a5ff4c65c9400df387b51197af11
[43]: https://github.com/Xunnamius/typescript-utils/commit/82917867b9acd6582ce8611b0280e938d9fecb1a
[44]: https://github.com/Xunnamius/typescript-utils/commit/585e790aea81d3f32d04b81f62c444ae3fb9a050
[45]: https://github.com/Xunnamius/typescript-utils/commit/d6385f2f5314e985fcc406c0a2543128f249d885
[46]: https://github.com/Xunnamius/typescript-utils/commit/3692953ca8156babf7b1e7584e042bc09820bce6
[47]: https://github.com/Xunnamius/typescript-utils/commit/e6a2201cea079bf34e9c2ef8d7fed216ea7911ca
[48]: https://github.com/Xunnamius/typescript-utils/commit/faf387a2da48fb51e02cd76017aa745198000efd
[49]: https://github.com/Xunnamius/typescript-utils/commit/568a38492bace0662e89082bc32bfd4ebbc1d528
[50]: https://github.com/Xunnamius/typescript-utils/commit/49a38c4d83646afc588b29f6d2b8aeb12e679568
[51]: https://github.com/Xunnamius/typescript-utils/commit/b63bbb7cabe47e9eeb3ab72cd536fabcac6cbc07
[52]: https://github.com/Xunnamius/typescript-utils/commit/38813620d45258fcbc9e774031bfe9ed0510eef8
[53]: https://github.com/Xunnamius/typescript-utils/commit/6bb980e31f1a73ff3261e67c4337c5ca9572cb85
[54]: https://github.com/Xunnamius/typescript-utils/commit/c65cb0e7604b52f7484ed3399a37dbac3a9b2e8f
[55]: https://github.com/Xunnamius/typescript-utils/commit/6db1f11391d869949f480d367d3312eddc3c5eb7
[56]: https://github.com/Xunnamius/typescript-utils/commit/f7de015b99cd4c0156f3187e53b9eb06a5985721
[57]: https://github.com/Xunnamius/typescript-utils/commit/d521c0ee45d86580f95528f987c8e92077b64e8f
