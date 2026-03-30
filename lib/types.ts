export type LocationOption = { value: string; label: string };

export type Community = {
  slug: string;
  name: string;
  phone: string;
  address: string;
  website: string;
  img: string;
  state: string; // e.g. "ma"
  city: string; // e.g. "robertsdale"
};

export type CommunityFilter = {
  state?: string;
  city?: string;
};
