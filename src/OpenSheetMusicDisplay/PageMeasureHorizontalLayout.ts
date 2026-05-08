/**
 * One source measure's horizontal span on a paginated OSMD page, in the same drawing
 * units as {@link GraphicalMeasure} bounding boxes after layout (before host SVG transforms).
 */
export interface OsmdMeasureHorizontalSpan {
    /** Global 0-based index in the score's source-measure list (same as `SourceMeasure.measureListIndex`). */
    measureListIndex: number;
    /** Left edge (page drawing coordinates). */
    left: number;
    /** Right edge (page drawing coordinates). */
    right: number;
}

/**
 * After {@link OpenSheetMusicDisplay.load} and {@link OpenSheetMusicDisplay.render}, the
 * horizontal extent of each distinct source measure on one canvas page, left-to-right.
 * Page order matches {@link GraphicalMusicSheet.MusicPages}.
 */
export interface OsmdPageMeasureHorizontalLayout {
    /** Same as `GraphicalMusicPage.PageNumber` (1-based). */
    pageNumber: number;
    measures: OsmdMeasureHorizontalSpan[];
}
