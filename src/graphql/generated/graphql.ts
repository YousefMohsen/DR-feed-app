import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client/react';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ColorTheme: { input: any; output: any; }
  Date: { input: any; output: any; }
  HTML: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Markup: { input: any; output: any; }
  URL: { input: any; output: any; }
};

export type Agent = {
  /** An image representing the agent. */
  image?: Maybe<Image>;
  /** A unique URN identifier. */
  urn: Scalars['String']['output'];
};

export type Article = Expression & Publishable & Resource & {
  __typename?: 'Article';
  /** This attribute defines the app identifier in Apple App Store for an app associated to the rendered article page.  It is used by a browser to trigger an advertisement for a related native app when using a browser that supports consuming this information. This attribute often contains denormalized information from the article's site. */
  appleAppStoreId?: Maybe<Scalars['String']['output']>;
  /**
   * An article specific Apple Itunes app id
   * @deprecated Use appleAppStoreId instead.
   */
  appleItunesApp?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use format instead. */
  articleType?: Maybe<ArticleType>;
  /** Properties specific to the article type */
  articleTypeProperties?: Maybe<ArticleTypeProperties>;
  /** @deprecated Use contributions instead. */
  authors?: Maybe<Array<Maybe<ArticleAuthor>>>;
  body: Array<Maybe<ArticleBodyComponent>>;
  /**
   * An ordered list of building blocks that comprises the content of the article. Null items must be ignored.
   * @deprecated Experimental, do not use.
   */
  body2?: Maybe<Array<Maybe<ArticleBodyComponent>>>;
  /**
   * An ordered list of building blocks that comprises the content of the article. Null items must be ignored.
   * @deprecated Experimental, do not use.
   */
  body3?: Maybe<Array<Maybe<ArticleBodyComponent>>>;
  breaking?: Maybe<Scalars['Boolean']['output']>;
  /** An editorial given changed date of the article for presentational use. */
  changedDate?: Maybe<Scalars['String']['output']>;
  /** Content Genre */
  contentGenre?: Maybe<Scalars['String']['output']>;
  /** Metadata related to data analytics */
  contentKeywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** An ordered list of creative contributions. */
  contributions?: Maybe<Array<Maybe<ArticleContribution>>>;
  /**
   * An article specific Facebook app id
   * @deprecated Not used anymore.
   */
  fbAppId?: Maybe<Scalars['String']['output']>;
  /** The article format of this article. */
  format: ArticleFormat;
  glossary?: Maybe<Array<Maybe<ArticleGlossaryMatch>>>;
  /**
   * An article specific Google Play app id
   * @deprecated Use googlePlayId instead.
   */
  googlePlayApp?: Maybe<Scalars['String']['output']>;
  /** This attribute defines the app identifier in Google Play for an app associated to the rendered article page.  It is used by a browser to trigger an advertisement for a related native app when using a browser that supports consuming this information. This attribute often contains denormalized information from the article's site. */
  googlePlayId?: Maybe<Scalars['String']['output']>;
  /** A list of building blocks that comprises the main content of the article. */
  head?: Maybe<Array<Maybe<ArticleHeadComponent>>>;
  /** Metadata related to SEO */
  indexingMetadata?: Maybe<SearchEngineIndexingMetadata>;
  /** This is true if the article is a shadow-article */
  isShadowArticle?: Maybe<Scalars['Boolean']['output']>;
  live?: Maybe<Scalars['Boolean']['output']>;
  /** Liveblog data if Live article type and liveblog in article body */
  liveBlog?: Maybe<LiveBlog>;
  /** @deprecated Use head instead. */
  mainAsset?: Maybe<ArticleMainAsset>;
  /** @deprecated Use format instead. */
  presentationType?: Maybe<Scalars['String']['output']>;
  /** A list of available publications */
  publications: Array<Maybe<Publication>>;
  published?: Maybe<Scalars['Boolean']['output']>;
  /** The location where this article is intended to be published. It is not the actual publication. However, the publication object can be inspired by this data. */
  site?: Maybe<Site>;
  /** An editorial given start date for presentational use. */
  startDate?: Maybe<Scalars['String']['output']>;
  /** A plain text subhead of this article. An introductory, summary line, brief paragraph intended to be located below the headline, and typographically distinct from the body. */
  summary?: Maybe<Scalars['String']['output']>;
  /** A teaser representation of the article */
  teaser?: Maybe<ArticleTeaser>;
  /** The image used when spotting or teasing the article with an image. */
  teaserImage?: Maybe<ArticleImage>;
  /** @deprecated Use head instead. */
  teaserVideo?: Maybe<ArticleMedia>;
  /** A teletext expression of this article. */
  teletext?: Maybe<ArticleTeletext>;
  /** Text-field from Mimer */
  text?: Maybe<Scalars['String']['output']>;
  /** A plain text headline of this article. */
  title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use urlPathId instead. */
  url?: Maybe<Scalars['URL']['output']>;
  /** a unique human-readable identifier that identifies the article. It can be used to contstruct an url */
  urlPathId?: Maybe<Scalars['URL']['output']>;
  /** A unique URN identifier. */
  urn: Scalars['String']['output'];
  /** A derived word count of the article body. */
  wordCount?: Maybe<Scalars['Int']['output']>;
  yarn?: Maybe<Yarn>;
};


export type ArticleAuthorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticleContributionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleAuthor = {
  __typename?: 'ArticleAuthor';
  email?: Maybe<Scalars['String']['output']>;
  image?: Maybe<ArticleImage>;
  name?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  urn: Scalars['String']['output'];
};

export type ArticleBodyComponent = CodeComponent | EmphasizedListComponent | FactBoxComponent | FilesComponent | HeadingComponent | ImageCollectionComponent | ImageCompareComponent | ImageComponent | ListComponent | MediaComponent | OEmbedComponent | ParagraphComponent | QuoteComponent | ReadMoreLinkComponent | SpotComponent | TvLinkComponent | UserUploadComponent;

export type ArticleCodeComponent = {
  __typename?: 'ArticleCodeComponent';
  html?: Maybe<Scalars['String']['output']>;
};

/** A contribution to an article. */
export type ArticleContribution = Contribution & {
  __typename?: 'ArticleContribution';
  /** The contributing agent. */
  agent?: Maybe<Agent>;
  /** A prefix to be used when displaying a byline for this contribution. */
  bylinePrefix?: Maybe<Scalars['String']['output']>;
  /** The standalone prefix - i.e. "Af" - to be used when displaying a byline for this contribution. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** The role of this contribution. Either "Author" or "Expert". */
  role?: Maybe<Scalars['String']['output']>;
  /** The article author's description. */
  title?: Maybe<Scalars['String']['output']>;
  /** The article author's suffix. */
  titleSuffix?: Maybe<Scalars['String']['output']>;
};

/** The ArticleType defines the format of the Article. */
export enum ArticleFormat {
  ExpertArticleFormat = 'ExpertArticleFormat',
  FeatureArticleFormat = 'FeatureArticleFormat',
  InteractiveArticleFormat = 'InteractiveArticleFormat',
  LatestNewsArticleFormat = 'LatestNewsArticleFormat',
  ListArticleFormat = 'ListArticleFormat',
  LiveArticleFormat = 'LiveArticleFormat',
  OverviewArticleFormat = 'OverviewArticleFormat',
  PhotoFeatureArticleFormat = 'PhotoFeatureArticleFormat',
  RecipeArticleFormat = 'RecipeArticleFormat',
  ReelsFormat = 'ReelsFormat',
  ReviewArticleFormat = 'ReviewArticleFormat',
  StandardArticleFormat = 'StandardArticleFormat',
  VideoArticleFormat = 'VideoArticleFormat'
}

export type ArticleGlossaryMatch = {
  __typename?: 'ArticleGlossaryMatch';
  description?: Maybe<Scalars['String']['output']>;
  match?: Maybe<Scalars['String']['output']>;
  word?: Maybe<Scalars['String']['output']>;
};

export type ArticleHeadComponent = CodeComponent | ImageCollectionComponent | ImageComponent | MediaComponent | OEmbedComponent | RatingComponent | SpotComponent;

export type ArticleImage = {
  __typename?: 'ArticleImage';
  default?: Maybe<Image>;
  mobile?: Maybe<Image>;
};

export type ArticleImageCollection = {
  __typename?: 'ArticleImageCollection';
  images?: Maybe<Array<Maybe<ArticleImage>>>;
};

export type ArticleMainAsset = ArticleCodeComponent | ArticleImage | ArticleImageCollection | ArticleMedia | ArticleOEmbed;

export type ArticleMedia = {
  __typename?: 'ArticleMedia';
  /** Should this media start playback automatically */
  autoplay?: Maybe<Scalars['Boolean']['output']>;
  /** The description of the media */
  description?: Maybe<Scalars['String']['output']>;
  /** The media resource */
  resource?: Maybe<ArticleMediaResource>;
};

export type ArticleMediaResource = Channel | Clip | ClipBundle | LiveMedia | ProgramCard | ProgramCardBundle;

export type ArticleOEmbed = {
  __typename?: 'ArticleOEmbed';
  url?: Maybe<Scalars['URL']['output']>;
};

/** ArticlePublication represents the publication of a content item that is accessible on a service channel */
export type ArticlePublication = Publication & {
  __typename?: 'ArticlePublication';
  /** The intent that the rendering of this object is presented in a 'breaking' style. */
  breaking?: Maybe<Scalars['Boolean']['output']>;
  /** Content of the publication */
  content?: Maybe<Publishable>;
  /** The intent that the rendering of this object is presented in a 'live' style. */
  live?: Maybe<Scalars['Boolean']['output']>;
  /** The service channel where the publication is distributed from */
  serviceChannel?: Maybe<ServiceChannel>;
};

export type ArticleReelProperties = {
  __typename?: 'ArticleReelProperties';
  branding: ReelsArticleBranding;
  contextLabel?: Maybe<Scalars['String']['output']>;
  credit?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  link?: Maybe<LinkComponent>;
  moreReels: Array<Article>;
  spot?: Maybe<ReelSpot>;
};


export type ArticleReelPropertiesMoreReelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleSearchConnection = ResourceConnection & {
  __typename?: 'ArticleSearchConnection';
  edges: Array<ArticleSearchEdge>;
  nodes: Array<Maybe<Article>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ArticleSearchEdge = ResourceEdge & {
  __typename?: 'ArticleSearchEdge';
  node?: Maybe<Article>;
};

/** Teaser representation of an article */
export type ArticleTeaser = {
  __typename?: 'ArticleTeaser';
  teaserImage?: Maybe<ArticleImage>;
  teaserImages?: Maybe<Array<ArticleImage>>;
  teaserVideo?: Maybe<ArticleMedia>;
};

/** Teletext representation of an article */
export type ArticleTeletext = {
  __typename?: 'ArticleTeletext';
  /** Plain text article body */
  body?: Maybe<Scalars['String']['output']>;
  /** The title of the article */
  title?: Maybe<Scalars['String']['output']>;
};

export type ArticleType = {
  __typename?: 'ArticleType';
  /** @deprecated Don't use. */
  title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Don't use. */
  urn: Scalars['String']['output'];
};

export type ArticleTypeProperties = ArticleReelProperties;

export type BlogPost = {
  __typename?: 'BlogPost';
  /** Html content as a string */
  content?: Maybe<Scalars['String']['output']>;
  /** An identifier. */
  id?: Maybe<Scalars['String']['output']>;
  /** An editorial given start date for presentational use. */
  startDate?: Maybe<Scalars['String']['output']>;
  /** Title of the post. */
  title?: Maybe<Scalars['String']['output']>;
};

export type Channel = {
  __typename?: 'Channel';
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  urn?: Maybe<Scalars['String']['output']>;
};

export type Chef = {
  __typename?: 'Chef';
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
  urn: Scalars['String']['output'];
};

export type Clip = {
  __typename?: 'Clip';
  /** Alternative title */
  alternativeTitle?: Maybe<Scalars['String']['output']>;
  /** A JSON blob of all the content from ODACACHE */
  assets?: Maybe<Scalars['JSON']['output']>;
  /** Available container formats for the clip. */
  availableContainerFormats?: Maybe<Array<Scalars['String']['output']>>;
  /** Available formats for the clip. */
  availableFormats?: Maybe<Array<Scalars['String']['output']>>;
  /** Description of the clip */
  description?: Maybe<Scalars['String']['output']>;
  /** Duration of the clip in milliseconds' */
  durationInMilliseconds?: Maybe<Scalars['Int']['output']>;
  /** Whether the clip has embedded subtitles. */
  hasEmbeddedSubtitles?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the clip has subtitles. */
  hasSubtitles?: Maybe<Scalars['Boolean']['output']>;
  /** HLS stream if available. Ensures that the stream is in HLS format and prefers FMP4 as container format. */
  hlsStream?: Maybe<Stream>;
  /** Teaser image */
  image?: Maybe<Image>;
  /** Teaser image URL */
  imageUri?: Maybe<Scalars['String']['output']>;
  /** Whether the clip is downloadable. */
  isDownloadable?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the clip is DRM protected. */
  isDrmProtected?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the clip is geo restricted. */
  isGeoRestricted?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the clip is token restricted. */
  isTokenRestricted?: Maybe<Scalars['Boolean']['output']>;
  /** Managed image URL */
  managedImageUrl?: Maybe<Scalars['String']['output']>;
  /** If it is type 'StandardVideo' or 'StandardAudio' */
  mediaType?: Maybe<Scalars['String']['output']>;
  /** Preferred stream for the clip. */
  preferredStream?: Maybe<Stream>;
  presentationUri?: Maybe<Scalars['String']['output']>;
  /** All streams for the clip. */
  streams?: Maybe<Array<Maybe<Stream>>>;
  /** Languages of the subtitles. */
  subtitleLanguages?: Maybe<Array<Scalars['String']['output']>>;
  /** If it is targeted for 'articles', 'school' or 'other' */
  target?: Maybe<Scalars['String']['output']>;
  /** For use by the news app, if no encrypted' */
  teaserStream?: Maybe<Scalars['String']['output']>;
  /** For use by the news app' */
  teaserStreamEncrypted?: Maybe<Scalars['String']['output']>;
  /** Title for the clip. */
  title?: Maybe<Scalars['String']['output']>;
  /** A unique URN identifier. */
  urn?: Maybe<Scalars['String']['output']>;
};


export type ClipPreferredStreamArgs = {
  containerFormat?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
};

export type ClipBundle = {
  __typename?: 'ClipBundle';
  items?: Maybe<Array<Maybe<Clip>>>;
  title?: Maybe<Scalars['String']['output']>;
  urn?: Maybe<Scalars['String']['output']>;
};


export type ClipBundleItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** A component that represents low-level HTML to be streamed directly to the browser. */
export type CodeComponent = {
  __typename?: 'CodeComponent';
  /** The HTML document to be embedded. */
  html?: Maybe<Scalars['HTML']['output']>;
};

/** This class is used for having different images for different contexts. Implemented as a dictionary where the key denotes the context and the value denotes the image for that context. */
export type ContextImage = {
  __typename?: 'ContextImage';
  /** The entry in the image dictionary with the specified key. */
  image?: Maybe<Image>;
};


/** This class is used for having different images for different contexts. Implemented as a dictionary where the key denotes the context and the value denotes the image for that context. */
export type ContextImageImageArgs = {
  key: Scalars['String']['input'];
};

/** A creative contribution to a work or expression. */
export type Contribution = {
  /** The agent that made this contribution. */
  agent?: Maybe<Agent>;
  /** The role of this contribution. */
  role?: Maybe<Scalars['String']['output']>;
};

/** Metadata for a general DR.dk page. */
export type DrDkMetadata = {
  __typename?: 'DrDkMetadata';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  siteName?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
};

export type DrDkReelSpot = {
  __typename?: 'DrDkReelSpot';
  image?: Maybe<Image>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** Metadata for a DR Lyd page. */
export type DrLydMetadata = {
  __typename?: 'DrLydMetadata';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  siteName?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
};

export type DrLydReelSpot = {
  __typename?: 'DrLydReelSpot';
  image?: Maybe<Image>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** Metadata for a DR TV page. */
export type DrTvMetadata = {
  __typename?: 'DrTvMetadata';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  siteName?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
};

export type DrtvReelSpot = {
  __typename?: 'DrtvReelSpot';
  image?: Maybe<Image>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** A component that represents an emphasized list. */
export type EmphasizedListComponent = {
  __typename?: 'EmphasizedListComponent';
  items?: Maybe<Array<Maybe<EmphasizedListItem>>>;
};

/** A component that represents an item in an emphasized list. */
export type EmphasizedListItem = {
  __typename?: 'EmphasizedListItem';
  /** An ordered list of building blocks that comprises the content of the list item. */
  body?: Maybe<Array<Maybe<EmphasizedListItemBodyComponent>>>;
  /** A marker, e.g. a number, to be presented before the list item. */
  marker?: Maybe<Scalars['String']['output']>;
  /** A plain-text caption for the list item. */
  title?: Maybe<Scalars['String']['output']>;
};

export type EmphasizedListItemBodyComponent = CodeComponent | FactBoxComponent | FilesComponent | HeadingComponent | ImageCollectionComponent | ImageCompareComponent | ImageComponent | ListComponent | MediaComponent | OEmbedComponent | ParagraphComponent | QuoteComponent | ReadMoreLinkComponent | SpotComponent | TvLinkComponent | UserUploadComponent;

/** An episode of e.g. a TV or radio series */
export type Episode = {
  /** The description of the episode */
  description?: Maybe<Scalars['String']['output']>;
  /** The duration of the episode in milliseconds */
  duration?: Maybe<Scalars['Int']['output']>;
  /** Episode placing in the season */
  episodeNumber?: Maybe<Scalars['Int']['output']>;
  /** The season this episode belongs to */
  season?: Maybe<Season>;
  /** The series this episode belongs to */
  series?: Maybe<Series>;
  /** The title of the episode */
  title?: Maybe<Scalars['String']['output']>;
};

export type Expression = {
  /** A unique URN identifier. */
  urn: Scalars['String']['output'];
};

/** An expression of a fact box work. */
export type FactBox = Expression & Resource & {
  __typename?: 'FactBox';
  /** The markup for the content. */
  body?: Maybe<Scalars['Markup']['output']>;
  /** The presentation format of the fact box. */
  boxFormat?: Maybe<Scalars['String']['output']>;
  /** An ordered list of creative contributions. */
  contributions?: Maybe<Array<Maybe<FactBoxContribution>>>;
  /** An image inside the fact box. */
  image?: Maybe<ContextImage>;
  /** A caption for the fact box. */
  title?: Maybe<Scalars['String']['output']>;
  /** A unique URN identifier. Note: not implemented for this type yet. */
  urn: Scalars['String']['output'];
};


/** An expression of a fact box work. */
export type FactBoxContributionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** A component that represents a fact box. */
export type FactBoxComponent = {
  __typename?: 'FactBoxComponent';
  /** The fact box expression. */
  expression?: Maybe<FactBox>;
};

/** A contribution to a fact box. */
export type FactBoxContribution = Contribution & {
  __typename?: 'FactBoxContribution';
  /** The contributing agent. */
  agent?: Maybe<Agent>;
  /** A prefix to be used when displaying a byline for this contribution. */
  bylinePrefix?: Maybe<Scalars['String']['output']>;
  /** The role of this contribution. Currently not used. */
  role?: Maybe<Scalars['String']['output']>;
  /** The title of the contributing agent. */
  title?: Maybe<Scalars['String']['output']>;
};

/** A component that represents a collection of downloadable files. */
export type FilesComponent = {
  __typename?: 'FilesComponent';
  /** An ordered list of files that can be downloaded. */
  files?: Maybe<Array<Maybe<WebFile>>>;
  /** The caption of this file collection. */
  title?: Maybe<Scalars['String']['output']>;
};

/** The main front page */
export type FrontPage = {
  __typename?: 'FrontPage';
  /** Items and item groups for the automated news flow, in prioritized order */
  automatedContent: Array<FrontPageContent>;
  /** Items(articles and widgets) and item groups for the automated news flow, in prioritized order */
  automatedContentWidget: Array<FrontPageContent>;
  /** Items and item groups for the curated news flow, in prioritized order */
  curatedContent: Array<FrontPageContent>;
  /** Items(articles and widgets) and item groups for the curated news flow, in prioritized order */
  curatedContentWidget: Array<FrontPageContent>;
  /** Top stories for news overview */
  topStories: Array<FrontPageArticle>;
};


/** The main front page */
export type FrontPageTopStoriesArgs = {
  excludeReels?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** An article teaser */
export type FrontPageArticle = {
  __typename?: 'FrontPageArticle';
  /** The actual article */
  article?: Maybe<Article>;
  /**
   * Channel showing live stream for this teaser
   * @deprecated use liveMedia
   */
  channel?: Maybe<Channel>;
  /** Position of the item in Dr. edition */
  drEditionPosition?: Maybe<Scalars['Int']['output']>;
  /** The teaser image */
  image?: Maybe<Image>;
  /** Indicates whether an article teaser is in a group */
  layoutPositionInGroup?: Maybe<Scalars['Boolean']['output']>;
  /** Differentiate the visual presentation of the article teaser */
  layoutPositionType?: Maybe<Scalars['String']['output']>;
  /** Whether this article is currently live */
  live?: Maybe<Scalars['Boolean']['output']>;
  /** LiveMedia stream for this teaser */
  liveMedia?: Maybe<LiveMedia>;
  /** Show this article in the News App */
  newsApp?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Show this article on the News App live page
   * @deprecated to be removed after front page launch
   */
  newsAppLive?: Maybe<Scalars['Boolean']['output']>;
  /** Whether this article should have a prioritized design */
  prioritized?: Maybe<Scalars['Boolean']['output']>;
  /** A list of links to related articles */
  readMoreLinks?: Maybe<Array<FrontPageArticleReadMoreLink>>;
  /** Site title to override original article site title */
  siteTitle?: Maybe<Scalars['String']['output']>;
  /** Story data, if the teaser contains a story */
  story?: Maybe<Story>;
  /** Summary of the article teaser */
  summary?: Maybe<Scalars['String']['output']>;
  teaser: ArticleTeaser;
  /** Title of the article teaser */
  title?: Maybe<Scalars['String']['output']>;
  /** Title prefix */
  titlePrefix?: Maybe<Scalars['String']['output']>;
  /** Whether this should show the updated state */
  update?: Maybe<Scalars['Boolean']['output']>;
  /** URL of the article */
  url?: Maybe<Scalars['URL']['output']>;
  /** Style variant for the article teaser */
  variant?: Maybe<Scalars['String']['output']>;
};

/** A themed article bundle */
export type FrontPageArticleGroup = FrontPageItemGroup & {
  __typename?: 'FrontPageArticleGroup';
  /**
   * If group is breaking
   * @deprecated Use breakingLevel instead.
   */
  breaking?: Maybe<Scalars['Boolean']['output']>;
  /** The group's breaking level */
  breakingLevel?: Maybe<Scalars['String']['output']>;
  /** Image for the group */
  image?: Maybe<Image>;
  /** The items in this group */
  items: Array<FrontPageArticle>;
  /** Show this group in the News App */
  newsApp?: Maybe<Scalars['Boolean']['output']>;
  /** Number of secondary items */
  secondaryItemsAmount: Scalars['Int']['output'];
  /** The title of the group */
  title?: Maybe<Scalars['String']['output']>;
  /** The url of a theme frontpage */
  url?: Maybe<Scalars['URL']['output']>;
};


/** A themed article bundle */
export type FrontPageArticleGroupItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** A related link for an article teaser */
export type FrontPageArticleReadMoreLink = {
  __typename?: 'FrontPageArticleReadMoreLink';
  /** Label of the link */
  label?: Maybe<Scalars['String']['output']>;
  /** Title of the link */
  title?: Maybe<Scalars['String']['output']>;
  /** URL of the link */
  url?: Maybe<Scalars['URL']['output']>;
};

/** An article slider */
export type FrontPageArticleSlider = FrontPageItemGroup & {
  __typename?: 'FrontPageArticleSlider';
  items: Array<FrontPageArticle>;
  /** Show this group in the News App */
  newsApp?: Maybe<Scalars['Boolean']['output']>;
  /** The title of the group */
  title?: Maybe<Scalars['String']['output']>;
  /** The url of a theme frontpage */
  url?: Maybe<Scalars['URL']['output']>;
};


/** An article slider */
export type FrontPageArticleSliderItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type FrontPageContent = FrontPageArticle | FrontPageArticleGroup | FrontPageArticleSlider | FrontPageEndCurated | FrontPageGroup | FrontPageMarketing | FrontPageSlider | FrontPageSpot | FrontPageWidget | FrontPageWidgetCell;

/** A html widget */
export type FrontPageEndCurated = {
  __typename?: 'FrontPageEndCurated';
  /** Title for the marketing content */
  marketingTitle?: Maybe<Scalars['String']['output']>;
};

/** A themed article bundle */
export type FrontPageGroup = FrontPageItemGroup & {
  __typename?: 'FrontPageGroup';
  /**
   * If group is breaking
   * @deprecated Use breakingLevel instead.
   */
  breaking?: Maybe<Scalars['Boolean']['output']>;
  /** The group's breaking level */
  breakingLevel?: Maybe<Scalars['String']['output']>;
  /** Image for the group */
  image?: Maybe<Image>;
  /** The items in this group */
  items: Array<FrontPageContent>;
  /** Show this group in the News App */
  newsApp?: Maybe<Scalars['Boolean']['output']>;
  /** Number of secondary items */
  secondaryItemsAmount: Scalars['Int']['output'];
  /** The title of the group */
  title?: Maybe<Scalars['String']['output']>;
  /** The url of a theme frontpage */
  url?: Maybe<Scalars['URL']['output']>;
};


/** A themed article bundle */
export type FrontPageGroupItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** A group of items */
export type FrontPageItemGroup = {
  /** The items in the group */
  items: Array<FrontPageContent>;
  /** Show this group in the News App */
  newsApp?: Maybe<Scalars['Boolean']['output']>;
  /** Title of the group */
  title?: Maybe<Scalars['String']['output']>;
};


/** A group of items */
export type FrontPageItemGroupItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** A placeholder for at marketing banner */
export type FrontPageMarketing = {
  __typename?: 'FrontPageMarketing';
  /** An id generated by steffi, the first FrontPageMarketing occurance on the FrontPage will get id 1 and so fort */
  id?: Maybe<Scalars['Int']['output']>;
};

/** An article slider */
export type FrontPageSlider = FrontPageItemGroup & {
  __typename?: 'FrontPageSlider';
  items: Array<FrontPageContent>;
  /** Show this group in the News App */
  newsApp?: Maybe<Scalars['Boolean']['output']>;
  /** The title of the group */
  title?: Maybe<Scalars['String']['output']>;
  /** The url of a theme frontpage */
  url?: Maybe<Scalars['URL']['output']>;
};


/** An article slider */
export type FrontPageSliderItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** A spot */
export type FrontPageSpot = {
  __typename?: 'FrontPageSpot';
  /**
   * The spot article
   * @deprecated FrontPageSpot is deprecated use FrontPageArticleGroup instead
   */
  article?: Maybe<Article>;
  /**
   * The teaser image
   * @deprecated FrontPageSpot is deprecated use FrontPageArticleGroup instead
   */
  image?: Maybe<Image>;
  /**
   * Show this spot in the News App
   * @deprecated FrontPageSpot is deprecated use FrontPageArticleGroup instead
   */
  newsApp?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Summary of the spot
   * @deprecated FrontPageSpot is deprecated use FrontPageArticleGroup instead
   */
  summary?: Maybe<Scalars['String']['output']>;
  /**
   * Title of the spot
   * @deprecated FrontPageSpot is deprecated use FrontPageArticleGroup instead
   */
  title?: Maybe<Scalars['String']['output']>;
  /**
   * URL of the spot target
   * @deprecated FrontPageSpot is deprecated use FrontPageArticleGroup instead
   */
  url?: Maybe<Scalars['URL']['output']>;
};

/** A html widget */
export type FrontPageWidget = {
  __typename?: 'FrontPageWidget';
  /** Position of the item in Dr. edition */
  drEditionPosition?: Maybe<Scalars['Int']['output']>;
  /** If the widget should go to edge */
  fullwidth?: Maybe<Scalars['Boolean']['output']>;
  /** HTML content of the widget */
  html?: Maybe<Scalars['String']['output']>;
  /** Differentiate the visual presentation */
  layoutPositionType?: Maybe<Scalars['String']['output']>;
  /** Desktop placeholder height of the widget */
  placeholderDesktop?: Maybe<Scalars['String']['output']>;
  /** Mobile placeholder height of the widget */
  placeholderMobile?: Maybe<Scalars['String']['output']>;
  /** If the widget should be sandboxed in an iframe */
  sandbox?: Maybe<Scalars['Boolean']['output']>;
  /** Title for the component */
  title?: Maybe<Scalars['String']['output']>;
  /** URL of the widget */
  url?: Maybe<Scalars['URL']['output']>;
  /**  Title used outside the iframe for SEO */
  widgetTitle?: Maybe<Scalars['String']['output']>;
  /**  Title url used outside the iframe for SEO */
  widgetTitleUrl?: Maybe<Scalars['URL']['output']>;
};

/** A html widget - for use in frontpage flow, like groups, sliders or substitutes of teasers */
export type FrontPageWidgetCell = {
  __typename?: 'FrontPageWidgetCell';
  /** Position of the item in Dr. edition */
  drEditionPosition?: Maybe<Scalars['Int']['output']>;
  /** HTML content of the widget */
  html?: Maybe<Scalars['String']['output']>;
  /** Differentiate the visual presentation */
  layoutPositionType?: Maybe<Scalars['String']['output']>;
  /** Desktop placeholder height of the widget */
  placeholderDesktop?: Maybe<Scalars['String']['output']>;
  /** Mobile placeholder height of the widget */
  placeholderMobile?: Maybe<Scalars['String']['output']>;
  /** If the widget should be sandboxed in an iframe */
  sandbox?: Maybe<Scalars['Boolean']['output']>;
  /** Title for the component */
  title?: Maybe<Scalars['String']['output']>;
  /** URL of the widget */
  url?: Maybe<Scalars['URL']['output']>;
  /**  Title used outside the iframe for SEO */
  widgetTitle?: Maybe<Scalars['String']['output']>;
  /**  Title url used outside the iframe for SEO */
  widgetTitleUrl?: Maybe<Scalars['URL']['output']>;
};

/** Metadata for generic undetermined content. */
export type GenericMetadata = {
  __typename?: 'GenericMetadata';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  siteName?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
};

export type GenericReelSpot = {
  __typename?: 'GenericReelSpot';
  image?: Maybe<Image>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** An component that represents an intermediate heading. Not to be confused by the article headline or the article subhead. */
export type HeadingComponent = {
  __typename?: 'HeadingComponent';
  /** The plain text heading text. */
  text?: Maybe<Scalars['String']['output']>;
};

/** An image expression */
export type Image = Expression & Resource & {
  __typename?: 'Image';
  /** Alternative text describing the image */
  altText?: Maybe<Scalars['String']['output']>;
  /** BlurHash representation of the image */
  blurhash?: Maybe<Scalars['String']['output']>;
  /** The creative contributors of this image. Very often the photographer. */
  contributions: Array<Maybe<ImageContribution>>;
  /** Copyright label. Describes the copyright holder. */
  copyright?: Maybe<Scalars['String']['output']>;
  /** A caption to be displayed alongside the image. */
  description?: Maybe<Scalars['String']['output']>;
  /** The height of the image manifestation in pixels. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The URL of the image manifestation with a managed URL. */
  managedUrl?: Maybe<Scalars['URL']['output']>;
  /**
   * Photographer credits
   * @deprecated Use contributions instead.
   */
  photographer?: Maybe<Scalars['String']['output']>;
  /** URL of download page for the original image */
  pressPhotoUrl?: Maybe<Scalars['String']['output']>;
  /** The aspect ratio of the image that is editorially intended to be used for cropping, e.g. '16:9'. */
  ratio?: Maybe<Scalars['String']['output']>;
  /** The URL of the image manifestation. */
  url?: Maybe<Scalars['URL']['output']>;
  /**
   * A unique URN identifier.
   * @deprecated Not provided from source anymore.
   */
  urn: Scalars['String']['output'];
  /** The width of the image manifestation in pixels. */
  width?: Maybe<Scalars['Int']['output']>;
};

/** A component that represents a collection of images. */
export type ImageCollectionComponent = {
  __typename?: 'ImageCollectionComponent';
  /** An ordered list of images. */
  images?: Maybe<Array<Maybe<ContextImage>>>;
};

/** A component that represents a visual comparison of two images. */
export type ImageCompareComponent = {
  __typename?: 'ImageCompareComponent';
  /** A reference to the after image. */
  after?: Maybe<ContextImage>;
  /** A reference to the before image. */
  before?: Maybe<ContextImage>;
  /** A caption describing the before/after images. */
  caption?: Maybe<Scalars['String']['output']>;
};

/** A component that represents an image. */
export type ImageComponent = {
  __typename?: 'ImageComponent';
  /** The image. Valid context keys are "default" and "mobile". */
  image?: Maybe<ContextImage>;
  /** An editorial chosen value representating the significance of this object during rendering: low, default, high. */
  priority?: Maybe<Scalars['String']['output']>;
};

/** A contribution to an image. */
export type ImageContribution = Contribution & {
  __typename?: 'ImageContribution';
  /** The contributing agent. */
  agent?: Maybe<Agent>;
  /** The role of this contribution. Currently not used. */
  role?: Maybe<Scalars['String']['output']>;
};

/** A component that represents a link to some other content. */
export type LinkComponent = {
  __typename?: 'LinkComponent';
  /** The label of the link. */
  label?: Maybe<Scalars['String']['output']>;
  /** The text of the link. */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL target of the link. */
  url?: Maybe<Scalars['URL']['output']>;
};

/** A component that represents list content. */
export type ListComponent = {
  __typename?: 'ListComponent';
  /** An editorial rendering intent that determines whether the list should be boxed or not. */
  boxed?: Maybe<Scalars['Boolean']['output']>;
  /** The list content. */
  list?: Maybe<Scalars['Markup']['output']>;
  /** A plain-text caption for the list. */
  title?: Maybe<Scalars['String']['output']>;
};

export type LiveBlog = {
  __typename?: 'LiveBlog';
  /** An identifier. */
  id?: Maybe<Scalars['String']['output']>;
  /** The items in the blog */
  items?: Maybe<Array<Maybe<BlogPost>>>;
  /** An identifier of the last changes */
  lastChangesId?: Maybe<Scalars['Int']['output']>;
};


export type LiveBlogItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type LiveMedia = {
  __typename?: 'LiveMedia';
  /** A JSON blob of all the content, streams and subtitles */
  assets?: Maybe<Scalars['JSON']['output']>;
  /** Available container formats for the live media. */
  availableContainerFormats: Array<Scalars['String']['output']>;
  /** Available formats for the live media. */
  availableFormats: Array<Scalars['String']['output']>;
  /** HLS stream if available. Ensures that the stream is in HLS format and prefers FMP4 as container format. */
  hlsStream?: Maybe<Stream>;
  /** Teaser image */
  images?: Maybe<Scalars['JSON']['output']>;
  /** Whether the live media is DRM protected. */
  isDrmProtected: Scalars['Boolean']['output'];
  /** Whether the live media is geo restricted. */
  isGeoRestricted: Scalars['Boolean']['output'];
  /** Whether the live media is token restricted. */
  isTokenRestricted: Scalars['Boolean']['output'];
  /** If it is type 'Video' or 'Audio' */
  mediaType?: Maybe<Scalars['String']['output']>;
  /** Preferred stream for the live media. */
  preferredStream?: Maybe<Stream>;
  /** Human human-readable unique identifier. */
  slug?: Maybe<Scalars['String']['output']>;
  /** All streams for the live media. */
  streams: Array<Stream>;
  /** For use by the news app, if no encrypted' */
  teaserStream?: Maybe<Scalars['String']['output']>;
  /**
   * For use by the news app'
   * @deprecated Use teaserStream as Live should not be encrypted
   */
  teaserStreamEncrypted?: Maybe<Scalars['String']['output']>;
  /** Title for the clip. */
  title?: Maybe<Scalars['String']['output']>;
  /** A unique URN identifier. */
  urn?: Maybe<Scalars['String']['output']>;
};


export type LiveMediaPreferredStreamArgs = {
  containerFormat?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
};

/** An article component that represents audio or video content. The content can be a live stream or on-demand content. */
export type MediaComponent = {
  __typename?: 'MediaComponent';
  /** True when the editorial intent is to start playback automatically. */
  autoplay?: Maybe<Scalars['Boolean']['output']>;
  /** The caption of the media */
  caption?: Maybe<Scalars['String']['output']>;
  /** The audio or video resource. */
  resource?: Maybe<MediaResource>;
};

export type MediaResource = Channel | Clip | ClipBundle | LiveMedia | ProgramCard | ProgramCardBundle;

export type MusicArtist = Resource & {
  __typename?: 'MusicArtist';
  artistType?: Maybe<Scalars['String']['output']>;
  birthName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  latestPlays: Array<MusicTrackPlay>;
  lifespan?: Maybe<MusicArtistLifespan>;
  name?: Maybe<Scalars['String']['output']>;
  names: Array<MusicArtistName>;
  public?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Dont use */
  relatedResources: MusicArtistRelatedResourceConnection;
  relationships: Array<MusicArtistRelation>;
  spotifyId?: Maybe<Scalars['String']['output']>;
  tracks: Array<MusicTrackRole>;
  url?: Maybe<Scalars['URL']['output']>;
  urn: Scalars['String']['output'];
  weeks: Array<MusicArtistWeek>;
};


export type MusicArtistLatestPlaysArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  maxDays?: InputMaybe<Scalars['Int']['input']>;
};


export type MusicArtistRelatedResourcesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type MusicArtistRelationshipsArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MusicArtistTracksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  maxDays?: InputMaybe<Scalars['Int']['input']>;
};

export type MusicArtistLifespan = {
  __typename?: 'MusicArtistLifespan';
  begin?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['String']['output']>;
};

export type MusicArtistName = {
  __typename?: 'MusicArtistName';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameType?: Maybe<Scalars['String']['output']>;
};

export type MusicArtistRelatedResourceConnection = ResourceConnection & {
  __typename?: 'MusicArtistRelatedResourceConnection';
  edges: Array<MusicArtistRelatedResourceEdge>;
  nodes: Array<Maybe<Resource>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MusicArtistRelatedResourceEdge = ResourceEdge & {
  __typename?: 'MusicArtistRelatedResourceEdge';
  node?: Maybe<Resource>;
};

export type MusicArtistRelation = {
  __typename?: 'MusicArtistRelation';
  artist: MusicArtist;
  relationType: Scalars['String']['output'];
};

export type MusicArtistWeek = {
  __typename?: 'MusicArtistWeek';
  date?: Maybe<Scalars['String']['output']>;
  plays?: Maybe<Scalars['Int']['output']>;
};

export type MusicTrack = {
  __typename?: 'MusicTrack';
  artists: Array<MusicTrackRole>;
  isClassical?: Maybe<Scalars['Boolean']['output']>;
  latestPlay?: Maybe<MusicTrackPlay>;
  /** @deprecated No support after PSDB shutdown */
  latestPlayWithPresentationUri?: Maybe<MusicTrackPlay>;
  /** Count of plays on DR radio stations within the past X days */
  playCount?: Maybe<Scalars['Int']['output']>;
  plays: Array<MusicTrackPlay>;
  recordingYear?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  urn?: Maybe<Scalars['String']['output']>;
};


export type MusicTrackPlayCountArgs = {
  maxDays?: InputMaybe<Scalars['Int']['input']>;
};


export type MusicTrackPlaysArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type MusicTrackPlay = {
  __typename?: 'MusicTrackPlay';
  /** The channel this TrackPlay originated from */
  channel?: Maybe<Channel>;
  /**
   * startTime of track relative to the OD production it refers to in the programCard
   * @deprecated DR artist pages are not a music streaming service
   */
  offsetStartTime?: Maybe<Scalars['String']['output']>;
  /** @deprecated DR artist pages are not a music streaming service */
  programCard?: Maybe<ProgramCard>;
  /** the exact Date of the the play */
  startTime?: Maybe<Scalars['String']['output']>;
  track?: Maybe<MusicTrack>;
};

export type MusicTrackRole = {
  __typename?: 'MusicTrackRole';
  artist: MusicArtist;
  artistName?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  track: MusicTrack;
};

/** A component that represents embedded content. The OEmbed protocol is used for embedding. */
export type OEmbedComponent = {
  __typename?: 'OEmbedComponent';
  /** The URL of the content to embed. */
  url?: Maybe<Scalars['URL']['output']>;
};

/** Open Graph metadata for a page. */
export type PageMetadata = DrDkMetadata | DrLydMetadata | DrTvMetadata | GenericMetadata;

/** A component that represents paragraph content. */
export type ParagraphComponent = {
  __typename?: 'ParagraphComponent';
  /** The paragraph content. */
  body?: Maybe<Scalars['Markup']['output']>;
};

export type Person = Agent & {
  __typename?: 'Person';
  /** The email of the person. */
  email?: Maybe<Scalars['String']['output']>;
  /** An image representing the person. */
  image?: Maybe<Image>;
  /** The name of the person. */
  name?: Maybe<Scalars['String']['output']>;
  /** A unique URN identifier. */
  urn: Scalars['String']['output'];
};

export type PriorityList = Resource & {
  __typename?: 'PriorityList';
  resources?: Maybe<Array<Maybe<PriorityListResource>>>;
  title?: Maybe<Scalars['String']['output']>;
  urn: Scalars['String']['output'];
};


export type PriorityListResourcesArgs = {
  excludeReels?: InputMaybe<Scalars['Boolean']['input']>;
  filter: Array<PriorityListResourceFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyTeletext?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PriorityListResource = Article | Site | YarnTheme;

export enum PriorityListResourceFilter {
  Article = 'Article',
  Bundle = 'Bundle',
  Site = 'Site'
}

export type ProgramCard = {
  __typename?: 'ProgramCard';
  description?: Maybe<Scalars['String']['output']>;
  presentationUri?: Maybe<Scalars['String']['output']>;
  primaryAsset?: Maybe<ProgramCardAsset>;
  primaryBroadcastStartTime?: Maybe<Scalars['String']['output']>;
  primaryChannelSlug?: Maybe<Scalars['String']['output']>;
  primaryImageUri?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  urn?: Maybe<Scalars['String']['output']>;
};

export type ProgramCardAsset = {
  __typename?: 'ProgramCardAsset';
  durationInMilliseconds?: Maybe<Scalars['Int']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  startPublish?: Maybe<Scalars['String']['output']>;
};

export type ProgramCardBundle = {
  __typename?: 'ProgramCardBundle';
  items?: Maybe<Array<Maybe<ProgramCard>>>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  urn?: Maybe<Scalars['String']['output']>;
};


export type ProgramCardBundleItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** This interface represents the publication of a content item that is accessible on a service channel */
export type Publication = {
  /** Content of the publication */
  content?: Maybe<Publishable>;
  /** The service channel where the publication is distrubted from */
  serviceChannel?: Maybe<ServiceChannel>;
};

/** This interface represents publishable content. */
export type Publishable = {
  /** List of publications */
  publications: Array<Maybe<Publication>>;
};

export type Query = {
  __typename?: 'Query';
  /** Look up an article by its URN */
  article?: Maybe<Article>;
  /** Search in articles based on a string query and/or site URNs */
  articleSearch?: Maybe<ArticleSearchConnection>;
  articles?: Maybe<Array<Maybe<Article>>>;
  authorizeStreamAccess?: Maybe<StreamAuthorization>;
  chef?: Maybe<Chef>;
  clip?: Maybe<Clip>;
  currentTime?: Maybe<Scalars['String']['output']>;
  emergencyMessages?: Maybe<Array<Maybe<Article>>>;
  frontPage?: Maybe<FrontPage>;
  liveBlog?: Maybe<LiveBlog>;
  liveMedia?: Maybe<LiveMedia>;
  musicArtist?: Maybe<MusicArtist>;
  /** Look up page metadata for a given URL */
  pageMetadata?: Maybe<PageMetadata>;
  /** Look uo a Person by its URN */
  person?: Maybe<Person>;
  priorityList?: Maybe<PriorityList>;
  programCard?: Maybe<ProgramCard>;
  programCardBundle?: Maybe<ProgramCardBundle>;
  /** Look up a radio collection by its URN */
  radioCollection?: Maybe<RadioCollection>;
  /** Look up a radio episode by its URN */
  radioEpisode?: Maybe<RadioEpisode>;
  /** Look up a radio season by its URN */
  radioSeason?: Maybe<RadioSeason>;
  /** Look up a radio series by its URN */
  radioSeries?: Maybe<RadioSeries>;
  recipe?: Maybe<Recipe>;
  recipeCollection?: Maybe<RecipeCollection>;
  /** Get recommendations from Cxense */
  recommendations?: Maybe<RecommendationConnection>;
  resource?: Maybe<Resource>;
  resourceByPath?: Maybe<Resource>;
  resources?: Maybe<Array<Maybe<Resource>>>;
  resourcesByPaths?: Maybe<Array<Maybe<Resource>>>;
  search?: Maybe<SearchResultConnection>;
  site?: Maybe<Site>;
  siteFrontPage?: Maybe<SiteFrontPage>;
  sitePresentation?: Maybe<SitePresentation>;
  /**
   * Search in Sites based on a string query
   * @deprecated This endpoint is no longer supported.
   */
  siteSearch?: Maybe<SiteSearchConnection>;
  story?: Maybe<Story>;
  storyUrns?: Maybe<StoryUrns>;
  /** Look up a tv collection by urn */
  tvCollection?: Maybe<TvCollection>;
  webFeature?: Maybe<WebFeature>;
  yarn?: Maybe<Yarn>;
  /** Look up a YarnTheme by its URN */
  yarnTheme?: Maybe<YarnTheme>;
  yarnThemeFrontPage?: Maybe<YarnThemeFrontPage>;
  /** Search in YarnThemes based on a string query */
  yarnThemeSearch?: Maybe<YarnThemeSearchConnection>;
};


export type QueryArticleArgs = {
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  urn: Scalars['String']['input'];
};


export type QueryArticleSearchArgs = {
  articleTypeUrns?: InputMaybe<Array<Scalars['String']['input']>>;
  excludeReels?: InputMaybe<Scalars['Boolean']['input']>;
  excludeSites?: InputMaybe<Array<Scalars['String']['input']>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sites?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryArticlesArgs = {
  urns: Array<InputMaybe<Scalars['String']['input']>>;
};


export type QueryAuthorizeStreamAccessArgs = {
  acl: Scalars['String']['input'];
};


export type QueryChefArgs = {
  urn: Scalars['String']['input'];
};


export type QueryClipArgs = {
  urn: Scalars['String']['input'];
};


export type QueryEmergencyMessagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFrontPageArgs = {
  id: Scalars['String']['input'];
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLiveBlogArgs = {
  id: Scalars['String']['input'];
};


export type QueryLiveMediaArgs = {
  urn: Scalars['String']['input'];
};


export type QueryMusicArtistArgs = {
  urn: Scalars['String']['input'];
};


export type QueryPageMetadataArgs = {
  url: Scalars['String']['input'];
};


export type QueryPersonArgs = {
  urn: Scalars['String']['input'];
};


export type QueryPriorityListArgs = {
  urn: Scalars['String']['input'];
};


export type QueryProgramCardArgs = {
  urn: Scalars['String']['input'];
};


export type QueryProgramCardBundleArgs = {
  urn: Scalars['String']['input'];
};


export type QueryRadioCollectionArgs = {
  urn: Scalars['String']['input'];
};


export type QueryRadioEpisodeArgs = {
  urn: Scalars['String']['input'];
};


export type QueryRadioSeasonArgs = {
  urn: Scalars['String']['input'];
};


export type QueryRadioSeriesArgs = {
  urn: Scalars['String']['input'];
};


export type QueryRecipeArgs = {
  urn: Scalars['String']['input'];
};


export type QueryRecipeCollectionArgs = {
  urn: Scalars['String']['input'];
};


export type QueryRecommendationsArgs = {
  context?: InputMaybe<Scalars['JSON']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  widgetId: Scalars['String']['input'];
};


export type QueryResourceArgs = {
  urn: Scalars['String']['input'];
};


export type QueryResourceByPathArgs = {
  path: Scalars['String']['input'];
};


export type QueryResourcesArgs = {
  urns: Array<Scalars['String']['input']>;
};


export type QueryResourcesByPathsArgs = {
  paths: Array<Scalars['String']['input']>;
};


export type QuerySearchArgs = {
  children?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Array<SearchFilter>>;
  limit: Scalars['Int']['input'];
  logQuery?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<Scalars['String']['input']>>;
  query: Scalars['String']['input'];
  sites?: InputMaybe<Array<Scalars['String']['input']>>;
  sort?: InputMaybe<SearchSort>;
  strict?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySiteArgs = {
  urn: Scalars['String']['input'];
};


export type QuerySiteFrontPageArgs = {
  urn: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySitePresentationArgs = {
  urn: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySiteSearchArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QueryStoryArgs = {
  slug: Scalars['String']['input'];
};


export type QueryStoryUrnsArgs = {
  slug: Scalars['String']['input'];
};


export type QueryTvCollectionArgs = {
  urn: Scalars['String']['input'];
};


export type QueryWebFeatureArgs = {
  urn: Scalars['String']['input'];
};


export type QueryYarnArgs = {
  urn: Scalars['String']['input'];
};


export type QueryYarnThemeArgs = {
  urn: Scalars['String']['input'];
};


export type QueryYarnThemeFrontPageArgs = {
  urn: Scalars['String']['input'];
};


export type QueryYarnThemeSearchArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};

/** A component that represents quotation content. */
export type QuoteComponent = {
  __typename?: 'QuoteComponent';
  /** The quote content. */
  body?: Maybe<Scalars['Markup']['output']>;
  /** The source of the quote. */
  citation?: Maybe<Scalars['String']['output']>;
  /** An editorial chosen value representing the significance of this object during rendering: high, default. */
  priority?: Maybe<Scalars['String']['output']>;
};

export type RadioCollection = {
  __typename?: 'RadioCollection';
  /** Items within this collection */
  items: RadioCollectionResourceConnection;
  /** Collection title */
  title?: Maybe<Scalars['String']['output']>;
};


export type RadioCollectionItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type RadioCollectionResource = RadioEpisode | RadioSeason | RadioSeries;

export type RadioCollectionResourceConnection = {
  __typename?: 'RadioCollectionResourceConnection';
  edges: Array<RadioCollectionResourceEdge>;
  nodes: Array<RadioCollectionResource>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type RadioCollectionResourceEdge = {
  __typename?: 'RadioCollectionResourceEdge';
  node?: Maybe<RadioCollectionResource>;
};

/** An episode of a radio series */
export type RadioEpisode = Episode & Resource & {
  __typename?: 'RadioEpisode';
  /** The description of this radio episode */
  description?: Maybe<Scalars['String']['output']>;
  /** The duration of this radio episode in milliseconds */
  duration?: Maybe<Scalars['Int']['output']>;
  /** Episode placing in the season */
  episodeNumber?: Maybe<Scalars['Int']['output']>;
  /** An image for this radio episode */
  image?: Maybe<Image>;
  /** The primary live channel this radio episode belongs to */
  liveMedia?: Maybe<LiveMedia>;
  /** The date and time of when the resource were published/aired */
  publishedDate?: Maybe<Scalars['Date']['output']>;
  /**
   * The season this episode belongs to
   * @deprecated Not ported after change to radio v2
   */
  season?: Maybe<RadioSeason>;
  /** The radio series this episode belongs to */
  series?: Maybe<RadioSeries>;
  /** An 1:1 image for this radio episode */
  squareImage?: Maybe<Image>;
  /** The title of this radio episode */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL to the web page for this radio episode */
  url?: Maybe<Scalars['URL']['output']>;
  /** The URN of this radio episode */
  urn: Scalars['String']['output'];
};

/** A season of a radio series */
export type RadioSeason = Resource & Season & {
  __typename?: 'RadioSeason';
  /** The description of this radio season */
  description?: Maybe<Scalars['String']['output']>;
  /** The episode in this radio season */
  episodes: RadioSeasonEpisodeConnection;
  /** The image of the season */
  image?: Maybe<Image>;
  /** The primary live channel this radio season belongs to */
  liveMedia?: Maybe<LiveMedia>;
  /** The radio series this season belongs to */
  series?: Maybe<RadioSeries>;
  /** The 1:1 image of the season */
  squareImage?: Maybe<Image>;
  /** The title of this radio season */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL to the web page for this radio season */
  url?: Maybe<Scalars['URL']['output']>;
  /** The URN of the radio season */
  urn: Scalars['String']['output'];
};


/** A season of a radio series */
export type RadioSeasonEpisodesArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type RadioSeasonEpisodeConnection = SeasonEpisodeConnection & {
  __typename?: 'RadioSeasonEpisodeConnection';
  edges: Array<RadioSeasonEpisodeEdge>;
  nodes: Array<RadioEpisode>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type RadioSeasonEpisodeEdge = SeasonEpisodeEdge & {
  __typename?: 'RadioSeasonEpisodeEdge';
  node: RadioEpisode;
};

/** A radio series */
export type RadioSeries = Resource & Series & {
  __typename?: 'RadioSeries';
  /** The description of this radio series */
  description?: Maybe<Scalars['String']['output']>;
  /** The episodes in this radio series */
  episodes: RadioSeriesEpisodeConnection;
  /** The image of the series */
  image?: Maybe<Image>;
  /** The primary live channel this radio series belongs to */
  liveMedia?: Maybe<LiveMedia>;
  /**
   * The seasons in this radio series
   * @deprecated Not ported after change to radio v2
   */
  seasons: RadioSeriesSeasonConnection;
  /** The 1:1 image of the series */
  squareImage?: Maybe<Image>;
  /** The title of this radio series */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL of the web page for this radio series */
  url?: Maybe<Scalars['URL']['output']>;
  /** The URN of this radio series */
  urn: Scalars['String']['output'];
};


/** A radio series */
export type RadioSeriesEpisodesArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


/** A radio series */
export type RadioSeriesSeasonsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type RadioSeriesEpisodeConnection = SeriesEpisodeConnection & {
  __typename?: 'RadioSeriesEpisodeConnection';
  edges: Array<RadioSeriesEpisodeEdge>;
  nodes: Array<RadioEpisode>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type RadioSeriesEpisodeEdge = SeriesEpisodeEdge & {
  __typename?: 'RadioSeriesEpisodeEdge';
  node: RadioEpisode;
};

export type RadioSeriesSeasonConnection = SeriesSeasonConnection & {
  __typename?: 'RadioSeriesSeasonConnection';
  edges: Array<RadioSeriesSeasonEdge>;
  nodes: Array<RadioSeason>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type RadioSeriesSeasonEdge = SeriesSeasonEdge & {
  __typename?: 'RadioSeriesSeasonEdge';
  node: RadioSeason;
};

export type RadioSpot = Spot & {
  __typename?: 'RadioSpot';
  /** An editorially defined string that labels this object for ARIA (Accessible Rich Internet Applications) usage. */
  ariaLabel?: Maybe<Scalars['String']['output']>;
  /** The branding channel for this spot. E.g. used for displaying the channel ident. */
  brandingChannel?: Maybe<Channel>;
  /** The branding channel for this spot. E.g. used for displaying the channel ident. From LiveStream api */
  brandingChannelLive?: Maybe<LiveMedia>;
  /** A contextual image for this spot. */
  image?: Maybe<ContextImage>;
  /** Primary label text for this spot. */
  label?: Maybe<Scalars['String']['output']>;
  /** The url that is promoted. */
  promotesUrl?: Maybe<Scalars['URL']['output']>;
  /** Secondary label text for this spot. */
  secondaryLabel?: Maybe<Scalars['String']['output']>;
  /** A plain-text title for this spot. */
  title?: Maybe<Scalars['String']['output']>;
  /** A video to be displayed with this spot. */
  videoResource?: Maybe<MediaResource>;
};

/** A component that represents a review rating. */
export type RatingComponent = {
  __typename?: 'RatingComponent';
  /** The rating. */
  rating?: Maybe<Scalars['Int']['output']>;
};

/** A component that represents a link to some other content. */
export type ReadMoreLinkComponent = {
  __typename?: 'ReadMoreLinkComponent';
  /** The label of the link. */
  label?: Maybe<Scalars['String']['output']>;
  /** The text of the link. */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL target of the link. */
  url?: Maybe<Scalars['URL']['output']>;
};

export type Recipe = Resource & {
  __typename?: 'Recipe';
  author?: Maybe<Scalars['String']['output']>;
  chefs: Array<Chef>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  startDate?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
  urn: Scalars['String']['output'];
};

export type RecipeCollection = {
  __typename?: 'RecipeCollection';
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
  urn: Scalars['String']['output'];
};

export type RecommendationConnection = ResourceConnection & {
  __typename?: 'RecommendationConnection';
  edges: Array<RecommendationEdge>;
  nodes: Array<Maybe<Resource>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type RecommendationEdge = ResourceEdge & {
  __typename?: 'RecommendationEdge';
  articleId?: Maybe<Scalars['String']['output']>;
  clickUrl: Scalars['String']['output'];
  node?: Maybe<Resource>;
};

export type ReelSpot = DrDkReelSpot | DrLydReelSpot | DrtvReelSpot | GenericReelSpot;

export type ReelsArticleBranding = {
  __typename?: 'ReelsArticleBranding';
  colors: Scalars['ColorTheme']['output'];
  image?: Maybe<Image>;
};

/** A resource that can be identified by a URN */
export type Resource = {
  /** A unique URN identifier. */
  urn: Scalars['String']['output'];
};

export type ResourceConnection = {
  edges: Array<ResourceEdge>;
  nodes: Array<Maybe<Resource>>;
};

export type ResourceEdge = {
  node?: Maybe<Resource>;
};

export type SearchEngineIndexingMetadata = {
  __typename?: 'SearchEngineIndexingMetadata';
  description?: Maybe<Scalars['String']['output']>;
  robots?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum SearchFilter {
  Article = 'Article',
  MusicArtist = 'MusicArtist',
  RadioEpisode = 'RadioEpisode',
  Recipe = 'Recipe',
  TvEpisode = 'TVEpisode',
  TvProgram = 'TVProgram',
  TvSeason = 'TVSeason',
  TvSeries = 'TVSeries'
}

export type SearchResultConnection = ResourceConnection & {
  __typename?: 'SearchResultConnection';
  edges: Array<SearchResultEdge>;
  nodes: Array<Maybe<Resource>>;
  spellCheck: Array<Scalars['String']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type SearchResultEdge = ResourceEdge & {
  __typename?: 'SearchResultEdge';
  node?: Maybe<Resource>;
};

export enum SearchSort {
  PublishTime = 'PublishTime',
  Relevance = 'Relevance'
}

/** A season of e.g. a TV or radio series */
export type Season = {
  /** The episodes in this season */
  episodes: SeasonEpisodeConnection;
  /** The series this season belongs to */
  series?: Maybe<Series>;
  /** The title of the season */
  title?: Maybe<Scalars['String']['output']>;
};


/** A season of e.g. a TV or radio series */
export type SeasonEpisodesArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type SeasonEpisodeConnection = {
  edges: Array<SeasonEpisodeEdge>;
  nodes: Array<Episode>;
};

export type SeasonEpisodeEdge = {
  node: Episode;
};

/** A series, e.g. a TV or radio series */
export type Series = {
  /** The episodes in this series */
  episodes: SeriesEpisodeConnection;
  /** The seasons in this series */
  seasons: SeriesSeasonConnection;
  /** The title of the series */
  title?: Maybe<Scalars['String']['output']>;
};


/** A series, e.g. a TV or radio series */
export type SeriesEpisodesArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


/** A series, e.g. a TV or radio series */
export type SeriesSeasonsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type SeriesEpisodeConnection = {
  edges: Array<SeriesEpisodeEdge>;
  nodes: Array<Episode>;
};

export type SeriesEpisodeEdge = {
  node: Episode;
};

export type SeriesSeasonConnection = {
  edges: Array<SeriesSeasonEdge>;
  nodes: Array<Season>;
};

export type SeriesSeasonEdge = {
  node: Season;
};

/** This interface represents a service channel where content can be consumed from. */
export type ServiceChannel = {
  /** The latest publications published on this site */
  publications: Array<Maybe<Publication>>;
  /** A unique URN identifier. */
  urn: Scalars['String']['output'];
};


/** This interface represents a service channel where content can be consumed from. */
export type ServiceChannelPublicationsArgs = {
  limit: Scalars['Int']['input'];
};

export type Site = Resource & ServiceChannel & {
  __typename?: 'Site';
  /** iOS and Android app IDs packaged in a JSON structure. */
  app?: Maybe<Scalars['JSON']['output']>;
  /**
   * The latest articles published on this site
   * @deprecated Use publications
   */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** @deprecated Use presentation.colors */
  colors?: Maybe<Scalars['JSON']['output']>;
  /** The description of the site. */
  description?: Maybe<Scalars['String']['output']>;
  mainSite?: Maybe<Site>;
  menu?: Maybe<SiteMenu>;
  /**
   * JSON structure that defines the page structure of the page types of this site.
   * @deprecated Use presentation.bottomWidget and presentation.recentArticlesList
   */
  pages?: Maybe<Scalars['JSON']['output']>;
  /** The parent of this site in regards to the site hierarchy. Corresponds to the Site.childSites relation described in logical data model, but reversed. */
  parentSite?: Maybe<Site>;
  /** Flattened list of all parent sites, ordered by distance from this site. Can be used to avoid recursively querying parentSite. */
  parentSites?: Maybe<Array<Site>>;
  presentation?: Maybe<SitePresentation>;
  /** The latest publications published on this site */
  publications: Array<Maybe<Publication>>;
  siteFrontPage?: Maybe<SiteFrontPage>;
  /** The plain text title of the site. */
  title?: Maybe<Scalars['String']['output']>;
  /** The url of the front page of the site. */
  url?: Maybe<Scalars['URL']['output']>;
  /** A unique URN identifier. */
  urn: Scalars['String']['output'];
};


export type SiteArticlesArgs = {
  includeSubSites?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  onlyTeletext?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SitePublicationsArgs = {
  excludeReels?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubSites?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  onlyTeletext?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SiteFrontPage = Resource & {
  __typename?: 'SiteFrontPage';
  content: Array<SiteFrontPageContent>;
  /** Metadata related to SEO. */
  indexingMetadata?: Maybe<SearchEngineIndexingMetadata>;
  newsFlow?: Maybe<SiteFrontPageNewsFlow>;
  /** @deprecated Use indexingMetaData and site title/description instead */
  openGraph?: Maybe<SiteFrontPageOpenGraph>;
  site?: Maybe<Site>;
  template?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
  urn: Scalars['String']['output'];
};

/** SiteFrontPageContentThemeList is deprecated and should be removed later */
export type SiteFrontPageContent = SiteFrontPageContentCodeComponent | SiteFrontPageContentExternalWidget | SiteFrontPageContentLatestNews | SiteFrontPageContentList | SiteFrontPageContentMediaWidget | SiteFrontPageContentNewsFlowPlaceholder | SiteFrontPageContentPriorityList | SiteFrontPageContentRecentArticleBand | SiteFrontPageContentSearch | SiteFrontPageContentSiteList | SiteFrontPageContentSpot | SiteFrontPageContentThemeFrontPageList | SiteFrontPageContentThemeList | SiteFrontPageContentUserUpload | SiteFrontPageContentYarnThemeBand;

export type SiteFrontPageContentCodeComponent = {
  __typename?: 'SiteFrontPageContentCodeComponent';
  html?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SiteFrontPageContentExternalWidget = {
  __typename?: 'SiteFrontPageContentExternalWidget';
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
};

/** A component displaying the latest news */
export type SiteFrontPageContentLatestNews = {
  __typename?: 'SiteFrontPageContentLatestNews';
  /** A list of the latest articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** A list of pinned articles */
  pinnedArticles?: Maybe<Array<Maybe<Article>>>;
  /** The title of the latest news component */
  title?: Maybe<Scalars['String']['output']>;
  /** The destination URL for the title link */
  url?: Maybe<Scalars['URL']['output']>;
};


/** A component displaying the latest news */
export type SiteFrontPageContentLatestNewsArticlesArgs = {
  excludeReels?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


/** A component displaying the latest news */
export type SiteFrontPageContentLatestNewsPinnedArticlesArgs = {
  excludeReels?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type SiteFrontPageContentList = {
  __typename?: 'SiteFrontPageContentList';
  articles?: Maybe<Array<Maybe<Article>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type SiteFrontPageContentListArticlesArgs = {
  excludeReels?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type SiteFrontPageContentMediaWidget = {
  __typename?: 'SiteFrontPageContentMediaWidget';
  /** @deprecated No support after PSDB shutdown */
  bundle?: Maybe<ProgramCardBundle>;
  /** @deprecated No support after PSDB shutdown */
  title?: Maybe<Scalars['String']['output']>;
};

export type SiteFrontPageContentNewsFlowPlaceholder = {
  __typename?: 'SiteFrontPageContentNewsFlowPlaceholder';
  articleCount?: Maybe<Scalars['Int']['output']>;
};

export type SiteFrontPageContentPriorityList = {
  __typename?: 'SiteFrontPageContentPriorityList';
  articles?: Maybe<Array<Maybe<Article>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type SiteFrontPageContentPriorityListArticlesArgs = {
  excludeReels?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type SiteFrontPageContentRecentArticleBand = {
  __typename?: 'SiteFrontPageContentRecentArticleBand';
  site?: Maybe<Site>;
};

/** A search field component for searching content from a specific site */
export type SiteFrontPageContentSearch = {
  __typename?: 'SiteFrontPageContentSearch';
  /** The placeholder text for the search input field */
  placeholder?: Maybe<Scalars['String']['output']>;
  /** The site in which to search for content */
  site?: Maybe<Site>;
  /** A title for the search component */
  title?: Maybe<Scalars['String']['output']>;
};

export type SiteFrontPageContentSiteList = {
  __typename?: 'SiteFrontPageContentSiteList';
  sites?: Maybe<Array<Maybe<SiteFrontPageContentSiteListSite>>>;
};

export type SiteFrontPageContentSiteListSite = {
  __typename?: 'SiteFrontPageContentSiteListSite';
  site?: Maybe<Site>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SiteFrontPageContentSpot = {
  __typename?: 'SiteFrontPageContentSpot';
  article?: Maybe<Article>;
};

/**
 * A list of ThemeFrontPages from that particular site.
 * Draws data from Mimer given a site URN.
 */
export type SiteFrontPageContentThemeFrontPageList = {
  __typename?: 'SiteFrontPageContentThemeFrontPageList';
  themeFrontPages: Array<YarnThemeFrontPage>;
  title?: Maybe<Scalars['String']['output']>;
};


/**
 * A list of ThemeFrontPages from that particular site.
 * Draws data from Mimer given a site URN.
 */
export type SiteFrontPageContentThemeFrontPageListThemeFrontPagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type SiteFrontPageContentThemeList = {
  __typename?: 'SiteFrontPageContentThemeList';
  themes: Array<YarnTheme>;
  title?: Maybe<Scalars['String']['output']>;
};


export type SiteFrontPageContentThemeListThemesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type SiteFrontPageContentUserUpload = {
  __typename?: 'SiteFrontPageContentUserUpload';
  button?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  emails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SiteFrontPageContentYarnThemeBand = {
  __typename?: 'SiteFrontPageContentYarnThemeBand';
  yarnTheme?: Maybe<YarnTheme>;
};

export type SiteFrontPageNewsFlow = {
  __typename?: 'SiteFrontPageNewsFlow';
  articles: Array<Article>;
  themeFrontPages: Array<YarnThemeFrontPage>;
  /** @deprecated Use themeFrontPages instead */
  themes: Array<YarnTheme>;
  type?: Maybe<Scalars['String']['output']>;
};


export type SiteFrontPageNewsFlowArticlesArgs = {
  excludeReels?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteFrontPageNewsFlowThemeFrontPagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteFrontPageNewsFlowThemesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type SiteFrontPageOpenGraph = {
  __typename?: 'SiteFrontPageOpenGraph';
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SiteMenu = {
  __typename?: 'SiteMenu';
  items: Array<SiteMenuItem>;
};

export type SiteMenuItem = {
  __typename?: 'SiteMenuItem';
  items: Array<SiteMenuItem>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
};

export type SitePresentation = {
  __typename?: 'SitePresentation';
  backdrop?: Maybe<SitePresentationBackdrop>;
  binge?: Maybe<Scalars['Boolean']['output']>;
  bottomWidget?: Maybe<SitePresentationBottomWidget>;
  colors?: Maybe<Scalars['ColorTheme']['output']>;
  contact?: Maybe<SitePresentationContact>;
  downloadImages?: Maybe<Scalars['Boolean']['output']>;
  /**
   * If the format of the site is short, currently including 'SHORT NEWS' and 'SHORT SPORT'
   * - until fully implemented - fallback to urn check
   */
  isShortFormat?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Image>;
  newsOverview?: Maybe<Scalars['Boolean']['output']>;
  newsletter?: Maybe<SitePresentationNewsletter>;
  /** A list of pinned articles */
  pinnedArticles?: Maybe<Array<Maybe<Article>>>;
  popularList?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The presentation type of the site - until fully implemented - fallback to urn check.
   * 0='', 1='Kort nyt', 2='Kort sport'
   */
  presentationType?: Maybe<Scalars['String']['output']>;
  recentArticlesList?: Maybe<SitePresentationRecentArticles>;
  recommendedArticlesList?: Maybe<Scalars['Boolean']['output']>;
  showTimestamp?: Maybe<Scalars['Boolean']['output']>;
  slimHeaderAndFooter?: Maybe<Scalars['Boolean']['output']>;
  socialMedia?: Maybe<SitePresentationSocialMedia>;
  teaserImage?: Maybe<ContextImage>;
  titleColor?: Maybe<Scalars['String']['output']>;
  uniLogin?: Maybe<Scalars['Boolean']['output']>;
  urn?: Maybe<Scalars['String']['output']>;
};


export type SitePresentationPinnedArticlesArgs = {
  excludeReels?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type SitePresentationBackdrop = {
  __typename?: 'SitePresentationBackdrop';
  /** @deprecated Use image instead. */
  default?: Maybe<SitePresentationBackdropSource>;
  image?: Maybe<ContextImage>;
  /** @deprecated Use image instead. */
  mobile?: Maybe<SitePresentationBackdropSource>;
};

export type SitePresentationBackdropSource = {
  __typename?: 'SitePresentationBackdropSource';
  managedUrl?: Maybe<Scalars['URL']['output']>;
  url: Scalars['URL']['output'];
};

export type SitePresentationBottomWidget = {
  __typename?: 'SitePresentationBottomWidget';
  url?: Maybe<Scalars['String']['output']>;
};

export type SitePresentationContact = {
  __typename?: 'SitePresentationContact';
  email?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SitePresentationNewsletter = {
  __typename?: 'SitePresentationNewsletter';
  buttonText?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  ids: Array<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SitePresentationRecentArticles = {
  __typename?: 'SitePresentationRecentArticles';
  site?: Maybe<Site>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SitePresentationSocialMedia = {
  __typename?: 'SitePresentationSocialMedia';
  facebook?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
};

export type SiteSearchConnection = ResourceConnection & {
  __typename?: 'SiteSearchConnection';
  edges: Array<SiteSearchEdge>;
  nodes: Array<Maybe<Site>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type SiteSearchEdge = ResourceEdge & {
  __typename?: 'SiteSearchEdge';
  node?: Maybe<Site>;
};

/** An interface for things that can be promote other content in a tile with an image and a title. */
export type Spot = {
  /** An editorially defined string that labels this object for ARIA (Accessible Rich Internet Applications) usage. */
  ariaLabel?: Maybe<Scalars['String']['output']>;
  /** The branding channel for this spot. E.g. used for displaying the channel ident. */
  brandingChannel?: Maybe<Channel>;
  /** The branding channel for this spot. E.g. used for displaying the channel ident. From LiveStream api */
  brandingChannelLive?: Maybe<LiveMedia>;
  /** A contextual image for this spot. */
  image?: Maybe<ContextImage>;
  /** Primary label text for this spot. */
  label?: Maybe<Scalars['String']['output']>;
  /** The url that is promoted. */
  promotesUrl?: Maybe<Scalars['URL']['output']>;
  /** Secondary label text for this spot. */
  secondaryLabel?: Maybe<Scalars['String']['output']>;
  /** A plain-text title for this spot. */
  title?: Maybe<Scalars['String']['output']>;
  /** A video to be displayed with this spot. */
  videoResource?: Maybe<MediaResource>;
};

export type SpotComponent = {
  __typename?: 'SpotComponent';
  spot?: Maybe<Spot>;
  type: Scalars['String']['output'];
  url?: Maybe<Scalars['URL']['output']>;
};

export type Story = Resource & {
  __typename?: 'Story';
  /** An ordered list of creative contributions. */
  contributions?: Maybe<Array<Maybe<ArticleContribution>>>;
  /** The description of the story. */
  description?: Maybe<Scalars['String']['output']>;
  /** The id of the story. */
  id?: Maybe<Scalars['String']['output']>;
  /** The managedurl to an image to use af poster on SoMe etc */
  managedPoster?: Maybe<Scalars['String']['output']>;
  /** The url to an image to use af poster on SoMe etc */
  poster?: Maybe<Scalars['String']['output']>;
  /** An editorial given start date for presentational use. */
  startDate?: Maybe<Scalars['String']['output']>;
  /** The plain text title of the story. */
  title?: Maybe<Scalars['String']['output']>;
  /** The url of the story. */
  url?: Maybe<Scalars['URL']['output']>;
  /** The urn of the story. */
  urn: Scalars['String']['output'];
};

export type StoryUrns = {
  __typename?: 'StoryUrns';
  /** The article-urn of the story. */
  articleUrn?: Maybe<Scalars['String']['output']>;
  /** The nws-urn of the story. */
  nwsUrn?: Maybe<Scalars['String']['output']>;
};

export type Stream = {
  __typename?: 'Stream';
  codec: Scalars['String']['output'];
  containerFormat: Scalars['String']['output'];
  format: Scalars['String']['output'];
  hasEmbeddedSubtitles: Scalars['Boolean']['output'];
  hasSubtitles: Scalars['Boolean']['output'];
  intendedRecipient?: Maybe<Scalars['String']['output']>;
  ipAvailability: Scalars['String']['output'];
  isStreamLive: Scalars['Boolean']['output'];
  isTokenRestricted: Scalars['Boolean']['output'];
  level: Scalars['String']['output'];
  mainSubtitle?: Maybe<StreamSubtitle>;
  profile: Scalars['String']['output'];
  streamEncrypted: Scalars['String']['output'];
  streamFailoverEncrypted?: Maybe<Scalars['String']['output']>;
  streamFailoverUrl?: Maybe<Scalars['String']['output']>;
  streamUrl?: Maybe<Scalars['String']['output']>;
  subtitleLanguages: Array<Scalars['String']['output']>;
  subtitles: Array<StreamSubtitle>;
  tokenAcl?: Maybe<Scalars['String']['output']>;
};

export type StreamAuthorization = {
  __typename?: 'StreamAuthorization';
  /** The hdnea key for the acl token given a valid session. */
  hdnea?: Maybe<Scalars['String']['output']>;
};

export type StreamSubtitle = {
  __typename?: 'StreamSubtitle';
  format: Scalars['String']['output'];
  isEmbedded: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
};

export type TvCollection = {
  __typename?: 'TVCollection';
  /** Items within this collection */
  items: TvCollectionResourceConnection;
  /** Collections title */
  title?: Maybe<Scalars['String']['output']>;
};


export type TvCollectionItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type TvCollectionResource = TvEpisode | TvProgram | TvSeason | TvSeries;

export type TvCollectionResourceConnection = {
  __typename?: 'TVCollectionResourceConnection';
  edges: Array<TvCollectionResourceEdge>;
  nodes: Array<TvCollectionResource>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TvCollectionResourceEdge = {
  __typename?: 'TVCollectionResourceEdge';
  node?: Maybe<TvCollectionResource>;
};

/** An episode of a TV series */
export type TvEpisode = Episode & Resource & {
  __typename?: 'TVEpisode';
  /** The primary channel this TV episode belongs to */
  channel?: Maybe<Channel>;
  /** The description of this TV episode */
  description?: Maybe<Scalars['String']['output']>;
  /** The duration of this TV episode in milliseconds */
  duration?: Maybe<Scalars['Int']['output']>;
  /** Episode placing in the season */
  episodeNumber?: Maybe<Scalars['Int']['output']>;
  /** The genre(s) for the episode */
  genres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** An image for this TV episode */
  image?: Maybe<Image>;
  /** The primary live channel this TV episode belongs to */
  liveMedia?: Maybe<LiveMedia>;
  /** A descriptive meta data text for the episode */
  metaText?: Maybe<Scalars['String']['output']>;
  /** The date and time of when the resource were published/aired */
  publishedDate?: Maybe<Scalars['Date']['output']>;
  /** The TV series this season belongs to */
  season?: Maybe<TvSeason>;
  /** The TV series this episode belongs to */
  series?: Maybe<TvSeries>;
  /** A short teaser video for this TV episode */
  teaserVideo?: Maybe<TvEpisodeVideo>;
  /** The title of this TV episode */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL to the web page for this TV episode */
  url?: Maybe<Scalars['URL']['output']>;
  /** The URN of this TV episode */
  urn: Scalars['String']['output'];
};

/** A video file representing a TV episode */
export type TvEpisodeVideo = Video & {
  __typename?: 'TVEpisodeVideo';
  /** The URL of the video file */
  url?: Maybe<Scalars['URL']['output']>;
};

export type TvLinkComponent = {
  __typename?: 'TVLinkComponent';
  /**
   * The label set from Drupal
   * @deprecated Use SpotComponent.spot
   */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * Returns one of TVEpisode,  TVProgram,  TVSeason, TVSeries depending on type from Cxense lookup
   * @deprecated Use SpotComponent.spot
   */
  resource?: Maybe<TvResource>;
  /**
   * The URL to link to
   * @deprecated Use SpotComponent.spot
   */
  url?: Maybe<Scalars['URL']['output']>;
};

/** A standalone clip/video/program */
export type TvProgram = Resource & {
  __typename?: 'TVProgram';
  /** The primary channel this TV program belongs to */
  channel?: Maybe<Channel>;
  /** The description of this TV program */
  description?: Maybe<Scalars['String']['output']>;
  /** The duration of this TV program in milliseconds */
  duration?: Maybe<Scalars['Int']['output']>;
  /** The genre(s) for the program */
  genres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** An image for this TV program */
  image?: Maybe<Image>;
  /** The primary live channel this TV program belongs to */
  liveMedia?: Maybe<LiveMedia>;
  /** A descriptive meta data text for the program */
  metaText?: Maybe<Scalars['String']['output']>;
  /** The date and time of when the resource were published/aired */
  publishedDate?: Maybe<Scalars['Date']['output']>;
  /** A short teaser video for this TV program */
  teaserVideo?: Maybe<TvProgramVideo>;
  /** The title of this TV program */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL to the web page for this TV program */
  url?: Maybe<Scalars['URL']['output']>;
  /** The URN of this TV program */
  urn: Scalars['String']['output'];
};

export type TvProgramVideo = Video & {
  __typename?: 'TVProgramVideo';
  /** The URL of the video file */
  url?: Maybe<Scalars['URL']['output']>;
};

export type TvResource = TvEpisode | TvProgram | TvSeason | TvSeries;

/** A season of a tv series */
export type TvSeason = Resource & Season & {
  __typename?: 'TVSeason';
  /** The primary channel this tv season belongs to */
  channel?: Maybe<Channel>;
  /** The description of this tv season */
  description?: Maybe<Scalars['String']['output']>;
  /** The episodes in this tv season */
  episodes: TvSeasonEpisodeConnection;
  /** The genre(s) for the season */
  genres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The image of the season */
  image?: Maybe<Image>;
  /** The primary live channel this TV season belongs to */
  liveMedia?: Maybe<LiveMedia>;
  /** A descriptive meta data text for the season */
  metaText?: Maybe<Scalars['String']['output']>;
  /** The season number */
  seasonNumber?: Maybe<Scalars['Int']['output']>;
  /** The TV series this season belongs to */
  series?: Maybe<TvSeries>;
  /** A short teaser video for this TV season */
  teaserVideo?: Maybe<TvSeasonVideo>;
  /** The title of this tv season */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL to the web page for this tv season */
  url?: Maybe<Scalars['URL']['output']>;
  /** The URN of this tv season */
  urn: Scalars['String']['output'];
};


/** A season of a tv series */
export type TvSeasonEpisodesArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TvSeasonEpisodeConnection = SeasonEpisodeConnection & {
  __typename?: 'TVSeasonEpisodeConnection';
  edges: Array<TvSeasonEpisodeEdge>;
  nodes: Array<TvEpisode>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TvSeasonEpisodeEdge = SeasonEpisodeEdge & {
  __typename?: 'TVSeasonEpisodeEdge';
  node: TvEpisode;
};

/** A video file representing a TV season */
export type TvSeasonVideo = Video & {
  __typename?: 'TVSeasonVideo';
  /** The URL of the video file */
  url?: Maybe<Scalars['URL']['output']>;
};

/** A TV series */
export type TvSeries = Resource & Series & {
  __typename?: 'TVSeries';
  /** The primary channel this TV series belongs to */
  channel?: Maybe<Channel>;
  /** The description of this TV series */
  description?: Maybe<Scalars['String']['output']>;
  /** The episodes in this TV series */
  episodes: TvSeriesEpisodeConnection;
  /** The genre(s) for the series */
  genres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** An image for this TV series */
  image?: Maybe<Image>;
  /** The primary live channel this TV series belongs to */
  liveMedia?: Maybe<LiveMedia>;
  /** A descriptive meta data text for the series */
  metaText?: Maybe<Scalars['String']['output']>;
  /** The seasons in this tv series */
  seasons: TvSeriesSeasonConnection;
  /** A short teaser video for this TV Series */
  teaserVideo?: Maybe<TvSeriesVideo>;
  /** The title of this TV series */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL to the web page for this TV series */
  url?: Maybe<Scalars['URL']['output']>;
  /** The URN of this TV series */
  urn: Scalars['String']['output'];
};


/** A TV series */
export type TvSeriesEpisodesArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


/** A TV series */
export type TvSeriesSeasonsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TvSeriesEpisodeConnection = SeriesEpisodeConnection & {
  __typename?: 'TVSeriesEpisodeConnection';
  edges: Array<TvSeriesEpisodeEdge>;
  nodes: Array<TvEpisode>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TvSeriesEpisodeEdge = SeriesEpisodeEdge & {
  __typename?: 'TVSeriesEpisodeEdge';
  node: TvEpisode;
};

export type TvSeriesSeasonConnection = SeriesSeasonConnection & {
  __typename?: 'TVSeriesSeasonConnection';
  edges: Array<TvSeriesSeasonEdge>;
  nodes: Array<TvSeason>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TvSeriesSeasonEdge = SeriesSeasonEdge & {
  __typename?: 'TVSeriesSeasonEdge';
  node: TvSeason;
};

/** A video file representing a TV series */
export type TvSeriesVideo = Video & {
  __typename?: 'TVSeriesVideo';
  /** The URL of the video file */
  url?: Maybe<Scalars['URL']['output']>;
};

export type TvSpot = Spot & {
  __typename?: 'TVSpot';
  /** An editorially defined string that labels this object for ARIA (Accessible Rich Internet Applications) usage. */
  ariaLabel?: Maybe<Scalars['String']['output']>;
  /** The branding channel for this spot. E.g. used for displaying the channel ident. */
  brandingChannel?: Maybe<Channel>;
  /** The branding channel for this spot. E.g. used for displaying the channel ident. From LiveStream api */
  brandingChannelLive?: Maybe<LiveMedia>;
  /** A contextual image for this spot. */
  image?: Maybe<ContextImage>;
  /** Primary label text for this spot. */
  label?: Maybe<Scalars['String']['output']>;
  /** The url that is promoted. */
  promotesUrl?: Maybe<Scalars['URL']['output']>;
  /** Secondary label text for this spot. */
  secondaryLabel?: Maybe<Scalars['String']['output']>;
  /** A plain-text title for this spot. */
  title?: Maybe<Scalars['String']['output']>;
  /** A video to be displayed with this spot. */
  videoResource?: Maybe<MediaResource>;
};

export type UnknownSearchResult = Resource & {
  __typename?: 'UnknownSearchResult';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  label?: Maybe<Scalars['String']['output']>;
  labelSecondary?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
  urn: Scalars['String']['output'];
};

/** A component that represents an encouragement to the user to send content to DR. */
export type UserUploadComponent = {
  __typename?: 'UserUploadComponent';
  /** The text on the action button of the user upload. */
  button?: Maybe<Scalars['String']['output']>;
  /** The details of the encouragement to the user. */
  description?: Maybe<Scalars['String']['output']>;
  /** List of recipients of notifications when a user has uploaded content. */
  emails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The title of the encouragement to the user. */
  title?: Maybe<Scalars['String']['output']>;
};

/** A video file */
export type Video = {
  /** The URL of the video file */
  url?: Maybe<Scalars['URL']['output']>;
};

export type WebFeature = {
  __typename?: 'WebFeature';
  changedDate?: Maybe<Scalars['String']['output']>;
  sectionName?: Maybe<Scalars['String']['output']>;
  sectionSlug?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  urn: Scalars['String']['output'];
  webFeatureType?: Maybe<Scalars['String']['output']>;
};

/** A single downloadable file. */
export type WebFile = {
  __typename?: 'WebFile';
  /** The filename of the downloadable file. */
  fileName?: Maybe<Scalars['String']['output']>;
  /** The filesize of the file, derived from the file manifestation. */
  fileSize?: Maybe<Scalars['Int']['output']>;
  /** The MIME type of the file, used by the user agent to determine how the files should be processed. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The title of the file for presentation. */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL of the file. */
  url?: Maybe<Scalars['URL']['output']>;
};

export type Yarn = {
  __typename?: 'Yarn';
  resources?: Maybe<Array<YarnResource>>;
  theme?: Maybe<YarnTheme>;
  title?: Maybe<Scalars['String']['output']>;
  urn: Scalars['String']['output'];
};


export type YarnResourcesArgs = {
  excludeReels?: InputMaybe<Scalars['Boolean']['input']>;
  filter: Array<YarnResourceFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type YarnResource = Article;

export enum YarnResourceFilter {
  Article = 'Article'
}

export type YarnTheme = Resource & {
  __typename?: 'YarnTheme';
  description?: Maybe<Scalars['String']['output']>;
  frontPage?: Maybe<YarnThemeFrontPage>;
  resources?: Maybe<Array<YarnResource>>;
  title?: Maybe<Scalars['String']['output']>;
  urn: Scalars['String']['output'];
  yarn?: Maybe<Yarn>;
};


export type YarnThemeResourcesArgs = {
  excludeReels?: InputMaybe<Scalars['Boolean']['input']>;
  filter: Array<YarnResourceFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type YarnThemeFrontPage = Resource & {
  __typename?: 'YarnThemeFrontPage';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<YarnThemeFrontPageImage>;
  /** Metadata related to SEO. */
  indexingMetadata?: Maybe<SearchEngineIndexingMetadata>;
  site?: Maybe<Site>;
  template: Scalars['String']['output'];
  theme?: Maybe<YarnTheme>;
  title: Scalars['String']['output'];
  url?: Maybe<Scalars['URL']['output']>;
  urn: Scalars['String']['output'];
};

export type YarnThemeFrontPageImage = {
  __typename?: 'YarnThemeFrontPageImage';
  default?: Maybe<Image>;
  mobile?: Maybe<Image>;
};

export type YarnThemeSearchConnection = ResourceConnection & {
  __typename?: 'YarnThemeSearchConnection';
  edges: Array<YarnThemeSearchEdge>;
  nodes: Array<Maybe<YarnTheme>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type YarnThemeSearchEdge = ResourceEdge & {
  __typename?: 'YarnThemeSearchEdge';
  node?: Maybe<YarnTheme>;
};

export type ArticleQueryVariables = Exact<{
  urn: Scalars['String']['input'];
}>;


export type ArticleQuery = { __typename?: 'Query', article?: { __typename?: 'Article', title?: string | null, summary?: string | null, text?: string | null, startDate?: string | null, wordCount?: number | null, breaking?: boolean | null, urlPathId?: any | null, teaserImage?: { __typename?: 'ArticleImage', default?: { __typename?: 'Image', url?: any | null } | null, mobile?: { __typename?: 'Image', url?: any | null } | null } | null, contributions?: Array<{ __typename?: 'ArticleContribution', role?: string | null, bylinePrefix?: string | null, prefix?: string | null, title?: string | null, titleSuffix?: string | null, agent?: { __typename: 'Person' } | null } | null> | null, body: Array<
      | { __typename: 'CodeComponent' }
      | { __typename: 'EmphasizedListComponent' }
      | { __typename: 'FactBoxComponent' }
      | { __typename: 'FilesComponent' }
      | { __typename: 'HeadingComponent', text?: string | null }
      | { __typename: 'ImageCollectionComponent' }
      | { __typename: 'ImageCompareComponent' }
      | { __typename: 'ImageComponent' }
      | { __typename: 'ListComponent' }
      | { __typename: 'MediaComponent' }
      | { __typename: 'OEmbedComponent' }
      | { __typename: 'ParagraphComponent', body?: any | null }
      | { __typename: 'QuoteComponent', body?: any | null, citation?: string | null }
      | { __typename: 'ReadMoreLinkComponent' }
      | { __typename: 'SpotComponent' }
      | { __typename: 'TVLinkComponent' }
      | { __typename: 'UserUploadComponent' }
     | null> } | null };


export const ArticleDocument = gql`
    query Article($urn: String!) {
  article(urn: $urn) {
    title
    summary
    text
    startDate
    wordCount
    breaking
    urlPathId
    teaserImage {
      default {
        url
      }
      mobile {
        url
      }
    }
    contributions {
      role
      bylinePrefix
      prefix
      title
      titleSuffix
      agent {
        __typename
      }
    }
    body {
      __typename
      ... on ParagraphComponent {
        body
      }
      ... on HeadingComponent {
        text
      }
      ... on QuoteComponent {
        body
        citation
      }
    }
  }
}
    `;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      urn: // value for 'urn'
 *   },
 * });
 */
export function useArticleQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ArticleQuery, ArticleQueryVariables> & ({ variables: ArticleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
      }
export function useArticleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
// @ts-ignore
export function useArticleSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ArticleQuery, ArticleQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<ArticleQuery, ArticleQueryVariables>;
export function useArticleSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<ArticleQuery, ArticleQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<ArticleQuery | undefined, ArticleQueryVariables>;
export function useArticleSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleSuspenseQueryHookResult = ReturnType<typeof useArticleSuspenseQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;