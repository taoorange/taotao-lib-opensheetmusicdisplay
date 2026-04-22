# OpenSheetMusicDisplay 本地改动整理

本文档汇总本次针对 `opensheetmusicdisplay` 源码所做的全部修改，便于回溯与后续提交。

## 1. 改动目标

- 支持在 Demo 页面直接选择本地文件（`.xml/.musicxml/.mxl`）并解析。
- 提升 `.mxl` 本地加载稳定性（统一走 `osmd.load(File/Blob)` 路径）。
- 修复乐器名与五线谱重叠/错位问题，保证每一行系统都有乐器名显示。
- 增加 URL 传参方式的一键分页开关，解决默认 `Endless` 导致“一大页”渲染问题。

## 2. 变更文件清单

- `demo/index.html`
- `demo/index.js`
- `demo/embedded_demo.html`
- `src/MusicalScore/Graphical/MusicSystem.ts`

## 3. 详细改动说明

### 3.1 Demo 增加文件选择入口

文件：`demo/index.html`

- 在样例下拉框旁新增按钮 `Open local file`。
- 新增隐藏文件输入框：
  - `id="open-file-input"`
  - `accept=".xml,.musicxml,.mxl"`

作用：

- 用户可以直接点击按钮选择本地文件，无需仅依赖拖拽。

---

### 3.2 本地文件加载流程统一

文件：`demo/index.js`

- `selectSampleOnChange` 从仅处理字符串，扩展为可处理 `File/Blob` 或字符串输入。
- 新增 `loadLocalFile(file)`：
  - 校验扩展名（`.xml/.musicxml/.mxl`）
  - 设置 `Custom` 选项
  - 调用 `selectSampleOnChange(file)` 执行解析
- `drop` 事件改为复用 `loadLocalFile`，删除旧的 `FileReader.readAsText/readAsBinaryString` 分支。
- 文件选择控件事件绑定：
  - 点击按钮触发 `input[type=file]`
  - `change` 后调用 `loadLocalFile`
  - 清空 input value，允许重复选择同一个文件

作用：

- 避免 `readAsBinaryString` 的兼容性差异。
- `.mxl` 由 OSMD 内部 `load(Blob)` 自动判断并解压，解析更稳定。

---

### 3.3 乐器名重叠/错位修复

文件：`src/MusicalScore/Graphical/MusicSystem.ts`

核心修复：

- 将标签容器从 `Dictionary<Instrument, GraphicalLabel>` 改为原生 `Map<Instrument, GraphicalLabel>`。
  - 原因：`typescript-collections` 的 `Dictionary` 对对象 key 存在冲突风险，可能导致乐器标签被覆盖。
- `createMusicSystemLabel` 中每次先 `this.labels.clear()`。
- 按乐器去重创建标签（同一乐器多 staff 不重复建标签）。
- 非首系统的标签逻辑优化：
  - 优先使用 `PartAbbreviation`
  - 没有缩写时回退到完整乐器名
  - 不再因为某个乐器条件不满足而 `return` 中断整个循环，改为 `continue`
- 同步调整 `Labels` getter、`maxLabelLength` 计算与 `setMusicSystemLabelsYPosition` 遍历逻辑以适配 `Map`。

作用：

- 修复标签覆盖导致的布局异常。
- 保证系统行（包括后续系统）乐器名稳定显示，减少与五线谱重叠。

---

### 3.4 增加分页 URL 参数

文件：`demo/index.js`

新增参数：

- `paged`：`1/true` 表示开启分页
- `pagedFormat`：分页纸张格式，默认 `A4_P`

参数优先级：

1. `pageWidth + pageHeight`（最高）
2. `pageFormat`
3. `paged + pagedFormat`
4. 默认 `Endless`

实现逻辑：

- 当 `paged=1`（或 `true`）时，若未显式提供 `pageFormat/pageWidth/pageHeight`，自动设置为分页格式（默认 `A4_P`）。

文件：`demo/embedded_demo.html`

- 增加 `paged`、`pagedFormat` 参数说明。
- 示例 iframe 链接更新为包含 `paged=1`。

作用：

- 快速通过 URL 切换分页渲染，避免默认“无限长单页”。

## 4. 使用示例

### 本地文件选择

- 启动后访问：`http://localhost:8000/`
- 点击 `Open local file` 选择：
  - `.xml`
  - `.musicxml`
  - `.mxl`

### 分页渲染参数

- `http://localhost:8000/?paged=1`
- `http://localhost:8000/?paged=1&pagedFormat=A4_L`
- `http://localhost:8000/?pageFormat=Letter_P`（显式覆盖）

## 5. 已执行验证

- `npx eslint src/MusicalScore/Graphical/MusicSystem.ts`
- `npm run build:webpack-dev`
- `ReadLints` 检查以下文件无新增错误：
  - `demo/index.js`
  - `demo/embedded_demo.html`
  - `src/MusicalScore/Graphical/MusicSystem.ts`

---

如需，我可以再补一版“可直接用于 PR 描述”的英文版摘要（Summary / Why / Test Plan 三段结构）。
