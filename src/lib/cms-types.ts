export type CmsMediaType = "IMAGE" | "VIDEO" | "YOUTUBE";

export type CmsPostMedia = {
  type: CmsMediaType;
  mediaId: number | null;
  url: string | null;
  embedUrl: string | null;
  mimeType: string | null;
};

export type CmsReadMoreMedia = {
  position: number;
  type: CmsMediaType;
  mediaId: number | null;
  url: string | null;
  embedUrl: string | null;
  mimeType: string | null;
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
  href?: string;
  noButton?: boolean;
};

export type CmsPostDetail = CmsPostListItem & {
  readMore: CmsReadMore | null;
};

export type CmsPaginatedEnvelope<T> = {
  data: T;
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
  message: string;
};

export type CmsEnvelope<T> = {
  data: T;
  message: string;
};
