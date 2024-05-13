export interface Image {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
}

export interface fetchPhotosResponse {
  total: number;
  total_pages: number;
  results: Image[];
}
