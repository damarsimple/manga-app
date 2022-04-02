//@ts-nocheck
/* eslint-disable */

// *******************************************************
// *******************************************************
//
// GENERATED FILE, DO NOT MODIFY
//
// Made by Victor Garcia ®
//
// https://github.com/victorgarciaesgi
// *******************************************************
// *******************************************************
// 💙

export type Maybe<T> = T | null;

import { OperationDefinitionNode } from 'graphql';

const guessFragmentType = (fragment: string | DocumentNode) => {
  let isString = false;
  let isFragment = false;
  let fragmentName = '';
  if (typeof fragment === 'string') {
    isString = true;
  } else if (typeof fragment === 'object' && fragment.definitions.length) {
    isFragment = true;
    const definition = fragment.definitions[0];
    if (definition.kind === 'FragmentDefinition') {
      fragmentName = definition.name.value;
    } else {
      throw new Error(
        `The argument passed is not a fragment definition, got ${definition.kind} instead`
      );
    }
  }
  return { isString, isFragment, fragmentName };
};

import { ApolloClient, execute, DocumentNode, gql } from '@apollo/client/core';

export interface PerfomanceAnalytic {
  id: number;
  operationName: string;
  query: string;
  variables: string;
  time: number;
  createdAt: undefined;
  updatedAt: undefined;
}

export interface ChapterBookmark {
  id: number;
  chapterId: number;
  chapter: Chapter;
  userId: number;
  users: User;
  createdAt: undefined;
  updatedAt: undefined;
}

export interface ComicBookmark {
  id: number;
  comicId: number;
  comic: Comic;
  userId: number;
  users: User;
  createdAt: undefined;
  updatedAt: undefined;
}

export interface Report {
  id: number;
  userId: Maybe<number>;
  user: Maybe<User>;
  name: string;
  message: Maybe<string>;
  contextIdentifier: string;
  contextType: string;
  resolved: boolean;
  createdAt: undefined;
  updatedAt: undefined;
}

export interface Missing {
  id: number;
  data: string;
  context: string;
  resolved: boolean;
  createdAt: undefined;
  updatedAt: undefined;
}

export interface Chapter {
  id: number;
  name: number;
  title: Maybe<string>;
  comic: Comic;
  quality: ChapterQuality;
  views: number;
  imageCount: number;
  originalImageCount: number;
  processed: boolean;
  batchs: Maybe<string>;
  imageUrls: string[];
  imageDetails: Maybe<string>;
  createdAt: undefined;
  updatedAt: undefined;
  comicId: number;
  chapterbookmarks: ChapterBookmark[];
  _count: ChapterCountOutputType;
}

export interface Comic {
  id: number;
  name: string;
  slug: string;
  thumb: string;
  type: string;
  thumbWide: Maybe<string>;
  altName: Maybe<string>;
  isHentai: boolean;
  released: undefined;
  author: Author;
  rating: number;
  views: number;
  viewsHourly: number;
  viewsDaily: number;
  viewsWeek: number;
  description: Maybe<string>;
  status: Maybe<string>;
  age: Maybe<string>;
  concept: Maybe<string>;
  lastChapterUpdateAt: undefined;
  createdAt: undefined;
  updatedAt: undefined;
  authorId: number;
  chapters: Chapter[];
  genres: Genre[];
  userbookmarks: ComicBookmark[];
  _count: ComicCountOutputType;
}

export interface Ads {
  id: number;
  name: string;
  position: AdsPosition[];
  url: string;
  image: Maybe<string>;
  index: number;
  createdAt: undefined;
  updatedAt: undefined;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  createdAt: undefined;
  updatedAt: undefined;
  comics: Comic[];
  _count: GenreCountOutputType;
}

export interface Author {
  id: number;
  name: string;
  slug: string;
  createdAt: undefined;
  updatedAt: undefined;
  comics: Comic[];
  _count: AuthorCountOutputType;
}

export interface User {
  id: number;
  email: string;
  name: Maybe<string>;
  isAdmin: boolean;
  allowHentai: boolean;
  createdAt: undefined;
  updatedAt: undefined;
  reports: Report[];
  comicbookmarks: ComicBookmark[];
  chapterbookmarks: ChapterBookmark[];
  _count: UserCountOutputType;
}

export interface SanityCheck {
  status: Maybe<string>;
  chapters: Maybe<Chapter[]>;
}

export interface SanityEclipse {
  status: Maybe<boolean>;
  message: Maybe<string>;
}

export interface ComicSearch {
  comics: Maybe<Comic[]>;
  offset: Maybe<number>;
  limit: Maybe<number>;
  processingTimeMs: Maybe<number>;
  total: Maybe<number>;
  exhaustiveNbHits: Maybe<boolean>;
}

export interface AuthorSearch {
  authors: Maybe<Author[]>;
  offset: Maybe<number>;
  limit: Maybe<number>;
  processingTimeMs: Maybe<number>;
  total: Maybe<number>;
  exhaustiveNbHits: Maybe<boolean>;
}

export interface GenreSearch {
  authors: Maybe<Genre[]>;
  offset: Maybe<number>;
  limit: Maybe<number>;
  processingTimeMs: Maybe<number>;
  total: Maybe<number>;
  exhaustiveNbHits: Maybe<boolean>;
}

export interface AuthResponse {
  status: Maybe<boolean>;
  token: Maybe<string>;
  message: Maybe<string>;
  user: Maybe<User>;
}

export interface BatchPayload {
  count: number;
}

export enum UserScalarFieldEnum {
  Id = 'id',
  Email = 'email',
  Name = 'name',
  Isadmin = 'isAdmin',
  Allowhentai = 'allowHentai',
  Password = 'password',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum AuthorScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Slug = 'slug',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum GenreScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Slug = 'slug',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum AdsScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Position = 'position',
  Url = 'url',
  Image = 'image',
  Index = 'index',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum PerfomanceAnalyticScalarFieldEnum {
  Id = 'id',
  Operationname = 'operationName',
  Query = 'query',
  Variables = 'variables',
  Time = 'time',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum ComicScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Slug = 'slug',
  Thumb = 'thumb',
  Type = 'type',
  Thumbwide = 'thumbWide',
  Altname = 'altName',
  Ishentai = 'isHentai',
  Released = 'released',
  Rating = 'rating',
  Views = 'views',
  Viewshourly = 'viewsHourly',
  Viewsdaily = 'viewsDaily',
  Viewsweek = 'viewsWeek',
  Description = 'description',
  Status = 'status',
  Age = 'age',
  Concept = 'concept',
  Lastchapterupdateat = 'lastChapterUpdateAt',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
  Authorid = 'authorId',
}
export enum ChapterScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Title = 'title',
  Quality = 'quality',
  Views = 'views',
  Imagecount = 'imageCount',
  Originalimagecount = 'originalImageCount',
  Processed = 'processed',
  Batchs = 'batchs',
  Imageurls = 'imageUrls',
  Imagedetails = 'imageDetails',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
  Comicid = 'comicId',
}
export enum MissingScalarFieldEnum {
  Id = 'id',
  Data = 'data',
  Context = 'context',
  Resolved = 'resolved',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum ReportScalarFieldEnum {
  Id = 'id',
  Userid = 'userId',
  Name = 'name',
  Message = 'message',
  Contextidentifier = 'contextIdentifier',
  Contexttype = 'contextType',
  Resolved = 'resolved',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum ComicBookmarkScalarFieldEnum {
  Id = 'id',
  Comicid = 'comicId',
  Userid = 'userId',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum ChapterBookmarkScalarFieldEnum {
  Id = 'id',
  Chapterid = 'chapterId',
  Userid = 'userId',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}
export enum NullableJsonNullValueInput {
  Dbnull = 'DbNull',
  Jsonnull = 'JsonNull',
}
export enum JsonNullValueFilter {
  Dbnull = 'DbNull',
  Jsonnull = 'JsonNull',
  Anynull = 'AnyNull',
}
export enum AdsPosition {
  Chapter_bottom = 'CHAPTER_BOTTOM',
  Chapter_top = 'CHAPTER_TOP',
  Comic_recomendation = 'COMIC_RECOMENDATION',
  Home_top_comic = 'HOME_TOP_COMIC',
}
export enum ChapterQuality {
  Hq = 'HQ',
  Lq = 'LQ',
  Normal = 'NORMAL',
}
export interface UserWhereInput {
  AND?: UserWhereInput[];
  OR?: UserWhereInput[];
  NOT?: UserWhereInput[];
  id?: IntFilter;
  email?: StringFilter;
  name?: StringNullableFilter;
  isAdmin?: BoolFilter;
  allowHentai?: BoolFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  reports?: ReportListRelationFilter;
  comicbookmarks?: ComicBookmarkListRelationFilter;
  chapterbookmarks?: ChapterBookmarkListRelationFilter;
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  isAdmin?: SortOrder;
  allowHentai?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  reports?: ReportOrderByRelationAggregateInput;
  comicbookmarks?: ComicBookmarkOrderByRelationAggregateInput;
  chapterbookmarks?: ChapterBookmarkOrderByRelationAggregateInput;
}

export interface UserWhereUniqueInput {
  id?: number;
  email?: string;
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  isAdmin?: SortOrder;
  allowHentai?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: UserCountOrderByAggregateInput;
  _avg?: UserAvgOrderByAggregateInput;
  _max?: UserMaxOrderByAggregateInput;
  _min?: UserMinOrderByAggregateInput;
  _sum?: UserSumOrderByAggregateInput;
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[];
  OR?: UserScalarWhereWithAggregatesInput[];
  NOT?: UserScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  email?: StringWithAggregatesFilter;
  name?: StringNullableWithAggregatesFilter;
  isAdmin?: BoolWithAggregatesFilter;
  allowHentai?: BoolWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface AuthorWhereInput {
  AND?: AuthorWhereInput[];
  OR?: AuthorWhereInput[];
  NOT?: AuthorWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  slug?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  comics?: ComicListRelationFilter;
}

export interface AuthorOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  comics?: ComicOrderByRelationAggregateInput;
}

export interface AuthorWhereUniqueInput {
  id?: number;
  name?: string;
  slug?: string;
}

export interface AuthorOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: AuthorCountOrderByAggregateInput;
  _avg?: AuthorAvgOrderByAggregateInput;
  _max?: AuthorMaxOrderByAggregateInput;
  _min?: AuthorMinOrderByAggregateInput;
  _sum?: AuthorSumOrderByAggregateInput;
}

export interface AuthorScalarWhereWithAggregatesInput {
  AND?: AuthorScalarWhereWithAggregatesInput[];
  OR?: AuthorScalarWhereWithAggregatesInput[];
  NOT?: AuthorScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  slug?: StringWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface GenreWhereInput {
  AND?: GenreWhereInput[];
  OR?: GenreWhereInput[];
  NOT?: GenreWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  slug?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  comics?: ComicListRelationFilter;
}

export interface GenreOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  comics?: ComicOrderByRelationAggregateInput;
}

export interface GenreWhereUniqueInput {
  id?: number;
  name?: string;
  slug?: string;
}

export interface GenreOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: GenreCountOrderByAggregateInput;
  _avg?: GenreAvgOrderByAggregateInput;
  _max?: GenreMaxOrderByAggregateInput;
  _min?: GenreMinOrderByAggregateInput;
  _sum?: GenreSumOrderByAggregateInput;
}

export interface GenreScalarWhereWithAggregatesInput {
  AND?: GenreScalarWhereWithAggregatesInput[];
  OR?: GenreScalarWhereWithAggregatesInput[];
  NOT?: GenreScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  slug?: StringWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface AdsWhereInput {
  AND?: AdsWhereInput[];
  OR?: AdsWhereInput[];
  NOT?: AdsWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  position?: EnumAdsPositionNullableListFilter;
  url?: StringFilter;
  image?: StringNullableFilter;
  index?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface AdsOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  position?: SortOrder;
  url?: SortOrder;
  image?: SortOrder;
  index?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface AdsWhereUniqueInput {
  id?: number;
  name?: string;
}

export interface AdsOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  position?: SortOrder;
  url?: SortOrder;
  image?: SortOrder;
  index?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: AdsCountOrderByAggregateInput;
  _avg?: AdsAvgOrderByAggregateInput;
  _max?: AdsMaxOrderByAggregateInput;
  _min?: AdsMinOrderByAggregateInput;
  _sum?: AdsSumOrderByAggregateInput;
}

export interface AdsScalarWhereWithAggregatesInput {
  AND?: AdsScalarWhereWithAggregatesInput[];
  OR?: AdsScalarWhereWithAggregatesInput[];
  NOT?: AdsScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  position?: EnumAdsPositionNullableListFilter;
  url?: StringWithAggregatesFilter;
  image?: StringNullableWithAggregatesFilter;
  index?: IntWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface PerfomanceAnalyticWhereInput {
  AND?: PerfomanceAnalyticWhereInput[];
  OR?: PerfomanceAnalyticWhereInput[];
  NOT?: PerfomanceAnalyticWhereInput[];
  id?: IntFilter;
  operationName?: StringFilter;
  query?: StringFilter;
  variables?: StringFilter;
  time?: FloatFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface PerfomanceAnalyticOrderByWithRelationInput {
  id?: SortOrder;
  operationName?: SortOrder;
  query?: SortOrder;
  variables?: SortOrder;
  time?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface PerfomanceAnalyticWhereUniqueInput {
  id?: number;
}

export interface PerfomanceAnalyticOrderByWithAggregationInput {
  id?: SortOrder;
  operationName?: SortOrder;
  query?: SortOrder;
  variables?: SortOrder;
  time?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: PerfomanceAnalyticCountOrderByAggregateInput;
  _avg?: PerfomanceAnalyticAvgOrderByAggregateInput;
  _max?: PerfomanceAnalyticMaxOrderByAggregateInput;
  _min?: PerfomanceAnalyticMinOrderByAggregateInput;
  _sum?: PerfomanceAnalyticSumOrderByAggregateInput;
}

export interface PerfomanceAnalyticScalarWhereWithAggregatesInput {
  AND?: PerfomanceAnalyticScalarWhereWithAggregatesInput[];
  OR?: PerfomanceAnalyticScalarWhereWithAggregatesInput[];
  NOT?: PerfomanceAnalyticScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  operationName?: StringWithAggregatesFilter;
  query?: StringWithAggregatesFilter;
  variables?: StringWithAggregatesFilter;
  time?: FloatWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface ComicWhereInput {
  AND?: ComicWhereInput[];
  OR?: ComicWhereInput[];
  NOT?: ComicWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  slug?: StringFilter;
  thumb?: StringFilter;
  type?: StringFilter;
  thumbWide?: StringNullableFilter;
  altName?: JsonNullableFilter;
  isHentai?: BoolFilter;
  released?: DateTimeFilter;
  author?: AuthorWhereInput;
  rating?: FloatFilter;
  views?: IntFilter;
  viewsHourly?: IntFilter;
  viewsDaily?: IntFilter;
  viewsWeek?: IntFilter;
  description?: StringNullableFilter;
  status?: StringNullableFilter;
  age?: StringNullableFilter;
  concept?: StringNullableFilter;
  lastChapterUpdateAt?: DateTimeFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  authorId?: IntFilter;
  chapters?: ChapterListRelationFilter;
  genres?: GenreListRelationFilter;
  userbookmarks?: ComicBookmarkListRelationFilter;
}

export interface ComicOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  thumb?: SortOrder;
  type?: SortOrder;
  thumbWide?: SortOrder;
  altName?: SortOrder;
  isHentai?: SortOrder;
  released?: SortOrder;
  author?: AuthorOrderByWithRelationInput;
  rating?: SortOrder;
  views?: SortOrder;
  viewsHourly?: SortOrder;
  viewsDaily?: SortOrder;
  viewsWeek?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  age?: SortOrder;
  concept?: SortOrder;
  lastChapterUpdateAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
  chapters?: ChapterOrderByRelationAggregateInput;
  genres?: GenreOrderByRelationAggregateInput;
  userbookmarks?: ComicBookmarkOrderByRelationAggregateInput;
}

export interface ComicWhereUniqueInput {
  id?: number;
  name?: string;
  slug?: string;
}

export interface ComicOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  thumb?: SortOrder;
  type?: SortOrder;
  thumbWide?: SortOrder;
  altName?: SortOrder;
  isHentai?: SortOrder;
  released?: SortOrder;
  rating?: SortOrder;
  views?: SortOrder;
  viewsHourly?: SortOrder;
  viewsDaily?: SortOrder;
  viewsWeek?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  age?: SortOrder;
  concept?: SortOrder;
  lastChapterUpdateAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
  _count?: ComicCountOrderByAggregateInput;
  _avg?: ComicAvgOrderByAggregateInput;
  _max?: ComicMaxOrderByAggregateInput;
  _min?: ComicMinOrderByAggregateInput;
  _sum?: ComicSumOrderByAggregateInput;
}

export interface ComicScalarWhereWithAggregatesInput {
  AND?: ComicScalarWhereWithAggregatesInput[];
  OR?: ComicScalarWhereWithAggregatesInput[];
  NOT?: ComicScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  slug?: StringWithAggregatesFilter;
  thumb?: StringWithAggregatesFilter;
  type?: StringWithAggregatesFilter;
  thumbWide?: StringNullableWithAggregatesFilter;
  altName?: JsonNullableWithAggregatesFilter;
  isHentai?: BoolWithAggregatesFilter;
  released?: DateTimeWithAggregatesFilter;
  rating?: FloatWithAggregatesFilter;
  views?: IntWithAggregatesFilter;
  viewsHourly?: IntWithAggregatesFilter;
  viewsDaily?: IntWithAggregatesFilter;
  viewsWeek?: IntWithAggregatesFilter;
  description?: StringNullableWithAggregatesFilter;
  status?: StringNullableWithAggregatesFilter;
  age?: StringNullableWithAggregatesFilter;
  concept?: StringNullableWithAggregatesFilter;
  lastChapterUpdateAt?: DateTimeWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  authorId?: IntWithAggregatesFilter;
}

export interface ChapterWhereInput {
  AND?: ChapterWhereInput[];
  OR?: ChapterWhereInput[];
  NOT?: ChapterWhereInput[];
  id?: IntFilter;
  name?: FloatFilter;
  title?: StringNullableFilter;
  comic?: ComicWhereInput;
  quality?: EnumChapterQualityFilter;
  views?: IntFilter;
  imageCount?: IntFilter;
  originalImageCount?: IntFilter;
  processed?: BoolFilter;
  batchs?: StringNullableFilter;
  imageUrls?: StringNullableListFilter;
  imageDetails?: JsonNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  comicId?: IntFilter;
  chapterbookmarks?: ChapterBookmarkListRelationFilter;
}

export interface ChapterOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  title?: SortOrder;
  comic?: ComicOrderByWithRelationInput;
  quality?: SortOrder;
  views?: SortOrder;
  imageCount?: SortOrder;
  originalImageCount?: SortOrder;
  processed?: SortOrder;
  batchs?: SortOrder;
  imageUrls?: SortOrder;
  imageDetails?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  comicId?: SortOrder;
  chapterbookmarks?: ChapterBookmarkOrderByRelationAggregateInput;
}

export interface ChapterWhereUniqueInput {
  id?: number;
}

export interface ChapterOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  title?: SortOrder;
  quality?: SortOrder;
  views?: SortOrder;
  imageCount?: SortOrder;
  originalImageCount?: SortOrder;
  processed?: SortOrder;
  batchs?: SortOrder;
  imageUrls?: SortOrder;
  imageDetails?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  comicId?: SortOrder;
  _count?: ChapterCountOrderByAggregateInput;
  _avg?: ChapterAvgOrderByAggregateInput;
  _max?: ChapterMaxOrderByAggregateInput;
  _min?: ChapterMinOrderByAggregateInput;
  _sum?: ChapterSumOrderByAggregateInput;
}

export interface ChapterScalarWhereWithAggregatesInput {
  AND?: ChapterScalarWhereWithAggregatesInput[];
  OR?: ChapterScalarWhereWithAggregatesInput[];
  NOT?: ChapterScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  name?: FloatWithAggregatesFilter;
  title?: StringNullableWithAggregatesFilter;
  quality?: EnumChapterQualityWithAggregatesFilter;
  views?: IntWithAggregatesFilter;
  imageCount?: IntWithAggregatesFilter;
  originalImageCount?: IntWithAggregatesFilter;
  processed?: BoolWithAggregatesFilter;
  batchs?: StringNullableWithAggregatesFilter;
  imageUrls?: StringNullableListFilter;
  imageDetails?: JsonNullableWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  comicId?: IntWithAggregatesFilter;
}

export interface MissingWhereInput {
  AND?: MissingWhereInput[];
  OR?: MissingWhereInput[];
  NOT?: MissingWhereInput[];
  id?: IntFilter;
  data?: StringFilter;
  context?: StringFilter;
  resolved?: BoolFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface MissingOrderByWithRelationInput {
  id?: SortOrder;
  data?: SortOrder;
  context?: SortOrder;
  resolved?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface MissingWhereUniqueInput {
  id?: number;
}

export interface MissingOrderByWithAggregationInput {
  id?: SortOrder;
  data?: SortOrder;
  context?: SortOrder;
  resolved?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: MissingCountOrderByAggregateInput;
  _avg?: MissingAvgOrderByAggregateInput;
  _max?: MissingMaxOrderByAggregateInput;
  _min?: MissingMinOrderByAggregateInput;
  _sum?: MissingSumOrderByAggregateInput;
}

export interface MissingScalarWhereWithAggregatesInput {
  AND?: MissingScalarWhereWithAggregatesInput[];
  OR?: MissingScalarWhereWithAggregatesInput[];
  NOT?: MissingScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  data?: StringWithAggregatesFilter;
  context?: StringWithAggregatesFilter;
  resolved?: BoolWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface ReportWhereInput {
  AND?: ReportWhereInput[];
  OR?: ReportWhereInput[];
  NOT?: ReportWhereInput[];
  id?: IntFilter;
  userId?: IntNullableFilter;
  user?: UserWhereInput;
  name?: StringFilter;
  message?: StringNullableFilter;
  contextIdentifier?: StringFilter;
  contextType?: StringFilter;
  resolved?: BoolFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ReportOrderByWithRelationInput {
  id?: SortOrder;
  userId?: SortOrder;
  user?: UserOrderByWithRelationInput;
  name?: SortOrder;
  message?: SortOrder;
  contextIdentifier?: SortOrder;
  contextType?: SortOrder;
  resolved?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ReportWhereUniqueInput {
  id?: number;
}

export interface ReportOrderByWithAggregationInput {
  id?: SortOrder;
  userId?: SortOrder;
  name?: SortOrder;
  message?: SortOrder;
  contextIdentifier?: SortOrder;
  contextType?: SortOrder;
  resolved?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: ReportCountOrderByAggregateInput;
  _avg?: ReportAvgOrderByAggregateInput;
  _max?: ReportMaxOrderByAggregateInput;
  _min?: ReportMinOrderByAggregateInput;
  _sum?: ReportSumOrderByAggregateInput;
}

export interface ReportScalarWhereWithAggregatesInput {
  AND?: ReportScalarWhereWithAggregatesInput[];
  OR?: ReportScalarWhereWithAggregatesInput[];
  NOT?: ReportScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  userId?: IntNullableWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  message?: StringNullableWithAggregatesFilter;
  contextIdentifier?: StringWithAggregatesFilter;
  contextType?: StringWithAggregatesFilter;
  resolved?: BoolWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface ComicBookmarkWhereInput {
  AND?: ComicBookmarkWhereInput[];
  OR?: ComicBookmarkWhereInput[];
  NOT?: ComicBookmarkWhereInput[];
  id?: IntFilter;
  comicId?: IntFilter;
  comic?: ComicWhereInput;
  userId?: IntFilter;
  users?: UserWhereInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ComicBookmarkOrderByWithRelationInput {
  id?: SortOrder;
  comicId?: SortOrder;
  comic?: ComicOrderByWithRelationInput;
  userId?: SortOrder;
  users?: UserOrderByWithRelationInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ComicBookmarkWhereUniqueInput {
  id?: number;
}

export interface ComicBookmarkOrderByWithAggregationInput {
  id?: SortOrder;
  comicId?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: ComicBookmarkCountOrderByAggregateInput;
  _avg?: ComicBookmarkAvgOrderByAggregateInput;
  _max?: ComicBookmarkMaxOrderByAggregateInput;
  _min?: ComicBookmarkMinOrderByAggregateInput;
  _sum?: ComicBookmarkSumOrderByAggregateInput;
}

export interface ComicBookmarkScalarWhereWithAggregatesInput {
  AND?: ComicBookmarkScalarWhereWithAggregatesInput[];
  OR?: ComicBookmarkScalarWhereWithAggregatesInput[];
  NOT?: ComicBookmarkScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  comicId?: IntWithAggregatesFilter;
  userId?: IntWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface ChapterBookmarkWhereInput {
  AND?: ChapterBookmarkWhereInput[];
  OR?: ChapterBookmarkWhereInput[];
  NOT?: ChapterBookmarkWhereInput[];
  id?: IntFilter;
  chapterId?: IntFilter;
  chapter?: ChapterWhereInput;
  userId?: IntFilter;
  users?: UserWhereInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ChapterBookmarkOrderByWithRelationInput {
  id?: SortOrder;
  chapterId?: SortOrder;
  chapter?: ChapterOrderByWithRelationInput;
  userId?: SortOrder;
  users?: UserOrderByWithRelationInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ChapterBookmarkWhereUniqueInput {
  id?: number;
}

export interface ChapterBookmarkOrderByWithAggregationInput {
  id?: SortOrder;
  chapterId?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: ChapterBookmarkCountOrderByAggregateInput;
  _avg?: ChapterBookmarkAvgOrderByAggregateInput;
  _max?: ChapterBookmarkMaxOrderByAggregateInput;
  _min?: ChapterBookmarkMinOrderByAggregateInput;
  _sum?: ChapterBookmarkSumOrderByAggregateInput;
}

export interface ChapterBookmarkScalarWhereWithAggregatesInput {
  AND?: ChapterBookmarkScalarWhereWithAggregatesInput[];
  OR?: ChapterBookmarkScalarWhereWithAggregatesInput[];
  NOT?: ChapterBookmarkScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  chapterId?: IntWithAggregatesFilter;
  userId?: IntWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface UserCreateInput {
  email: string;
  name?: string;
  isAdmin?: boolean;
  allowHentai?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  reports?: ReportCreateNestedManyWithoutUserInput;
  comicbookmarks?: ComicBookmarkCreateNestedManyWithoutUsersInput;
  chapterbookmarks?: ChapterBookmarkCreateNestedManyWithoutUsersInput;
}

export interface UserUncheckedCreateInput {
  id?: number;
  email: string;
  name?: string;
  isAdmin?: boolean;
  allowHentai?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  reports?: ReportUncheckedCreateNestedManyWithoutUserInput;
  comicbookmarks?: ComicBookmarkUncheckedCreateNestedManyWithoutUsersInput;
  chapterbookmarks?: ChapterBookmarkUncheckedCreateNestedManyWithoutUsersInput;
}

export interface UserUpdateInput {
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  allowHentai?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  reports?: ReportUpdateManyWithoutUserInput;
  comicbookmarks?: ComicBookmarkUpdateManyWithoutUsersInput;
  chapterbookmarks?: ChapterBookmarkUpdateManyWithoutUsersInput;
}

export interface UserUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  allowHentai?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  reports?: ReportUncheckedUpdateManyWithoutUserInput;
  comicbookmarks?: ComicBookmarkUncheckedUpdateManyWithoutUsersInput;
  chapterbookmarks?: ChapterBookmarkUncheckedUpdateManyWithoutUsersInput;
}

export interface UserCreateManyInput {
  id?: number;
  email: string;
  name?: string;
  isAdmin?: boolean;
  allowHentai?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface UserUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  allowHentai?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface AuthorCreateInput {
  name: string;
  slug: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  comics?: ComicCreateNestedManyWithoutAuthorInput;
}

export interface AuthorUncheckedCreateInput {
  id?: number;
  name: string;
  slug: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  comics?: ComicUncheckedCreateNestedManyWithoutAuthorInput;
}

export interface AuthorUpdateInput {
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  comics?: ComicUpdateManyWithoutAuthorInput;
}

export interface AuthorUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  comics?: ComicUncheckedUpdateManyWithoutAuthorInput;
}

export interface AuthorCreateManyInput {
  id?: number;
  name: string;
  slug: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface AuthorUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface GenreCreateInput {
  name: string;
  slug: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  comics?: ComicCreateNestedManyWithoutGenresInput;
}

export interface GenreUncheckedCreateInput {
  id?: number;
  name: string;
  slug: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  comics?: ComicUncheckedCreateNestedManyWithoutGenresInput;
}

export interface GenreUpdateInput {
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  comics?: ComicUpdateManyWithoutGenresInput;
}

export interface GenreUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  comics?: ComicUncheckedUpdateManyWithoutGenresInput;
}

export interface GenreCreateManyInput {
  id?: number;
  name: string;
  slug: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface GenreUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface AdsCreateInput {
  name: string;
  position?: AdsPosition[];
  url: string;
  image?: string;
  index?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface AdsUncheckedCreateInput {
  id?: number;
  name: string;
  position?: AdsPosition[];
  url: string;
  image?: string;
  index?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface AdsUpdateInput {
  name?: StringFieldUpdateOperationsInput;
  position?: AdsPosition[];
  url?: StringFieldUpdateOperationsInput;
  image?: NullableStringFieldUpdateOperationsInput;
  index?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface AdsUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  position?: AdsPosition[];
  url?: StringFieldUpdateOperationsInput;
  image?: NullableStringFieldUpdateOperationsInput;
  index?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface AdsCreateManyInput {
  id?: number;
  name: string;
  position?: AdsPosition[];
  url: string;
  image?: string;
  index?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface AdsUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  position?: AdsPosition[];
  url?: StringFieldUpdateOperationsInput;
  image?: NullableStringFieldUpdateOperationsInput;
  index?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface PerfomanceAnalyticCreateInput {
  operationName: string;
  query: string;
  variables: string;
  time: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface PerfomanceAnalyticUncheckedCreateInput {
  id?: number;
  operationName: string;
  query: string;
  variables: string;
  time: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface PerfomanceAnalyticUpdateInput {
  operationName?: StringFieldUpdateOperationsInput;
  query?: StringFieldUpdateOperationsInput;
  variables?: StringFieldUpdateOperationsInput;
  time?: FloatFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface PerfomanceAnalyticUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  operationName?: StringFieldUpdateOperationsInput;
  query?: StringFieldUpdateOperationsInput;
  variables?: StringFieldUpdateOperationsInput;
  time?: FloatFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface PerfomanceAnalyticCreateManyInput {
  id?: number;
  operationName: string;
  query: string;
  variables: string;
  time: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface PerfomanceAnalyticUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  operationName?: StringFieldUpdateOperationsInput;
  query?: StringFieldUpdateOperationsInput;
  variables?: StringFieldUpdateOperationsInput;
  time?: FloatFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ComicCreateInput {
  name: string;
  slug: string;
  thumb: string;
  type: string;
  thumbWide?: string;
  altName?: string;
  isHentai?: boolean;
  released?: undefined;
  author: AuthorCreateNestedOneWithoutComicsInput;
  rating?: number;
  views?: number;
  viewsHourly?: number;
  viewsDaily?: number;
  viewsWeek?: number;
  description?: string;
  status?: string;
  age?: string;
  concept?: string;
  lastChapterUpdateAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  chapters?: ChapterCreateNestedManyWithoutComicInput;
  genres?: GenreCreateNestedManyWithoutComicsInput;
  userbookmarks?: ComicBookmarkCreateNestedManyWithoutComicInput;
}

export interface ComicUncheckedCreateInput {
  id?: number;
  name: string;
  slug: string;
  thumb: string;
  type: string;
  thumbWide?: string;
  altName?: string;
  isHentai?: boolean;
  released?: undefined;
  rating?: number;
  views?: number;
  viewsHourly?: number;
  viewsDaily?: number;
  viewsWeek?: number;
  description?: string;
  status?: string;
  age?: string;
  concept?: string;
  lastChapterUpdateAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  authorId: number;
  chapters?: ChapterUncheckedCreateNestedManyWithoutComicInput;
  genres?: GenreUncheckedCreateNestedManyWithoutComicsInput;
  userbookmarks?: ComicBookmarkUncheckedCreateNestedManyWithoutComicInput;
}

export interface ComicUpdateInput {
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  thumb?: StringFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  thumbWide?: NullableStringFieldUpdateOperationsInput;
  altName?: string;
  isHentai?: BoolFieldUpdateOperationsInput;
  released?: DateTimeFieldUpdateOperationsInput;
  author?: AuthorUpdateOneRequiredWithoutComicsInput;
  rating?: FloatFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  viewsHourly?: IntFieldUpdateOperationsInput;
  viewsDaily?: IntFieldUpdateOperationsInput;
  viewsWeek?: IntFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  status?: NullableStringFieldUpdateOperationsInput;
  age?: NullableStringFieldUpdateOperationsInput;
  concept?: NullableStringFieldUpdateOperationsInput;
  lastChapterUpdateAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chapters?: ChapterUpdateManyWithoutComicInput;
  genres?: GenreUpdateManyWithoutComicsInput;
  userbookmarks?: ComicBookmarkUpdateManyWithoutComicInput;
}

export interface ComicUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  thumb?: StringFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  thumbWide?: NullableStringFieldUpdateOperationsInput;
  altName?: string;
  isHentai?: BoolFieldUpdateOperationsInput;
  released?: DateTimeFieldUpdateOperationsInput;
  rating?: FloatFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  viewsHourly?: IntFieldUpdateOperationsInput;
  viewsDaily?: IntFieldUpdateOperationsInput;
  viewsWeek?: IntFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  status?: NullableStringFieldUpdateOperationsInput;
  age?: NullableStringFieldUpdateOperationsInput;
  concept?: NullableStringFieldUpdateOperationsInput;
  lastChapterUpdateAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  authorId?: IntFieldUpdateOperationsInput;
  chapters?: ChapterUncheckedUpdateManyWithoutComicInput;
  genres?: GenreUncheckedUpdateManyWithoutComicsInput;
  userbookmarks?: ComicBookmarkUncheckedUpdateManyWithoutComicInput;
}

export interface ComicCreateManyInput {
  id?: number;
  name: string;
  slug: string;
  thumb: string;
  type: string;
  thumbWide?: string;
  altName?: string;
  isHentai?: boolean;
  released?: undefined;
  rating?: number;
  views?: number;
  viewsHourly?: number;
  viewsDaily?: number;
  viewsWeek?: number;
  description?: string;
  status?: string;
  age?: string;
  concept?: string;
  lastChapterUpdateAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  authorId: number;
}

export interface ComicUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  thumb?: StringFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  thumbWide?: NullableStringFieldUpdateOperationsInput;
  altName?: string;
  isHentai?: BoolFieldUpdateOperationsInput;
  released?: DateTimeFieldUpdateOperationsInput;
  rating?: FloatFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  viewsHourly?: IntFieldUpdateOperationsInput;
  viewsDaily?: IntFieldUpdateOperationsInput;
  viewsWeek?: IntFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  status?: NullableStringFieldUpdateOperationsInput;
  age?: NullableStringFieldUpdateOperationsInput;
  concept?: NullableStringFieldUpdateOperationsInput;
  lastChapterUpdateAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  authorId?: IntFieldUpdateOperationsInput;
}

export interface ChapterCreateInput {
  name: number;
  title?: string;
  comic: ComicCreateNestedOneWithoutChaptersInput;
  quality?: ChapterQuality;
  views?: number;
  imageCount?: number;
  originalImageCount?: number;
  processed?: boolean;
  batchs?: string;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  chapterbookmarks?: ChapterBookmarkCreateNestedManyWithoutChapterInput;
}

export interface ChapterUncheckedCreateInput {
  id?: number;
  name: number;
  title?: string;
  quality?: ChapterQuality;
  views?: number;
  imageCount?: number;
  originalImageCount?: number;
  processed?: boolean;
  batchs?: string;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  comicId: number;
  chapterbookmarks?: ChapterBookmarkUncheckedCreateNestedManyWithoutChapterInput;
}

export interface ChapterUpdateInput {
  name?: FloatFieldUpdateOperationsInput;
  title?: NullableStringFieldUpdateOperationsInput;
  comic?: ComicUpdateOneRequiredWithoutChaptersInput;
  quality?: EnumChapterQualityFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  imageCount?: IntFieldUpdateOperationsInput;
  originalImageCount?: IntFieldUpdateOperationsInput;
  processed?: BoolFieldUpdateOperationsInput;
  batchs?: NullableStringFieldUpdateOperationsInput;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chapterbookmarks?: ChapterBookmarkUpdateManyWithoutChapterInput;
}

export interface ChapterUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  name?: FloatFieldUpdateOperationsInput;
  title?: NullableStringFieldUpdateOperationsInput;
  quality?: EnumChapterQualityFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  imageCount?: IntFieldUpdateOperationsInput;
  originalImageCount?: IntFieldUpdateOperationsInput;
  processed?: BoolFieldUpdateOperationsInput;
  batchs?: NullableStringFieldUpdateOperationsInput;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  comicId?: IntFieldUpdateOperationsInput;
  chapterbookmarks?: ChapterBookmarkUncheckedUpdateManyWithoutChapterInput;
}

export interface ChapterCreateManyInput {
  id?: number;
  name: number;
  title?: string;
  quality?: ChapterQuality;
  views?: number;
  imageCount?: number;
  originalImageCount?: number;
  processed?: boolean;
  batchs?: string;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  comicId: number;
}

export interface ChapterUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  name?: FloatFieldUpdateOperationsInput;
  title?: NullableStringFieldUpdateOperationsInput;
  quality?: EnumChapterQualityFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  imageCount?: IntFieldUpdateOperationsInput;
  originalImageCount?: IntFieldUpdateOperationsInput;
  processed?: BoolFieldUpdateOperationsInput;
  batchs?: NullableStringFieldUpdateOperationsInput;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  comicId?: IntFieldUpdateOperationsInput;
}

export interface MissingCreateInput {
  data: string;
  context: string;
  resolved?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface MissingUncheckedCreateInput {
  id?: number;
  data: string;
  context: string;
  resolved?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface MissingUpdateInput {
  data?: StringFieldUpdateOperationsInput;
  context?: StringFieldUpdateOperationsInput;
  resolved?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface MissingUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  data?: StringFieldUpdateOperationsInput;
  context?: StringFieldUpdateOperationsInput;
  resolved?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface MissingCreateManyInput {
  id?: number;
  data: string;
  context: string;
  resolved?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface MissingUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  data?: StringFieldUpdateOperationsInput;
  context?: StringFieldUpdateOperationsInput;
  resolved?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ReportCreateInput {
  user?: UserCreateNestedOneWithoutReportsInput;
  name: string;
  message?: string;
  contextIdentifier: string;
  contextType: string;
  resolved?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ReportUncheckedCreateInput {
  id?: number;
  userId?: number;
  name: string;
  message?: string;
  contextIdentifier: string;
  contextType: string;
  resolved?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ReportUpdateInput {
  user?: UserUpdateOneWithoutReportsInput;
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  contextIdentifier?: StringFieldUpdateOperationsInput;
  contextType?: StringFieldUpdateOperationsInput;
  resolved?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ReportUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  userId?: NullableIntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  contextIdentifier?: StringFieldUpdateOperationsInput;
  contextType?: StringFieldUpdateOperationsInput;
  resolved?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ReportCreateManyInput {
  id?: number;
  userId?: number;
  name: string;
  message?: string;
  contextIdentifier: string;
  contextType: string;
  resolved?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ReportUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  userId?: NullableIntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  contextIdentifier?: StringFieldUpdateOperationsInput;
  contextType?: StringFieldUpdateOperationsInput;
  resolved?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ComicBookmarkCreateInput {
  comic: ComicCreateNestedOneWithoutUserbookmarksInput;
  users: UserCreateNestedOneWithoutComicbookmarksInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ComicBookmarkUncheckedCreateInput {
  id?: number;
  comicId: number;
  userId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ComicBookmarkUpdateInput {
  comic?: ComicUpdateOneRequiredWithoutUserbookmarksInput;
  users?: UserUpdateOneRequiredWithoutComicbookmarksInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ComicBookmarkUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  comicId?: IntFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ComicBookmarkCreateManyInput {
  id?: number;
  comicId: number;
  userId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ComicBookmarkUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  comicId?: IntFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ChapterBookmarkCreateInput {
  chapter: ChapterCreateNestedOneWithoutChapterbookmarksInput;
  users: UserCreateNestedOneWithoutChapterbookmarksInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChapterBookmarkUncheckedCreateInput {
  id?: number;
  chapterId: number;
  userId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChapterBookmarkUpdateInput {
  chapter?: ChapterUpdateOneRequiredWithoutChapterbookmarksInput;
  users?: UserUpdateOneRequiredWithoutChapterbookmarksInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ChapterBookmarkUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  chapterId?: IntFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ChapterBookmarkCreateManyInput {
  id?: number;
  chapterId: number;
  userId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChapterBookmarkUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  chapterId?: IntFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface IntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface StringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringFilter;
}

export interface StringNullableFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableFilter;
}

export interface BoolFilter {
  equals?: boolean;
  not?: NestedBoolFilter;
}

export interface DateTimeFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeFilter;
}

export interface ReportListRelationFilter {
  every?: ReportWhereInput;
  some?: ReportWhereInput;
  none?: ReportWhereInput;
}

export interface ComicBookmarkListRelationFilter {
  every?: ComicBookmarkWhereInput;
  some?: ComicBookmarkWhereInput;
  none?: ComicBookmarkWhereInput;
}

export interface ChapterBookmarkListRelationFilter {
  every?: ChapterBookmarkWhereInput;
  some?: ChapterBookmarkWhereInput;
  none?: ChapterBookmarkWhereInput;
}

export interface ReportOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface ComicBookmarkOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface ChapterBookmarkOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  isAdmin?: SortOrder;
  allowHentai?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface UserAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  isAdmin?: SortOrder;
  allowHentai?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  isAdmin?: SortOrder;
  allowHentai?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface UserSumOrderByAggregateInput {
  id?: SortOrder;
}

export interface IntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface StringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface StringNullableWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface BoolWithAggregatesFilter {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
}

export interface DateTimeWithAggregatesFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface ComicListRelationFilter {
  every?: ComicWhereInput;
  some?: ComicWhereInput;
  none?: ComicWhereInput;
}

export interface ComicOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface AuthorCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface AuthorAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface AuthorMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface AuthorMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface AuthorSumOrderByAggregateInput {
  id?: SortOrder;
}

export interface GenreCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface GenreAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface GenreMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface GenreMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface GenreSumOrderByAggregateInput {
  id?: SortOrder;
}

export interface EnumAdsPositionNullableListFilter {
  equals?: AdsPosition[];
  has?: AdsPosition;
  hasEvery?: AdsPosition[];
  hasSome?: AdsPosition[];
  isEmpty?: boolean;
}

export interface AdsCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  position?: SortOrder;
  url?: SortOrder;
  image?: SortOrder;
  index?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface AdsAvgOrderByAggregateInput {
  id?: SortOrder;
  index?: SortOrder;
}

export interface AdsMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
  image?: SortOrder;
  index?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface AdsMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
  image?: SortOrder;
  index?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface AdsSumOrderByAggregateInput {
  id?: SortOrder;
  index?: SortOrder;
}

export interface FloatFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter;
}

export interface PerfomanceAnalyticCountOrderByAggregateInput {
  id?: SortOrder;
  operationName?: SortOrder;
  query?: SortOrder;
  variables?: SortOrder;
  time?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface PerfomanceAnalyticAvgOrderByAggregateInput {
  id?: SortOrder;
  time?: SortOrder;
}

export interface PerfomanceAnalyticMaxOrderByAggregateInput {
  id?: SortOrder;
  operationName?: SortOrder;
  query?: SortOrder;
  variables?: SortOrder;
  time?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface PerfomanceAnalyticMinOrderByAggregateInput {
  id?: SortOrder;
  operationName?: SortOrder;
  query?: SortOrder;
  variables?: SortOrder;
  time?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface PerfomanceAnalyticSumOrderByAggregateInput {
  id?: SortOrder;
  time?: SortOrder;
}

export interface FloatWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedFloatFilter;
  _min?: NestedFloatFilter;
  _max?: NestedFloatFilter;
}

export interface JsonNullableFilter {
  equals?: string;
  not?: string;
}

export interface AuthorRelationFilter {
  is?: AuthorWhereInput;
  isNot?: AuthorWhereInput;
}

export interface ChapterListRelationFilter {
  every?: ChapterWhereInput;
  some?: ChapterWhereInput;
  none?: ChapterWhereInput;
}

export interface GenreListRelationFilter {
  every?: GenreWhereInput;
  some?: GenreWhereInput;
  none?: GenreWhereInput;
}

export interface ChapterOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface GenreOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface ComicCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  thumb?: SortOrder;
  type?: SortOrder;
  thumbWide?: SortOrder;
  altName?: SortOrder;
  isHentai?: SortOrder;
  released?: SortOrder;
  rating?: SortOrder;
  views?: SortOrder;
  viewsHourly?: SortOrder;
  viewsDaily?: SortOrder;
  viewsWeek?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  age?: SortOrder;
  concept?: SortOrder;
  lastChapterUpdateAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
}

export interface ComicAvgOrderByAggregateInput {
  id?: SortOrder;
  rating?: SortOrder;
  views?: SortOrder;
  viewsHourly?: SortOrder;
  viewsDaily?: SortOrder;
  viewsWeek?: SortOrder;
  authorId?: SortOrder;
}

export interface ComicMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  thumb?: SortOrder;
  type?: SortOrder;
  thumbWide?: SortOrder;
  isHentai?: SortOrder;
  released?: SortOrder;
  rating?: SortOrder;
  views?: SortOrder;
  viewsHourly?: SortOrder;
  viewsDaily?: SortOrder;
  viewsWeek?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  age?: SortOrder;
  concept?: SortOrder;
  lastChapterUpdateAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
}

export interface ComicMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  thumb?: SortOrder;
  type?: SortOrder;
  thumbWide?: SortOrder;
  isHentai?: SortOrder;
  released?: SortOrder;
  rating?: SortOrder;
  views?: SortOrder;
  viewsHourly?: SortOrder;
  viewsDaily?: SortOrder;
  viewsWeek?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  age?: SortOrder;
  concept?: SortOrder;
  lastChapterUpdateAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
}

export interface ComicSumOrderByAggregateInput {
  id?: SortOrder;
  rating?: SortOrder;
  views?: SortOrder;
  viewsHourly?: SortOrder;
  viewsDaily?: SortOrder;
  viewsWeek?: SortOrder;
  authorId?: SortOrder;
}

export interface JsonNullableWithAggregatesFilter {
  equals?: string;
  not?: string;
  _count?: NestedIntNullableFilter;
  _min?: NestedJsonNullableFilter;
  _max?: NestedJsonNullableFilter;
}

export interface ComicRelationFilter {
  is?: ComicWhereInput;
  isNot?: ComicWhereInput;
}

export interface EnumChapterQualityFilter {
  equals?: ChapterQuality;
  in?: ChapterQuality[];
  notIn?: ChapterQuality[];
  not?: NestedEnumChapterQualityFilter;
}

export interface StringNullableListFilter {
  equals?: string[];
  has?: string;
  hasEvery?: string[];
  hasSome?: string[];
  isEmpty?: boolean;
}

export interface ChapterCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  title?: SortOrder;
  quality?: SortOrder;
  views?: SortOrder;
  imageCount?: SortOrder;
  originalImageCount?: SortOrder;
  processed?: SortOrder;
  batchs?: SortOrder;
  imageUrls?: SortOrder;
  imageDetails?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  comicId?: SortOrder;
}

export interface ChapterAvgOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  views?: SortOrder;
  imageCount?: SortOrder;
  originalImageCount?: SortOrder;
  comicId?: SortOrder;
}

export interface ChapterMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  title?: SortOrder;
  quality?: SortOrder;
  views?: SortOrder;
  imageCount?: SortOrder;
  originalImageCount?: SortOrder;
  processed?: SortOrder;
  batchs?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  comicId?: SortOrder;
}

export interface ChapterMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  title?: SortOrder;
  quality?: SortOrder;
  views?: SortOrder;
  imageCount?: SortOrder;
  originalImageCount?: SortOrder;
  processed?: SortOrder;
  batchs?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  comicId?: SortOrder;
}

export interface ChapterSumOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  views?: SortOrder;
  imageCount?: SortOrder;
  originalImageCount?: SortOrder;
  comicId?: SortOrder;
}

export interface EnumChapterQualityWithAggregatesFilter {
  equals?: ChapterQuality;
  in?: ChapterQuality[];
  notIn?: ChapterQuality[];
  not?: NestedEnumChapterQualityWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumChapterQualityFilter;
  _max?: NestedEnumChapterQualityFilter;
}

export interface MissingCountOrderByAggregateInput {
  id?: SortOrder;
  data?: SortOrder;
  context?: SortOrder;
  resolved?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface MissingAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface MissingMaxOrderByAggregateInput {
  id?: SortOrder;
  data?: SortOrder;
  context?: SortOrder;
  resolved?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface MissingMinOrderByAggregateInput {
  id?: SortOrder;
  data?: SortOrder;
  context?: SortOrder;
  resolved?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface MissingSumOrderByAggregateInput {
  id?: SortOrder;
}

export interface IntNullableFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter;
}

export interface UserRelationFilter {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
}

export interface ReportCountOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
  name?: SortOrder;
  message?: SortOrder;
  contextIdentifier?: SortOrder;
  contextType?: SortOrder;
  resolved?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ReportAvgOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
}

export interface ReportMaxOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
  name?: SortOrder;
  message?: SortOrder;
  contextIdentifier?: SortOrder;
  contextType?: SortOrder;
  resolved?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ReportMinOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
  name?: SortOrder;
  message?: SortOrder;
  contextIdentifier?: SortOrder;
  contextType?: SortOrder;
  resolved?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ReportSumOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
}

export interface IntNullableWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _avg?: NestedFloatNullableFilter;
  _sum?: NestedIntNullableFilter;
  _min?: NestedIntNullableFilter;
  _max?: NestedIntNullableFilter;
}

export interface ComicBookmarkCountOrderByAggregateInput {
  id?: SortOrder;
  comicId?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ComicBookmarkAvgOrderByAggregateInput {
  id?: SortOrder;
  comicId?: SortOrder;
  userId?: SortOrder;
}

export interface ComicBookmarkMaxOrderByAggregateInput {
  id?: SortOrder;
  comicId?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ComicBookmarkMinOrderByAggregateInput {
  id?: SortOrder;
  comicId?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ComicBookmarkSumOrderByAggregateInput {
  id?: SortOrder;
  comicId?: SortOrder;
  userId?: SortOrder;
}

export interface ChapterRelationFilter {
  is?: ChapterWhereInput;
  isNot?: ChapterWhereInput;
}

export interface ChapterBookmarkCountOrderByAggregateInput {
  id?: SortOrder;
  chapterId?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ChapterBookmarkAvgOrderByAggregateInput {
  id?: SortOrder;
  chapterId?: SortOrder;
  userId?: SortOrder;
}

export interface ChapterBookmarkMaxOrderByAggregateInput {
  id?: SortOrder;
  chapterId?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ChapterBookmarkMinOrderByAggregateInput {
  id?: SortOrder;
  chapterId?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ChapterBookmarkSumOrderByAggregateInput {
  id?: SortOrder;
  chapterId?: SortOrder;
  userId?: SortOrder;
}

export interface ReportCreateNestedManyWithoutUserInput {
  create?: ReportCreateWithoutUserInput[];
  connectOrCreate?: ReportCreateOrConnectWithoutUserInput[];
  createMany?: ReportCreateManyUserInputEnvelope;
  connect?: ReportWhereUniqueInput[];
}

export interface ComicBookmarkCreateNestedManyWithoutUsersInput {
  create?: ComicBookmarkCreateWithoutUsersInput[];
  connectOrCreate?: ComicBookmarkCreateOrConnectWithoutUsersInput[];
  createMany?: ComicBookmarkCreateManyUsersInputEnvelope;
  connect?: ComicBookmarkWhereUniqueInput[];
}

export interface ChapterBookmarkCreateNestedManyWithoutUsersInput {
  create?: ChapterBookmarkCreateWithoutUsersInput[];
  connectOrCreate?: ChapterBookmarkCreateOrConnectWithoutUsersInput[];
  createMany?: ChapterBookmarkCreateManyUsersInputEnvelope;
  connect?: ChapterBookmarkWhereUniqueInput[];
}

export interface ReportUncheckedCreateNestedManyWithoutUserInput {
  create?: ReportCreateWithoutUserInput[];
  connectOrCreate?: ReportCreateOrConnectWithoutUserInput[];
  createMany?: ReportCreateManyUserInputEnvelope;
  connect?: ReportWhereUniqueInput[];
}

export interface ComicBookmarkUncheckedCreateNestedManyWithoutUsersInput {
  create?: ComicBookmarkCreateWithoutUsersInput[];
  connectOrCreate?: ComicBookmarkCreateOrConnectWithoutUsersInput[];
  createMany?: ComicBookmarkCreateManyUsersInputEnvelope;
  connect?: ComicBookmarkWhereUniqueInput[];
}

export interface ChapterBookmarkUncheckedCreateNestedManyWithoutUsersInput {
  create?: ChapterBookmarkCreateWithoutUsersInput[];
  connectOrCreate?: ChapterBookmarkCreateOrConnectWithoutUsersInput[];
  createMany?: ChapterBookmarkCreateManyUsersInputEnvelope;
  connect?: ChapterBookmarkWhereUniqueInput[];
}

export interface StringFieldUpdateOperationsInput {
  set?: string;
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string;
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean;
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: undefined;
}

export interface ReportUpdateManyWithoutUserInput {
  create?: ReportCreateWithoutUserInput[];
  connectOrCreate?: ReportCreateOrConnectWithoutUserInput[];
  upsert?: ReportUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: ReportCreateManyUserInputEnvelope;
  set?: ReportWhereUniqueInput[];
  disconnect?: ReportWhereUniqueInput[];
  delete?: ReportWhereUniqueInput[];
  connect?: ReportWhereUniqueInput[];
  update?: ReportUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: ReportUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: ReportScalarWhereInput[];
}

export interface ComicBookmarkUpdateManyWithoutUsersInput {
  create?: ComicBookmarkCreateWithoutUsersInput[];
  connectOrCreate?: ComicBookmarkCreateOrConnectWithoutUsersInput[];
  upsert?: ComicBookmarkUpsertWithWhereUniqueWithoutUsersInput[];
  createMany?: ComicBookmarkCreateManyUsersInputEnvelope;
  set?: ComicBookmarkWhereUniqueInput[];
  disconnect?: ComicBookmarkWhereUniqueInput[];
  delete?: ComicBookmarkWhereUniqueInput[];
  connect?: ComicBookmarkWhereUniqueInput[];
  update?: ComicBookmarkUpdateWithWhereUniqueWithoutUsersInput[];
  updateMany?: ComicBookmarkUpdateManyWithWhereWithoutUsersInput[];
  deleteMany?: ComicBookmarkScalarWhereInput[];
}

export interface ChapterBookmarkUpdateManyWithoutUsersInput {
  create?: ChapterBookmarkCreateWithoutUsersInput[];
  connectOrCreate?: ChapterBookmarkCreateOrConnectWithoutUsersInput[];
  upsert?: ChapterBookmarkUpsertWithWhereUniqueWithoutUsersInput[];
  createMany?: ChapterBookmarkCreateManyUsersInputEnvelope;
  set?: ChapterBookmarkWhereUniqueInput[];
  disconnect?: ChapterBookmarkWhereUniqueInput[];
  delete?: ChapterBookmarkWhereUniqueInput[];
  connect?: ChapterBookmarkWhereUniqueInput[];
  update?: ChapterBookmarkUpdateWithWhereUniqueWithoutUsersInput[];
  updateMany?: ChapterBookmarkUpdateManyWithWhereWithoutUsersInput[];
  deleteMany?: ChapterBookmarkScalarWhereInput[];
}

export interface IntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface ReportUncheckedUpdateManyWithoutUserInput {
  create?: ReportCreateWithoutUserInput[];
  connectOrCreate?: ReportCreateOrConnectWithoutUserInput[];
  upsert?: ReportUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: ReportCreateManyUserInputEnvelope;
  set?: ReportWhereUniqueInput[];
  disconnect?: ReportWhereUniqueInput[];
  delete?: ReportWhereUniqueInput[];
  connect?: ReportWhereUniqueInput[];
  update?: ReportUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: ReportUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: ReportScalarWhereInput[];
}

export interface ComicBookmarkUncheckedUpdateManyWithoutUsersInput {
  create?: ComicBookmarkCreateWithoutUsersInput[];
  connectOrCreate?: ComicBookmarkCreateOrConnectWithoutUsersInput[];
  upsert?: ComicBookmarkUpsertWithWhereUniqueWithoutUsersInput[];
  createMany?: ComicBookmarkCreateManyUsersInputEnvelope;
  set?: ComicBookmarkWhereUniqueInput[];
  disconnect?: ComicBookmarkWhereUniqueInput[];
  delete?: ComicBookmarkWhereUniqueInput[];
  connect?: ComicBookmarkWhereUniqueInput[];
  update?: ComicBookmarkUpdateWithWhereUniqueWithoutUsersInput[];
  updateMany?: ComicBookmarkUpdateManyWithWhereWithoutUsersInput[];
  deleteMany?: ComicBookmarkScalarWhereInput[];
}

export interface ChapterBookmarkUncheckedUpdateManyWithoutUsersInput {
  create?: ChapterBookmarkCreateWithoutUsersInput[];
  connectOrCreate?: ChapterBookmarkCreateOrConnectWithoutUsersInput[];
  upsert?: ChapterBookmarkUpsertWithWhereUniqueWithoutUsersInput[];
  createMany?: ChapterBookmarkCreateManyUsersInputEnvelope;
  set?: ChapterBookmarkWhereUniqueInput[];
  disconnect?: ChapterBookmarkWhereUniqueInput[];
  delete?: ChapterBookmarkWhereUniqueInput[];
  connect?: ChapterBookmarkWhereUniqueInput[];
  update?: ChapterBookmarkUpdateWithWhereUniqueWithoutUsersInput[];
  updateMany?: ChapterBookmarkUpdateManyWithWhereWithoutUsersInput[];
  deleteMany?: ChapterBookmarkScalarWhereInput[];
}

export interface ComicCreateNestedManyWithoutAuthorInput {
  create?: ComicCreateWithoutAuthorInput[];
  connectOrCreate?: ComicCreateOrConnectWithoutAuthorInput[];
  createMany?: ComicCreateManyAuthorInputEnvelope;
  connect?: ComicWhereUniqueInput[];
}

export interface ComicUncheckedCreateNestedManyWithoutAuthorInput {
  create?: ComicCreateWithoutAuthorInput[];
  connectOrCreate?: ComicCreateOrConnectWithoutAuthorInput[];
  createMany?: ComicCreateManyAuthorInputEnvelope;
  connect?: ComicWhereUniqueInput[];
}

export interface ComicUpdateManyWithoutAuthorInput {
  create?: ComicCreateWithoutAuthorInput[];
  connectOrCreate?: ComicCreateOrConnectWithoutAuthorInput[];
  upsert?: ComicUpsertWithWhereUniqueWithoutAuthorInput[];
  createMany?: ComicCreateManyAuthorInputEnvelope;
  set?: ComicWhereUniqueInput[];
  disconnect?: ComicWhereUniqueInput[];
  delete?: ComicWhereUniqueInput[];
  connect?: ComicWhereUniqueInput[];
  update?: ComicUpdateWithWhereUniqueWithoutAuthorInput[];
  updateMany?: ComicUpdateManyWithWhereWithoutAuthorInput[];
  deleteMany?: ComicScalarWhereInput[];
}

export interface ComicUncheckedUpdateManyWithoutAuthorInput {
  create?: ComicCreateWithoutAuthorInput[];
  connectOrCreate?: ComicCreateOrConnectWithoutAuthorInput[];
  upsert?: ComicUpsertWithWhereUniqueWithoutAuthorInput[];
  createMany?: ComicCreateManyAuthorInputEnvelope;
  set?: ComicWhereUniqueInput[];
  disconnect?: ComicWhereUniqueInput[];
  delete?: ComicWhereUniqueInput[];
  connect?: ComicWhereUniqueInput[];
  update?: ComicUpdateWithWhereUniqueWithoutAuthorInput[];
  updateMany?: ComicUpdateManyWithWhereWithoutAuthorInput[];
  deleteMany?: ComicScalarWhereInput[];
}

export interface ComicCreateNestedManyWithoutGenresInput {
  create?: ComicCreateWithoutGenresInput[];
  connectOrCreate?: ComicCreateOrConnectWithoutGenresInput[];
  connect?: ComicWhereUniqueInput[];
}

export interface ComicUncheckedCreateNestedManyWithoutGenresInput {
  create?: ComicCreateWithoutGenresInput[];
  connectOrCreate?: ComicCreateOrConnectWithoutGenresInput[];
  connect?: ComicWhereUniqueInput[];
}

export interface ComicUpdateManyWithoutGenresInput {
  create?: ComicCreateWithoutGenresInput[];
  connectOrCreate?: ComicCreateOrConnectWithoutGenresInput[];
  upsert?: ComicUpsertWithWhereUniqueWithoutGenresInput[];
  set?: ComicWhereUniqueInput[];
  disconnect?: ComicWhereUniqueInput[];
  delete?: ComicWhereUniqueInput[];
  connect?: ComicWhereUniqueInput[];
  update?: ComicUpdateWithWhereUniqueWithoutGenresInput[];
  updateMany?: ComicUpdateManyWithWhereWithoutGenresInput[];
  deleteMany?: ComicScalarWhereInput[];
}

export interface ComicUncheckedUpdateManyWithoutGenresInput {
  create?: ComicCreateWithoutGenresInput[];
  connectOrCreate?: ComicCreateOrConnectWithoutGenresInput[];
  upsert?: ComicUpsertWithWhereUniqueWithoutGenresInput[];
  set?: ComicWhereUniqueInput[];
  disconnect?: ComicWhereUniqueInput[];
  delete?: ComicWhereUniqueInput[];
  connect?: ComicWhereUniqueInput[];
  update?: ComicUpdateWithWhereUniqueWithoutGenresInput[];
  updateMany?: ComicUpdateManyWithWhereWithoutGenresInput[];
  deleteMany?: ComicScalarWhereInput[];
}

export interface AdsCreatepositionInput {
  set: AdsPosition;
}

export interface AdsUpdatepositionInput {
  set?: AdsPosition[];
  push?: AdsPosition[];
}

export interface FloatFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface AuthorCreateNestedOneWithoutComicsInput {
  create?: AuthorUncheckedCreateWithoutComicsInput;
  connectOrCreate?: AuthorCreateOrConnectWithoutComicsInput;
  connect?: AuthorWhereUniqueInput;
}

export interface ChapterCreateNestedManyWithoutComicInput {
  create?: ChapterCreateWithoutComicInput[];
  connectOrCreate?: ChapterCreateOrConnectWithoutComicInput[];
  createMany?: ChapterCreateManyComicInputEnvelope;
  connect?: ChapterWhereUniqueInput[];
}

export interface GenreCreateNestedManyWithoutComicsInput {
  create?: GenreCreateWithoutComicsInput[];
  connectOrCreate?: GenreCreateOrConnectWithoutComicsInput[];
  connect?: GenreWhereUniqueInput[];
}

export interface ComicBookmarkCreateNestedManyWithoutComicInput {
  create?: ComicBookmarkCreateWithoutComicInput[];
  connectOrCreate?: ComicBookmarkCreateOrConnectWithoutComicInput[];
  createMany?: ComicBookmarkCreateManyComicInputEnvelope;
  connect?: ComicBookmarkWhereUniqueInput[];
}

export interface ChapterUncheckedCreateNestedManyWithoutComicInput {
  create?: ChapterCreateWithoutComicInput[];
  connectOrCreate?: ChapterCreateOrConnectWithoutComicInput[];
  createMany?: ChapterCreateManyComicInputEnvelope;
  connect?: ChapterWhereUniqueInput[];
}

export interface GenreUncheckedCreateNestedManyWithoutComicsInput {
  create?: GenreCreateWithoutComicsInput[];
  connectOrCreate?: GenreCreateOrConnectWithoutComicsInput[];
  connect?: GenreWhereUniqueInput[];
}

export interface ComicBookmarkUncheckedCreateNestedManyWithoutComicInput {
  create?: ComicBookmarkCreateWithoutComicInput[];
  connectOrCreate?: ComicBookmarkCreateOrConnectWithoutComicInput[];
  createMany?: ComicBookmarkCreateManyComicInputEnvelope;
  connect?: ComicBookmarkWhereUniqueInput[];
}

export interface AuthorUpdateOneRequiredWithoutComicsInput {
  create?: AuthorUncheckedCreateWithoutComicsInput;
  connectOrCreate?: AuthorCreateOrConnectWithoutComicsInput;
  upsert?: AuthorUpsertWithoutComicsInput;
  connect?: AuthorWhereUniqueInput;
  update?: AuthorUncheckedUpdateWithoutComicsInput;
}

export interface ChapterUpdateManyWithoutComicInput {
  create?: ChapterCreateWithoutComicInput[];
  connectOrCreate?: ChapterCreateOrConnectWithoutComicInput[];
  upsert?: ChapterUpsertWithWhereUniqueWithoutComicInput[];
  createMany?: ChapterCreateManyComicInputEnvelope;
  set?: ChapterWhereUniqueInput[];
  disconnect?: ChapterWhereUniqueInput[];
  delete?: ChapterWhereUniqueInput[];
  connect?: ChapterWhereUniqueInput[];
  update?: ChapterUpdateWithWhereUniqueWithoutComicInput[];
  updateMany?: ChapterUpdateManyWithWhereWithoutComicInput[];
  deleteMany?: ChapterScalarWhereInput[];
}

export interface GenreUpdateManyWithoutComicsInput {
  create?: GenreCreateWithoutComicsInput[];
  connectOrCreate?: GenreCreateOrConnectWithoutComicsInput[];
  upsert?: GenreUpsertWithWhereUniqueWithoutComicsInput[];
  set?: GenreWhereUniqueInput[];
  disconnect?: GenreWhereUniqueInput[];
  delete?: GenreWhereUniqueInput[];
  connect?: GenreWhereUniqueInput[];
  update?: GenreUpdateWithWhereUniqueWithoutComicsInput[];
  updateMany?: GenreUpdateManyWithWhereWithoutComicsInput[];
  deleteMany?: GenreScalarWhereInput[];
}

export interface ComicBookmarkUpdateManyWithoutComicInput {
  create?: ComicBookmarkCreateWithoutComicInput[];
  connectOrCreate?: ComicBookmarkCreateOrConnectWithoutComicInput[];
  upsert?: ComicBookmarkUpsertWithWhereUniqueWithoutComicInput[];
  createMany?: ComicBookmarkCreateManyComicInputEnvelope;
  set?: ComicBookmarkWhereUniqueInput[];
  disconnect?: ComicBookmarkWhereUniqueInput[];
  delete?: ComicBookmarkWhereUniqueInput[];
  connect?: ComicBookmarkWhereUniqueInput[];
  update?: ComicBookmarkUpdateWithWhereUniqueWithoutComicInput[];
  updateMany?: ComicBookmarkUpdateManyWithWhereWithoutComicInput[];
  deleteMany?: ComicBookmarkScalarWhereInput[];
}

export interface ChapterUncheckedUpdateManyWithoutComicInput {
  create?: ChapterCreateWithoutComicInput[];
  connectOrCreate?: ChapterCreateOrConnectWithoutComicInput[];
  upsert?: ChapterUpsertWithWhereUniqueWithoutComicInput[];
  createMany?: ChapterCreateManyComicInputEnvelope;
  set?: ChapterWhereUniqueInput[];
  disconnect?: ChapterWhereUniqueInput[];
  delete?: ChapterWhereUniqueInput[];
  connect?: ChapterWhereUniqueInput[];
  update?: ChapterUpdateWithWhereUniqueWithoutComicInput[];
  updateMany?: ChapterUpdateManyWithWhereWithoutComicInput[];
  deleteMany?: ChapterScalarWhereInput[];
}

export interface GenreUncheckedUpdateManyWithoutComicsInput {
  create?: GenreCreateWithoutComicsInput[];
  connectOrCreate?: GenreCreateOrConnectWithoutComicsInput[];
  upsert?: GenreUpsertWithWhereUniqueWithoutComicsInput[];
  set?: GenreWhereUniqueInput[];
  disconnect?: GenreWhereUniqueInput[];
  delete?: GenreWhereUniqueInput[];
  connect?: GenreWhereUniqueInput[];
  update?: GenreUpdateWithWhereUniqueWithoutComicsInput[];
  updateMany?: GenreUpdateManyWithWhereWithoutComicsInput[];
  deleteMany?: GenreScalarWhereInput[];
}

export interface ComicBookmarkUncheckedUpdateManyWithoutComicInput {
  create?: ComicBookmarkCreateWithoutComicInput[];
  connectOrCreate?: ComicBookmarkCreateOrConnectWithoutComicInput[];
  upsert?: ComicBookmarkUpsertWithWhereUniqueWithoutComicInput[];
  createMany?: ComicBookmarkCreateManyComicInputEnvelope;
  set?: ComicBookmarkWhereUniqueInput[];
  disconnect?: ComicBookmarkWhereUniqueInput[];
  delete?: ComicBookmarkWhereUniqueInput[];
  connect?: ComicBookmarkWhereUniqueInput[];
  update?: ComicBookmarkUpdateWithWhereUniqueWithoutComicInput[];
  updateMany?: ComicBookmarkUpdateManyWithWhereWithoutComicInput[];
  deleteMany?: ComicBookmarkScalarWhereInput[];
}

export interface ComicCreateNestedOneWithoutChaptersInput {
  create?: ComicUncheckedCreateWithoutChaptersInput;
  connectOrCreate?: ComicCreateOrConnectWithoutChaptersInput;
  connect?: ComicWhereUniqueInput;
}

export interface ChapterCreateimageUrlsInput {
  set: string;
}

export interface ChapterBookmarkCreateNestedManyWithoutChapterInput {
  create?: ChapterBookmarkCreateWithoutChapterInput[];
  connectOrCreate?: ChapterBookmarkCreateOrConnectWithoutChapterInput[];
  createMany?: ChapterBookmarkCreateManyChapterInputEnvelope;
  connect?: ChapterBookmarkWhereUniqueInput[];
}

export interface ChapterBookmarkUncheckedCreateNestedManyWithoutChapterInput {
  create?: ChapterBookmarkCreateWithoutChapterInput[];
  connectOrCreate?: ChapterBookmarkCreateOrConnectWithoutChapterInput[];
  createMany?: ChapterBookmarkCreateManyChapterInputEnvelope;
  connect?: ChapterBookmarkWhereUniqueInput[];
}

export interface ComicUpdateOneRequiredWithoutChaptersInput {
  create?: ComicUncheckedCreateWithoutChaptersInput;
  connectOrCreate?: ComicCreateOrConnectWithoutChaptersInput;
  upsert?: ComicUpsertWithoutChaptersInput;
  connect?: ComicWhereUniqueInput;
  update?: ComicUncheckedUpdateWithoutChaptersInput;
}

export interface EnumChapterQualityFieldUpdateOperationsInput {
  set?: ChapterQuality;
}

export interface ChapterUpdateimageUrlsInput {
  set?: string[];
  push?: string[];
}

export interface ChapterBookmarkUpdateManyWithoutChapterInput {
  create?: ChapterBookmarkCreateWithoutChapterInput[];
  connectOrCreate?: ChapterBookmarkCreateOrConnectWithoutChapterInput[];
  upsert?: ChapterBookmarkUpsertWithWhereUniqueWithoutChapterInput[];
  createMany?: ChapterBookmarkCreateManyChapterInputEnvelope;
  set?: ChapterBookmarkWhereUniqueInput[];
  disconnect?: ChapterBookmarkWhereUniqueInput[];
  delete?: ChapterBookmarkWhereUniqueInput[];
  connect?: ChapterBookmarkWhereUniqueInput[];
  update?: ChapterBookmarkUpdateWithWhereUniqueWithoutChapterInput[];
  updateMany?: ChapterBookmarkUpdateManyWithWhereWithoutChapterInput[];
  deleteMany?: ChapterBookmarkScalarWhereInput[];
}

export interface ChapterBookmarkUncheckedUpdateManyWithoutChapterInput {
  create?: ChapterBookmarkCreateWithoutChapterInput[];
  connectOrCreate?: ChapterBookmarkCreateOrConnectWithoutChapterInput[];
  upsert?: ChapterBookmarkUpsertWithWhereUniqueWithoutChapterInput[];
  createMany?: ChapterBookmarkCreateManyChapterInputEnvelope;
  set?: ChapterBookmarkWhereUniqueInput[];
  disconnect?: ChapterBookmarkWhereUniqueInput[];
  delete?: ChapterBookmarkWhereUniqueInput[];
  connect?: ChapterBookmarkWhereUniqueInput[];
  update?: ChapterBookmarkUpdateWithWhereUniqueWithoutChapterInput[];
  updateMany?: ChapterBookmarkUpdateManyWithWhereWithoutChapterInput[];
  deleteMany?: ChapterBookmarkScalarWhereInput[];
}

export interface UserCreateNestedOneWithoutReportsInput {
  create?: UserUncheckedCreateWithoutReportsInput;
  connectOrCreate?: UserCreateOrConnectWithoutReportsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateOneWithoutReportsInput {
  create?: UserUncheckedCreateWithoutReportsInput;
  connectOrCreate?: UserCreateOrConnectWithoutReportsInput;
  upsert?: UserUpsertWithoutReportsInput;
  disconnect?: boolean;
  delete?: boolean;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutReportsInput;
}

export interface NullableIntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface ComicCreateNestedOneWithoutUserbookmarksInput {
  create?: ComicUncheckedCreateWithoutUserbookmarksInput;
  connectOrCreate?: ComicCreateOrConnectWithoutUserbookmarksInput;
  connect?: ComicWhereUniqueInput;
}

export interface UserCreateNestedOneWithoutComicbookmarksInput {
  create?: UserUncheckedCreateWithoutComicbookmarksInput;
  connectOrCreate?: UserCreateOrConnectWithoutComicbookmarksInput;
  connect?: UserWhereUniqueInput;
}

export interface ComicUpdateOneRequiredWithoutUserbookmarksInput {
  create?: ComicUncheckedCreateWithoutUserbookmarksInput;
  connectOrCreate?: ComicCreateOrConnectWithoutUserbookmarksInput;
  upsert?: ComicUpsertWithoutUserbookmarksInput;
  connect?: ComicWhereUniqueInput;
  update?: ComicUncheckedUpdateWithoutUserbookmarksInput;
}

export interface UserUpdateOneRequiredWithoutComicbookmarksInput {
  create?: UserUncheckedCreateWithoutComicbookmarksInput;
  connectOrCreate?: UserCreateOrConnectWithoutComicbookmarksInput;
  upsert?: UserUpsertWithoutComicbookmarksInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutComicbookmarksInput;
}

export interface ChapterCreateNestedOneWithoutChapterbookmarksInput {
  create?: ChapterUncheckedCreateWithoutChapterbookmarksInput;
  connectOrCreate?: ChapterCreateOrConnectWithoutChapterbookmarksInput;
  connect?: ChapterWhereUniqueInput;
}

export interface UserCreateNestedOneWithoutChapterbookmarksInput {
  create?: UserUncheckedCreateWithoutChapterbookmarksInput;
  connectOrCreate?: UserCreateOrConnectWithoutChapterbookmarksInput;
  connect?: UserWhereUniqueInput;
}

export interface ChapterUpdateOneRequiredWithoutChapterbookmarksInput {
  create?: ChapterUncheckedCreateWithoutChapterbookmarksInput;
  connectOrCreate?: ChapterCreateOrConnectWithoutChapterbookmarksInput;
  upsert?: ChapterUpsertWithoutChapterbookmarksInput;
  connect?: ChapterWhereUniqueInput;
  update?: ChapterUncheckedUpdateWithoutChapterbookmarksInput;
}

export interface UserUpdateOneRequiredWithoutChapterbookmarksInput {
  create?: UserUncheckedCreateWithoutChapterbookmarksInput;
  connectOrCreate?: UserCreateOrConnectWithoutChapterbookmarksInput;
  upsert?: UserUpsertWithoutChapterbookmarksInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutChapterbookmarksInput;
}

export interface NestedIntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface NestedStringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringFilter;
}

export interface NestedStringNullableFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableFilter;
}

export interface NestedBoolFilter {
  equals?: boolean;
  not?: NestedBoolFilter;
}

export interface NestedDateTimeFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeFilter;
}

export interface NestedIntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface NestedFloatFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter;
}

export interface NestedStringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface NestedIntNullableFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter;
}

export interface NestedBoolWithAggregatesFilter {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface NestedFloatWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedFloatFilter;
  _min?: NestedFloatFilter;
  _max?: NestedFloatFilter;
}

export interface NestedJsonNullableFilter {
  equals?: string;
  not?: string;
}

export interface NestedEnumChapterQualityFilter {
  equals?: ChapterQuality;
  in?: ChapterQuality[];
  notIn?: ChapterQuality[];
  not?: NestedEnumChapterQualityFilter;
}

export interface NestedEnumChapterQualityWithAggregatesFilter {
  equals?: ChapterQuality;
  in?: ChapterQuality[];
  notIn?: ChapterQuality[];
  not?: NestedEnumChapterQualityWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumChapterQualityFilter;
  _max?: NestedEnumChapterQualityFilter;
}

export interface NestedIntNullableWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _avg?: NestedFloatNullableFilter;
  _sum?: NestedIntNullableFilter;
  _min?: NestedIntNullableFilter;
  _max?: NestedIntNullableFilter;
}

export interface NestedFloatNullableFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatNullableFilter;
}

export interface ReportCreateWithoutUserInput {
  name: string;
  message?: string;
  contextIdentifier: string;
  contextType: string;
  resolved?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ReportUncheckedCreateWithoutUserInput {
  id?: number;
  name: string;
  message?: string;
  contextIdentifier: string;
  contextType: string;
  resolved?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ReportCreateOrConnectWithoutUserInput {
  where: ReportWhereUniqueInput;
  create: ReportUncheckedCreateWithoutUserInput;
}

export interface ReportCreateManyUserInputEnvelope {
  data: ReportCreateManyUserInput;
  skipDuplicates?: boolean;
}

export interface ComicBookmarkCreateWithoutUsersInput {
  comic: ComicCreateNestedOneWithoutUserbookmarksInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ComicBookmarkUncheckedCreateWithoutUsersInput {
  id?: number;
  comicId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ComicBookmarkCreateOrConnectWithoutUsersInput {
  where: ComicBookmarkWhereUniqueInput;
  create: ComicBookmarkUncheckedCreateWithoutUsersInput;
}

export interface ComicBookmarkCreateManyUsersInputEnvelope {
  data: ComicBookmarkCreateManyUsersInput;
  skipDuplicates?: boolean;
}

export interface ChapterBookmarkCreateWithoutUsersInput {
  chapter: ChapterCreateNestedOneWithoutChapterbookmarksInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChapterBookmarkUncheckedCreateWithoutUsersInput {
  id?: number;
  chapterId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChapterBookmarkCreateOrConnectWithoutUsersInput {
  where: ChapterBookmarkWhereUniqueInput;
  create: ChapterBookmarkUncheckedCreateWithoutUsersInput;
}

export interface ChapterBookmarkCreateManyUsersInputEnvelope {
  data: ChapterBookmarkCreateManyUsersInput;
  skipDuplicates?: boolean;
}

export interface ReportUpsertWithWhereUniqueWithoutUserInput {
  where: ReportWhereUniqueInput;
  update: ReportUncheckedUpdateWithoutUserInput;
  create: ReportUncheckedCreateWithoutUserInput;
}

export interface ReportUpdateWithWhereUniqueWithoutUserInput {
  where: ReportWhereUniqueInput;
  data: ReportUncheckedUpdateWithoutUserInput;
}

export interface ReportUpdateManyWithWhereWithoutUserInput {
  where: ReportScalarWhereInput;
  data: ReportUncheckedUpdateManyWithoutReportsInput;
}

export interface ReportScalarWhereInput {
  AND?: ReportScalarWhereInput[];
  OR?: ReportScalarWhereInput[];
  NOT?: ReportScalarWhereInput[];
  id?: IntFilter;
  userId?: IntNullableFilter;
  name?: StringFilter;
  message?: StringNullableFilter;
  contextIdentifier?: StringFilter;
  contextType?: StringFilter;
  resolved?: BoolFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ComicBookmarkUpsertWithWhereUniqueWithoutUsersInput {
  where: ComicBookmarkWhereUniqueInput;
  update: ComicBookmarkUncheckedUpdateWithoutUsersInput;
  create: ComicBookmarkUncheckedCreateWithoutUsersInput;
}

export interface ComicBookmarkUpdateWithWhereUniqueWithoutUsersInput {
  where: ComicBookmarkWhereUniqueInput;
  data: ComicBookmarkUncheckedUpdateWithoutUsersInput;
}

export interface ComicBookmarkUpdateManyWithWhereWithoutUsersInput {
  where: ComicBookmarkScalarWhereInput;
  data: ComicBookmarkUncheckedUpdateManyWithoutComicbookmarksInput;
}

export interface ComicBookmarkScalarWhereInput {
  AND?: ComicBookmarkScalarWhereInput[];
  OR?: ComicBookmarkScalarWhereInput[];
  NOT?: ComicBookmarkScalarWhereInput[];
  id?: IntFilter;
  comicId?: IntFilter;
  userId?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ChapterBookmarkUpsertWithWhereUniqueWithoutUsersInput {
  where: ChapterBookmarkWhereUniqueInput;
  update: ChapterBookmarkUncheckedUpdateWithoutUsersInput;
  create: ChapterBookmarkUncheckedCreateWithoutUsersInput;
}

export interface ChapterBookmarkUpdateWithWhereUniqueWithoutUsersInput {
  where: ChapterBookmarkWhereUniqueInput;
  data: ChapterBookmarkUncheckedUpdateWithoutUsersInput;
}

export interface ChapterBookmarkUpdateManyWithWhereWithoutUsersInput {
  where: ChapterBookmarkScalarWhereInput;
  data: ChapterBookmarkUncheckedUpdateManyWithoutChapterbookmarksInput;
}

export interface ChapterBookmarkScalarWhereInput {
  AND?: ChapterBookmarkScalarWhereInput[];
  OR?: ChapterBookmarkScalarWhereInput[];
  NOT?: ChapterBookmarkScalarWhereInput[];
  id?: IntFilter;
  chapterId?: IntFilter;
  userId?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ComicCreateWithoutAuthorInput {
  name: string;
  slug: string;
  thumb: string;
  type: string;
  thumbWide?: string;
  altName?: string;
  isHentai?: boolean;
  released?: undefined;
  rating?: number;
  views?: number;
  viewsHourly?: number;
  viewsDaily?: number;
  viewsWeek?: number;
  description?: string;
  status?: string;
  age?: string;
  concept?: string;
  lastChapterUpdateAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  chapters?: ChapterCreateNestedManyWithoutComicInput;
  genres?: GenreCreateNestedManyWithoutComicsInput;
  userbookmarks?: ComicBookmarkCreateNestedManyWithoutComicInput;
}

export interface ComicUncheckedCreateWithoutAuthorInput {
  id?: number;
  name: string;
  slug: string;
  thumb: string;
  type: string;
  thumbWide?: string;
  altName?: string;
  isHentai?: boolean;
  released?: undefined;
  rating?: number;
  views?: number;
  viewsHourly?: number;
  viewsDaily?: number;
  viewsWeek?: number;
  description?: string;
  status?: string;
  age?: string;
  concept?: string;
  lastChapterUpdateAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  chapters?: ChapterUncheckedCreateNestedManyWithoutComicInput;
  genres?: GenreUncheckedCreateNestedManyWithoutComicsInput;
  userbookmarks?: ComicBookmarkUncheckedCreateNestedManyWithoutComicInput;
}

export interface ComicCreateOrConnectWithoutAuthorInput {
  where: ComicWhereUniqueInput;
  create: ComicUncheckedCreateWithoutAuthorInput;
}

export interface ComicCreateManyAuthorInputEnvelope {
  data: ComicCreateManyAuthorInput;
  skipDuplicates?: boolean;
}

export interface ComicUpsertWithWhereUniqueWithoutAuthorInput {
  where: ComicWhereUniqueInput;
  update: ComicUncheckedUpdateWithoutAuthorInput;
  create: ComicUncheckedCreateWithoutAuthorInput;
}

export interface ComicUpdateWithWhereUniqueWithoutAuthorInput {
  where: ComicWhereUniqueInput;
  data: ComicUncheckedUpdateWithoutAuthorInput;
}

export interface ComicUpdateManyWithWhereWithoutAuthorInput {
  where: ComicScalarWhereInput;
  data: ComicUncheckedUpdateManyWithoutComicsInput;
}

export interface ComicScalarWhereInput {
  AND?: ComicScalarWhereInput[];
  OR?: ComicScalarWhereInput[];
  NOT?: ComicScalarWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  slug?: StringFilter;
  thumb?: StringFilter;
  type?: StringFilter;
  thumbWide?: StringNullableFilter;
  altName?: JsonNullableFilter;
  isHentai?: BoolFilter;
  released?: DateTimeFilter;
  rating?: FloatFilter;
  views?: IntFilter;
  viewsHourly?: IntFilter;
  viewsDaily?: IntFilter;
  viewsWeek?: IntFilter;
  description?: StringNullableFilter;
  status?: StringNullableFilter;
  age?: StringNullableFilter;
  concept?: StringNullableFilter;
  lastChapterUpdateAt?: DateTimeFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  authorId?: IntFilter;
}

export interface ComicCreateWithoutGenresInput {
  name: string;
  slug: string;
  thumb: string;
  type: string;
  thumbWide?: string;
  altName?: string;
  isHentai?: boolean;
  released?: undefined;
  author: AuthorCreateNestedOneWithoutComicsInput;
  rating?: number;
  views?: number;
  viewsHourly?: number;
  viewsDaily?: number;
  viewsWeek?: number;
  description?: string;
  status?: string;
  age?: string;
  concept?: string;
  lastChapterUpdateAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  chapters?: ChapterCreateNestedManyWithoutComicInput;
  userbookmarks?: ComicBookmarkCreateNestedManyWithoutComicInput;
}

export interface ComicUncheckedCreateWithoutGenresInput {
  id?: number;
  name: string;
  slug: string;
  thumb: string;
  type: string;
  thumbWide?: string;
  altName?: string;
  isHentai?: boolean;
  released?: undefined;
  rating?: number;
  views?: number;
  viewsHourly?: number;
  viewsDaily?: number;
  viewsWeek?: number;
  description?: string;
  status?: string;
  age?: string;
  concept?: string;
  lastChapterUpdateAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  authorId: number;
  chapters?: ChapterUncheckedCreateNestedManyWithoutComicInput;
  userbookmarks?: ComicBookmarkUncheckedCreateNestedManyWithoutComicInput;
}

export interface ComicCreateOrConnectWithoutGenresInput {
  where: ComicWhereUniqueInput;
  create: ComicUncheckedCreateWithoutGenresInput;
}

export interface ComicUpsertWithWhereUniqueWithoutGenresInput {
  where: ComicWhereUniqueInput;
  update: ComicUncheckedUpdateWithoutGenresInput;
  create: ComicUncheckedCreateWithoutGenresInput;
}

export interface ComicUpdateWithWhereUniqueWithoutGenresInput {
  where: ComicWhereUniqueInput;
  data: ComicUncheckedUpdateWithoutGenresInput;
}

export interface ComicUpdateManyWithWhereWithoutGenresInput {
  where: ComicScalarWhereInput;
  data: ComicUncheckedUpdateManyWithoutComicsInput;
}

export interface AuthorCreateWithoutComicsInput {
  name: string;
  slug: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface AuthorUncheckedCreateWithoutComicsInput {
  id?: number;
  name: string;
  slug: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface AuthorCreateOrConnectWithoutComicsInput {
  where: AuthorWhereUniqueInput;
  create: AuthorUncheckedCreateWithoutComicsInput;
}

export interface ChapterCreateWithoutComicInput {
  name: number;
  title?: string;
  quality?: ChapterQuality;
  views?: number;
  imageCount?: number;
  originalImageCount?: number;
  processed?: boolean;
  batchs?: string;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  chapterbookmarks?: ChapterBookmarkCreateNestedManyWithoutChapterInput;
}

export interface ChapterUncheckedCreateWithoutComicInput {
  id?: number;
  name: number;
  title?: string;
  quality?: ChapterQuality;
  views?: number;
  imageCount?: number;
  originalImageCount?: number;
  processed?: boolean;
  batchs?: string;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  chapterbookmarks?: ChapterBookmarkUncheckedCreateNestedManyWithoutChapterInput;
}

export interface ChapterCreateOrConnectWithoutComicInput {
  where: ChapterWhereUniqueInput;
  create: ChapterUncheckedCreateWithoutComicInput;
}

export interface ChapterCreateManyComicInputEnvelope {
  data: ChapterCreateManyComicInput;
  skipDuplicates?: boolean;
}

export interface GenreCreateWithoutComicsInput {
  name: string;
  slug: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface GenreUncheckedCreateWithoutComicsInput {
  id?: number;
  name: string;
  slug: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface GenreCreateOrConnectWithoutComicsInput {
  where: GenreWhereUniqueInput;
  create: GenreUncheckedCreateWithoutComicsInput;
}

export interface ComicBookmarkCreateWithoutComicInput {
  users: UserCreateNestedOneWithoutComicbookmarksInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ComicBookmarkUncheckedCreateWithoutComicInput {
  id?: number;
  userId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ComicBookmarkCreateOrConnectWithoutComicInput {
  where: ComicBookmarkWhereUniqueInput;
  create: ComicBookmarkUncheckedCreateWithoutComicInput;
}

export interface ComicBookmarkCreateManyComicInputEnvelope {
  data: ComicBookmarkCreateManyComicInput;
  skipDuplicates?: boolean;
}

export interface AuthorUpsertWithoutComicsInput {
  update: AuthorUncheckedUpdateWithoutComicsInput;
  create: AuthorUncheckedCreateWithoutComicsInput;
}

export interface AuthorUpdateWithoutComicsInput {
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface AuthorUncheckedUpdateWithoutComicsInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ChapterUpsertWithWhereUniqueWithoutComicInput {
  where: ChapterWhereUniqueInput;
  update: ChapterUncheckedUpdateWithoutComicInput;
  create: ChapterUncheckedCreateWithoutComicInput;
}

export interface ChapterUpdateWithWhereUniqueWithoutComicInput {
  where: ChapterWhereUniqueInput;
  data: ChapterUncheckedUpdateWithoutComicInput;
}

export interface ChapterUpdateManyWithWhereWithoutComicInput {
  where: ChapterScalarWhereInput;
  data: ChapterUncheckedUpdateManyWithoutChaptersInput;
}

export interface ChapterScalarWhereInput {
  AND?: ChapterScalarWhereInput[];
  OR?: ChapterScalarWhereInput[];
  NOT?: ChapterScalarWhereInput[];
  id?: IntFilter;
  name?: FloatFilter;
  title?: StringNullableFilter;
  quality?: EnumChapterQualityFilter;
  views?: IntFilter;
  imageCount?: IntFilter;
  originalImageCount?: IntFilter;
  processed?: BoolFilter;
  batchs?: StringNullableFilter;
  imageUrls?: StringNullableListFilter;
  imageDetails?: JsonNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  comicId?: IntFilter;
}

export interface GenreUpsertWithWhereUniqueWithoutComicsInput {
  where: GenreWhereUniqueInput;
  update: GenreUncheckedUpdateWithoutComicsInput;
  create: GenreUncheckedCreateWithoutComicsInput;
}

export interface GenreUpdateWithWhereUniqueWithoutComicsInput {
  where: GenreWhereUniqueInput;
  data: GenreUncheckedUpdateWithoutComicsInput;
}

export interface GenreUpdateManyWithWhereWithoutComicsInput {
  where: GenreScalarWhereInput;
  data: GenreUncheckedUpdateManyWithoutGenresInput;
}

export interface GenreScalarWhereInput {
  AND?: GenreScalarWhereInput[];
  OR?: GenreScalarWhereInput[];
  NOT?: GenreScalarWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  slug?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ComicBookmarkUpsertWithWhereUniqueWithoutComicInput {
  where: ComicBookmarkWhereUniqueInput;
  update: ComicBookmarkUncheckedUpdateWithoutComicInput;
  create: ComicBookmarkUncheckedCreateWithoutComicInput;
}

export interface ComicBookmarkUpdateWithWhereUniqueWithoutComicInput {
  where: ComicBookmarkWhereUniqueInput;
  data: ComicBookmarkUncheckedUpdateWithoutComicInput;
}

export interface ComicBookmarkUpdateManyWithWhereWithoutComicInput {
  where: ComicBookmarkScalarWhereInput;
  data: ComicBookmarkUncheckedUpdateManyWithoutUserbookmarksInput;
}

export interface ComicCreateWithoutChaptersInput {
  name: string;
  slug: string;
  thumb: string;
  type: string;
  thumbWide?: string;
  altName?: string;
  isHentai?: boolean;
  released?: undefined;
  author: AuthorCreateNestedOneWithoutComicsInput;
  rating?: number;
  views?: number;
  viewsHourly?: number;
  viewsDaily?: number;
  viewsWeek?: number;
  description?: string;
  status?: string;
  age?: string;
  concept?: string;
  lastChapterUpdateAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  genres?: GenreCreateNestedManyWithoutComicsInput;
  userbookmarks?: ComicBookmarkCreateNestedManyWithoutComicInput;
}

export interface ComicUncheckedCreateWithoutChaptersInput {
  id?: number;
  name: string;
  slug: string;
  thumb: string;
  type: string;
  thumbWide?: string;
  altName?: string;
  isHentai?: boolean;
  released?: undefined;
  rating?: number;
  views?: number;
  viewsHourly?: number;
  viewsDaily?: number;
  viewsWeek?: number;
  description?: string;
  status?: string;
  age?: string;
  concept?: string;
  lastChapterUpdateAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  authorId: number;
  genres?: GenreUncheckedCreateNestedManyWithoutComicsInput;
  userbookmarks?: ComicBookmarkUncheckedCreateNestedManyWithoutComicInput;
}

export interface ComicCreateOrConnectWithoutChaptersInput {
  where: ComicWhereUniqueInput;
  create: ComicUncheckedCreateWithoutChaptersInput;
}

export interface ChapterBookmarkCreateWithoutChapterInput {
  users: UserCreateNestedOneWithoutChapterbookmarksInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChapterBookmarkUncheckedCreateWithoutChapterInput {
  id?: number;
  userId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChapterBookmarkCreateOrConnectWithoutChapterInput {
  where: ChapterBookmarkWhereUniqueInput;
  create: ChapterBookmarkUncheckedCreateWithoutChapterInput;
}

export interface ChapterBookmarkCreateManyChapterInputEnvelope {
  data: ChapterBookmarkCreateManyChapterInput;
  skipDuplicates?: boolean;
}

export interface ComicUpsertWithoutChaptersInput {
  update: ComicUncheckedUpdateWithoutChaptersInput;
  create: ComicUncheckedCreateWithoutChaptersInput;
}

export interface ComicUpdateWithoutChaptersInput {
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  thumb?: StringFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  thumbWide?: NullableStringFieldUpdateOperationsInput;
  altName?: string;
  isHentai?: BoolFieldUpdateOperationsInput;
  released?: DateTimeFieldUpdateOperationsInput;
  author?: AuthorUpdateOneRequiredWithoutComicsInput;
  rating?: FloatFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  viewsHourly?: IntFieldUpdateOperationsInput;
  viewsDaily?: IntFieldUpdateOperationsInput;
  viewsWeek?: IntFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  status?: NullableStringFieldUpdateOperationsInput;
  age?: NullableStringFieldUpdateOperationsInput;
  concept?: NullableStringFieldUpdateOperationsInput;
  lastChapterUpdateAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  genres?: GenreUpdateManyWithoutComicsInput;
  userbookmarks?: ComicBookmarkUpdateManyWithoutComicInput;
}

export interface ComicUncheckedUpdateWithoutChaptersInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  thumb?: StringFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  thumbWide?: NullableStringFieldUpdateOperationsInput;
  altName?: string;
  isHentai?: BoolFieldUpdateOperationsInput;
  released?: DateTimeFieldUpdateOperationsInput;
  rating?: FloatFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  viewsHourly?: IntFieldUpdateOperationsInput;
  viewsDaily?: IntFieldUpdateOperationsInput;
  viewsWeek?: IntFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  status?: NullableStringFieldUpdateOperationsInput;
  age?: NullableStringFieldUpdateOperationsInput;
  concept?: NullableStringFieldUpdateOperationsInput;
  lastChapterUpdateAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  authorId?: IntFieldUpdateOperationsInput;
  genres?: GenreUncheckedUpdateManyWithoutComicsInput;
  userbookmarks?: ComicBookmarkUncheckedUpdateManyWithoutComicInput;
}

export interface ChapterBookmarkUpsertWithWhereUniqueWithoutChapterInput {
  where: ChapterBookmarkWhereUniqueInput;
  update: ChapterBookmarkUncheckedUpdateWithoutChapterInput;
  create: ChapterBookmarkUncheckedCreateWithoutChapterInput;
}

export interface ChapterBookmarkUpdateWithWhereUniqueWithoutChapterInput {
  where: ChapterBookmarkWhereUniqueInput;
  data: ChapterBookmarkUncheckedUpdateWithoutChapterInput;
}

export interface ChapterBookmarkUpdateManyWithWhereWithoutChapterInput {
  where: ChapterBookmarkScalarWhereInput;
  data: ChapterBookmarkUncheckedUpdateManyWithoutChapterbookmarksInput;
}

export interface UserCreateWithoutReportsInput {
  email: string;
  name?: string;
  isAdmin?: boolean;
  allowHentai?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  comicbookmarks?: ComicBookmarkCreateNestedManyWithoutUsersInput;
  chapterbookmarks?: ChapterBookmarkCreateNestedManyWithoutUsersInput;
}

export interface UserUncheckedCreateWithoutReportsInput {
  id?: number;
  email: string;
  name?: string;
  isAdmin?: boolean;
  allowHentai?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  comicbookmarks?: ComicBookmarkUncheckedCreateNestedManyWithoutUsersInput;
  chapterbookmarks?: ChapterBookmarkUncheckedCreateNestedManyWithoutUsersInput;
}

export interface UserCreateOrConnectWithoutReportsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutReportsInput;
}

export interface UserUpsertWithoutReportsInput {
  update: UserUncheckedUpdateWithoutReportsInput;
  create: UserUncheckedCreateWithoutReportsInput;
}

export interface UserUpdateWithoutReportsInput {
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  allowHentai?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  comicbookmarks?: ComicBookmarkUpdateManyWithoutUsersInput;
  chapterbookmarks?: ChapterBookmarkUpdateManyWithoutUsersInput;
}

export interface UserUncheckedUpdateWithoutReportsInput {
  id?: IntFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  allowHentai?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  comicbookmarks?: ComicBookmarkUncheckedUpdateManyWithoutUsersInput;
  chapterbookmarks?: ChapterBookmarkUncheckedUpdateManyWithoutUsersInput;
}

export interface ComicCreateWithoutUserbookmarksInput {
  name: string;
  slug: string;
  thumb: string;
  type: string;
  thumbWide?: string;
  altName?: string;
  isHentai?: boolean;
  released?: undefined;
  author: AuthorCreateNestedOneWithoutComicsInput;
  rating?: number;
  views?: number;
  viewsHourly?: number;
  viewsDaily?: number;
  viewsWeek?: number;
  description?: string;
  status?: string;
  age?: string;
  concept?: string;
  lastChapterUpdateAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  chapters?: ChapterCreateNestedManyWithoutComicInput;
  genres?: GenreCreateNestedManyWithoutComicsInput;
}

export interface ComicUncheckedCreateWithoutUserbookmarksInput {
  id?: number;
  name: string;
  slug: string;
  thumb: string;
  type: string;
  thumbWide?: string;
  altName?: string;
  isHentai?: boolean;
  released?: undefined;
  rating?: number;
  views?: number;
  viewsHourly?: number;
  viewsDaily?: number;
  viewsWeek?: number;
  description?: string;
  status?: string;
  age?: string;
  concept?: string;
  lastChapterUpdateAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  authorId: number;
  chapters?: ChapterUncheckedCreateNestedManyWithoutComicInput;
  genres?: GenreUncheckedCreateNestedManyWithoutComicsInput;
}

export interface ComicCreateOrConnectWithoutUserbookmarksInput {
  where: ComicWhereUniqueInput;
  create: ComicUncheckedCreateWithoutUserbookmarksInput;
}

export interface UserCreateWithoutComicbookmarksInput {
  email: string;
  name?: string;
  isAdmin?: boolean;
  allowHentai?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  reports?: ReportCreateNestedManyWithoutUserInput;
  chapterbookmarks?: ChapterBookmarkCreateNestedManyWithoutUsersInput;
}

export interface UserUncheckedCreateWithoutComicbookmarksInput {
  id?: number;
  email: string;
  name?: string;
  isAdmin?: boolean;
  allowHentai?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  reports?: ReportUncheckedCreateNestedManyWithoutUserInput;
  chapterbookmarks?: ChapterBookmarkUncheckedCreateNestedManyWithoutUsersInput;
}

export interface UserCreateOrConnectWithoutComicbookmarksInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutComicbookmarksInput;
}

export interface ComicUpsertWithoutUserbookmarksInput {
  update: ComicUncheckedUpdateWithoutUserbookmarksInput;
  create: ComicUncheckedCreateWithoutUserbookmarksInput;
}

export interface ComicUpdateWithoutUserbookmarksInput {
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  thumb?: StringFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  thumbWide?: NullableStringFieldUpdateOperationsInput;
  altName?: string;
  isHentai?: BoolFieldUpdateOperationsInput;
  released?: DateTimeFieldUpdateOperationsInput;
  author?: AuthorUpdateOneRequiredWithoutComicsInput;
  rating?: FloatFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  viewsHourly?: IntFieldUpdateOperationsInput;
  viewsDaily?: IntFieldUpdateOperationsInput;
  viewsWeek?: IntFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  status?: NullableStringFieldUpdateOperationsInput;
  age?: NullableStringFieldUpdateOperationsInput;
  concept?: NullableStringFieldUpdateOperationsInput;
  lastChapterUpdateAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chapters?: ChapterUpdateManyWithoutComicInput;
  genres?: GenreUpdateManyWithoutComicsInput;
}

export interface ComicUncheckedUpdateWithoutUserbookmarksInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  thumb?: StringFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  thumbWide?: NullableStringFieldUpdateOperationsInput;
  altName?: string;
  isHentai?: BoolFieldUpdateOperationsInput;
  released?: DateTimeFieldUpdateOperationsInput;
  rating?: FloatFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  viewsHourly?: IntFieldUpdateOperationsInput;
  viewsDaily?: IntFieldUpdateOperationsInput;
  viewsWeek?: IntFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  status?: NullableStringFieldUpdateOperationsInput;
  age?: NullableStringFieldUpdateOperationsInput;
  concept?: NullableStringFieldUpdateOperationsInput;
  lastChapterUpdateAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  authorId?: IntFieldUpdateOperationsInput;
  chapters?: ChapterUncheckedUpdateManyWithoutComicInput;
  genres?: GenreUncheckedUpdateManyWithoutComicsInput;
}

export interface UserUpsertWithoutComicbookmarksInput {
  update: UserUncheckedUpdateWithoutComicbookmarksInput;
  create: UserUncheckedCreateWithoutComicbookmarksInput;
}

export interface UserUpdateWithoutComicbookmarksInput {
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  allowHentai?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  reports?: ReportUpdateManyWithoutUserInput;
  chapterbookmarks?: ChapterBookmarkUpdateManyWithoutUsersInput;
}

export interface UserUncheckedUpdateWithoutComicbookmarksInput {
  id?: IntFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  allowHentai?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  reports?: ReportUncheckedUpdateManyWithoutUserInput;
  chapterbookmarks?: ChapterBookmarkUncheckedUpdateManyWithoutUsersInput;
}

export interface ChapterCreateWithoutChapterbookmarksInput {
  name: number;
  title?: string;
  comic: ComicCreateNestedOneWithoutChaptersInput;
  quality?: ChapterQuality;
  views?: number;
  imageCount?: number;
  originalImageCount?: number;
  processed?: boolean;
  batchs?: string;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChapterUncheckedCreateWithoutChapterbookmarksInput {
  id?: number;
  name: number;
  title?: string;
  quality?: ChapterQuality;
  views?: number;
  imageCount?: number;
  originalImageCount?: number;
  processed?: boolean;
  batchs?: string;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  comicId: number;
}

export interface ChapterCreateOrConnectWithoutChapterbookmarksInput {
  where: ChapterWhereUniqueInput;
  create: ChapterUncheckedCreateWithoutChapterbookmarksInput;
}

export interface UserCreateWithoutChapterbookmarksInput {
  email: string;
  name?: string;
  isAdmin?: boolean;
  allowHentai?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  reports?: ReportCreateNestedManyWithoutUserInput;
  comicbookmarks?: ComicBookmarkCreateNestedManyWithoutUsersInput;
}

export interface UserUncheckedCreateWithoutChapterbookmarksInput {
  id?: number;
  email: string;
  name?: string;
  isAdmin?: boolean;
  allowHentai?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  reports?: ReportUncheckedCreateNestedManyWithoutUserInput;
  comicbookmarks?: ComicBookmarkUncheckedCreateNestedManyWithoutUsersInput;
}

export interface UserCreateOrConnectWithoutChapterbookmarksInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutChapterbookmarksInput;
}

export interface ChapterUpsertWithoutChapterbookmarksInput {
  update: ChapterUncheckedUpdateWithoutChapterbookmarksInput;
  create: ChapterUncheckedCreateWithoutChapterbookmarksInput;
}

export interface ChapterUpdateWithoutChapterbookmarksInput {
  name?: FloatFieldUpdateOperationsInput;
  title?: NullableStringFieldUpdateOperationsInput;
  comic?: ComicUpdateOneRequiredWithoutChaptersInput;
  quality?: EnumChapterQualityFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  imageCount?: IntFieldUpdateOperationsInput;
  originalImageCount?: IntFieldUpdateOperationsInput;
  processed?: BoolFieldUpdateOperationsInput;
  batchs?: NullableStringFieldUpdateOperationsInput;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ChapterUncheckedUpdateWithoutChapterbookmarksInput {
  id?: IntFieldUpdateOperationsInput;
  name?: FloatFieldUpdateOperationsInput;
  title?: NullableStringFieldUpdateOperationsInput;
  quality?: EnumChapterQualityFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  imageCount?: IntFieldUpdateOperationsInput;
  originalImageCount?: IntFieldUpdateOperationsInput;
  processed?: BoolFieldUpdateOperationsInput;
  batchs?: NullableStringFieldUpdateOperationsInput;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  comicId?: IntFieldUpdateOperationsInput;
}

export interface UserUpsertWithoutChapterbookmarksInput {
  update: UserUncheckedUpdateWithoutChapterbookmarksInput;
  create: UserUncheckedCreateWithoutChapterbookmarksInput;
}

export interface UserUpdateWithoutChapterbookmarksInput {
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  allowHentai?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  reports?: ReportUpdateManyWithoutUserInput;
  comicbookmarks?: ComicBookmarkUpdateManyWithoutUsersInput;
}

export interface UserUncheckedUpdateWithoutChapterbookmarksInput {
  id?: IntFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  allowHentai?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  reports?: ReportUncheckedUpdateManyWithoutUserInput;
  comicbookmarks?: ComicBookmarkUncheckedUpdateManyWithoutUsersInput;
}

export interface ReportCreateManyUserInput {
  id?: number;
  name: string;
  message?: string;
  contextIdentifier: string;
  contextType: string;
  resolved?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ComicBookmarkCreateManyUsersInput {
  id?: number;
  comicId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChapterBookmarkCreateManyUsersInput {
  id?: number;
  chapterId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ReportUpdateWithoutUserInput {
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  contextIdentifier?: StringFieldUpdateOperationsInput;
  contextType?: StringFieldUpdateOperationsInput;
  resolved?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ReportUncheckedUpdateWithoutUserInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  contextIdentifier?: StringFieldUpdateOperationsInput;
  contextType?: StringFieldUpdateOperationsInput;
  resolved?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ReportUncheckedUpdateManyWithoutReportsInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  contextIdentifier?: StringFieldUpdateOperationsInput;
  contextType?: StringFieldUpdateOperationsInput;
  resolved?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ComicBookmarkUpdateWithoutUsersInput {
  comic?: ComicUpdateOneRequiredWithoutUserbookmarksInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ComicBookmarkUncheckedUpdateWithoutUsersInput {
  id?: IntFieldUpdateOperationsInput;
  comicId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ComicBookmarkUncheckedUpdateManyWithoutComicbookmarksInput {
  id?: IntFieldUpdateOperationsInput;
  comicId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ChapterBookmarkUpdateWithoutUsersInput {
  chapter?: ChapterUpdateOneRequiredWithoutChapterbookmarksInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ChapterBookmarkUncheckedUpdateWithoutUsersInput {
  id?: IntFieldUpdateOperationsInput;
  chapterId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ChapterBookmarkUncheckedUpdateManyWithoutChapterbookmarksInput {
  id?: IntFieldUpdateOperationsInput;
  chapterId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ComicCreateManyAuthorInput {
  id?: number;
  name: string;
  slug: string;
  thumb: string;
  type: string;
  thumbWide?: string;
  altName?: string;
  isHentai?: boolean;
  released?: undefined;
  rating?: number;
  views?: number;
  viewsHourly?: number;
  viewsDaily?: number;
  viewsWeek?: number;
  description?: string;
  status?: string;
  age?: string;
  concept?: string;
  lastChapterUpdateAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ComicUpdateWithoutAuthorInput {
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  thumb?: StringFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  thumbWide?: NullableStringFieldUpdateOperationsInput;
  altName?: string;
  isHentai?: BoolFieldUpdateOperationsInput;
  released?: DateTimeFieldUpdateOperationsInput;
  rating?: FloatFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  viewsHourly?: IntFieldUpdateOperationsInput;
  viewsDaily?: IntFieldUpdateOperationsInput;
  viewsWeek?: IntFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  status?: NullableStringFieldUpdateOperationsInput;
  age?: NullableStringFieldUpdateOperationsInput;
  concept?: NullableStringFieldUpdateOperationsInput;
  lastChapterUpdateAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chapters?: ChapterUpdateManyWithoutComicInput;
  genres?: GenreUpdateManyWithoutComicsInput;
  userbookmarks?: ComicBookmarkUpdateManyWithoutComicInput;
}

export interface ComicUncheckedUpdateWithoutAuthorInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  thumb?: StringFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  thumbWide?: NullableStringFieldUpdateOperationsInput;
  altName?: string;
  isHentai?: BoolFieldUpdateOperationsInput;
  released?: DateTimeFieldUpdateOperationsInput;
  rating?: FloatFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  viewsHourly?: IntFieldUpdateOperationsInput;
  viewsDaily?: IntFieldUpdateOperationsInput;
  viewsWeek?: IntFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  status?: NullableStringFieldUpdateOperationsInput;
  age?: NullableStringFieldUpdateOperationsInput;
  concept?: NullableStringFieldUpdateOperationsInput;
  lastChapterUpdateAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chapters?: ChapterUncheckedUpdateManyWithoutComicInput;
  genres?: GenreUncheckedUpdateManyWithoutComicsInput;
  userbookmarks?: ComicBookmarkUncheckedUpdateManyWithoutComicInput;
}

export interface ComicUncheckedUpdateManyWithoutComicsInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  thumb?: StringFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  thumbWide?: NullableStringFieldUpdateOperationsInput;
  altName?: string;
  isHentai?: BoolFieldUpdateOperationsInput;
  released?: DateTimeFieldUpdateOperationsInput;
  rating?: FloatFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  viewsHourly?: IntFieldUpdateOperationsInput;
  viewsDaily?: IntFieldUpdateOperationsInput;
  viewsWeek?: IntFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  status?: NullableStringFieldUpdateOperationsInput;
  age?: NullableStringFieldUpdateOperationsInput;
  concept?: NullableStringFieldUpdateOperationsInput;
  lastChapterUpdateAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ComicUpdateWithoutGenresInput {
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  thumb?: StringFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  thumbWide?: NullableStringFieldUpdateOperationsInput;
  altName?: string;
  isHentai?: BoolFieldUpdateOperationsInput;
  released?: DateTimeFieldUpdateOperationsInput;
  author?: AuthorUpdateOneRequiredWithoutComicsInput;
  rating?: FloatFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  viewsHourly?: IntFieldUpdateOperationsInput;
  viewsDaily?: IntFieldUpdateOperationsInput;
  viewsWeek?: IntFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  status?: NullableStringFieldUpdateOperationsInput;
  age?: NullableStringFieldUpdateOperationsInput;
  concept?: NullableStringFieldUpdateOperationsInput;
  lastChapterUpdateAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chapters?: ChapterUpdateManyWithoutComicInput;
  userbookmarks?: ComicBookmarkUpdateManyWithoutComicInput;
}

export interface ComicUncheckedUpdateWithoutGenresInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  thumb?: StringFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  thumbWide?: NullableStringFieldUpdateOperationsInput;
  altName?: string;
  isHentai?: BoolFieldUpdateOperationsInput;
  released?: DateTimeFieldUpdateOperationsInput;
  rating?: FloatFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  viewsHourly?: IntFieldUpdateOperationsInput;
  viewsDaily?: IntFieldUpdateOperationsInput;
  viewsWeek?: IntFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  status?: NullableStringFieldUpdateOperationsInput;
  age?: NullableStringFieldUpdateOperationsInput;
  concept?: NullableStringFieldUpdateOperationsInput;
  lastChapterUpdateAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  authorId?: IntFieldUpdateOperationsInput;
  chapters?: ChapterUncheckedUpdateManyWithoutComicInput;
  userbookmarks?: ComicBookmarkUncheckedUpdateManyWithoutComicInput;
}

export interface ChapterCreateManyComicInput {
  id?: number;
  name: number;
  title?: string;
  quality?: ChapterQuality;
  views?: number;
  imageCount?: number;
  originalImageCount?: number;
  processed?: boolean;
  batchs?: string;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ComicBookmarkCreateManyComicInput {
  id?: number;
  userId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChapterUpdateWithoutComicInput {
  name?: FloatFieldUpdateOperationsInput;
  title?: NullableStringFieldUpdateOperationsInput;
  quality?: EnumChapterQualityFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  imageCount?: IntFieldUpdateOperationsInput;
  originalImageCount?: IntFieldUpdateOperationsInput;
  processed?: BoolFieldUpdateOperationsInput;
  batchs?: NullableStringFieldUpdateOperationsInput;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chapterbookmarks?: ChapterBookmarkUpdateManyWithoutChapterInput;
}

export interface ChapterUncheckedUpdateWithoutComicInput {
  id?: IntFieldUpdateOperationsInput;
  name?: FloatFieldUpdateOperationsInput;
  title?: NullableStringFieldUpdateOperationsInput;
  quality?: EnumChapterQualityFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  imageCount?: IntFieldUpdateOperationsInput;
  originalImageCount?: IntFieldUpdateOperationsInput;
  processed?: BoolFieldUpdateOperationsInput;
  batchs?: NullableStringFieldUpdateOperationsInput;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chapterbookmarks?: ChapterBookmarkUncheckedUpdateManyWithoutChapterInput;
}

export interface ChapterUncheckedUpdateManyWithoutChaptersInput {
  id?: IntFieldUpdateOperationsInput;
  name?: FloatFieldUpdateOperationsInput;
  title?: NullableStringFieldUpdateOperationsInput;
  quality?: EnumChapterQualityFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  imageCount?: IntFieldUpdateOperationsInput;
  originalImageCount?: IntFieldUpdateOperationsInput;
  processed?: BoolFieldUpdateOperationsInput;
  batchs?: NullableStringFieldUpdateOperationsInput;
  imageUrls?: string[];
  imageDetails?: string;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface GenreUpdateWithoutComicsInput {
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface GenreUncheckedUpdateWithoutComicsInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface GenreUncheckedUpdateManyWithoutGenresInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ComicBookmarkUpdateWithoutComicInput {
  users?: UserUpdateOneRequiredWithoutComicbookmarksInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ComicBookmarkUncheckedUpdateWithoutComicInput {
  id?: IntFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ComicBookmarkUncheckedUpdateManyWithoutUserbookmarksInput {
  id?: IntFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ChapterBookmarkCreateManyChapterInput {
  id?: number;
  userId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChapterBookmarkUpdateWithoutChapterInput {
  users?: UserUpdateOneRequiredWithoutChapterbookmarksInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ChapterBookmarkUncheckedUpdateWithoutChapterInput {
  id?: IntFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface AggregateUser {
  _count: Maybe<UserCountAggregateOutputType>;
  _avg: Maybe<UserAvgAggregateOutputType>;
  _sum: Maybe<UserSumAggregateOutputType>;
  _min: Maybe<UserMinAggregateOutputType>;
  _max: Maybe<UserMaxAggregateOutputType>;
}

export interface AggregateAuthor {
  _count: Maybe<AuthorCountAggregateOutputType>;
  _avg: Maybe<AuthorAvgAggregateOutputType>;
  _sum: Maybe<AuthorSumAggregateOutputType>;
  _min: Maybe<AuthorMinAggregateOutputType>;
  _max: Maybe<AuthorMaxAggregateOutputType>;
}

export interface AggregateGenre {
  _count: Maybe<GenreCountAggregateOutputType>;
  _avg: Maybe<GenreAvgAggregateOutputType>;
  _sum: Maybe<GenreSumAggregateOutputType>;
  _min: Maybe<GenreMinAggregateOutputType>;
  _max: Maybe<GenreMaxAggregateOutputType>;
}

export interface AggregateAds {
  _count: Maybe<AdsCountAggregateOutputType>;
  _avg: Maybe<AdsAvgAggregateOutputType>;
  _sum: Maybe<AdsSumAggregateOutputType>;
  _min: Maybe<AdsMinAggregateOutputType>;
  _max: Maybe<AdsMaxAggregateOutputType>;
}

export interface AggregatePerfomanceAnalytic {
  _count: Maybe<PerfomanceAnalyticCountAggregateOutputType>;
  _avg: Maybe<PerfomanceAnalyticAvgAggregateOutputType>;
  _sum: Maybe<PerfomanceAnalyticSumAggregateOutputType>;
  _min: Maybe<PerfomanceAnalyticMinAggregateOutputType>;
  _max: Maybe<PerfomanceAnalyticMaxAggregateOutputType>;
}

export interface AggregateComic {
  _count: Maybe<ComicCountAggregateOutputType>;
  _avg: Maybe<ComicAvgAggregateOutputType>;
  _sum: Maybe<ComicSumAggregateOutputType>;
  _min: Maybe<ComicMinAggregateOutputType>;
  _max: Maybe<ComicMaxAggregateOutputType>;
}

export interface AggregateChapter {
  _count: Maybe<ChapterCountAggregateOutputType>;
  _avg: Maybe<ChapterAvgAggregateOutputType>;
  _sum: Maybe<ChapterSumAggregateOutputType>;
  _min: Maybe<ChapterMinAggregateOutputType>;
  _max: Maybe<ChapterMaxAggregateOutputType>;
}

export interface AggregateMissing {
  _count: Maybe<MissingCountAggregateOutputType>;
  _avg: Maybe<MissingAvgAggregateOutputType>;
  _sum: Maybe<MissingSumAggregateOutputType>;
  _min: Maybe<MissingMinAggregateOutputType>;
  _max: Maybe<MissingMaxAggregateOutputType>;
}

export interface AggregateReport {
  _count: Maybe<ReportCountAggregateOutputType>;
  _avg: Maybe<ReportAvgAggregateOutputType>;
  _sum: Maybe<ReportSumAggregateOutputType>;
  _min: Maybe<ReportMinAggregateOutputType>;
  _max: Maybe<ReportMaxAggregateOutputType>;
}

export interface AggregateComicBookmark {
  _count: Maybe<ComicBookmarkCountAggregateOutputType>;
  _avg: Maybe<ComicBookmarkAvgAggregateOutputType>;
  _sum: Maybe<ComicBookmarkSumAggregateOutputType>;
  _min: Maybe<ComicBookmarkMinAggregateOutputType>;
  _max: Maybe<ComicBookmarkMaxAggregateOutputType>;
}

export interface AggregateChapterBookmark {
  _count: Maybe<ChapterBookmarkCountAggregateOutputType>;
  _avg: Maybe<ChapterBookmarkAvgAggregateOutputType>;
  _sum: Maybe<ChapterBookmarkSumAggregateOutputType>;
  _min: Maybe<ChapterBookmarkMinAggregateOutputType>;
  _max: Maybe<ChapterBookmarkMaxAggregateOutputType>;
}

export interface UserCountOutputType {
  reports: number;
  comicbookmarks: number;
  chapterbookmarks: number;
}

export interface UserCountAggregateOutputType {
  id: number;
  email: number;
  name: number;
  isAdmin: number;
  allowHentai: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface UserAvgAggregateOutputType {
  id: Maybe<number>;
}

export interface UserSumAggregateOutputType {
  id: Maybe<number>;
}

export interface UserMinAggregateOutputType {
  id: Maybe<number>;
  email: Maybe<string>;
  name: Maybe<string>;
  isAdmin: Maybe<boolean>;
  allowHentai: Maybe<boolean>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface UserMaxAggregateOutputType {
  id: Maybe<number>;
  email: Maybe<string>;
  name: Maybe<string>;
  isAdmin: Maybe<boolean>;
  allowHentai: Maybe<boolean>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface AuthorCountOutputType {
  comics: number;
}

export interface AuthorCountAggregateOutputType {
  id: number;
  name: number;
  slug: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface AuthorAvgAggregateOutputType {
  id: Maybe<number>;
}

export interface AuthorSumAggregateOutputType {
  id: Maybe<number>;
}

export interface AuthorMinAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  slug: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface AuthorMaxAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  slug: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface GenreCountOutputType {
  comics: number;
}

export interface GenreCountAggregateOutputType {
  id: number;
  name: number;
  slug: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface GenreAvgAggregateOutputType {
  id: Maybe<number>;
}

export interface GenreSumAggregateOutputType {
  id: Maybe<number>;
}

export interface GenreMinAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  slug: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface GenreMaxAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  slug: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface AdsCountAggregateOutputType {
  id: number;
  name: number;
  position: number;
  url: number;
  image: number;
  index: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface AdsAvgAggregateOutputType {
  id: Maybe<number>;
  index: Maybe<number>;
}

export interface AdsSumAggregateOutputType {
  id: Maybe<number>;
  index: Maybe<number>;
}

export interface AdsMinAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  url: Maybe<string>;
  image: Maybe<string>;
  index: Maybe<number>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface AdsMaxAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  url: Maybe<string>;
  image: Maybe<string>;
  index: Maybe<number>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface PerfomanceAnalyticCountAggregateOutputType {
  id: number;
  operationName: number;
  query: number;
  variables: number;
  time: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface PerfomanceAnalyticAvgAggregateOutputType {
  id: Maybe<number>;
  time: Maybe<number>;
}

export interface PerfomanceAnalyticSumAggregateOutputType {
  id: Maybe<number>;
  time: Maybe<number>;
}

export interface PerfomanceAnalyticMinAggregateOutputType {
  id: Maybe<number>;
  operationName: Maybe<string>;
  query: Maybe<string>;
  variables: Maybe<string>;
  time: Maybe<number>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface PerfomanceAnalyticMaxAggregateOutputType {
  id: Maybe<number>;
  operationName: Maybe<string>;
  query: Maybe<string>;
  variables: Maybe<string>;
  time: Maybe<number>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ComicCountOutputType {
  chapters: number;
  genres: number;
  userbookmarks: number;
}

export interface ComicCountAggregateOutputType {
  id: number;
  name: number;
  slug: number;
  thumb: number;
  type: number;
  thumbWide: number;
  altName: number;
  isHentai: number;
  released: number;
  rating: number;
  views: number;
  viewsHourly: number;
  viewsDaily: number;
  viewsWeek: number;
  description: number;
  status: number;
  age: number;
  concept: number;
  lastChapterUpdateAt: number;
  createdAt: number;
  updatedAt: number;
  authorId: number;
  _all: number;
}

export interface ComicAvgAggregateOutputType {
  id: Maybe<number>;
  rating: Maybe<number>;
  views: Maybe<number>;
  viewsHourly: Maybe<number>;
  viewsDaily: Maybe<number>;
  viewsWeek: Maybe<number>;
  authorId: Maybe<number>;
}

export interface ComicSumAggregateOutputType {
  id: Maybe<number>;
  rating: Maybe<number>;
  views: Maybe<number>;
  viewsHourly: Maybe<number>;
  viewsDaily: Maybe<number>;
  viewsWeek: Maybe<number>;
  authorId: Maybe<number>;
}

export interface ComicMinAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  slug: Maybe<string>;
  thumb: Maybe<string>;
  type: Maybe<string>;
  thumbWide: Maybe<string>;
  isHentai: Maybe<boolean>;
  released: Maybe<undefined>;
  rating: Maybe<number>;
  views: Maybe<number>;
  viewsHourly: Maybe<number>;
  viewsDaily: Maybe<number>;
  viewsWeek: Maybe<number>;
  description: Maybe<string>;
  status: Maybe<string>;
  age: Maybe<string>;
  concept: Maybe<string>;
  lastChapterUpdateAt: Maybe<undefined>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  authorId: Maybe<number>;
}

export interface ComicMaxAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  slug: Maybe<string>;
  thumb: Maybe<string>;
  type: Maybe<string>;
  thumbWide: Maybe<string>;
  isHentai: Maybe<boolean>;
  released: Maybe<undefined>;
  rating: Maybe<number>;
  views: Maybe<number>;
  viewsHourly: Maybe<number>;
  viewsDaily: Maybe<number>;
  viewsWeek: Maybe<number>;
  description: Maybe<string>;
  status: Maybe<string>;
  age: Maybe<string>;
  concept: Maybe<string>;
  lastChapterUpdateAt: Maybe<undefined>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  authorId: Maybe<number>;
}

export interface ChapterCountOutputType {
  chapterbookmarks: number;
}

export interface ChapterCountAggregateOutputType {
  id: number;
  name: number;
  title: number;
  quality: number;
  views: number;
  imageCount: number;
  originalImageCount: number;
  processed: number;
  batchs: number;
  imageUrls: number;
  imageDetails: number;
  createdAt: number;
  updatedAt: number;
  comicId: number;
  _all: number;
}

export interface ChapterAvgAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<number>;
  views: Maybe<number>;
  imageCount: Maybe<number>;
  originalImageCount: Maybe<number>;
  comicId: Maybe<number>;
}

export interface ChapterSumAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<number>;
  views: Maybe<number>;
  imageCount: Maybe<number>;
  originalImageCount: Maybe<number>;
  comicId: Maybe<number>;
}

export interface ChapterMinAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<number>;
  title: Maybe<string>;
  quality: Maybe<ChapterQuality>;
  views: Maybe<number>;
  imageCount: Maybe<number>;
  originalImageCount: Maybe<number>;
  processed: Maybe<boolean>;
  batchs: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  comicId: Maybe<number>;
}

export interface ChapterMaxAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<number>;
  title: Maybe<string>;
  quality: Maybe<ChapterQuality>;
  views: Maybe<number>;
  imageCount: Maybe<number>;
  originalImageCount: Maybe<number>;
  processed: Maybe<boolean>;
  batchs: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  comicId: Maybe<number>;
}

export interface MissingCountAggregateOutputType {
  id: number;
  data: number;
  context: number;
  resolved: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface MissingAvgAggregateOutputType {
  id: Maybe<number>;
}

export interface MissingSumAggregateOutputType {
  id: Maybe<number>;
}

export interface MissingMinAggregateOutputType {
  id: Maybe<number>;
  data: Maybe<string>;
  context: Maybe<string>;
  resolved: Maybe<boolean>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface MissingMaxAggregateOutputType {
  id: Maybe<number>;
  data: Maybe<string>;
  context: Maybe<string>;
  resolved: Maybe<boolean>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ReportCountAggregateOutputType {
  id: number;
  userId: number;
  name: number;
  message: number;
  contextIdentifier: number;
  contextType: number;
  resolved: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface ReportAvgAggregateOutputType {
  id: Maybe<number>;
  userId: Maybe<number>;
}

export interface ReportSumAggregateOutputType {
  id: Maybe<number>;
  userId: Maybe<number>;
}

export interface ReportMinAggregateOutputType {
  id: Maybe<number>;
  userId: Maybe<number>;
  name: Maybe<string>;
  message: Maybe<string>;
  contextIdentifier: Maybe<string>;
  contextType: Maybe<string>;
  resolved: Maybe<boolean>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ReportMaxAggregateOutputType {
  id: Maybe<number>;
  userId: Maybe<number>;
  name: Maybe<string>;
  message: Maybe<string>;
  contextIdentifier: Maybe<string>;
  contextType: Maybe<string>;
  resolved: Maybe<boolean>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ComicBookmarkCountAggregateOutputType {
  id: number;
  comicId: number;
  userId: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface ComicBookmarkAvgAggregateOutputType {
  id: Maybe<number>;
  comicId: Maybe<number>;
  userId: Maybe<number>;
}

export interface ComicBookmarkSumAggregateOutputType {
  id: Maybe<number>;
  comicId: Maybe<number>;
  userId: Maybe<number>;
}

export interface ComicBookmarkMinAggregateOutputType {
  id: Maybe<number>;
  comicId: Maybe<number>;
  userId: Maybe<number>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ComicBookmarkMaxAggregateOutputType {
  id: Maybe<number>;
  comicId: Maybe<number>;
  userId: Maybe<number>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ChapterBookmarkCountAggregateOutputType {
  id: number;
  chapterId: number;
  userId: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface ChapterBookmarkAvgAggregateOutputType {
  id: Maybe<number>;
  chapterId: Maybe<number>;
  userId: Maybe<number>;
}

export interface ChapterBookmarkSumAggregateOutputType {
  id: Maybe<number>;
  chapterId: Maybe<number>;
  userId: Maybe<number>;
}

export interface ChapterBookmarkMinAggregateOutputType {
  id: Maybe<number>;
  chapterId: Maybe<number>;
  userId: Maybe<number>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ChapterBookmarkMaxAggregateOutputType {
  id: Maybe<number>;
  chapterId: Maybe<number>;
  userId: Maybe<number>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface findUniquePerfomanceAnalyticArgs {
  where: PerfomanceAnalyticWhereUniqueInput;
}

export interface findFirstPerfomanceAnalyticArgs {
  where?: PerfomanceAnalyticWhereInput;
  orderBy?: PerfomanceAnalyticOrderByWithRelationInput[];
  cursor?: PerfomanceAnalyticWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: PerfomanceAnalyticScalarFieldEnum[];
}

export interface findManyPerfomanceAnalyticArgs {
  where?: PerfomanceAnalyticWhereInput;
  orderBy?: PerfomanceAnalyticOrderByWithRelationInput[];
  cursor?: PerfomanceAnalyticWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: PerfomanceAnalyticScalarFieldEnum[];
}

export interface findManyPerfomanceAnalyticCountArgs {
  where?: PerfomanceAnalyticWhereInput;
  orderBy?: PerfomanceAnalyticOrderByWithRelationInput[];
  cursor?: PerfomanceAnalyticWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: PerfomanceAnalyticScalarFieldEnum[];
}

export interface aggregatePerfomanceAnalyticArgs {
  where?: PerfomanceAnalyticWhereInput;
  orderBy?: PerfomanceAnalyticOrderByWithRelationInput[];
  cursor?: PerfomanceAnalyticWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueChapterBookmarkArgs {
  where: ChapterBookmarkWhereUniqueInput;
}

export interface findFirstChapterBookmarkArgs {
  where?: ChapterBookmarkWhereInput;
  orderBy?: ChapterBookmarkOrderByWithRelationInput[];
  cursor?: ChapterBookmarkWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ChapterBookmarkScalarFieldEnum[];
}

export interface findManyChapterBookmarkArgs {
  where?: ChapterBookmarkWhereInput;
  orderBy?: ChapterBookmarkOrderByWithRelationInput[];
  cursor?: ChapterBookmarkWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ChapterBookmarkScalarFieldEnum[];
}

export interface findManyChapterBookmarkCountArgs {
  where?: ChapterBookmarkWhereInput;
  orderBy?: ChapterBookmarkOrderByWithRelationInput[];
  cursor?: ChapterBookmarkWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ChapterBookmarkScalarFieldEnum[];
}

export interface aggregateChapterBookmarkArgs {
  where?: ChapterBookmarkWhereInput;
  orderBy?: ChapterBookmarkOrderByWithRelationInput[];
  cursor?: ChapterBookmarkWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueComicBookmarkArgs {
  where: ComicBookmarkWhereUniqueInput;
}

export interface findFirstComicBookmarkArgs {
  where?: ComicBookmarkWhereInput;
  orderBy?: ComicBookmarkOrderByWithRelationInput[];
  cursor?: ComicBookmarkWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ComicBookmarkScalarFieldEnum[];
}

export interface findManyComicBookmarkArgs {
  where?: ComicBookmarkWhereInput;
  orderBy?: ComicBookmarkOrderByWithRelationInput[];
  cursor?: ComicBookmarkWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ComicBookmarkScalarFieldEnum[];
}

export interface findManyComicBookmarkCountArgs {
  where?: ComicBookmarkWhereInput;
  orderBy?: ComicBookmarkOrderByWithRelationInput[];
  cursor?: ComicBookmarkWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ComicBookmarkScalarFieldEnum[];
}

export interface aggregateComicBookmarkArgs {
  where?: ComicBookmarkWhereInput;
  orderBy?: ComicBookmarkOrderByWithRelationInput[];
  cursor?: ComicBookmarkWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueReportArgs {
  where: ReportWhereUniqueInput;
}

export interface findFirstReportArgs {
  where?: ReportWhereInput;
  orderBy?: ReportOrderByWithRelationInput[];
  cursor?: ReportWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ReportScalarFieldEnum[];
}

export interface findManyReportArgs {
  where?: ReportWhereInput;
  orderBy?: ReportOrderByWithRelationInput[];
  cursor?: ReportWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ReportScalarFieldEnum[];
}

export interface findManyReportCountArgs {
  where?: ReportWhereInput;
  orderBy?: ReportOrderByWithRelationInput[];
  cursor?: ReportWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ReportScalarFieldEnum[];
}

export interface aggregateReportArgs {
  where?: ReportWhereInput;
  orderBy?: ReportOrderByWithRelationInput[];
  cursor?: ReportWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueMissingArgs {
  where: MissingWhereUniqueInput;
}

export interface findFirstMissingArgs {
  where?: MissingWhereInput;
  orderBy?: MissingOrderByWithRelationInput[];
  cursor?: MissingWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: MissingScalarFieldEnum[];
}

export interface findManyMissingArgs {
  where?: MissingWhereInput;
  orderBy?: MissingOrderByWithRelationInput[];
  cursor?: MissingWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: MissingScalarFieldEnum[];
}

export interface findManyMissingCountArgs {
  where?: MissingWhereInput;
  orderBy?: MissingOrderByWithRelationInput[];
  cursor?: MissingWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: MissingScalarFieldEnum[];
}

export interface aggregateMissingArgs {
  where?: MissingWhereInput;
  orderBy?: MissingOrderByWithRelationInput[];
  cursor?: MissingWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueChapterArgs {
  where: ChapterWhereUniqueInput;
}

export interface findFirstChapterArgs {
  where?: ChapterWhereInput;
  orderBy?: ChapterOrderByWithRelationInput[];
  cursor?: ChapterWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ChapterScalarFieldEnum[];
}

export interface findManyChapterArgs {
  where?: ChapterWhereInput;
  orderBy?: ChapterOrderByWithRelationInput[];
  cursor?: ChapterWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ChapterScalarFieldEnum[];
}

export interface findManyChapterCountArgs {
  where?: ChapterWhereInput;
  orderBy?: ChapterOrderByWithRelationInput[];
  cursor?: ChapterWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ChapterScalarFieldEnum[];
}

export interface aggregateChapterArgs {
  where?: ChapterWhereInput;
  orderBy?: ChapterOrderByWithRelationInput[];
  cursor?: ChapterWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueComicArgs {
  where: ComicWhereUniqueInput;
}

export interface findFirstComicArgs {
  where?: ComicWhereInput;
  orderBy?: ComicOrderByWithRelationInput[];
  cursor?: ComicWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ComicScalarFieldEnum[];
}

export interface findManyComicArgs {
  where?: ComicWhereInput;
  orderBy?: ComicOrderByWithRelationInput[];
  cursor?: ComicWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ComicScalarFieldEnum[];
}

export interface findManyComicCountArgs {
  where?: ComicWhereInput;
  orderBy?: ComicOrderByWithRelationInput[];
  cursor?: ComicWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ComicScalarFieldEnum[];
}

export interface aggregateComicArgs {
  where?: ComicWhereInput;
  orderBy?: ComicOrderByWithRelationInput[];
  cursor?: ComicWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueAdsArgs {
  where: AdsWhereUniqueInput;
}

export interface findFirstAdsArgs {
  where?: AdsWhereInput;
  orderBy?: AdsOrderByWithRelationInput[];
  cursor?: AdsWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: AdsScalarFieldEnum[];
}

export interface findManyAdsArgs {
  where?: AdsWhereInput;
  orderBy?: AdsOrderByWithRelationInput[];
  cursor?: AdsWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: AdsScalarFieldEnum[];
}

export interface findManyAdsCountArgs {
  where?: AdsWhereInput;
  orderBy?: AdsOrderByWithRelationInput[];
  cursor?: AdsWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: AdsScalarFieldEnum[];
}

export interface aggregateAdsArgs {
  where?: AdsWhereInput;
  orderBy?: AdsOrderByWithRelationInput[];
  cursor?: AdsWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueGenreArgs {
  where: GenreWhereUniqueInput;
}

export interface findFirstGenreArgs {
  where?: GenreWhereInput;
  orderBy?: GenreOrderByWithRelationInput[];
  cursor?: GenreWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: GenreScalarFieldEnum[];
}

export interface findManyGenreArgs {
  where?: GenreWhereInput;
  orderBy?: GenreOrderByWithRelationInput[];
  cursor?: GenreWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: GenreScalarFieldEnum[];
}

export interface findManyGenreCountArgs {
  where?: GenreWhereInput;
  orderBy?: GenreOrderByWithRelationInput[];
  cursor?: GenreWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: GenreScalarFieldEnum[];
}

export interface aggregateGenreArgs {
  where?: GenreWhereInput;
  orderBy?: GenreOrderByWithRelationInput[];
  cursor?: GenreWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueAuthorArgs {
  where: AuthorWhereUniqueInput;
}

export interface findFirstAuthorArgs {
  where?: AuthorWhereInput;
  orderBy?: AuthorOrderByWithRelationInput[];
  cursor?: AuthorWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: AuthorScalarFieldEnum[];
}

export interface findManyAuthorArgs {
  where?: AuthorWhereInput;
  orderBy?: AuthorOrderByWithRelationInput[];
  cursor?: AuthorWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: AuthorScalarFieldEnum[];
}

export interface findManyAuthorCountArgs {
  where?: AuthorWhereInput;
  orderBy?: AuthorOrderByWithRelationInput[];
  cursor?: AuthorWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: AuthorScalarFieldEnum[];
}

export interface aggregateAuthorArgs {
  where?: AuthorWhereInput;
  orderBy?: AuthorOrderByWithRelationInput[];
  cursor?: AuthorWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueUserArgs {
  where: UserWhereUniqueInput;
}

export interface findFirstUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface findManyUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface findManyUserCountArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface aggregateUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface testArgs {}

export interface comicSearchArgs {
  query: string;
  offset?: number;
  limit?: number;
  type?: string;
  /** @default false*/
  allowHentai?: boolean;
}

export interface genreSearchArgs {
  query: string;
  offset?: number;
  limit?: number;
}

export interface authorSearchArgs {
  query: string;
  offset?: number;
  limit?: number;
}

export interface createOnePerfomanceAnalyticArgs {
  data: PerfomanceAnalyticCreateInput;
}

export interface updateOnePerfomanceAnalyticArgs {
  data: PerfomanceAnalyticUpdateInput;
  where: PerfomanceAnalyticWhereUniqueInput;
}

export interface upsertOnePerfomanceAnalyticArgs {
  where: PerfomanceAnalyticWhereUniqueInput;
  create: PerfomanceAnalyticCreateInput;
  update: PerfomanceAnalyticUpdateInput;
}

export interface deleteOnePerfomanceAnalyticArgs {
  where: PerfomanceAnalyticWhereUniqueInput;
}

export interface updateManyPerfomanceAnalyticArgs {
  data: PerfomanceAnalyticUpdateManyMutationInput;
  where?: PerfomanceAnalyticWhereInput;
}

export interface deleteManyPerfomanceAnalyticArgs {
  where?: PerfomanceAnalyticWhereInput;
}

export interface createOneChapterBookmarkArgs {
  data: ChapterBookmarkCreateInput;
}

export interface updateOneChapterBookmarkArgs {
  data: ChapterBookmarkUpdateInput;
  where: ChapterBookmarkWhereUniqueInput;
}

export interface upsertOneChapterBookmarkArgs {
  where: ChapterBookmarkWhereUniqueInput;
  create: ChapterBookmarkCreateInput;
  update: ChapterBookmarkUpdateInput;
}

export interface deleteOneChapterBookmarkArgs {
  where: ChapterBookmarkWhereUniqueInput;
}

export interface updateManyChapterBookmarkArgs {
  data: ChapterBookmarkUpdateManyMutationInput;
  where?: ChapterBookmarkWhereInput;
}

export interface deleteManyChapterBookmarkArgs {
  where?: ChapterBookmarkWhereInput;
}

export interface createOneComicBookmarkArgs {
  data: ComicBookmarkCreateInput;
}

export interface updateOneComicBookmarkArgs {
  data: ComicBookmarkUpdateInput;
  where: ComicBookmarkWhereUniqueInput;
}

export interface upsertOneComicBookmarkArgs {
  where: ComicBookmarkWhereUniqueInput;
  create: ComicBookmarkCreateInput;
  update: ComicBookmarkUpdateInput;
}

export interface deleteOneComicBookmarkArgs {
  where: ComicBookmarkWhereUniqueInput;
}

export interface updateManyComicBookmarkArgs {
  data: ComicBookmarkUpdateManyMutationInput;
  where?: ComicBookmarkWhereInput;
}

export interface deleteManyComicBookmarkArgs {
  where?: ComicBookmarkWhereInput;
}

export interface createOneReportArgs {
  data: ReportCreateInput;
}

export interface updateOneReportArgs {
  data: ReportUpdateInput;
  where: ReportWhereUniqueInput;
}

export interface upsertOneReportArgs {
  where: ReportWhereUniqueInput;
  create: ReportCreateInput;
  update: ReportUpdateInput;
}

export interface deleteOneReportArgs {
  where: ReportWhereUniqueInput;
}

export interface updateManyReportArgs {
  data: ReportUpdateManyMutationInput;
  where?: ReportWhereInput;
}

export interface deleteManyReportArgs {
  where?: ReportWhereInput;
}

export interface createOneMissingArgs {
  data: MissingCreateInput;
}

export interface updateOneMissingArgs {
  data: MissingUpdateInput;
  where: MissingWhereUniqueInput;
}

export interface upsertOneMissingArgs {
  where: MissingWhereUniqueInput;
  create: MissingCreateInput;
  update: MissingUpdateInput;
}

export interface deleteOneMissingArgs {
  where: MissingWhereUniqueInput;
}

export interface updateManyMissingArgs {
  data: MissingUpdateManyMutationInput;
  where?: MissingWhereInput;
}

export interface deleteManyMissingArgs {
  where?: MissingWhereInput;
}

export interface createOneChapterArgs {
  data: ChapterCreateInput;
}

export interface updateOneChapterArgs {
  data: ChapterUpdateInput;
  where: ChapterWhereUniqueInput;
}

export interface upsertOneChapterArgs {
  where: ChapterWhereUniqueInput;
  create: ChapterCreateInput;
  update: ChapterUpdateInput;
}

export interface deleteOneChapterArgs {
  where: ChapterWhereUniqueInput;
}

export interface updateManyChapterArgs {
  data: ChapterUpdateManyMutationInput;
  where?: ChapterWhereInput;
}

export interface deleteManyChapterArgs {
  where?: ChapterWhereInput;
}

export interface createOneComicArgs {
  data: ComicCreateInput;
}

export interface updateOneComicArgs {
  data: ComicUpdateInput;
  where: ComicWhereUniqueInput;
}

export interface upsertOneComicArgs {
  where: ComicWhereUniqueInput;
  create: ComicCreateInput;
  update: ComicUpdateInput;
}

export interface deleteOneComicArgs {
  where: ComicWhereUniqueInput;
}

export interface updateManyComicArgs {
  data: ComicUpdateManyMutationInput;
  where?: ComicWhereInput;
}

export interface deleteManyComicArgs {
  where?: ComicWhereInput;
}

export interface createOneAdsArgs {
  data: AdsCreateInput;
}

export interface updateOneAdsArgs {
  data: AdsUpdateInput;
  where: AdsWhereUniqueInput;
}

export interface upsertOneAdsArgs {
  where: AdsWhereUniqueInput;
  create: AdsCreateInput;
  update: AdsUpdateInput;
}

export interface deleteOneAdsArgs {
  where: AdsWhereUniqueInput;
}

export interface updateManyAdsArgs {
  data: AdsUpdateManyMutationInput;
  where?: AdsWhereInput;
}

export interface deleteManyAdsArgs {
  where?: AdsWhereInput;
}

export interface createOneGenreArgs {
  data: GenreCreateInput;
}

export interface updateOneGenreArgs {
  data: GenreUpdateInput;
  where: GenreWhereUniqueInput;
}

export interface upsertOneGenreArgs {
  where: GenreWhereUniqueInput;
  create: GenreCreateInput;
  update: GenreUpdateInput;
}

export interface deleteOneGenreArgs {
  where: GenreWhereUniqueInput;
}

export interface updateManyGenreArgs {
  data: GenreUpdateManyMutationInput;
  where?: GenreWhereInput;
}

export interface deleteManyGenreArgs {
  where?: GenreWhereInput;
}

export interface createOneAuthorArgs {
  data: AuthorCreateInput;
}

export interface updateOneAuthorArgs {
  data: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
}

export interface upsertOneAuthorArgs {
  where: AuthorWhereUniqueInput;
  create: AuthorCreateInput;
  update: AuthorUpdateInput;
}

export interface deleteOneAuthorArgs {
  where: AuthorWhereUniqueInput;
}

export interface updateManyAuthorArgs {
  data: AuthorUpdateManyMutationInput;
  where?: AuthorWhereInput;
}

export interface deleteManyAuthorArgs {
  where?: AuthorWhereInput;
}

export interface createOneUserArgs {
  data: UserCreateInput;
}

export interface updateOneUserArgs {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}

export interface upsertOneUserArgs {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
}

export interface deleteOneUserArgs {
  where: UserWhereUniqueInput;
}

export interface updateManyUserArgs {
  data: UserUpdateManyMutationInput;
  where?: UserWhereInput;
}

export interface deleteManyUserArgs {
  where?: UserWhereInput;
}

export interface uploadFileArgs {
  file?: File;
  path: string;
}

export interface reportMissingArgs {
  context: string;
  data: string;
}

export interface reportViewArgs {
  id: number;
  context: string;
}

export interface sanityEclipseArgs {
  slug: string;
  chapter?: undefined;
}

export interface sanityCheckArgs {
  name: string;
  thumb: string;
  author: string;
  thumbWide?: string;
  description?: string;
  released?: string;
  type?: string;
  genres?: string[];
}

export interface loginArgs {
  email: string;
  password: string;
}

export interface registerArgs {
  email: string;
  name: string;
  password: string;
}

export const PerfomanceAnalyticFragment = gql`
  fragment PerfomanceAnalyticFragment on PerfomanceAnalytic {
    id
    operationName
    query
    variables
    time
    createdAt
    updatedAt
  }
`;
export const ChapterBookmarkFragment = gql`
  fragment ChapterBookmarkFragment on ChapterBookmark {
    id
    chapterId
    chapter {
      id
      name
      title
      comic {
        id
        name
        slug
        thumb
        type
        thumbWide
        altName
        isHentai
        released
        rating
        views
        viewsHourly
        viewsDaily
        viewsWeek
        description
        status
        age
        concept
        lastChapterUpdateAt
        createdAt
        updatedAt
        authorId
        _count {
          chapters
          genres
          userbookmarks
        }
      }
      quality
      views
      imageCount
      originalImageCount
      processed
      batchs
      imageUrls
      imageDetails
      createdAt
      updatedAt
      comicId
      chapterbookmarks {
        id
        chapterId
        userId
        createdAt
        updatedAt
      }
      _count {
        chapterbookmarks
      }
    }
    userId
    users {
      id
      email
      name
      isAdmin
      allowHentai
      password
      createdAt
      updatedAt
      reports {
        id
        userId
        name
        message
        contextIdentifier
        contextType
        resolved
        createdAt
        updatedAt
      }
      comicbookmarks {
        id
        comicId
        userId
        createdAt
        updatedAt
      }
      chapterbookmarks {
        id
        chapterId
        userId
        createdAt
        updatedAt
      }
      _count {
        reports
        comicbookmarks
        chapterbookmarks
      }
    }
    createdAt
    updatedAt
  }
`;
export const ComicBookmarkFragment = gql`
  fragment ComicBookmarkFragment on ComicBookmark {
    id
    comicId
    comic {
      id
      name
      slug
      thumb
      type
      thumbWide
      altName
      isHentai
      released
      author {
        id
        name
        slug
        createdAt
        updatedAt
        _count {
          comics
        }
      }
      rating
      views
      viewsHourly
      viewsDaily
      viewsWeek
      description
      status
      age
      concept
      lastChapterUpdateAt
      createdAt
      updatedAt
      authorId
      chapters {
        id
        name
        title
        quality
        views
        imageCount
        originalImageCount
        processed
        batchs
        imageUrls
        imageDetails
        createdAt
        updatedAt
        comicId
        _count {
          chapterbookmarks
        }
      }
      genres {
        id
        name
        slug
        createdAt
        updatedAt
        _count {
          comics
        }
      }
      userbookmarks {
        id
        comicId
        userId
        createdAt
        updatedAt
      }
      _count {
        chapters
        genres
        userbookmarks
      }
    }
    userId
    users {
      id
      email
      name
      isAdmin
      allowHentai
      password
      createdAt
      updatedAt
      reports {
        id
        userId
        name
        message
        contextIdentifier
        contextType
        resolved
        createdAt
        updatedAt
      }
      comicbookmarks {
        id
        comicId
        userId
        createdAt
        updatedAt
      }
      chapterbookmarks {
        id
        chapterId
        userId
        createdAt
        updatedAt
      }
      _count {
        reports
        comicbookmarks
        chapterbookmarks
      }
    }
    createdAt
    updatedAt
  }
`;
export const ReportFragment = gql`
  fragment ReportFragment on Report {
    id
    userId
    user {
      id
      email
      name
      isAdmin
      allowHentai
      password
      createdAt
      updatedAt
      reports {
        id
        userId
        name
        message
        contextIdentifier
        contextType
        resolved
        createdAt
        updatedAt
      }
      comicbookmarks {
        id
        comicId
        userId
        createdAt
        updatedAt
      }
      chapterbookmarks {
        id
        chapterId
        userId
        createdAt
        updatedAt
      }
      _count {
        reports
        comicbookmarks
        chapterbookmarks
      }
    }
    name
    message
    contextIdentifier
    contextType
    resolved
    createdAt
    updatedAt
  }
`;
export const MissingFragment = gql`
  fragment MissingFragment on Missing {
    id
    data
    context
    resolved
    createdAt
    updatedAt
  }
`;
export const ChapterFragment = gql`
  fragment ChapterFragment on Chapter {
    id
    name
    title
    comic {
      id
      name
      slug
      thumb
      type
      thumbWide
      altName
      isHentai
      released
      author {
        id
        name
        slug
        createdAt
        updatedAt
        _count {
          comics
        }
      }
      rating
      views
      viewsHourly
      viewsDaily
      viewsWeek
      description
      status
      age
      concept
      lastChapterUpdateAt
      createdAt
      updatedAt
      authorId
      chapters {
        id
        name
        title
        quality
        views
        imageCount
        originalImageCount
        processed
        batchs
        imageUrls
        imageDetails
        createdAt
        updatedAt
        comicId
        _count {
          chapterbookmarks
        }
      }
      genres {
        id
        name
        slug
        createdAt
        updatedAt
        _count {
          comics
        }
      }
      userbookmarks {
        id
        comicId
        userId
        createdAt
        updatedAt
      }
      _count {
        chapters
        genres
        userbookmarks
      }
    }
    quality
    views
    imageCount
    originalImageCount
    processed
    batchs
    imageUrls
    imageDetails
    createdAt
    updatedAt
    comicId
    chapterbookmarks {
      id
      chapterId
      chapter {
        id
        name
        title
        quality
        views
        imageCount
        originalImageCount
        processed
        batchs
        imageUrls
        imageDetails
        createdAt
        updatedAt
        comicId
        _count {
          chapterbookmarks
        }
      }
      userId
      users {
        id
        email
        name
        isAdmin
        allowHentai
        password
        createdAt
        updatedAt
        _count {
          reports
          comicbookmarks
          chapterbookmarks
        }
      }
      createdAt
      updatedAt
    }
    _count {
      chapterbookmarks
    }
  }
`;
export const ComicFragment = gql`
  fragment ComicFragment on Comic {
    id
    name
    slug
    thumb
    type
    thumbWide
    altName
    isHentai
    released
    author {
      id
      name
      slug
      createdAt
      updatedAt
      comics {
        id
        name
        slug
        thumb
        type
        thumbWide
        altName
        isHentai
        released
        rating
        views
        viewsHourly
        viewsDaily
        viewsWeek
        description
        status
        age
        concept
        lastChapterUpdateAt
        createdAt
        updatedAt
        authorId
        _count {
          chapters
          genres
          userbookmarks
        }
      }
      _count {
        comics
      }
    }
    rating
    views
    viewsHourly
    viewsDaily
    viewsWeek
    description
    status
    age
    concept
    lastChapterUpdateAt
    createdAt
    updatedAt
    authorId
    chapters {
      id
      name
      title
      comic {
        id
        name
        slug
        thumb
        type
        thumbWide
        altName
        isHentai
        released
        rating
        views
        viewsHourly
        viewsDaily
        viewsWeek
        description
        status
        age
        concept
        lastChapterUpdateAt
        createdAt
        updatedAt
        authorId
        _count {
          chapters
          genres
          userbookmarks
        }
      }
      quality
      views
      imageCount
      originalImageCount
      processed
      batchs
      imageUrls
      imageDetails
      createdAt
      updatedAt
      comicId
      chapterbookmarks {
        id
        chapterId
        userId
        createdAt
        updatedAt
      }
      _count {
        chapterbookmarks
      }
    }
    genres {
      id
      name
      slug
      createdAt
      updatedAt
      comics {
        id
        name
        slug
        thumb
        type
        thumbWide
        altName
        isHentai
        released
        rating
        views
        viewsHourly
        viewsDaily
        viewsWeek
        description
        status
        age
        concept
        lastChapterUpdateAt
        createdAt
        updatedAt
        authorId
        _count {
          chapters
          genres
          userbookmarks
        }
      }
      _count {
        comics
      }
    }
    userbookmarks {
      id
      comicId
      comic {
        id
        name
        slug
        thumb
        type
        thumbWide
        altName
        isHentai
        released
        rating
        views
        viewsHourly
        viewsDaily
        viewsWeek
        description
        status
        age
        concept
        lastChapterUpdateAt
        createdAt
        updatedAt
        authorId
        _count {
          chapters
          genres
          userbookmarks
        }
      }
      userId
      users {
        id
        email
        name
        isAdmin
        allowHentai
        password
        createdAt
        updatedAt
        _count {
          reports
          comicbookmarks
          chapterbookmarks
        }
      }
      createdAt
      updatedAt
    }
    _count {
      chapters
      genres
      userbookmarks
    }
  }
`;
export const AdsFragment = gql`
  fragment AdsFragment on Ads {
    id
    name
    position
    url
    image
    index
    createdAt
    updatedAt
  }
`;
export const GenreFragment = gql`
  fragment GenreFragment on Genre {
    id
    name
    slug
    createdAt
    updatedAt
    comics {
      id
      name
      slug
      thumb
      type
      thumbWide
      altName
      isHentai
      released
      author {
        id
        name
        slug
        createdAt
        updatedAt
        _count {
          comics
        }
      }
      rating
      views
      viewsHourly
      viewsDaily
      viewsWeek
      description
      status
      age
      concept
      lastChapterUpdateAt
      createdAt
      updatedAt
      authorId
      chapters {
        id
        name
        title
        quality
        views
        imageCount
        originalImageCount
        processed
        batchs
        imageUrls
        imageDetails
        createdAt
        updatedAt
        comicId
        _count {
          chapterbookmarks
        }
      }
      genres {
        id
        name
        slug
        createdAt
        updatedAt
        _count {
          comics
        }
      }
      userbookmarks {
        id
        comicId
        userId
        createdAt
        updatedAt
      }
      _count {
        chapters
        genres
        userbookmarks
      }
    }
    _count {
      comics
    }
  }
`;
export const AuthorFragment = gql`
  fragment AuthorFragment on Author {
    id
    name
    slug
    createdAt
    updatedAt
    comics {
      id
      name
      slug
      thumb
      type
      thumbWide
      altName
      isHentai
      released
      author {
        id
        name
        slug
        createdAt
        updatedAt
        _count {
          comics
        }
      }
      rating
      views
      viewsHourly
      viewsDaily
      viewsWeek
      description
      status
      age
      concept
      lastChapterUpdateAt
      createdAt
      updatedAt
      authorId
      chapters {
        id
        name
        title
        quality
        views
        imageCount
        originalImageCount
        processed
        batchs
        imageUrls
        imageDetails
        createdAt
        updatedAt
        comicId
        _count {
          chapterbookmarks
        }
      }
      genres {
        id
        name
        slug
        createdAt
        updatedAt
        _count {
          comics
        }
      }
      userbookmarks {
        id
        comicId
        userId
        createdAt
        updatedAt
      }
      _count {
        chapters
        genres
        userbookmarks
      }
    }
    _count {
      comics
    }
  }
`;
export const UserFragment = gql`
  fragment UserFragment on User {
    id
    email
    name
    isAdmin
    allowHentai
    password
    createdAt
    updatedAt
    reports {
      id
      userId
      user {
        id
        email
        name
        isAdmin
        allowHentai
        password
        createdAt
        updatedAt
        _count {
          reports
          comicbookmarks
          chapterbookmarks
        }
      }
      name
      message
      contextIdentifier
      contextType
      resolved
      createdAt
      updatedAt
    }
    comicbookmarks {
      id
      comicId
      comic {
        id
        name
        slug
        thumb
        type
        thumbWide
        altName
        isHentai
        released
        rating
        views
        viewsHourly
        viewsDaily
        viewsWeek
        description
        status
        age
        concept
        lastChapterUpdateAt
        createdAt
        updatedAt
        authorId
        _count {
          chapters
          genres
          userbookmarks
        }
      }
      userId
      users {
        id
        email
        name
        isAdmin
        allowHentai
        password
        createdAt
        updatedAt
        _count {
          reports
          comicbookmarks
          chapterbookmarks
        }
      }
      createdAt
      updatedAt
    }
    chapterbookmarks {
      id
      chapterId
      chapter {
        id
        name
        title
        quality
        views
        imageCount
        originalImageCount
        processed
        batchs
        imageUrls
        imageDetails
        createdAt
        updatedAt
        comicId
        _count {
          chapterbookmarks
        }
      }
      userId
      users {
        id
        email
        name
        isAdmin
        allowHentai
        password
        createdAt
        updatedAt
        _count {
          reports
          comicbookmarks
          chapterbookmarks
        }
      }
      createdAt
      updatedAt
    }
    _count {
      reports
      comicbookmarks
      chapterbookmarks
    }
  }
`;
export const SanityCheckFragment = gql`
  fragment SanityCheckFragment on SanityCheck {
    status
    chapters {
      id
      name
      title
      comic {
        id
        name
        slug
        thumb
        type
        thumbWide
        altName
        isHentai
        released
        rating
        views
        viewsHourly
        viewsDaily
        viewsWeek
        description
        status
        age
        concept
        lastChapterUpdateAt
        createdAt
        updatedAt
        authorId
        _count {
          chapters
          genres
          userbookmarks
        }
      }
      quality
      views
      imageCount
      originalImageCount
      processed
      batchs
      imageUrls
      imageDetails
      createdAt
      updatedAt
      comicId
      chapterbookmarks {
        id
        chapterId
        userId
        createdAt
        updatedAt
      }
      _count {
        chapterbookmarks
      }
    }
  }
`;
export const SanityEclipseFragment = gql`
  fragment SanityEclipseFragment on SanityEclipse {
    status
    message
  }
`;
export const ComicSearchFragment = gql`
  fragment ComicSearchFragment on ComicSearch {
    comics {
      id
      name
      slug
      thumb
      type
      thumbWide
      altName
      isHentai
      released
      author {
        id
        name
        slug
        createdAt
        updatedAt
        _count {
          comics
        }
      }
      rating
      views
      viewsHourly
      viewsDaily
      viewsWeek
      description
      status
      age
      concept
      lastChapterUpdateAt
      createdAt
      updatedAt
      authorId
      chapters {
        id
        name
        title
        quality
        views
        imageCount
        originalImageCount
        processed
        batchs
        imageUrls
        imageDetails
        createdAt
        updatedAt
        comicId
        _count {
          chapterbookmarks
        }
      }
      genres {
        id
        name
        slug
        createdAt
        updatedAt
        _count {
          comics
        }
      }
      userbookmarks {
        id
        comicId
        userId
        createdAt
        updatedAt
      }
      _count {
        chapters
        genres
        userbookmarks
      }
    }
    offset
    limit
    processingTimeMs
    total
    exhaustiveNbHits
  }
`;
export const AuthorSearchFragment = gql`
  fragment AuthorSearchFragment on AuthorSearch {
    authors {
      id
      name
      slug
      createdAt
      updatedAt
      comics {
        id
        name
        slug
        thumb
        type
        thumbWide
        altName
        isHentai
        released
        rating
        views
        viewsHourly
        viewsDaily
        viewsWeek
        description
        status
        age
        concept
        lastChapterUpdateAt
        createdAt
        updatedAt
        authorId
        _count {
          chapters
          genres
          userbookmarks
        }
      }
      _count {
        comics
      }
    }
    offset
    limit
    processingTimeMs
    total
    exhaustiveNbHits
  }
`;
export const GenreSearchFragment = gql`
  fragment GenreSearchFragment on GenreSearch {
    authors {
      id
      name
      slug
      createdAt
      updatedAt
      comics {
        id
        name
        slug
        thumb
        type
        thumbWide
        altName
        isHentai
        released
        rating
        views
        viewsHourly
        viewsDaily
        viewsWeek
        description
        status
        age
        concept
        lastChapterUpdateAt
        createdAt
        updatedAt
        authorId
        _count {
          chapters
          genres
          userbookmarks
        }
      }
      _count {
        comics
      }
    }
    offset
    limit
    processingTimeMs
    total
    exhaustiveNbHits
  }
`;
export const AuthResponseFragment = gql`
  fragment AuthResponseFragment on AuthResponse {
    status
    token
    message
    user {
      id
      email
      name
      isAdmin
      allowHentai
      password
      createdAt
      updatedAt
      reports {
        id
        userId
        name
        message
        contextIdentifier
        contextType
        resolved
        createdAt
        updatedAt
      }
      comicbookmarks {
        id
        comicId
        userId
        createdAt
        updatedAt
      }
      chapterbookmarks {
        id
        chapterId
        userId
        createdAt
        updatedAt
      }
      _count {
        reports
        comicbookmarks
        chapterbookmarks
      }
    }
  }
`;
export const BatchPayloadFragment = gql`
  fragment BatchPayloadFragment on BatchPayload {
    count
  }
`;
export const AggregateUserFragment = gql`
  fragment AggregateUserFragment on AggregateUser {
    _count {
      id
      email
      name
      isAdmin
      allowHentai
      createdAt
      updatedAt
      _all
    }
    _avg {
      id
    }
    _sum {
      id
    }
    _min {
      id
      email
      name
      isAdmin
      allowHentai
      createdAt
      updatedAt
    }
    _max {
      id
      email
      name
      isAdmin
      allowHentai
      createdAt
      updatedAt
    }
  }
`;
export const AggregateAuthorFragment = gql`
  fragment AggregateAuthorFragment on AggregateAuthor {
    _count {
      id
      name
      slug
      createdAt
      updatedAt
      _all
    }
    _avg {
      id
    }
    _sum {
      id
    }
    _min {
      id
      name
      slug
      createdAt
      updatedAt
    }
    _max {
      id
      name
      slug
      createdAt
      updatedAt
    }
  }
`;
export const AggregateGenreFragment = gql`
  fragment AggregateGenreFragment on AggregateGenre {
    _count {
      id
      name
      slug
      createdAt
      updatedAt
      _all
    }
    _avg {
      id
    }
    _sum {
      id
    }
    _min {
      id
      name
      slug
      createdAt
      updatedAt
    }
    _max {
      id
      name
      slug
      createdAt
      updatedAt
    }
  }
`;
export const AggregateAdsFragment = gql`
  fragment AggregateAdsFragment on AggregateAds {
    _count {
      id
      name
      position
      url
      image
      index
      createdAt
      updatedAt
      _all
    }
    _avg {
      id
      index
    }
    _sum {
      id
      index
    }
    _min {
      id
      name
      url
      image
      index
      createdAt
      updatedAt
    }
    _max {
      id
      name
      url
      image
      index
      createdAt
      updatedAt
    }
  }
`;
export const AggregatePerfomanceAnalyticFragment = gql`
  fragment AggregatePerfomanceAnalyticFragment on AggregatePerfomanceAnalytic {
    _count {
      id
      operationName
      query
      variables
      time
      createdAt
      updatedAt
      _all
    }
    _avg {
      id
      time
    }
    _sum {
      id
      time
    }
    _min {
      id
      operationName
      query
      variables
      time
      createdAt
      updatedAt
    }
    _max {
      id
      operationName
      query
      variables
      time
      createdAt
      updatedAt
    }
  }
`;
export const AggregateComicFragment = gql`
  fragment AggregateComicFragment on AggregateComic {
    _count {
      id
      name
      slug
      thumb
      type
      thumbWide
      altName
      isHentai
      released
      rating
      views
      viewsHourly
      viewsDaily
      viewsWeek
      description
      status
      age
      concept
      lastChapterUpdateAt
      createdAt
      updatedAt
      authorId
      _all
    }
    _avg {
      id
      rating
      views
      viewsHourly
      viewsDaily
      viewsWeek
      authorId
    }
    _sum {
      id
      rating
      views
      viewsHourly
      viewsDaily
      viewsWeek
      authorId
    }
    _min {
      id
      name
      slug
      thumb
      type
      thumbWide
      isHentai
      released
      rating
      views
      viewsHourly
      viewsDaily
      viewsWeek
      description
      status
      age
      concept
      lastChapterUpdateAt
      createdAt
      updatedAt
      authorId
    }
    _max {
      id
      name
      slug
      thumb
      type
      thumbWide
      isHentai
      released
      rating
      views
      viewsHourly
      viewsDaily
      viewsWeek
      description
      status
      age
      concept
      lastChapterUpdateAt
      createdAt
      updatedAt
      authorId
    }
  }
`;
export const AggregateChapterFragment = gql`
  fragment AggregateChapterFragment on AggregateChapter {
    _count {
      id
      name
      title
      quality
      views
      imageCount
      originalImageCount
      processed
      batchs
      imageUrls
      imageDetails
      createdAt
      updatedAt
      comicId
      _all
    }
    _avg {
      id
      name
      views
      imageCount
      originalImageCount
      comicId
    }
    _sum {
      id
      name
      views
      imageCount
      originalImageCount
      comicId
    }
    _min {
      id
      name
      title
      quality
      views
      imageCount
      originalImageCount
      processed
      batchs
      createdAt
      updatedAt
      comicId
    }
    _max {
      id
      name
      title
      quality
      views
      imageCount
      originalImageCount
      processed
      batchs
      createdAt
      updatedAt
      comicId
    }
  }
`;
export const AggregateMissingFragment = gql`
  fragment AggregateMissingFragment on AggregateMissing {
    _count {
      id
      data
      context
      resolved
      createdAt
      updatedAt
      _all
    }
    _avg {
      id
    }
    _sum {
      id
    }
    _min {
      id
      data
      context
      resolved
      createdAt
      updatedAt
    }
    _max {
      id
      data
      context
      resolved
      createdAt
      updatedAt
    }
  }
`;
export const AggregateReportFragment = gql`
  fragment AggregateReportFragment on AggregateReport {
    _count {
      id
      userId
      name
      message
      contextIdentifier
      contextType
      resolved
      createdAt
      updatedAt
      _all
    }
    _avg {
      id
      userId
    }
    _sum {
      id
      userId
    }
    _min {
      id
      userId
      name
      message
      contextIdentifier
      contextType
      resolved
      createdAt
      updatedAt
    }
    _max {
      id
      userId
      name
      message
      contextIdentifier
      contextType
      resolved
      createdAt
      updatedAt
    }
  }
`;
export const AggregateComicBookmarkFragment = gql`
  fragment AggregateComicBookmarkFragment on AggregateComicBookmark {
    _count {
      id
      comicId
      userId
      createdAt
      updatedAt
      _all
    }
    _avg {
      id
      comicId
      userId
    }
    _sum {
      id
      comicId
      userId
    }
    _min {
      id
      comicId
      userId
      createdAt
      updatedAt
    }
    _max {
      id
      comicId
      userId
      createdAt
      updatedAt
    }
  }
`;
export const AggregateChapterBookmarkFragment = gql`
  fragment AggregateChapterBookmarkFragment on AggregateChapterBookmark {
    _count {
      id
      chapterId
      userId
      createdAt
      updatedAt
      _all
    }
    _avg {
      id
      chapterId
      userId
    }
    _sum {
      id
      chapterId
      userId
    }
    _min {
      id
      chapterId
      userId
      createdAt
      updatedAt
    }
    _max {
      id
      chapterId
      userId
      createdAt
      updatedAt
    }
  }
`;
export const UserCountOutputTypeFragment = gql`
  fragment UserCountOutputTypeFragment on UserCountOutputType {
    reports
    comicbookmarks
    chapterbookmarks
  }
`;
export const UserCountAggregateOutputTypeFragment = gql`
  fragment UserCountAggregateOutputTypeFragment on UserCountAggregateOutputType {
    id
    email
    name
    isAdmin
    allowHentai
    createdAt
    updatedAt
    _all
  }
`;
export const UserAvgAggregateOutputTypeFragment = gql`
  fragment UserAvgAggregateOutputTypeFragment on UserAvgAggregateOutputType {
    id
  }
`;
export const UserSumAggregateOutputTypeFragment = gql`
  fragment UserSumAggregateOutputTypeFragment on UserSumAggregateOutputType {
    id
  }
`;
export const UserMinAggregateOutputTypeFragment = gql`
  fragment UserMinAggregateOutputTypeFragment on UserMinAggregateOutputType {
    id
    email
    name
    isAdmin
    allowHentai
    createdAt
    updatedAt
  }
`;
export const UserMaxAggregateOutputTypeFragment = gql`
  fragment UserMaxAggregateOutputTypeFragment on UserMaxAggregateOutputType {
    id
    email
    name
    isAdmin
    allowHentai
    createdAt
    updatedAt
  }
`;
export const AuthorCountOutputTypeFragment = gql`
  fragment AuthorCountOutputTypeFragment on AuthorCountOutputType {
    comics
  }
`;
export const AuthorCountAggregateOutputTypeFragment = gql`
  fragment AuthorCountAggregateOutputTypeFragment on AuthorCountAggregateOutputType {
    id
    name
    slug
    createdAt
    updatedAt
    _all
  }
`;
export const AuthorAvgAggregateOutputTypeFragment = gql`
  fragment AuthorAvgAggregateOutputTypeFragment on AuthorAvgAggregateOutputType {
    id
  }
`;
export const AuthorSumAggregateOutputTypeFragment = gql`
  fragment AuthorSumAggregateOutputTypeFragment on AuthorSumAggregateOutputType {
    id
  }
`;
export const AuthorMinAggregateOutputTypeFragment = gql`
  fragment AuthorMinAggregateOutputTypeFragment on AuthorMinAggregateOutputType {
    id
    name
    slug
    createdAt
    updatedAt
  }
`;
export const AuthorMaxAggregateOutputTypeFragment = gql`
  fragment AuthorMaxAggregateOutputTypeFragment on AuthorMaxAggregateOutputType {
    id
    name
    slug
    createdAt
    updatedAt
  }
`;
export const GenreCountOutputTypeFragment = gql`
  fragment GenreCountOutputTypeFragment on GenreCountOutputType {
    comics
  }
`;
export const GenreCountAggregateOutputTypeFragment = gql`
  fragment GenreCountAggregateOutputTypeFragment on GenreCountAggregateOutputType {
    id
    name
    slug
    createdAt
    updatedAt
    _all
  }
`;
export const GenreAvgAggregateOutputTypeFragment = gql`
  fragment GenreAvgAggregateOutputTypeFragment on GenreAvgAggregateOutputType {
    id
  }
`;
export const GenreSumAggregateOutputTypeFragment = gql`
  fragment GenreSumAggregateOutputTypeFragment on GenreSumAggregateOutputType {
    id
  }
`;
export const GenreMinAggregateOutputTypeFragment = gql`
  fragment GenreMinAggregateOutputTypeFragment on GenreMinAggregateOutputType {
    id
    name
    slug
    createdAt
    updatedAt
  }
`;
export const GenreMaxAggregateOutputTypeFragment = gql`
  fragment GenreMaxAggregateOutputTypeFragment on GenreMaxAggregateOutputType {
    id
    name
    slug
    createdAt
    updatedAt
  }
`;
export const AdsCountAggregateOutputTypeFragment = gql`
  fragment AdsCountAggregateOutputTypeFragment on AdsCountAggregateOutputType {
    id
    name
    position
    url
    image
    index
    createdAt
    updatedAt
    _all
  }
`;
export const AdsAvgAggregateOutputTypeFragment = gql`
  fragment AdsAvgAggregateOutputTypeFragment on AdsAvgAggregateOutputType {
    id
    index
  }
`;
export const AdsSumAggregateOutputTypeFragment = gql`
  fragment AdsSumAggregateOutputTypeFragment on AdsSumAggregateOutputType {
    id
    index
  }
`;
export const AdsMinAggregateOutputTypeFragment = gql`
  fragment AdsMinAggregateOutputTypeFragment on AdsMinAggregateOutputType {
    id
    name
    url
    image
    index
    createdAt
    updatedAt
  }
`;
export const AdsMaxAggregateOutputTypeFragment = gql`
  fragment AdsMaxAggregateOutputTypeFragment on AdsMaxAggregateOutputType {
    id
    name
    url
    image
    index
    createdAt
    updatedAt
  }
`;
export const PerfomanceAnalyticCountAggregateOutputTypeFragment = gql`
  fragment PerfomanceAnalyticCountAggregateOutputTypeFragment on PerfomanceAnalyticCountAggregateOutputType {
    id
    operationName
    query
    variables
    time
    createdAt
    updatedAt
    _all
  }
`;
export const PerfomanceAnalyticAvgAggregateOutputTypeFragment = gql`
  fragment PerfomanceAnalyticAvgAggregateOutputTypeFragment on PerfomanceAnalyticAvgAggregateOutputType {
    id
    time
  }
`;
export const PerfomanceAnalyticSumAggregateOutputTypeFragment = gql`
  fragment PerfomanceAnalyticSumAggregateOutputTypeFragment on PerfomanceAnalyticSumAggregateOutputType {
    id
    time
  }
`;
export const PerfomanceAnalyticMinAggregateOutputTypeFragment = gql`
  fragment PerfomanceAnalyticMinAggregateOutputTypeFragment on PerfomanceAnalyticMinAggregateOutputType {
    id
    operationName
    query
    variables
    time
    createdAt
    updatedAt
  }
`;
export const PerfomanceAnalyticMaxAggregateOutputTypeFragment = gql`
  fragment PerfomanceAnalyticMaxAggregateOutputTypeFragment on PerfomanceAnalyticMaxAggregateOutputType {
    id
    operationName
    query
    variables
    time
    createdAt
    updatedAt
  }
`;
export const ComicCountOutputTypeFragment = gql`
  fragment ComicCountOutputTypeFragment on ComicCountOutputType {
    chapters
    genres
    userbookmarks
  }
`;
export const ComicCountAggregateOutputTypeFragment = gql`
  fragment ComicCountAggregateOutputTypeFragment on ComicCountAggregateOutputType {
    id
    name
    slug
    thumb
    type
    thumbWide
    altName
    isHentai
    released
    rating
    views
    viewsHourly
    viewsDaily
    viewsWeek
    description
    status
    age
    concept
    lastChapterUpdateAt
    createdAt
    updatedAt
    authorId
    _all
  }
`;
export const ComicAvgAggregateOutputTypeFragment = gql`
  fragment ComicAvgAggregateOutputTypeFragment on ComicAvgAggregateOutputType {
    id
    rating
    views
    viewsHourly
    viewsDaily
    viewsWeek
    authorId
  }
`;
export const ComicSumAggregateOutputTypeFragment = gql`
  fragment ComicSumAggregateOutputTypeFragment on ComicSumAggregateOutputType {
    id
    rating
    views
    viewsHourly
    viewsDaily
    viewsWeek
    authorId
  }
`;
export const ComicMinAggregateOutputTypeFragment = gql`
  fragment ComicMinAggregateOutputTypeFragment on ComicMinAggregateOutputType {
    id
    name
    slug
    thumb
    type
    thumbWide
    isHentai
    released
    rating
    views
    viewsHourly
    viewsDaily
    viewsWeek
    description
    status
    age
    concept
    lastChapterUpdateAt
    createdAt
    updatedAt
    authorId
  }
`;
export const ComicMaxAggregateOutputTypeFragment = gql`
  fragment ComicMaxAggregateOutputTypeFragment on ComicMaxAggregateOutputType {
    id
    name
    slug
    thumb
    type
    thumbWide
    isHentai
    released
    rating
    views
    viewsHourly
    viewsDaily
    viewsWeek
    description
    status
    age
    concept
    lastChapterUpdateAt
    createdAt
    updatedAt
    authorId
  }
`;
export const ChapterCountOutputTypeFragment = gql`
  fragment ChapterCountOutputTypeFragment on ChapterCountOutputType {
    chapterbookmarks
  }
`;
export const ChapterCountAggregateOutputTypeFragment = gql`
  fragment ChapterCountAggregateOutputTypeFragment on ChapterCountAggregateOutputType {
    id
    name
    title
    quality
    views
    imageCount
    originalImageCount
    processed
    batchs
    imageUrls
    imageDetails
    createdAt
    updatedAt
    comicId
    _all
  }
`;
export const ChapterAvgAggregateOutputTypeFragment = gql`
  fragment ChapterAvgAggregateOutputTypeFragment on ChapterAvgAggregateOutputType {
    id
    name
    views
    imageCount
    originalImageCount
    comicId
  }
`;
export const ChapterSumAggregateOutputTypeFragment = gql`
  fragment ChapterSumAggregateOutputTypeFragment on ChapterSumAggregateOutputType {
    id
    name
    views
    imageCount
    originalImageCount
    comicId
  }
`;
export const ChapterMinAggregateOutputTypeFragment = gql`
  fragment ChapterMinAggregateOutputTypeFragment on ChapterMinAggregateOutputType {
    id
    name
    title
    quality
    views
    imageCount
    originalImageCount
    processed
    batchs
    createdAt
    updatedAt
    comicId
  }
`;
export const ChapterMaxAggregateOutputTypeFragment = gql`
  fragment ChapterMaxAggregateOutputTypeFragment on ChapterMaxAggregateOutputType {
    id
    name
    title
    quality
    views
    imageCount
    originalImageCount
    processed
    batchs
    createdAt
    updatedAt
    comicId
  }
`;
export const MissingCountAggregateOutputTypeFragment = gql`
  fragment MissingCountAggregateOutputTypeFragment on MissingCountAggregateOutputType {
    id
    data
    context
    resolved
    createdAt
    updatedAt
    _all
  }
`;
export const MissingAvgAggregateOutputTypeFragment = gql`
  fragment MissingAvgAggregateOutputTypeFragment on MissingAvgAggregateOutputType {
    id
  }
`;
export const MissingSumAggregateOutputTypeFragment = gql`
  fragment MissingSumAggregateOutputTypeFragment on MissingSumAggregateOutputType {
    id
  }
`;
export const MissingMinAggregateOutputTypeFragment = gql`
  fragment MissingMinAggregateOutputTypeFragment on MissingMinAggregateOutputType {
    id
    data
    context
    resolved
    createdAt
    updatedAt
  }
`;
export const MissingMaxAggregateOutputTypeFragment = gql`
  fragment MissingMaxAggregateOutputTypeFragment on MissingMaxAggregateOutputType {
    id
    data
    context
    resolved
    createdAt
    updatedAt
  }
`;
export const ReportCountAggregateOutputTypeFragment = gql`
  fragment ReportCountAggregateOutputTypeFragment on ReportCountAggregateOutputType {
    id
    userId
    name
    message
    contextIdentifier
    contextType
    resolved
    createdAt
    updatedAt
    _all
  }
`;
export const ReportAvgAggregateOutputTypeFragment = gql`
  fragment ReportAvgAggregateOutputTypeFragment on ReportAvgAggregateOutputType {
    id
    userId
  }
`;
export const ReportSumAggregateOutputTypeFragment = gql`
  fragment ReportSumAggregateOutputTypeFragment on ReportSumAggregateOutputType {
    id
    userId
  }
`;
export const ReportMinAggregateOutputTypeFragment = gql`
  fragment ReportMinAggregateOutputTypeFragment on ReportMinAggregateOutputType {
    id
    userId
    name
    message
    contextIdentifier
    contextType
    resolved
    createdAt
    updatedAt
  }
`;
export const ReportMaxAggregateOutputTypeFragment = gql`
  fragment ReportMaxAggregateOutputTypeFragment on ReportMaxAggregateOutputType {
    id
    userId
    name
    message
    contextIdentifier
    contextType
    resolved
    createdAt
    updatedAt
  }
`;
export const ComicBookmarkCountAggregateOutputTypeFragment = gql`
  fragment ComicBookmarkCountAggregateOutputTypeFragment on ComicBookmarkCountAggregateOutputType {
    id
    comicId
    userId
    createdAt
    updatedAt
    _all
  }
`;
export const ComicBookmarkAvgAggregateOutputTypeFragment = gql`
  fragment ComicBookmarkAvgAggregateOutputTypeFragment on ComicBookmarkAvgAggregateOutputType {
    id
    comicId
    userId
  }
`;
export const ComicBookmarkSumAggregateOutputTypeFragment = gql`
  fragment ComicBookmarkSumAggregateOutputTypeFragment on ComicBookmarkSumAggregateOutputType {
    id
    comicId
    userId
  }
`;
export const ComicBookmarkMinAggregateOutputTypeFragment = gql`
  fragment ComicBookmarkMinAggregateOutputTypeFragment on ComicBookmarkMinAggregateOutputType {
    id
    comicId
    userId
    createdAt
    updatedAt
  }
`;
export const ComicBookmarkMaxAggregateOutputTypeFragment = gql`
  fragment ComicBookmarkMaxAggregateOutputTypeFragment on ComicBookmarkMaxAggregateOutputType {
    id
    comicId
    userId
    createdAt
    updatedAt
  }
`;
export const ChapterBookmarkCountAggregateOutputTypeFragment = gql`
  fragment ChapterBookmarkCountAggregateOutputTypeFragment on ChapterBookmarkCountAggregateOutputType {
    id
    chapterId
    userId
    createdAt
    updatedAt
    _all
  }
`;
export const ChapterBookmarkAvgAggregateOutputTypeFragment = gql`
  fragment ChapterBookmarkAvgAggregateOutputTypeFragment on ChapterBookmarkAvgAggregateOutputType {
    id
    chapterId
    userId
  }
`;
export const ChapterBookmarkSumAggregateOutputTypeFragment = gql`
  fragment ChapterBookmarkSumAggregateOutputTypeFragment on ChapterBookmarkSumAggregateOutputType {
    id
    chapterId
    userId
  }
`;
export const ChapterBookmarkMinAggregateOutputTypeFragment = gql`
  fragment ChapterBookmarkMinAggregateOutputTypeFragment on ChapterBookmarkMinAggregateOutputType {
    id
    chapterId
    userId
    createdAt
    updatedAt
  }
`;
export const ChapterBookmarkMaxAggregateOutputTypeFragment = gql`
  fragment ChapterBookmarkMaxAggregateOutputTypeFragment on ChapterBookmarkMaxAggregateOutputType {
    id
    chapterId
    userId
    createdAt
    updatedAt
  }
`;

interface Abortable {
  $abort(): void;
}
interface WithArgs<T, A> {
  $args(args: A): ExecutableQuery<T>;
}
interface Pendable {
  pending: boolean;
}
interface Executable<T> {
  $fetch(): Promise<T>;
}
interface Nameble {
  __name: string;
}

export interface QueryWithArgs<T, A> extends WithArgs<T, A>, Abortable, Pendable, Nameble {}
export interface QueryWithOptionalArgs<T, A> extends QueryWithArgs<T, A>, Executable<T> {}

export interface ExecutableQuery<T> extends Abortable, Pendable, Nameble, Executable<T> {}
export type ExecutableQueryWithArgs<T, A> = QueryWithArgs<T, A>;
export interface ExecutableQueryWithOptionalArgs<T, A>
  extends QueryWithOptionalArgs<T, A>,
    Executable<T> {}

export const apiProvider = (apolloClient: ApolloClient<any>) => {
  const abortableQuery = <T, A = null>(
    query: DocumentNode,
    args: boolean,
    optionalArgs: boolean
  ) => {
    let observableQuery: ZenObservable.Subscription;
    const parsedQuery = query.definitions[0] as OperationDefinitionNode;
    const queryName = parsedQuery?.name?.value;
    if (queryName) {
      let variables: { [x: string]: any } = {};
      let pending = false;

      const $abort = () => {
        if (observableQuery && !observableQuery.closed) {
          observableQuery.unsubscribe();
        }
      };
      const $fetch = async () => {
        pending = true;
        return new Promise<T>((resolve, reject) => {
          observableQuery = execute(apolloClient.link, {
            query,
            variables,
          }).subscribe({
            next: ({ data, errors }) => {
              if (data && queryName) {
                resolve(data[queryName]);
              } else {
                reject({ gqlErrors: errors, variables, query: queryName });
              }
            },
            error: (error) => reject({ gqlErrors: [error], variables, query: queryName }),
            complete: () => {
              pending = false;
            },
          });
        });
      };
      const $args = (args: Record<string, any>) => {
        variables = args;
        return {
          $abort,
          $fetch,
          pending,
          __name: queryName,
        };
      };
      if (args && !optionalArgs) {
        return {
          $abort,
          $args,
          pending,
          __name: queryName,
        } as any;
      } else if (optionalArgs) {
        return {
          $abort,
          $args,
          $fetch,
          pending,
          __name: queryName,
        } as any;
      } else {
        return {
          $abort,
          $fetch,
          pending,
          __name: queryName,
        } as any;
      }
    } else {
      throw new Error('query argument is not a GraphQL definition');
    }
  };

  return {
    findUniquePerfomanceAnalytic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<PerfomanceAnalytic, findUniquePerfomanceAnalyticArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findUniquePerfomanceAnalytic($where: PerfomanceAnalyticWhereUniqueInput!) {
          findUniquePerfomanceAnalytic(where: $where) {
            ...PerfomanceAnalyticFragment
          }
        }
        ${PerfomanceAnalyticFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findUniquePerfomanceAnalytic ($where: PerfomanceAnalyticWhereUniqueInput!) {
        findUniquePerfomanceAnalytic(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    findFirstPerfomanceAnalytic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<PerfomanceAnalytic, findFirstPerfomanceAnalyticArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findFirstPerfomanceAnalytic(
          $where: PerfomanceAnalyticWhereInput
          $orderBy: [PerfomanceAnalyticOrderByWithRelationInput]
          $cursor: PerfomanceAnalyticWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [PerfomanceAnalyticScalarFieldEnum]
        ) {
          findFirstPerfomanceAnalytic(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...PerfomanceAnalyticFragment
          }
        }
        ${PerfomanceAnalyticFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findFirstPerfomanceAnalytic ($where: PerfomanceAnalyticWhereInput,$orderBy: [PerfomanceAnalyticOrderByWithRelationInput],$cursor: PerfomanceAnalyticWhereUniqueInput,$take: Int,$skip: Int,$distinct: [PerfomanceAnalyticScalarFieldEnum]) {
        findFirstPerfomanceAnalytic(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyPerfomanceAnalytic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<PerfomanceAnalytic[], findManyPerfomanceAnalyticArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findManyPerfomanceAnalytic(
          $where: PerfomanceAnalyticWhereInput
          $orderBy: [PerfomanceAnalyticOrderByWithRelationInput]
          $cursor: PerfomanceAnalyticWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [PerfomanceAnalyticScalarFieldEnum]
        ) {
          findManyPerfomanceAnalytic(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...PerfomanceAnalyticFragment
          }
        }
        ${PerfomanceAnalyticFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findManyPerfomanceAnalytic ($where: PerfomanceAnalyticWhereInput,$orderBy: [PerfomanceAnalyticOrderByWithRelationInput],$cursor: PerfomanceAnalyticWhereUniqueInput,$take: Int,$skip: Int,$distinct: [PerfomanceAnalyticScalarFieldEnum]) {
        findManyPerfomanceAnalytic(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyPerfomanceAnalyticCount(): QueryWithOptionalArgs<
      number,
      findManyPerfomanceAnalyticCountArgs
    > {
      const queryTemplate = gql`
        query findManyPerfomanceAnalyticCount(
          $where: PerfomanceAnalyticWhereInput
          $orderBy: [PerfomanceAnalyticOrderByWithRelationInput]
          $cursor: PerfomanceAnalyticWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [PerfomanceAnalyticScalarFieldEnum]
        ) {
          findManyPerfomanceAnalyticCount(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          )
        }
      `;
      return abortableQuery(queryTemplate, true, true);
    },
    aggregatePerfomanceAnalytic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<
      AggregatePerfomanceAnalytic,
      aggregatePerfomanceAnalyticArgs
    > {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query aggregatePerfomanceAnalytic(
          $where: PerfomanceAnalyticWhereInput
          $orderBy: [PerfomanceAnalyticOrderByWithRelationInput]
          $cursor: PerfomanceAnalyticWhereUniqueInput
          $take: Int
          $skip: Int
        ) {
          aggregatePerfomanceAnalytic(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
          ) {
            ...AggregatePerfomanceAnalyticFragment
          }
        }
        ${AggregatePerfomanceAnalyticFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query aggregatePerfomanceAnalytic ($where: PerfomanceAnalyticWhereInput,$orderBy: [PerfomanceAnalyticOrderByWithRelationInput],$cursor: PerfomanceAnalyticWhereUniqueInput,$take: Int,$skip: Int) {
        aggregatePerfomanceAnalytic(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findUniqueChapterBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<ChapterBookmark, findUniqueChapterBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findUniqueChapterBookmark($where: ChapterBookmarkWhereUniqueInput!) {
          findUniqueChapterBookmark(where: $where) {
            ...ChapterBookmarkFragment
          }
        }
        ${ChapterBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findUniqueChapterBookmark ($where: ChapterBookmarkWhereUniqueInput!) {
        findUniqueChapterBookmark(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    findFirstChapterBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<ChapterBookmark, findFirstChapterBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findFirstChapterBookmark(
          $where: ChapterBookmarkWhereInput
          $orderBy: [ChapterBookmarkOrderByWithRelationInput]
          $cursor: ChapterBookmarkWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ChapterBookmarkScalarFieldEnum]
        ) {
          findFirstChapterBookmark(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...ChapterBookmarkFragment
          }
        }
        ${ChapterBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findFirstChapterBookmark ($where: ChapterBookmarkWhereInput,$orderBy: [ChapterBookmarkOrderByWithRelationInput],$cursor: ChapterBookmarkWhereUniqueInput,$take: Int,$skip: Int,$distinct: [ChapterBookmarkScalarFieldEnum]) {
        findFirstChapterBookmark(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyChapterBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<ChapterBookmark[], findManyChapterBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findManyChapterBookmark(
          $where: ChapterBookmarkWhereInput
          $orderBy: [ChapterBookmarkOrderByWithRelationInput]
          $cursor: ChapterBookmarkWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ChapterBookmarkScalarFieldEnum]
        ) {
          findManyChapterBookmark(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...ChapterBookmarkFragment
          }
        }
        ${ChapterBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findManyChapterBookmark ($where: ChapterBookmarkWhereInput,$orderBy: [ChapterBookmarkOrderByWithRelationInput],$cursor: ChapterBookmarkWhereUniqueInput,$take: Int,$skip: Int,$distinct: [ChapterBookmarkScalarFieldEnum]) {
        findManyChapterBookmark(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyChapterBookmarkCount(): QueryWithOptionalArgs<
      number,
      findManyChapterBookmarkCountArgs
    > {
      const queryTemplate = gql`
        query findManyChapterBookmarkCount(
          $where: ChapterBookmarkWhereInput
          $orderBy: [ChapterBookmarkOrderByWithRelationInput]
          $cursor: ChapterBookmarkWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ChapterBookmarkScalarFieldEnum]
        ) {
          findManyChapterBookmarkCount(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          )
        }
      `;
      return abortableQuery(queryTemplate, true, true);
    },
    aggregateChapterBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<AggregateChapterBookmark, aggregateChapterBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query aggregateChapterBookmark(
          $where: ChapterBookmarkWhereInput
          $orderBy: [ChapterBookmarkOrderByWithRelationInput]
          $cursor: ChapterBookmarkWhereUniqueInput
          $take: Int
          $skip: Int
        ) {
          aggregateChapterBookmark(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
          ) {
            ...AggregateChapterBookmarkFragment
          }
        }
        ${AggregateChapterBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query aggregateChapterBookmark ($where: ChapterBookmarkWhereInput,$orderBy: [ChapterBookmarkOrderByWithRelationInput],$cursor: ChapterBookmarkWhereUniqueInput,$take: Int,$skip: Int) {
        aggregateChapterBookmark(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findUniqueComicBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<ComicBookmark, findUniqueComicBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findUniqueComicBookmark($where: ComicBookmarkWhereUniqueInput!) {
          findUniqueComicBookmark(where: $where) {
            ...ComicBookmarkFragment
          }
        }
        ${ComicBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findUniqueComicBookmark ($where: ComicBookmarkWhereUniqueInput!) {
        findUniqueComicBookmark(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    findFirstComicBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<ComicBookmark, findFirstComicBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findFirstComicBookmark(
          $where: ComicBookmarkWhereInput
          $orderBy: [ComicBookmarkOrderByWithRelationInput]
          $cursor: ComicBookmarkWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ComicBookmarkScalarFieldEnum]
        ) {
          findFirstComicBookmark(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...ComicBookmarkFragment
          }
        }
        ${ComicBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findFirstComicBookmark ($where: ComicBookmarkWhereInput,$orderBy: [ComicBookmarkOrderByWithRelationInput],$cursor: ComicBookmarkWhereUniqueInput,$take: Int,$skip: Int,$distinct: [ComicBookmarkScalarFieldEnum]) {
        findFirstComicBookmark(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyComicBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<ComicBookmark[], findManyComicBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findManyComicBookmark(
          $where: ComicBookmarkWhereInput
          $orderBy: [ComicBookmarkOrderByWithRelationInput]
          $cursor: ComicBookmarkWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ComicBookmarkScalarFieldEnum]
        ) {
          findManyComicBookmark(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...ComicBookmarkFragment
          }
        }
        ${ComicBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findManyComicBookmark ($where: ComicBookmarkWhereInput,$orderBy: [ComicBookmarkOrderByWithRelationInput],$cursor: ComicBookmarkWhereUniqueInput,$take: Int,$skip: Int,$distinct: [ComicBookmarkScalarFieldEnum]) {
        findManyComicBookmark(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyComicBookmarkCount(): QueryWithOptionalArgs<number, findManyComicBookmarkCountArgs> {
      const queryTemplate = gql`
        query findManyComicBookmarkCount(
          $where: ComicBookmarkWhereInput
          $orderBy: [ComicBookmarkOrderByWithRelationInput]
          $cursor: ComicBookmarkWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ComicBookmarkScalarFieldEnum]
        ) {
          findManyComicBookmarkCount(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          )
        }
      `;
      return abortableQuery(queryTemplate, true, true);
    },
    aggregateComicBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<AggregateComicBookmark, aggregateComicBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query aggregateComicBookmark(
          $where: ComicBookmarkWhereInput
          $orderBy: [ComicBookmarkOrderByWithRelationInput]
          $cursor: ComicBookmarkWhereUniqueInput
          $take: Int
          $skip: Int
        ) {
          aggregateComicBookmark(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
          ) {
            ...AggregateComicBookmarkFragment
          }
        }
        ${AggregateComicBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query aggregateComicBookmark ($where: ComicBookmarkWhereInput,$orderBy: [ComicBookmarkOrderByWithRelationInput],$cursor: ComicBookmarkWhereUniqueInput,$take: Int,$skip: Int) {
        aggregateComicBookmark(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findUniqueReport(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Report, findUniqueReportArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findUniqueReport($where: ReportWhereUniqueInput!) {
          findUniqueReport(where: $where) {
            ...ReportFragment
          }
        }
        ${ReportFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findUniqueReport ($where: ReportWhereUniqueInput!) {
        findUniqueReport(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    findFirstReport(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<Report, findFirstReportArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findFirstReport(
          $where: ReportWhereInput
          $orderBy: [ReportOrderByWithRelationInput]
          $cursor: ReportWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ReportScalarFieldEnum]
        ) {
          findFirstReport(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...ReportFragment
          }
        }
        ${ReportFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findFirstReport ($where: ReportWhereInput,$orderBy: [ReportOrderByWithRelationInput],$cursor: ReportWhereUniqueInput,$take: Int,$skip: Int,$distinct: [ReportScalarFieldEnum]) {
        findFirstReport(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyReport(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<Report[], findManyReportArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findManyReport(
          $where: ReportWhereInput
          $orderBy: [ReportOrderByWithRelationInput]
          $cursor: ReportWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ReportScalarFieldEnum]
        ) {
          findManyReport(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...ReportFragment
          }
        }
        ${ReportFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findManyReport ($where: ReportWhereInput,$orderBy: [ReportOrderByWithRelationInput],$cursor: ReportWhereUniqueInput,$take: Int,$skip: Int,$distinct: [ReportScalarFieldEnum]) {
        findManyReport(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyReportCount(): QueryWithOptionalArgs<number, findManyReportCountArgs> {
      const queryTemplate = gql`
        query findManyReportCount(
          $where: ReportWhereInput
          $orderBy: [ReportOrderByWithRelationInput]
          $cursor: ReportWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ReportScalarFieldEnum]
        ) {
          findManyReportCount(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          )
        }
      `;
      return abortableQuery(queryTemplate, true, true);
    },
    aggregateReport(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<AggregateReport, aggregateReportArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query aggregateReport(
          $where: ReportWhereInput
          $orderBy: [ReportOrderByWithRelationInput]
          $cursor: ReportWhereUniqueInput
          $take: Int
          $skip: Int
        ) {
          aggregateReport(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
          ) {
            ...AggregateReportFragment
          }
        }
        ${AggregateReportFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query aggregateReport ($where: ReportWhereInput,$orderBy: [ReportOrderByWithRelationInput],$cursor: ReportWhereUniqueInput,$take: Int,$skip: Int) {
        aggregateReport(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findUniqueMissing(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Missing, findUniqueMissingArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findUniqueMissing($where: MissingWhereUniqueInput!) {
          findUniqueMissing(where: $where) {
            ...MissingFragment
          }
        }
        ${MissingFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findUniqueMissing ($where: MissingWhereUniqueInput!) {
        findUniqueMissing(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    findFirstMissing(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<Missing, findFirstMissingArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findFirstMissing(
          $where: MissingWhereInput
          $orderBy: [MissingOrderByWithRelationInput]
          $cursor: MissingWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [MissingScalarFieldEnum]
        ) {
          findFirstMissing(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...MissingFragment
          }
        }
        ${MissingFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findFirstMissing ($where: MissingWhereInput,$orderBy: [MissingOrderByWithRelationInput],$cursor: MissingWhereUniqueInput,$take: Int,$skip: Int,$distinct: [MissingScalarFieldEnum]) {
        findFirstMissing(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyMissing(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<Missing[], findManyMissingArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findManyMissing(
          $where: MissingWhereInput
          $orderBy: [MissingOrderByWithRelationInput]
          $cursor: MissingWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [MissingScalarFieldEnum]
        ) {
          findManyMissing(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...MissingFragment
          }
        }
        ${MissingFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findManyMissing ($where: MissingWhereInput,$orderBy: [MissingOrderByWithRelationInput],$cursor: MissingWhereUniqueInput,$take: Int,$skip: Int,$distinct: [MissingScalarFieldEnum]) {
        findManyMissing(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyMissingCount(): QueryWithOptionalArgs<number, findManyMissingCountArgs> {
      const queryTemplate = gql`
        query findManyMissingCount(
          $where: MissingWhereInput
          $orderBy: [MissingOrderByWithRelationInput]
          $cursor: MissingWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [MissingScalarFieldEnum]
        ) {
          findManyMissingCount(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          )
        }
      `;
      return abortableQuery(queryTemplate, true, true);
    },
    aggregateMissing(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<AggregateMissing, aggregateMissingArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query aggregateMissing(
          $where: MissingWhereInput
          $orderBy: [MissingOrderByWithRelationInput]
          $cursor: MissingWhereUniqueInput
          $take: Int
          $skip: Int
        ) {
          aggregateMissing(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
          ) {
            ...AggregateMissingFragment
          }
        }
        ${AggregateMissingFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query aggregateMissing ($where: MissingWhereInput,$orderBy: [MissingOrderByWithRelationInput],$cursor: MissingWhereUniqueInput,$take: Int,$skip: Int) {
        aggregateMissing(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findUniqueChapter(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Chapter, findUniqueChapterArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findUniqueChapter($where: ChapterWhereUniqueInput!) {
          findUniqueChapter(where: $where) {
            ...ChapterFragment
          }
        }
        ${ChapterFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findUniqueChapter ($where: ChapterWhereUniqueInput!) {
        findUniqueChapter(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    findFirstChapter(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<Chapter, findFirstChapterArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findFirstChapter(
          $where: ChapterWhereInput
          $orderBy: [ChapterOrderByWithRelationInput]
          $cursor: ChapterWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ChapterScalarFieldEnum]
        ) {
          findFirstChapter(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...ChapterFragment
          }
        }
        ${ChapterFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findFirstChapter ($where: ChapterWhereInput,$orderBy: [ChapterOrderByWithRelationInput],$cursor: ChapterWhereUniqueInput,$take: Int,$skip: Int,$distinct: [ChapterScalarFieldEnum]) {
        findFirstChapter(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyChapter(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<Chapter[], findManyChapterArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findManyChapter(
          $where: ChapterWhereInput
          $orderBy: [ChapterOrderByWithRelationInput]
          $cursor: ChapterWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ChapterScalarFieldEnum]
        ) {
          findManyChapter(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...ChapterFragment
          }
        }
        ${ChapterFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findManyChapter ($where: ChapterWhereInput,$orderBy: [ChapterOrderByWithRelationInput],$cursor: ChapterWhereUniqueInput,$take: Int,$skip: Int,$distinct: [ChapterScalarFieldEnum]) {
        findManyChapter(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyChapterCount(): QueryWithOptionalArgs<number, findManyChapterCountArgs> {
      const queryTemplate = gql`
        query findManyChapterCount(
          $where: ChapterWhereInput
          $orderBy: [ChapterOrderByWithRelationInput]
          $cursor: ChapterWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ChapterScalarFieldEnum]
        ) {
          findManyChapterCount(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          )
        }
      `;
      return abortableQuery(queryTemplate, true, true);
    },
    aggregateChapter(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<AggregateChapter, aggregateChapterArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query aggregateChapter(
          $where: ChapterWhereInput
          $orderBy: [ChapterOrderByWithRelationInput]
          $cursor: ChapterWhereUniqueInput
          $take: Int
          $skip: Int
        ) {
          aggregateChapter(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
          ) {
            ...AggregateChapterFragment
          }
        }
        ${AggregateChapterFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query aggregateChapter ($where: ChapterWhereInput,$orderBy: [ChapterOrderByWithRelationInput],$cursor: ChapterWhereUniqueInput,$take: Int,$skip: Int) {
        aggregateChapter(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findUniqueComic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Comic, findUniqueComicArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findUniqueComic($where: ComicWhereUniqueInput!) {
          findUniqueComic(where: $where) {
            ...ComicFragment
          }
        }
        ${ComicFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findUniqueComic ($where: ComicWhereUniqueInput!) {
        findUniqueComic(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    findFirstComic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<Comic, findFirstComicArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findFirstComic(
          $where: ComicWhereInput
          $orderBy: [ComicOrderByWithRelationInput]
          $cursor: ComicWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ComicScalarFieldEnum]
        ) {
          findFirstComic(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...ComicFragment
          }
        }
        ${ComicFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findFirstComic ($where: ComicWhereInput,$orderBy: [ComicOrderByWithRelationInput],$cursor: ComicWhereUniqueInput,$take: Int,$skip: Int,$distinct: [ComicScalarFieldEnum]) {
        findFirstComic(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyComic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<Comic[], findManyComicArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findManyComic(
          $where: ComicWhereInput
          $orderBy: [ComicOrderByWithRelationInput]
          $cursor: ComicWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ComicScalarFieldEnum]
        ) {
          findManyComic(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...ComicFragment
          }
        }
        ${ComicFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findManyComic ($where: ComicWhereInput,$orderBy: [ComicOrderByWithRelationInput],$cursor: ComicWhereUniqueInput,$take: Int,$skip: Int,$distinct: [ComicScalarFieldEnum]) {
        findManyComic(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyComicCount(): QueryWithOptionalArgs<number, findManyComicCountArgs> {
      const queryTemplate = gql`
        query findManyComicCount(
          $where: ComicWhereInput
          $orderBy: [ComicOrderByWithRelationInput]
          $cursor: ComicWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [ComicScalarFieldEnum]
        ) {
          findManyComicCount(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          )
        }
      `;
      return abortableQuery(queryTemplate, true, true);
    },
    aggregateComic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<AggregateComic, aggregateComicArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query aggregateComic(
          $where: ComicWhereInput
          $orderBy: [ComicOrderByWithRelationInput]
          $cursor: ComicWhereUniqueInput
          $take: Int
          $skip: Int
        ) {
          aggregateComic(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
          ) {
            ...AggregateComicFragment
          }
        }
        ${AggregateComicFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query aggregateComic ($where: ComicWhereInput,$orderBy: [ComicOrderByWithRelationInput],$cursor: ComicWhereUniqueInput,$take: Int,$skip: Int) {
        aggregateComic(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findUniqueAds(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Ads, findUniqueAdsArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findUniqueAds($where: AdsWhereUniqueInput!) {
          findUniqueAds(where: $where) {
            ...AdsFragment
          }
        }
        ${AdsFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findUniqueAds ($where: AdsWhereUniqueInput!) {
        findUniqueAds(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    findFirstAds(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<Ads, findFirstAdsArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findFirstAds(
          $where: AdsWhereInput
          $orderBy: [AdsOrderByWithRelationInput]
          $cursor: AdsWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [AdsScalarFieldEnum]
        ) {
          findFirstAds(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...AdsFragment
          }
        }
        ${AdsFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findFirstAds ($where: AdsWhereInput,$orderBy: [AdsOrderByWithRelationInput],$cursor: AdsWhereUniqueInput,$take: Int,$skip: Int,$distinct: [AdsScalarFieldEnum]) {
        findFirstAds(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyAds(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<Ads[], findManyAdsArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findManyAds(
          $where: AdsWhereInput
          $orderBy: [AdsOrderByWithRelationInput]
          $cursor: AdsWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [AdsScalarFieldEnum]
        ) {
          findManyAds(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...AdsFragment
          }
        }
        ${AdsFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findManyAds ($where: AdsWhereInput,$orderBy: [AdsOrderByWithRelationInput],$cursor: AdsWhereUniqueInput,$take: Int,$skip: Int,$distinct: [AdsScalarFieldEnum]) {
        findManyAds(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyAdsCount(): QueryWithOptionalArgs<number, findManyAdsCountArgs> {
      const queryTemplate = gql`
        query findManyAdsCount(
          $where: AdsWhereInput
          $orderBy: [AdsOrderByWithRelationInput]
          $cursor: AdsWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [AdsScalarFieldEnum]
        ) {
          findManyAdsCount(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          )
        }
      `;
      return abortableQuery(queryTemplate, true, true);
    },
    aggregateAds(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<AggregateAds, aggregateAdsArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query aggregateAds(
          $where: AdsWhereInput
          $orderBy: [AdsOrderByWithRelationInput]
          $cursor: AdsWhereUniqueInput
          $take: Int
          $skip: Int
        ) {
          aggregateAds(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
          ) {
            ...AggregateAdsFragment
          }
        }
        ${AggregateAdsFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query aggregateAds ($where: AdsWhereInput,$orderBy: [AdsOrderByWithRelationInput],$cursor: AdsWhereUniqueInput,$take: Int,$skip: Int) {
        aggregateAds(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findUniqueGenre(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Genre, findUniqueGenreArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findUniqueGenre($where: GenreWhereUniqueInput!) {
          findUniqueGenre(where: $where) {
            ...GenreFragment
          }
        }
        ${GenreFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findUniqueGenre ($where: GenreWhereUniqueInput!) {
        findUniqueGenre(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    findFirstGenre(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<Genre, findFirstGenreArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findFirstGenre(
          $where: GenreWhereInput
          $orderBy: [GenreOrderByWithRelationInput]
          $cursor: GenreWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [GenreScalarFieldEnum]
        ) {
          findFirstGenre(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...GenreFragment
          }
        }
        ${GenreFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findFirstGenre ($where: GenreWhereInput,$orderBy: [GenreOrderByWithRelationInput],$cursor: GenreWhereUniqueInput,$take: Int,$skip: Int,$distinct: [GenreScalarFieldEnum]) {
        findFirstGenre(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyGenre(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<Genre[], findManyGenreArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findManyGenre(
          $where: GenreWhereInput
          $orderBy: [GenreOrderByWithRelationInput]
          $cursor: GenreWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [GenreScalarFieldEnum]
        ) {
          findManyGenre(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...GenreFragment
          }
        }
        ${GenreFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findManyGenre ($where: GenreWhereInput,$orderBy: [GenreOrderByWithRelationInput],$cursor: GenreWhereUniqueInput,$take: Int,$skip: Int,$distinct: [GenreScalarFieldEnum]) {
        findManyGenre(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyGenreCount(): QueryWithOptionalArgs<number, findManyGenreCountArgs> {
      const queryTemplate = gql`
        query findManyGenreCount(
          $where: GenreWhereInput
          $orderBy: [GenreOrderByWithRelationInput]
          $cursor: GenreWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [GenreScalarFieldEnum]
        ) {
          findManyGenreCount(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          )
        }
      `;
      return abortableQuery(queryTemplate, true, true);
    },
    aggregateGenre(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<AggregateGenre, aggregateGenreArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query aggregateGenre(
          $where: GenreWhereInput
          $orderBy: [GenreOrderByWithRelationInput]
          $cursor: GenreWhereUniqueInput
          $take: Int
          $skip: Int
        ) {
          aggregateGenre(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
          ) {
            ...AggregateGenreFragment
          }
        }
        ${AggregateGenreFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query aggregateGenre ($where: GenreWhereInput,$orderBy: [GenreOrderByWithRelationInput],$cursor: GenreWhereUniqueInput,$take: Int,$skip: Int) {
        aggregateGenre(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findUniqueAuthor(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Author, findUniqueAuthorArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findUniqueAuthor($where: AuthorWhereUniqueInput!) {
          findUniqueAuthor(where: $where) {
            ...AuthorFragment
          }
        }
        ${AuthorFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findUniqueAuthor ($where: AuthorWhereUniqueInput!) {
        findUniqueAuthor(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    findFirstAuthor(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<Author, findFirstAuthorArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findFirstAuthor(
          $where: AuthorWhereInput
          $orderBy: [AuthorOrderByWithRelationInput]
          $cursor: AuthorWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [AuthorScalarFieldEnum]
        ) {
          findFirstAuthor(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...AuthorFragment
          }
        }
        ${AuthorFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findFirstAuthor ($where: AuthorWhereInput,$orderBy: [AuthorOrderByWithRelationInput],$cursor: AuthorWhereUniqueInput,$take: Int,$skip: Int,$distinct: [AuthorScalarFieldEnum]) {
        findFirstAuthor(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyAuthor(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<Author[], findManyAuthorArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findManyAuthor(
          $where: AuthorWhereInput
          $orderBy: [AuthorOrderByWithRelationInput]
          $cursor: AuthorWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [AuthorScalarFieldEnum]
        ) {
          findManyAuthor(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...AuthorFragment
          }
        }
        ${AuthorFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findManyAuthor ($where: AuthorWhereInput,$orderBy: [AuthorOrderByWithRelationInput],$cursor: AuthorWhereUniqueInput,$take: Int,$skip: Int,$distinct: [AuthorScalarFieldEnum]) {
        findManyAuthor(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyAuthorCount(): QueryWithOptionalArgs<number, findManyAuthorCountArgs> {
      const queryTemplate = gql`
        query findManyAuthorCount(
          $where: AuthorWhereInput
          $orderBy: [AuthorOrderByWithRelationInput]
          $cursor: AuthorWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [AuthorScalarFieldEnum]
        ) {
          findManyAuthorCount(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          )
        }
      `;
      return abortableQuery(queryTemplate, true, true);
    },
    aggregateAuthor(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<AggregateAuthor, aggregateAuthorArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query aggregateAuthor(
          $where: AuthorWhereInput
          $orderBy: [AuthorOrderByWithRelationInput]
          $cursor: AuthorWhereUniqueInput
          $take: Int
          $skip: Int
        ) {
          aggregateAuthor(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
          ) {
            ...AggregateAuthorFragment
          }
        }
        ${AggregateAuthorFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query aggregateAuthor ($where: AuthorWhereInput,$orderBy: [AuthorOrderByWithRelationInput],$cursor: AuthorWhereUniqueInput,$take: Int,$skip: Int) {
        aggregateAuthor(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findUniqueUser(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<User, findUniqueUserArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findUniqueUser($where: UserWhereUniqueInput!) {
          findUniqueUser(where: $where) {
            ...UserFragment
          }
        }
        ${UserFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findUniqueUser ($where: UserWhereUniqueInput!) {
        findUniqueUser(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    findFirstUser(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<User, findFirstUserArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findFirstUser(
          $where: UserWhereInput
          $orderBy: [UserOrderByWithRelationInput]
          $cursor: UserWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [UserScalarFieldEnum]
        ) {
          findFirstUser(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...UserFragment
          }
        }
        ${UserFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findFirstUser ($where: UserWhereInput,$orderBy: [UserOrderByWithRelationInput],$cursor: UserWhereUniqueInput,$take: Int,$skip: Int,$distinct: [UserScalarFieldEnum]) {
        findFirstUser(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyUser(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<User[], findManyUserArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query findManyUser(
          $where: UserWhereInput
          $orderBy: [UserOrderByWithRelationInput]
          $cursor: UserWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [UserScalarFieldEnum]
        ) {
          findManyUser(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          ) {
            ...UserFragment
          }
        }
        ${UserFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query findManyUser ($where: UserWhereInput,$orderBy: [UserOrderByWithRelationInput],$cursor: UserWhereUniqueInput,$take: Int,$skip: Int,$distinct: [UserScalarFieldEnum]) {
        findManyUser(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip,distinct: $distinct) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    findManyUserCount(): QueryWithOptionalArgs<number, findManyUserCountArgs> {
      const queryTemplate = gql`
        query findManyUserCount(
          $where: UserWhereInput
          $orderBy: [UserOrderByWithRelationInput]
          $cursor: UserWhereUniqueInput
          $take: Int
          $skip: Int
          $distinct: [UserScalarFieldEnum]
        ) {
          findManyUserCount(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
            distinct: $distinct
          )
        }
      `;
      return abortableQuery(queryTemplate, true, true);
    },
    aggregateUser(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<AggregateUser, aggregateUserArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query aggregateUser(
          $where: UserWhereInput
          $orderBy: [UserOrderByWithRelationInput]
          $cursor: UserWhereUniqueInput
          $take: Int
          $skip: Int
        ) {
          aggregateUser(
            where: $where
            orderBy: $orderBy
            cursor: $cursor
            take: $take
            skip: $skip
          ) {
            ...AggregateUserFragment
          }
        }
        ${AggregateUserFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query aggregateUser ($where: UserWhereInput,$orderBy: [UserOrderByWithRelationInput],$cursor: UserWhereUniqueInput,$take: Int,$skip: Int) {
        aggregateUser(where: $where,orderBy: $orderBy,cursor: $cursor,take: $take,skip: $skip) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    test(): ExecutableQuery<boolean> {
      const queryTemplate = gql`
        query test {
          test
        }
      `;
      return abortableQuery(queryTemplate, false, false);
    },
    comicSearch(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<ComicSearch, comicSearchArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query comicSearch(
          $query: String!
          $offset: Int
          $limit: Int
          $type: String
          $allowHentai: Boolean
        ) {
          comicSearch(
            query: $query
            offset: $offset
            limit: $limit
            type: $type
            allowHentai: $allowHentai
          ) {
            ...ComicSearchFragment
          }
        }
        ${ComicSearchFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query comicSearch ($query: String!,$offset: Int,$limit: Int,$type: String,$allowHentai: Boolean) {
        comicSearch(query: $query,offset: $offset,limit: $limit,type: $type,allowHentai: $allowHentai) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    genreSearch(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<AuthorSearch, genreSearchArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query genreSearch($query: String!, $offset: Int, $limit: Int) {
          genreSearch(query: $query, offset: $offset, limit: $limit) {
            ...AuthorSearchFragment
          }
        }
        ${AuthorSearchFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query genreSearch ($query: String!,$offset: Int,$limit: Int) {
        genreSearch(query: $query,offset: $offset,limit: $limit) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    authorSearch(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<AuthorSearch, authorSearchArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        query authorSearch($query: String!, $offset: Int, $limit: Int) {
          authorSearch(query: $query, offset: $offset, limit: $limit) {
            ...AuthorSearchFragment
          }
        }
        ${AuthorSearchFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      query authorSearch ($query: String!,$offset: Int,$limit: Int) {
        authorSearch(query: $query,offset: $offset,limit: $limit) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    createOnePerfomanceAnalytic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<PerfomanceAnalytic, createOnePerfomanceAnalyticArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation createOnePerfomanceAnalytic($data: PerfomanceAnalyticCreateInput!) {
          createOnePerfomanceAnalytic(data: $data) {
            ...PerfomanceAnalyticFragment
          }
        }
        ${PerfomanceAnalyticFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation createOnePerfomanceAnalytic ($data: PerfomanceAnalyticCreateInput!) {
        createOnePerfomanceAnalytic(data: $data) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateOnePerfomanceAnalytic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<PerfomanceAnalytic, updateOnePerfomanceAnalyticArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateOnePerfomanceAnalytic(
          $data: PerfomanceAnalyticUpdateInput!
          $where: PerfomanceAnalyticWhereUniqueInput!
        ) {
          updateOnePerfomanceAnalytic(data: $data, where: $where) {
            ...PerfomanceAnalyticFragment
          }
        }
        ${PerfomanceAnalyticFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateOnePerfomanceAnalytic ($data: PerfomanceAnalyticUpdateInput!,$where: PerfomanceAnalyticWhereUniqueInput!) {
        updateOnePerfomanceAnalytic(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    upsertOnePerfomanceAnalytic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<PerfomanceAnalytic, upsertOnePerfomanceAnalyticArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation upsertOnePerfomanceAnalytic(
          $where: PerfomanceAnalyticWhereUniqueInput!
          $create: PerfomanceAnalyticCreateInput!
          $update: PerfomanceAnalyticUpdateInput!
        ) {
          upsertOnePerfomanceAnalytic(where: $where, create: $create, update: $update) {
            ...PerfomanceAnalyticFragment
          }
        }
        ${PerfomanceAnalyticFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation upsertOnePerfomanceAnalytic ($where: PerfomanceAnalyticWhereUniqueInput!,$create: PerfomanceAnalyticCreateInput!,$update: PerfomanceAnalyticUpdateInput!) {
        upsertOnePerfomanceAnalytic(where: $where,create: $create,update: $update) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteOnePerfomanceAnalytic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<PerfomanceAnalytic, deleteOnePerfomanceAnalyticArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteOnePerfomanceAnalytic($where: PerfomanceAnalyticWhereUniqueInput!) {
          deleteOnePerfomanceAnalytic(where: $where) {
            ...PerfomanceAnalyticFragment
          }
        }
        ${PerfomanceAnalyticFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteOnePerfomanceAnalytic ($where: PerfomanceAnalyticWhereUniqueInput!) {
        deleteOnePerfomanceAnalytic(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateManyPerfomanceAnalytic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<BatchPayload, updateManyPerfomanceAnalyticArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateManyPerfomanceAnalytic(
          $data: PerfomanceAnalyticUpdateManyMutationInput!
          $where: PerfomanceAnalyticWhereInput
        ) {
          updateManyPerfomanceAnalytic(data: $data, where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateManyPerfomanceAnalytic ($data: PerfomanceAnalyticUpdateManyMutationInput!,$where: PerfomanceAnalyticWhereInput) {
        updateManyPerfomanceAnalytic(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteManyPerfomanceAnalytic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<BatchPayload, deleteManyPerfomanceAnalyticArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteManyPerfomanceAnalytic($where: PerfomanceAnalyticWhereInput) {
          deleteManyPerfomanceAnalytic(where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteManyPerfomanceAnalytic ($where: PerfomanceAnalyticWhereInput) {
        deleteManyPerfomanceAnalytic(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    createOneChapterBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<ChapterBookmark, createOneChapterBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation createOneChapterBookmark($data: ChapterBookmarkCreateInput!) {
          createOneChapterBookmark(data: $data) {
            ...ChapterBookmarkFragment
          }
        }
        ${ChapterBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation createOneChapterBookmark ($data: ChapterBookmarkCreateInput!) {
        createOneChapterBookmark(data: $data) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateOneChapterBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<ChapterBookmark, updateOneChapterBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateOneChapterBookmark(
          $data: ChapterBookmarkUpdateInput!
          $where: ChapterBookmarkWhereUniqueInput!
        ) {
          updateOneChapterBookmark(data: $data, where: $where) {
            ...ChapterBookmarkFragment
          }
        }
        ${ChapterBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateOneChapterBookmark ($data: ChapterBookmarkUpdateInput!,$where: ChapterBookmarkWhereUniqueInput!) {
        updateOneChapterBookmark(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    upsertOneChapterBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<ChapterBookmark, upsertOneChapterBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation upsertOneChapterBookmark(
          $where: ChapterBookmarkWhereUniqueInput!
          $create: ChapterBookmarkCreateInput!
          $update: ChapterBookmarkUpdateInput!
        ) {
          upsertOneChapterBookmark(where: $where, create: $create, update: $update) {
            ...ChapterBookmarkFragment
          }
        }
        ${ChapterBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation upsertOneChapterBookmark ($where: ChapterBookmarkWhereUniqueInput!,$create: ChapterBookmarkCreateInput!,$update: ChapterBookmarkUpdateInput!) {
        upsertOneChapterBookmark(where: $where,create: $create,update: $update) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteOneChapterBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<ChapterBookmark, deleteOneChapterBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteOneChapterBookmark($where: ChapterBookmarkWhereUniqueInput!) {
          deleteOneChapterBookmark(where: $where) {
            ...ChapterBookmarkFragment
          }
        }
        ${ChapterBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteOneChapterBookmark ($where: ChapterBookmarkWhereUniqueInput!) {
        deleteOneChapterBookmark(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateManyChapterBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<BatchPayload, updateManyChapterBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateManyChapterBookmark(
          $data: ChapterBookmarkUpdateManyMutationInput!
          $where: ChapterBookmarkWhereInput
        ) {
          updateManyChapterBookmark(data: $data, where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateManyChapterBookmark ($data: ChapterBookmarkUpdateManyMutationInput!,$where: ChapterBookmarkWhereInput) {
        updateManyChapterBookmark(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteManyChapterBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<BatchPayload, deleteManyChapterBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteManyChapterBookmark($where: ChapterBookmarkWhereInput) {
          deleteManyChapterBookmark(where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteManyChapterBookmark ($where: ChapterBookmarkWhereInput) {
        deleteManyChapterBookmark(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    createOneComicBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<ComicBookmark, createOneComicBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation createOneComicBookmark($data: ComicBookmarkCreateInput!) {
          createOneComicBookmark(data: $data) {
            ...ComicBookmarkFragment
          }
        }
        ${ComicBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation createOneComicBookmark ($data: ComicBookmarkCreateInput!) {
        createOneComicBookmark(data: $data) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateOneComicBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<ComicBookmark, updateOneComicBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateOneComicBookmark(
          $data: ComicBookmarkUpdateInput!
          $where: ComicBookmarkWhereUniqueInput!
        ) {
          updateOneComicBookmark(data: $data, where: $where) {
            ...ComicBookmarkFragment
          }
        }
        ${ComicBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateOneComicBookmark ($data: ComicBookmarkUpdateInput!,$where: ComicBookmarkWhereUniqueInput!) {
        updateOneComicBookmark(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    upsertOneComicBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<ComicBookmark, upsertOneComicBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation upsertOneComicBookmark(
          $where: ComicBookmarkWhereUniqueInput!
          $create: ComicBookmarkCreateInput!
          $update: ComicBookmarkUpdateInput!
        ) {
          upsertOneComicBookmark(where: $where, create: $create, update: $update) {
            ...ComicBookmarkFragment
          }
        }
        ${ComicBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation upsertOneComicBookmark ($where: ComicBookmarkWhereUniqueInput!,$create: ComicBookmarkCreateInput!,$update: ComicBookmarkUpdateInput!) {
        upsertOneComicBookmark(where: $where,create: $create,update: $update) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteOneComicBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<ComicBookmark, deleteOneComicBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteOneComicBookmark($where: ComicBookmarkWhereUniqueInput!) {
          deleteOneComicBookmark(where: $where) {
            ...ComicBookmarkFragment
          }
        }
        ${ComicBookmarkFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteOneComicBookmark ($where: ComicBookmarkWhereUniqueInput!) {
        deleteOneComicBookmark(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateManyComicBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<BatchPayload, updateManyComicBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateManyComicBookmark(
          $data: ComicBookmarkUpdateManyMutationInput!
          $where: ComicBookmarkWhereInput
        ) {
          updateManyComicBookmark(data: $data, where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateManyComicBookmark ($data: ComicBookmarkUpdateManyMutationInput!,$where: ComicBookmarkWhereInput) {
        updateManyComicBookmark(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteManyComicBookmark(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<BatchPayload, deleteManyComicBookmarkArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteManyComicBookmark($where: ComicBookmarkWhereInput) {
          deleteManyComicBookmark(where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteManyComicBookmark ($where: ComicBookmarkWhereInput) {
        deleteManyComicBookmark(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    createOneReport(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Report, createOneReportArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation createOneReport($data: ReportCreateInput!) {
          createOneReport(data: $data) {
            ...ReportFragment
          }
        }
        ${ReportFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation createOneReport ($data: ReportCreateInput!) {
        createOneReport(data: $data) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateOneReport(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Report, updateOneReportArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateOneReport($data: ReportUpdateInput!, $where: ReportWhereUniqueInput!) {
          updateOneReport(data: $data, where: $where) {
            ...ReportFragment
          }
        }
        ${ReportFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateOneReport ($data: ReportUpdateInput!,$where: ReportWhereUniqueInput!) {
        updateOneReport(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    upsertOneReport(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Report, upsertOneReportArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation upsertOneReport(
          $where: ReportWhereUniqueInput!
          $create: ReportCreateInput!
          $update: ReportUpdateInput!
        ) {
          upsertOneReport(where: $where, create: $create, update: $update) {
            ...ReportFragment
          }
        }
        ${ReportFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation upsertOneReport ($where: ReportWhereUniqueInput!,$create: ReportCreateInput!,$update: ReportUpdateInput!) {
        upsertOneReport(where: $where,create: $create,update: $update) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteOneReport(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Report, deleteOneReportArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteOneReport($where: ReportWhereUniqueInput!) {
          deleteOneReport(where: $where) {
            ...ReportFragment
          }
        }
        ${ReportFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteOneReport ($where: ReportWhereUniqueInput!) {
        deleteOneReport(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateManyReport(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<BatchPayload, updateManyReportArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateManyReport($data: ReportUpdateManyMutationInput!, $where: ReportWhereInput) {
          updateManyReport(data: $data, where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateManyReport ($data: ReportUpdateManyMutationInput!,$where: ReportWhereInput) {
        updateManyReport(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteManyReport(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<BatchPayload, deleteManyReportArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteManyReport($where: ReportWhereInput) {
          deleteManyReport(where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteManyReport ($where: ReportWhereInput) {
        deleteManyReport(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    createOneMissing(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Missing, createOneMissingArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation createOneMissing($data: MissingCreateInput!) {
          createOneMissing(data: $data) {
            ...MissingFragment
          }
        }
        ${MissingFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation createOneMissing ($data: MissingCreateInput!) {
        createOneMissing(data: $data) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateOneMissing(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Missing, updateOneMissingArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateOneMissing($data: MissingUpdateInput!, $where: MissingWhereUniqueInput!) {
          updateOneMissing(data: $data, where: $where) {
            ...MissingFragment
          }
        }
        ${MissingFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateOneMissing ($data: MissingUpdateInput!,$where: MissingWhereUniqueInput!) {
        updateOneMissing(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    upsertOneMissing(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Missing, upsertOneMissingArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation upsertOneMissing(
          $where: MissingWhereUniqueInput!
          $create: MissingCreateInput!
          $update: MissingUpdateInput!
        ) {
          upsertOneMissing(where: $where, create: $create, update: $update) {
            ...MissingFragment
          }
        }
        ${MissingFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation upsertOneMissing ($where: MissingWhereUniqueInput!,$create: MissingCreateInput!,$update: MissingUpdateInput!) {
        upsertOneMissing(where: $where,create: $create,update: $update) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteOneMissing(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Missing, deleteOneMissingArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteOneMissing($where: MissingWhereUniqueInput!) {
          deleteOneMissing(where: $where) {
            ...MissingFragment
          }
        }
        ${MissingFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteOneMissing ($where: MissingWhereUniqueInput!) {
        deleteOneMissing(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateManyMissing(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<BatchPayload, updateManyMissingArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateManyMissing(
          $data: MissingUpdateManyMutationInput!
          $where: MissingWhereInput
        ) {
          updateManyMissing(data: $data, where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateManyMissing ($data: MissingUpdateManyMutationInput!,$where: MissingWhereInput) {
        updateManyMissing(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteManyMissing(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<BatchPayload, deleteManyMissingArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteManyMissing($where: MissingWhereInput) {
          deleteManyMissing(where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteManyMissing ($where: MissingWhereInput) {
        deleteManyMissing(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    createOneChapter(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Chapter, createOneChapterArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation createOneChapter($data: ChapterCreateInput!) {
          createOneChapter(data: $data) {
            ...ChapterFragment
          }
        }
        ${ChapterFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation createOneChapter ($data: ChapterCreateInput!) {
        createOneChapter(data: $data) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateOneChapter(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Chapter, updateOneChapterArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateOneChapter($data: ChapterUpdateInput!, $where: ChapterWhereUniqueInput!) {
          updateOneChapter(data: $data, where: $where) {
            ...ChapterFragment
          }
        }
        ${ChapterFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateOneChapter ($data: ChapterUpdateInput!,$where: ChapterWhereUniqueInput!) {
        updateOneChapter(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    upsertOneChapter(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Chapter, upsertOneChapterArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation upsertOneChapter(
          $where: ChapterWhereUniqueInput!
          $create: ChapterCreateInput!
          $update: ChapterUpdateInput!
        ) {
          upsertOneChapter(where: $where, create: $create, update: $update) {
            ...ChapterFragment
          }
        }
        ${ChapterFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation upsertOneChapter ($where: ChapterWhereUniqueInput!,$create: ChapterCreateInput!,$update: ChapterUpdateInput!) {
        upsertOneChapter(where: $where,create: $create,update: $update) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteOneChapter(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Chapter, deleteOneChapterArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteOneChapter($where: ChapterWhereUniqueInput!) {
          deleteOneChapter(where: $where) {
            ...ChapterFragment
          }
        }
        ${ChapterFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteOneChapter ($where: ChapterWhereUniqueInput!) {
        deleteOneChapter(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateManyChapter(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<BatchPayload, updateManyChapterArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateManyChapter(
          $data: ChapterUpdateManyMutationInput!
          $where: ChapterWhereInput
        ) {
          updateManyChapter(data: $data, where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateManyChapter ($data: ChapterUpdateManyMutationInput!,$where: ChapterWhereInput) {
        updateManyChapter(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteManyChapter(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<BatchPayload, deleteManyChapterArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteManyChapter($where: ChapterWhereInput) {
          deleteManyChapter(where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteManyChapter ($where: ChapterWhereInput) {
        deleteManyChapter(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    createOneComic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Comic, createOneComicArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation createOneComic($data: ComicCreateInput!) {
          createOneComic(data: $data) {
            ...ComicFragment
          }
        }
        ${ComicFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation createOneComic ($data: ComicCreateInput!) {
        createOneComic(data: $data) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateOneComic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Comic, updateOneComicArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateOneComic($data: ComicUpdateInput!, $where: ComicWhereUniqueInput!) {
          updateOneComic(data: $data, where: $where) {
            ...ComicFragment
          }
        }
        ${ComicFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateOneComic ($data: ComicUpdateInput!,$where: ComicWhereUniqueInput!) {
        updateOneComic(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    upsertOneComic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Comic, upsertOneComicArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation upsertOneComic(
          $where: ComicWhereUniqueInput!
          $create: ComicCreateInput!
          $update: ComicUpdateInput!
        ) {
          upsertOneComic(where: $where, create: $create, update: $update) {
            ...ComicFragment
          }
        }
        ${ComicFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation upsertOneComic ($where: ComicWhereUniqueInput!,$create: ComicCreateInput!,$update: ComicUpdateInput!) {
        upsertOneComic(where: $where,create: $create,update: $update) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteOneComic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Comic, deleteOneComicArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteOneComic($where: ComicWhereUniqueInput!) {
          deleteOneComic(where: $where) {
            ...ComicFragment
          }
        }
        ${ComicFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteOneComic ($where: ComicWhereUniqueInput!) {
        deleteOneComic(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateManyComic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<BatchPayload, updateManyComicArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateManyComic($data: ComicUpdateManyMutationInput!, $where: ComicWhereInput) {
          updateManyComic(data: $data, where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateManyComic ($data: ComicUpdateManyMutationInput!,$where: ComicWhereInput) {
        updateManyComic(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteManyComic(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<BatchPayload, deleteManyComicArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteManyComic($where: ComicWhereInput) {
          deleteManyComic(where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteManyComic ($where: ComicWhereInput) {
        deleteManyComic(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    createOneAds(fragment?: string | DocumentNode): ExecutableQueryWithArgs<Ads, createOneAdsArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation createOneAds($data: AdsCreateInput!) {
          createOneAds(data: $data) {
            ...AdsFragment
          }
        }
        ${AdsFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation createOneAds ($data: AdsCreateInput!) {
        createOneAds(data: $data) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateOneAds(fragment?: string | DocumentNode): ExecutableQueryWithArgs<Ads, updateOneAdsArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateOneAds($data: AdsUpdateInput!, $where: AdsWhereUniqueInput!) {
          updateOneAds(data: $data, where: $where) {
            ...AdsFragment
          }
        }
        ${AdsFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateOneAds ($data: AdsUpdateInput!,$where: AdsWhereUniqueInput!) {
        updateOneAds(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    upsertOneAds(fragment?: string | DocumentNode): ExecutableQueryWithArgs<Ads, upsertOneAdsArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation upsertOneAds(
          $where: AdsWhereUniqueInput!
          $create: AdsCreateInput!
          $update: AdsUpdateInput!
        ) {
          upsertOneAds(where: $where, create: $create, update: $update) {
            ...AdsFragment
          }
        }
        ${AdsFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation upsertOneAds ($where: AdsWhereUniqueInput!,$create: AdsCreateInput!,$update: AdsUpdateInput!) {
        upsertOneAds(where: $where,create: $create,update: $update) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteOneAds(fragment?: string | DocumentNode): ExecutableQueryWithArgs<Ads, deleteOneAdsArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteOneAds($where: AdsWhereUniqueInput!) {
          deleteOneAds(where: $where) {
            ...AdsFragment
          }
        }
        ${AdsFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteOneAds ($where: AdsWhereUniqueInput!) {
        deleteOneAds(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateManyAds(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<BatchPayload, updateManyAdsArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateManyAds($data: AdsUpdateManyMutationInput!, $where: AdsWhereInput) {
          updateManyAds(data: $data, where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateManyAds ($data: AdsUpdateManyMutationInput!,$where: AdsWhereInput) {
        updateManyAds(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteManyAds(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<BatchPayload, deleteManyAdsArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteManyAds($where: AdsWhereInput) {
          deleteManyAds(where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteManyAds ($where: AdsWhereInput) {
        deleteManyAds(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    createOneGenre(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Genre, createOneGenreArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation createOneGenre($data: GenreCreateInput!) {
          createOneGenre(data: $data) {
            ...GenreFragment
          }
        }
        ${GenreFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation createOneGenre ($data: GenreCreateInput!) {
        createOneGenre(data: $data) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateOneGenre(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Genre, updateOneGenreArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateOneGenre($data: GenreUpdateInput!, $where: GenreWhereUniqueInput!) {
          updateOneGenre(data: $data, where: $where) {
            ...GenreFragment
          }
        }
        ${GenreFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateOneGenre ($data: GenreUpdateInput!,$where: GenreWhereUniqueInput!) {
        updateOneGenre(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    upsertOneGenre(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Genre, upsertOneGenreArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation upsertOneGenre(
          $where: GenreWhereUniqueInput!
          $create: GenreCreateInput!
          $update: GenreUpdateInput!
        ) {
          upsertOneGenre(where: $where, create: $create, update: $update) {
            ...GenreFragment
          }
        }
        ${GenreFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation upsertOneGenre ($where: GenreWhereUniqueInput!,$create: GenreCreateInput!,$update: GenreUpdateInput!) {
        upsertOneGenre(where: $where,create: $create,update: $update) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteOneGenre(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Genre, deleteOneGenreArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteOneGenre($where: GenreWhereUniqueInput!) {
          deleteOneGenre(where: $where) {
            ...GenreFragment
          }
        }
        ${GenreFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteOneGenre ($where: GenreWhereUniqueInput!) {
        deleteOneGenre(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateManyGenre(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<BatchPayload, updateManyGenreArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateManyGenre($data: GenreUpdateManyMutationInput!, $where: GenreWhereInput) {
          updateManyGenre(data: $data, where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateManyGenre ($data: GenreUpdateManyMutationInput!,$where: GenreWhereInput) {
        updateManyGenre(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteManyGenre(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<BatchPayload, deleteManyGenreArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteManyGenre($where: GenreWhereInput) {
          deleteManyGenre(where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteManyGenre ($where: GenreWhereInput) {
        deleteManyGenre(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    createOneAuthor(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Author, createOneAuthorArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation createOneAuthor($data: AuthorCreateInput!) {
          createOneAuthor(data: $data) {
            ...AuthorFragment
          }
        }
        ${AuthorFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation createOneAuthor ($data: AuthorCreateInput!) {
        createOneAuthor(data: $data) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateOneAuthor(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Author, updateOneAuthorArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateOneAuthor($data: AuthorUpdateInput!, $where: AuthorWhereUniqueInput!) {
          updateOneAuthor(data: $data, where: $where) {
            ...AuthorFragment
          }
        }
        ${AuthorFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateOneAuthor ($data: AuthorUpdateInput!,$where: AuthorWhereUniqueInput!) {
        updateOneAuthor(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    upsertOneAuthor(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Author, upsertOneAuthorArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation upsertOneAuthor(
          $where: AuthorWhereUniqueInput!
          $create: AuthorCreateInput!
          $update: AuthorUpdateInput!
        ) {
          upsertOneAuthor(where: $where, create: $create, update: $update) {
            ...AuthorFragment
          }
        }
        ${AuthorFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation upsertOneAuthor ($where: AuthorWhereUniqueInput!,$create: AuthorCreateInput!,$update: AuthorUpdateInput!) {
        upsertOneAuthor(where: $where,create: $create,update: $update) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteOneAuthor(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<Author, deleteOneAuthorArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteOneAuthor($where: AuthorWhereUniqueInput!) {
          deleteOneAuthor(where: $where) {
            ...AuthorFragment
          }
        }
        ${AuthorFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteOneAuthor ($where: AuthorWhereUniqueInput!) {
        deleteOneAuthor(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateManyAuthor(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<BatchPayload, updateManyAuthorArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateManyAuthor($data: AuthorUpdateManyMutationInput!, $where: AuthorWhereInput) {
          updateManyAuthor(data: $data, where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateManyAuthor ($data: AuthorUpdateManyMutationInput!,$where: AuthorWhereInput) {
        updateManyAuthor(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteManyAuthor(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<BatchPayload, deleteManyAuthorArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteManyAuthor($where: AuthorWhereInput) {
          deleteManyAuthor(where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteManyAuthor ($where: AuthorWhereInput) {
        deleteManyAuthor(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    createOneUser(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<User, createOneUserArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation createOneUser($data: UserCreateInput!) {
          createOneUser(data: $data) {
            ...UserFragment
          }
        }
        ${UserFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation createOneUser ($data: UserCreateInput!) {
        createOneUser(data: $data) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateOneUser(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<User, updateOneUserArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
          updateOneUser(data: $data, where: $where) {
            ...UserFragment
          }
        }
        ${UserFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateOneUser ($data: UserUpdateInput!,$where: UserWhereUniqueInput!) {
        updateOneUser(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    upsertOneUser(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<User, upsertOneUserArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation upsertOneUser(
          $where: UserWhereUniqueInput!
          $create: UserCreateInput!
          $update: UserUpdateInput!
        ) {
          upsertOneUser(where: $where, create: $create, update: $update) {
            ...UserFragment
          }
        }
        ${UserFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation upsertOneUser ($where: UserWhereUniqueInput!,$create: UserCreateInput!,$update: UserUpdateInput!) {
        upsertOneUser(where: $where,create: $create,update: $update) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteOneUser(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<User, deleteOneUserArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteOneUser($where: UserWhereUniqueInput!) {
          deleteOneUser(where: $where) {
            ...UserFragment
          }
        }
        ${UserFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteOneUser ($where: UserWhereUniqueInput!) {
        deleteOneUser(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    updateManyUser(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<BatchPayload, updateManyUserArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation updateManyUser($data: UserUpdateManyMutationInput!, $where: UserWhereInput) {
          updateManyUser(data: $data, where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation updateManyUser ($data: UserUpdateManyMutationInput!,$where: UserWhereInput) {
        updateManyUser(data: $data,where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    deleteManyUser(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithOptionalArgs<BatchPayload, deleteManyUserArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation deleteManyUser($where: UserWhereInput) {
          deleteManyUser(where: $where) {
            ...BatchPayloadFragment
          }
        }
        ${BatchPayloadFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation deleteManyUser ($where: UserWhereInput) {
        deleteManyUser(where: $where) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, true);
    },
    uploadFile(): QueryWithArgs<boolean, uploadFileArgs> {
      const queryTemplate = gql`
        mutation uploadFile($file: Upload, $path: String!) {
          uploadFile(file: $file, path: $path)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    reportMissing(): QueryWithArgs<boolean, reportMissingArgs> {
      const queryTemplate = gql`
        mutation reportMissing($context: String!, $data: String!) {
          reportMissing(context: $context, data: $data)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    reportView(): QueryWithArgs<boolean, reportViewArgs> {
      const queryTemplate = gql`
        mutation reportView($id: Int!, $context: String!) {
          reportView(id: $id, context: $context)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    sanityEclipse(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<SanityEclipse, sanityEclipseArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation sanityEclipse($slug: String!, $chapter: JSONObject) {
          sanityEclipse(slug: $slug, chapter: $chapter) {
            ...SanityEclipseFragment
          }
        }
        ${SanityEclipseFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation sanityEclipse ($slug: String!,$chapter: JSONObject) {
        sanityEclipse(slug: $slug,chapter: $chapter) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    sanityCheck(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<SanityCheck, sanityCheckArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation sanityCheck(
          $name: String!
          $thumb: String!
          $author: String!
          $thumbWide: String
          $description: String
          $released: String
          $type: String
          $genres: [String]
        ) {
          sanityCheck(
            name: $name
            thumb: $thumb
            author: $author
            thumbWide: $thumbWide
            description: $description
            released: $released
            type: $type
            genres: $genres
          ) {
            ...SanityCheckFragment
          }
        }
        ${SanityCheckFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation sanityCheck ($name: String!,$thumb: String!,$author: String!,$thumbWide: String,$description: String,$released: String,$type: String,$genres: [String]) {
        sanityCheck(name: $name,thumb: $thumb,author: $author,thumbWide: $thumbWide,description: $description,released: $released,type: $type,genres: $genres) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    login(fragment?: string | DocumentNode): ExecutableQueryWithArgs<AuthResponse, loginArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            ...AuthResponseFragment
          }
        }
        ${AuthResponseFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation login ($email: String!,$password: String!) {
        login(email: $email,password: $password) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
    register(
      fragment?: string | DocumentNode
    ): ExecutableQueryWithArgs<AuthResponse, registerArgs> {
      let isString = false;
      let isFragment = false;
      let fragmentName = '';
      if (fragment) ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const defaultQuery = gql`
        mutation register($email: String!, $name: String!, $password: String!) {
          register(email: $email, name: $name, password: $password) {
            ...AuthResponseFragment
          }
        }
        ${AuthResponseFragment}
      `;
      const queryTemplate = fragment
        ? gql`
      mutation register ($email: String!,$name: String!,$password: String!) {
        register(email: $email,name: $name,password: $password) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `
        : defaultQuery;

      return abortableQuery(queryTemplate, true, false);
    },
  };
};
