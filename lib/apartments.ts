import type { Community, CommunityFilter } from "./types";

const allCommunities: Community[] = [
  {
    slug: "the-landings",
    name: "The Landings",
    phone: "(251) 947-6092",
    address: "19096 Fairground Rd, Robertsdale, AL 36567",
    website: "https://www.thelandingal.com/",
    img: "/photos/apartments/the-landings.jpg",
    state: "al",
    city: "robertsdale",
  },
  {
    slug: "briarwood-estates",
    name: "Briarwood Estates",
    phone: "(251) 947-6092",
    address: "19038 Fairground Rd, Robertsdale, AL 36567",
    website: "https://www.briarwoodestatesal.com/",
    img: "/photos/apartments/briarwood-estates.jpg",
    state: "al",
    city: "robertsdale",
  },
  {
    slug: "the-ridge-at-lake-hamilton",
    name: "The Ridge At Lake Hamilton",
    phone: "(501) 525-1212",
    address: "329 Amity Rd, Hot Springs, AR 71901",
    website: "https://www.ridgeatlakehamilton.com/",
    img: "/photos/apartments/the-ridge-at-lake-hamilton.jpg",
    state: "ar",
    city: "hot-springs",
  },
  {
    slug: "gladden-farms",
    name: "Gladden Farms Apartments",
    phone: "(317) 838-8938",
    address: "311 Country Lane, Plainfield, IN 46168",
    website: "https://www.gladdenapartments.com/",
    img: "/photos/apartments/gladden-farms.jpg",
    state: "in",
    city: "plainfield",
  },
  {
    slug: "2100-springport",
    name: "2100 Springport Apartments",
    phone: "(517) 879-1900",
    address: "2100 Springport Rd, Jackson, MI 49202",
    website: "https://2100springport.com/",
    img: "/photos/apartments/2100-springport.jpg",
    state: "mi",
    city: "jackson",
  },
  {
    slug: "edge-at-1010",
    name: "Edge at 1010 Apartments",
    phone: "(517) 887-5000",
    address: "1010 W Edgewood Blvd, Lansing, MI 48911",
    website: "https://www.edgeat1010.com/",
    img: "/photos/apartments/edge-at-1010.jpg",
    state: "mi",
    city: "lansing",
  },
  {
    slug: "the-overlook-at-ashland",
    name: "The Overlook at Ashland",
    phone: "(615) 792-8577",
    address: "109 Claudia Lane, Ashland City, TN 37015",
    website: "https://overlookatashland.com/",
    img: "/photos/apartments/the-overlook-at-ashland.jpg",
    state: "tn",
    city: "ashland-city",
  },
  {
    slug: "hallmark-at-columbia",
    name: "Hallmark At Columbia",
    phone: "(931) 380-5585",
    address: "600 Hallmark Dr, Columbia, TN 38401",
    website: "https://www.hallmarkatcolumbia.com/",
    img: "/photos/apartments/hallmark-at-columbia.jpg",
    state: "tn",
    city: "columbia",
  },
  {
    slug: "the-everly",
    name: "The Everly Apartments",
    phone: "(423) 434-9704",
    address: "1700 Dave Buck Rd, Johnson City, TN 37601",
    website: "https://www.theeverlyapartments.com/",
    img: "/photos/apartments/the-everly.jpg",
    state: "tn",
    city: "johnson-city",
  },
  {
    slug: "graystone-flats",
    name: "Graystone Flats",
    phone: "(423) 928-1111",
    address: "1400 Orleans St, Johnson City, TN 37601",
    website: "https://www.graystoneflats.com/",
    img: "/photos/apartments/graystone-flats.jpg",
    state: "tn",
    city: "johnson-city",
  },
  {
    slug: "beason-well",
    name: "Beason Well Apartments",
    phone: "(423) 408-8881",
    address: "893 New Beason Well Rd, Unit 1104, Kingsport, TN 37660",
    website: "https://beasonwell.com/",
    img: "/photos/apartments/beason-well.jpg",
    state: "tn",
    city: "kingsport",
  },
  {
    slug: "meadows-of-lebanon",
    name: "Meadows of Lebanon Apartments",
    phone: "(615) 453-9017",
    address: "50 Meadows Drive, Lebanon, TN 37087",
    website: "https://www.meadowsoflebanon.com/",
    img: "/photos/apartments/meadows-of-lebanon.jpg",
    state: "tn",
    city: "lebanon",
  },
];

export async function getCommunities(
  filter?: CommunityFilter,
): Promise<Community[]> {
  let results = allCommunities;

  if (filter?.state) {
    results = results.filter((c) => c.state === filter.state);
  }
  if (filter?.city) {
    results = results.filter((c) => c.city === filter.city);
  }

  return results;
}
