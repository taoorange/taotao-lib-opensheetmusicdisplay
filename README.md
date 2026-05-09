**npm（本 fork 发布页）：** [https://www.npmjs.com/package/@taotao-lib/opensheetmusicdisplay](https://www.npmjs.com/package/@taotao-lib/opensheetmusicdisplay)

<!--img alt="Brought to you by PhonicScore" src="https://phonicscore.com/neu/wp-content/uploads/2018/06/phonicscore_brown.svg"/-->


# <img alt="OSMD logo" align="center" height="40" src="https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/assets/33069673/a83dc850-65c2-4c7a-8836-eb75cefc006f"/> OpenSheetMusicDisplay (OSMD)
<!--# <img alt="OSMD logo" align="center" src="https://opensheetmusicdisplay.org/wp-content/uploads/2016/05/OSMD_3_icon_only.svg"/> OpenSheetMusicDisplay (OSMD)-->
<!--- # <img alt="OSMD logo" align="center" src="https://opensheetmusicdisplay.org/wp-content/uploads/sites/2/2021/02/OSMD_logo_box.svg" height="40"/> OpenSheetMusicDisplay (OSMD) -->

<!--table style="table-layout: fixed; width:100%; border: none; border-collapse: collapse;">
  <tr>
    <td><img id="osmdlogo" alt="OpenSheetMusicDisplay (OSMD)" src="https://opensheetmusicdisplay.org/wp-content/uploads/2016/05/OSMD_3_icon_only.svg"/></td>
   <td style="text-align: center"><h1>OpenSheetMusicDisplay (OSMD)</h1></td>
    <td></td>
  </tr>
</table-->

### A MusicXML renderer for the Browser
[opensheetmusicdisplay.org](https://opensheetmusicdisplay.org/)<br>
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/opensheetmusicdisplay/opensheetmusicdisplay?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Appveyor Build status](https://ci.appveyor.com/api/projects/status/r88lnffso55nq1ko?svg=true)](https://ci.appveyor.com/project/sebastianhaas/opensheetmusicdisplay/branch/master)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)<br>

<!-- [![Greenkeeper badge](https://badges.greenkeeper.io/opensheetmusicdisplay/opensheetmusicdisplay.svg)](https://greenkeeper.io/) --> <!-- move to Snyk -->
<!-- [![Dependency Status](https://david-dm.org/opensheetmusicdisplay/opensheetmusicdisplay/status.svg)](https://david-dm.org/opensheetmusicdisplay/opensheetmusicdisplay) --> <!-- often returns error "no healthy upstream" -->
<!-- [![Travis Build Status](https://travis-ci.org/opensheetmusicdisplay/opensheetmusicdisplay.svg?branch=master)](https://travis-ci.org/opensheetmusicdisplay/opensheetmusicdisplay) --> <!-- Migrate to travis-ci.com -->
[About OSMD](#about-osmd) • [Demo](#demo) • [Key Features](#key-features) • [Limitations](#limitations) • [How to Use OSMD](#how-to-use-osmd) • [Sponsor OSMD](#sponsor-osmd) • [About Us](#about-us) • [Get In Touch](#get-in-touch)

:star: - Star us on Github - It really helps us a lot!<br>
:pray: - [Become our Sponsor](#sponsor-osmd) - Support our work and receive awesome perks!

## Upstream Source and Local Changes

This repository is based on the upstream OpenSheetMusicDisplay project:
[`https://github.com/opensheetmusicdisplay/opensheetmusicdisplay`](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay).

For modifications made in this local fork, see the section **[Fork downstream changes](#fork-downstream-changes)** at the end of this README (the previously referenced `LOCAL_CHANGES_SUMMARY.md` is not maintained separately).

## About OSMD

<img title="How OSMD can look in the browser&#xA;(Mockup, OSMD on its own does not support playback)" src="https://user-images.githubusercontent.com/33069673/106186552-bd191300-61a4-11eb-8814-07019fcf1d5b.png" style="max-width: 100%; max-height: 100vh; width: auto; margin: auto;">

OpenSheetMusicDisplay renders MusicXML sheet music in the browser. It is the missing link between [MusicXML](https://www.musicxml.com/) and [VexFlow](https://www.vexflow.com/). Built upon many years of experience in both sheet music interactivity and engraving, it is the perfect solution for app developers seeking to build digital sheet music services.

[MusicXML](https://www.musicxml.com/) is the de facto standard for exchanging sheet music between music software.<br>
[VexFlow](https://www.vexflow.com/) is widely used for rendering sheet music. It features an extensive library of musical elements, but each measure and symbol has to be created and positioned by hand in Javascript.

OpenSheetMusicDisplay brings the two together and offers an open source turnkey solution for your digital sheet music project.

## Demo

Try the [Public Demo](https://opensheetmusicdisplay.github.io/demo/) to see what OSMD can do.<br>
[Learn more about the demo](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/wiki/Exploring-the-Demo) and OSMD in [the OSMD Wiki](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/wiki).

Developers can also run a [local development demo (see Wiki)](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/wiki/Debugging-(VSCode)):

<img title="Local OSMD Development/Debug demo" alt="Local OSMD Developer Demo" src="https://user-images.githubusercontent.com/33069673/106189263-5695f400-61a8-11eb-901f-aafc853af497.png" style="max-width: 100%; max-height: 100vh; width: auto; margin: auto;">


## Key Features

* Displays MusicXML sheet music in a browser(less) environment (Javascript, Typescript, server-side: browserless NodeJS script)
* *Soon: Audio Playback (work in progress, early access build available for [Github sponsors](https://github.com/sponsors/opensheetmusicdisplay))*
* Uses [Vexflow](https://www.vexflow.com/) for rendering and (partly) layout
* Parses most MusicXML tags and integrates it into an accessible and modifiable data model (e.g. to change a note's color)
* Offers many options ([OSMDOptions](https://opensheetmusicdisplay.github.io/classdoc/classes/OSMDOptions.html) / [EngravingRules](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/blob/master/src/MusicalScore/Graphical/EngravingRules.ts)): Page Format, Font Family, Positioning, not rendering certain elements like the title or lyrics, etc.
* Allows modification of the displayed score, like hiding parts or instruments, hiding instrument names, title or composer, a more compact layout, or coloring notes
* Outputs SVG or PNG, also via nodejs script in the command line, completely browserless (e.g. for server-side rendering)
* Written in [Typescript](https://www.typescriptlang.org/) with complete type information, 100% compatible with Javascript (minified build is .js)
* Can display tablature (guitar tabs) from MusicXML, including effects like bends and glissandi. Can be combined with treble clef.
<img src="https://user-images.githubusercontent.com/33069673/127324371-b7c5f137-a1b8-4127-95b0-38e6a185c906.png" height="130">


<p align="left">
  <img title="OSMD in the Browser"  src="https://user-images.githubusercontent.com/33069673/106321958-64fe1180-6275-11eb-8632-3b22beaa0829.jpg" width="66.4%">
&nbsp;
  <img title="OSMD on Mobile (or server-side rendering)" src="https://user-images.githubusercontent.com/33069673/106321963-67606b80-6275-11eb-8fdd-2acf273586df.jpg" width="25%">
</p>

## Limitations

Not all MusicXML tags are (fully) supported:
* Pedal marks (currently in early access for sponsors)
* Glissando lines
* Wavy-line (currently in early access for sponsors)
* Etc, see [OSMD 1.0 Project](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/projects/3)

Also, **OSMD is a renderer, not an interactive sheet music editor.** Rendering takes some time, and you can't easily/quickly move notes, place new notes, etc.<br>
(You can, however, manipulate the SVG nodes for instant changes like note re-coloring, see [Exploring the Demo | Wiki](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/wiki/Exploring-the-Demo))

## How to Use OSMD

* Available as [NPM module](https://www.npmjs.com/package/opensheetmusicdisplay), can be used with plain javascript or module managers like webpack
* [Getting Started: Detailed instructions in our Wiki](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/wiki/Getting-Started)
* If you have further technical questions, you can:
  * [Leave a comment in our Discussions section](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/discussions/950) (especially for questions of understanding)
  * [Browse through our Issues](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues?&q=is%3Aissue)
  * [Open a new issue](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/new/choose) (may be moved to Discussions).

## Sponsor OSMD and get early access to the audio player and more

<a href="https://github.com/sponsors/opensheetmusicdisplay/" alt="OSMD on Github Sponsors">
<!--img src="https://user-images.githubusercontent.com/33069673/104042293-99ccfa80-51da-11eb-9dc9-fac075a33224.png" height="200" alt="OSMD on Github Sponsors"--><img src="https://user-images.githubusercontent.com/33069673/109203612-a9150100-77a4-11eb-9b91-6692850dccab.png" style="max-width: 100%; max-height: 100vh; width: auto; margin: auto;">
</a><br>

It would be great if free software were sustainable on its own. But to keep on improving and developing OpenSheetMusicDisplay we need your support. Your monthly sponsorship subscription - especially if you are already actively using OSMD - would mean everything to us - it’s a stable way of enabling us to continue our work, and improve and expand OSMD.<br>
Features already available in early access:
* OSMD Audio Player
* Native modules + example projects (React Native, Kotlin/Android, Swift/iOS) - NEW!
* Jianpu Display (Numbered Musical Notation), with playback

Features in the making, potentially available in future:

* Annotations (Add custom text, music symbols, etc. to the score and export to and import from XML)
* and more (we're always working on OSMD improvements or additional features, just look at our release history / [changelog](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/blob/develop/CHANGELOG.md)!)

Besides the early access features, you can get other perks like a personal postcard from the team in Vienna. Check them out at [our GitHub sponsors page](https://github.com/sponsors/opensheetmusicdisplay).

<p align="left">
  <img title="OSMD Sponsor perks like this t-shirt" src="https://user-images.githubusercontent.com/33069673/106322343-084f2680-6276-11eb-985b-3aaa483db206.jpg" width="35%">
&nbsp;
  <img title="OSMD button sponsor perk" src="https://user-images.githubusercontent.com/33069673/106320576-5a427d00-6273-11eb-96b0-d2c7c4b19927.jpg" width="28.5%">
</p>

And there are other ways to contribute to the community - we plan on starting a blog and newsletter, and sharing our knowledge. We encourage our sponsors to bring up their desired features and pitch blog post ideas.

Though we highly recommend the sponsor route, you can also donate via Paypal:<br>

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FPHCYVV2HH8VU)<br>
Any support is highly appreciated.

## About Us

OSMD is made by [Phonicscore](https://phonicscore.com/) - a music-tech company based in Vienna. We create solutions for musicians, sheet music publishers, app developers, music stores and researchers:

* Open source software
* Sheet Music Rendering Software
* Native & web apps: [PracticeBird for iOS](https://itunes.apple.com/us/app/practice-bird-pro/id1253492926?ls=1&mt=8) and [Android](https://play.google.com/store/apps/details?id=phonicscore.phonicscore_lite)

Our mission is to provide state of the art software solutions for building MusicXML apps and to include the community in a constant thrive for improvement. We want to take away the pain of building music software from scratch and offer a shortcut when it comes to building your next MusicXML sheet music application.

We also want to thank [our Github Contributors](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/graphs/contributors), who show that with open source many people come together to not only share but improve software.

## Get In Touch

<a href="https://twitter.com/osmdengine"><img title="OSMD on Twitter" src="https://img.shields.io/twitter/url?label=%40osmdengine&style=social&url=https%3A%2F%2Ftwitter.com%2Fosmdengine" align="center"></a> <a alt="OSMD on Facebook" href="https://www.facebook.com/opensheetmusicdisplay/"><img title="OSMD on Facebook" src="https://img.shields.io/twitter/url?label=Facebook&logo=facebook&style=social&url=https%3A%2F%2Fwww.facebook.com%2Fopensheetmusicdisplay%2F" align="center"></a> <a href="https://www.instagram.com/open_sheet_music_display/"><img title="OSMD on Instagram" src="https://img.shields.io/twitter/url?label=Instagram&logo=instagram&style=social&url=https%3A%2F%2Fwww.instagram.com%2Fopen_sheet_music_display%2F" align="center"></a> <a href="https://fwd.osmd.org/discord"><img title="OSMD Discord (chat) Server" src="https://img.shields.io/twitter/url?label=Discord&logo=discord&style=social&url=https%3A%2F%2Ffwd.osmd.org%2Fdiscord" align="center"></a>
<!-- the social button images were created via https://shields.io, search twitter in the top search bar, click on twitter url, set named logo e.g. to facebook -->

To contact us directly, you can:
* Use the [Contact form on opensheetmusicdisplay.org](https://opensheetmusicdisplay.org/contact/) to send a mail
* Send a mail to support@opensheetmusicdisplay.org
* Leave a (public) comment in our [Discussions section](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/discussions)
* [Join our Discord (chat) Server](https://fwd.osmd.org/discord)
* [Join the chat on Gitter](https://gitter.im/opensheetmusicdisplay/opensheetmusicdisplay).

---

## Fork downstream changes

（本段为 **二次开发说明**，中文撰写。）本仓库在 [OpenSheetMusicDisplay](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay) 上游基础上做了 **与宿主乐谱应用（如 five-line-staff）对接** 的扩展：在 **分页渲染完成后** 暴露「每页对应哪些全局小节」以及「每页内各小节在版面上的水平区间」，用于 **视口点击 / 标注锚点 / 导出 MusicXML 时与屏上谱面一致**，避免仅用「总页数均分全曲小节」导致的错位。

### 1. 新增类型（`src/OpenSheetMusicDisplay/`）

| 文件 | 说明 |
|------|------|
| `PageMeasureListIndexBounds.ts` | `OsmdPageMeasureListIndexBounds`：单页上 `measureListIndex` 的闭区间 `[startMeasureListIndex, endMeasureListIndex]`（0-based，与 `SourceMeasure.measureListIndex` 一致）。 |
| `PageMeasureHorizontalLayout.ts` | `OsmdMeasureHorizontalSpan`（单小节 `measureListIndex` + `left`/`right` 绘图坐标）、`OsmdPageMeasureHorizontalLayout`（单页 + 该页上所有不重复小节的 span 列表，已按从左到右排序）。 |

包入口 `src/OpenSheetMusicDisplay/index.ts` 已 **`export *`** 上述模块，发布构建后消费方可从 `@taotao-lib/opensheetmusicdisplay` 引用类型。

### 2. `OpenSheetMusicDisplay` 新增公开方法

#### `getPageMeasureListIndexBounds(): OsmdPageMeasureListIndexBounds[]`

- **时机**：在 `load()` 且 `render()` 完成之后调用。  
- **语义**：对每个已绘制的 `GraphicalMusicPage`，统计该页上出现的所有图元小节的 `measureListIndex` 的最小值与最大值（含多声部同一小节）。  
- **顺序**：与 `GraphicalMusicSheet.MusicPages` 一致；受 `EngravingRules.MaxPageToDrawNumber` 约束，超出页不再输出。  
- **失败行为**：若某一页无法得到有效 min/max，**整表返回 `[]`**（与上游保守策略一致）；宿主应仅在「返回数组长度与自身分页 HTML 页数一致」时使用。

#### `getPageMeasureHorizontalLayouts(): OsmdPageMeasureHorizontalLayout[]`

- **时机**：同上，须在 `render()` 之后。  
- **语义**：对每一分页，按 `measureListIndex` 去重；同一小节多行谱表取所有 `GraphicalMeasure` 的 **水平并集**（`min(left)`、`max(right)`）。  
- **坐标**：与排版后 `BoundingBox` 一致，使用公开 getter：`AbsolutePosition.x + BorderLeft` / `+ BorderRight`（**不得**访问受保护的 `borderLeft` / `borderRight` 字段）。对左右边界做 `Math.min` / `Math.max` 规范化，避免极端情况下左右颠倒。  
- **失败行为**：若某一页没有任何可统计小节，**整表返回 `[]`**；宿主同样应用「长度与页数一致」才采纳。  
- **宿主侧对齐**：典型用法是将 `left`/`right` 与 **该页根 SVG 的 `getBBox()`** 做线性归一化，使 0–1 横坐标与「墨迹宽度」参照一致（详见 five-line-staff 中 `renderMusicXmlWithOsmdPages` / `pageMeasureInkNormSpans` 逻辑）。

### 3. 与上游的关系

- 未改动 MusicXML 解析与 VexFlow 绘制主流程；仅增加 **只读查询 API** 与类型导出。  
- 若未来合并上游大版本，需重点解决冲突的文件主要是：`OpenSheetMusicDisplay.ts`、`index.ts` 及上述两个类型文件。

### 4. 版本与发布

- 携带上述 API 的 fork 版本以 **`package.json` 中 `version`** 为准（例如 **1.0.3** 起包含 `getPageMeasureHorizontalLayouts`）。  
- 发布 npm 前请执行项目内 **`npm run build`**，确保 `build/`（及类型声明 `.d.ts`）包含新导出，否则 TypeScript 消费方无法识别新 API。

### 5. 已知限制

- 水平区间依赖当前 **SVG/Canvas 后端** 与排版结果；若宿主使用与 OSMD 渲染时不同的缩放或重新套版，需自行重新换算或重新 `render()` 后再取布局。  
- `getPageMeasureHorizontalLayouts` 与 `getPageMeasureListIndexBounds` 在「单页数据异常」时均可能返回 **空数组**；宿主 **不可** 在长度不匹配时退而误用「全曲按页均分」而不加校验，否则会回到旧有锚点偏差问题。

---

## 已修复问题：Slur 渲染 NaN 导致 SVG path 报错

### 现象

打开含有圆滑连线（slur）的 MusicXML 文件（如 `春之声1-音乐学院带有标记_1778326139378.musicxml`）时，浏览器控制台大量报错：

```
Error: <path> attribute d: Expected number, "…54.523833824256CNaN NaN,NaN NaN,…".
```

即 OSMD 生成的 SVG `<path>` 元素的 `d` 属性中出现了 `NaN`，导致连线图形无法正常渲染，控制台刷屏报错。

### 出错元素

**Slur（圆滑连线）**。该文件由 Sibelius 导出，包含多段 slur 标注（`<slur type="start" orientation="over"/>` / `<slur type="stop" orientation="over"/>`）。OSMD 在计算 slur 贝塞尔曲线控制点时，某些边界条件下触发除零错误，导致控制点坐标变为 `NaN`，最终经 `SvgVexFlowBackend.renderCurve()` 写入 SVG path 的 `d` 属性。

### 根因分析

NaN 的产生链路如下：

```
斜率计算 (x÷0 → NaN)
  → Math.atan(NaN) → 角度 (NaN)
    → Math.cos/sin(NaN) → 控制点坐标 (NaN)
      → bezierStartPt / bezierEndPt / bezierCurveTo(…)
        → SVG path d 属性中包含 "CNaN NaN"
```

具体触发点在 `GraphicalSlur.ts` 中：

| 位置 | 问题描述 |
|------|----------|
| `calculateMaxLeftSlope` | 坐标变换后起点为 `(0, 0)`，若天际线某点的 `x === 0`，则 `points[i].y / points[i].x` 得到 `0/0 = NaN` |
| `calculateMaxRightSlope` | 若某点 `x === end2.x`，则 `(y - points[i].y) / (end2.x - points[i].x)` 分母为零产生 NaN |
| `Math.atan` (第149行 / 第322行) | 当 `endX === startX` 时，`(endY - startY) / 0` 若分子也为 0 则 `0/0 = NaN` |
| `calculateHeightWidthRatio` | 当 `endX === 0` 且 `max === 0` 时 `0/0 = NaN` |
| `calculateAngles` | 上游 NaN 斜率传入 `Math.atan(NaN)` 进一步传播 |

### 修改的文件

#### 1. `src/MusicalScore/Graphical/GraphicalSlur.ts`

共 **6 处修复**：

| 方法 | 修复方式 |
|------|----------|
| `calculateMaxLeftSlope` | 对每个天际线点，若 `denominator = points[i].x - x` 的绝对值小于 `1e-5` 则跳过；终点分母同样加保护 |
| `calculateMaxRightSlope` | 同上：对每个点检查 `x - points[i].x` 是否接近零，起点分母同样加保护 |
| `Math.atan` (Above 分支, ≈149行) | 显式检查 `endXStartXDifference !== 0`，为零时直接取 `±π/2` |
| `Math.atan` (Below 分支, ≈322行) | 同上 |
| `calculateHeightWidthRatio` | 条件 `endX === 0` 时直接返回 0 |
| `calculateAngles` | 在 `Math.atan()` 调用前检查 `isNaN()` / `!isFinite()`，若无效则回落至 `minAngle` / `-minAngle` 安全值 |

#### 2. `src/MusicalScore/Graphical/VexFlow/SvgVexFlowBackend.ts`

在 `renderCurve()` 方法开头增加**防御层**：遍历所有 8 个控制点，若任一坐标 `isNaN()` 则直接 `return undefined`，避免生成无效 SVG 元素。

### 验证结果

- TypeScript 编译：通过
- 全部 195 个单元测试：通过
- Webpack 生产构建：成功
