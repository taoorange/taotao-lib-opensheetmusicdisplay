/**
 * One paginated canvas page and the global source-measure index range drawn on it.
 *
 * Indices are `SourceMeasure.measureListIndex`: 0-based, inclusive,
 * aligned with the global measure list (same order as MusicXML measures in the score).
 */
export interface OsmdPageMeasureListIndexBounds {
    /** Same as `GraphicalMusicPage.PageNumber` (1-based). */
    pageNumber: number;
    /** Minimum `measureListIndex` on this page (inclusive). */
    startMeasureListIndex: number;
    /** Maximum `measureListIndex` on this page (inclusive). */
    endMeasureListIndex: number;
}
