import { NexusGenObjects, NexusGenFieldTypes } from './nexus-typegen';
export type Model = NexusGenFieldTypes;

export interface ComicSearch {
    comics: Model["Comic"][],
    offset: number,
    limit: number,
    processingTimeMs: number,
    total: number,
}