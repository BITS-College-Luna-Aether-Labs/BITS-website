/** CMS API response types — mirrors the shapes from BITS-CMS/src/DB/post.ts */

export type CmsMediaType = "IMAGE" | "VIDEO" | "YOUTUBE";

export type CmsPostMedia = {
  type: CmsMediaType;
  mediaId: number | null;
  url: string | null;
  embedUrl: string | null;
  mimeType: string | null;
};

export type CmsReadMoreMedia = CmsPostMedia & {
  position: number;
};

export type CmsReadMore = {
  title: string;
  content: string;
  media: CmsReadMoreMedia[];
  createdAt: string;
  updatedAt: string;
};

export type CmsPostListItem = {
  postId: number;
  adminId: number;
  title: string;
  content: string;
  publishedDate: string;
  slug: string;
  hasReadMore: boolean;
  isDeleted: boolean;
  media: CmsPostMedia;
  createdAt: string;
  updatedAt: string;
};

export type CmsPostDetail = CmsPostListItem & {
  readMore: CmsReadMore | null;
};

export type CmsPagination = {
  page: number;
  limit: number;
  total: number;
};

export type CmsEnvelope<T> = {
  data: T;
  message: string;
};

export type CmsPaginatedEnvelope<T> = {
  data: T;
  pagination: CmsPagination;
  message: string;
};
