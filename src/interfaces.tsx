export interface SearchInterface {
  updateSearch: (input: string) => void;
  handleSubmit: () => void;
  input: string;
}

export interface PexelPhoto {
  id: number;
  url: string;
  photographer: string;
  alt: string;
  photographer_url: string;
  avg_color: string;
  width: number;
  height: number;
  src: {
    medium: string;
    large: string;
  };
}

export interface PexelResponse {
  photos: PexelPhoto[];
  prev_page?: string;
  next_page?: string;
  page: number;
}

export interface GalleryProps {
  pexelResponse?: PexelResponse;
  paginate: (addVal: number) => void;
  loading: boolean;
}
