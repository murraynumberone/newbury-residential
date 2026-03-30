export type AreaInfo = {
  pageHeading: string;
  heading: string;
  description: string[];
  image: string;
};

const stateInfo: Record<
  string,
  { label: string; description: string[]; image: string }
> = {
  mi: {
    label: "Michigan",
    image: "/photos/states/mi.jpg",
    description: [
      "Come see all that America’s Great Comeback City has to offer! Detroit is best known as the center of the U.S. automobile industry and is proof that America’s manufacturing cities can thrive. It is storied in rich cultural history, as the birthplace of the chart-topping Motown Records, and has undergone several large-scale revitalization in recent years. These include the restoration of numerous historic theatres and entertainment venues, high-rise renovations, new sports stadiums, and a riverfront revival project.",
      "The vast beauty of Michigan also provides four-season fun for outdoor enthusiasts of all kinds. Whether you are looking for relaxation on the perfect sandy beaches of the Great Lakes, to visit the many National Parks during peak foliage, or to scale the abundant ski slopes – Michigan has something for you. The vast beauty of Michigan also provides four-season fun for outdoor enthusiasts of all kinds. Whether you are looking for relaxation on the perfect sandy beaches of the Great Lakes, to visit the many National Parks during peak foliage, or to scale the abundant ski slopes – Michigan has something for you.",
    ],
  },
  al: {
    label: "Alabama",
    image: "/photos/states/al.jpg",
    description: [
      "Located in the southeastern region of the United States, Alabama is known as the 'Heart of Dixie' due to its central role in the history and cultural identity of the American South. With a diverse geography that includes the Appalachian Mountains in the north, vast forests, and access to the Gulf of Mexico in the south, Alabama boasts a rich tapestry of natural beauty. Alabama is home to several prominent universities, including the University of Alabama and Auburn University. The state also houses NASA's Marshall Space Flight Center in Huntsville, a key player in the nation's space exploration efforts.",
      "Alabama's cultural contributions include significant influences in music, literature, and cuisine. The state has produced notable figures in jazz, blues, country, and rock music. Harper Lee, the author of 'To Kill a Mockingbird', hails from Monroeville, Alabama. And no discussion about Alabama is complete without mentioning its rich culinary tradition, particularly in Southern cuisine, which includes dishes like fried chicken, grits, and pecan pie.",
      "Alabama's Gulf Coast stretches for about 60 miles along the Gulf of Mexico, offering a combination of beautiful white sandy beaches, bustling towns, nature reserves, and historical sites. The Alabama Gulf Coast is renowned for its pristine, sugar-white sandy beaches. Popular spots include Gulf Shores and Orange Beach. These beaches are well-maintained, family-friendly, and offer a plethora of water activities such as swimming, sunbathing, kayaking, and parasailing.",
    ],
  },
  tn: {
    label: "Tennessee",
    image: "/photos/states/tn.jpg",
    description: [
      "Immerse yourself in Tennessee, where music is more than just entertainment – it's a way of life. Nashville, the capital city, is synonymous with country music. Catch a legendary show at the Grand Ole Opry, explore the Country Music Hall of Fame and Museum, or lose yourself in the electrifying energy of the honky-tonk bars on Broadway. But Tennessee's musical scene isn't confined to one genre – a thriving live music scene offers something for every taste, from blues and rock to pop and classical.",
      "Beyond the captivating melodies, Tennessee boasts a diverse and breathtaking landscape. Hikers and outdoor enthusiasts can't resist the allure of the Great Smoky Mountains National Park, with its scenic trails leading to cascading waterfalls and panoramic vistas. Venture through the rolling hills and fertile valleys of Middle Tennessee, or head west to experience the mighty Mississippi River. Tennessee's sparkling lakes and waterways are a haven for boating, fishing, and swimming. History buffs will find themselves immersed in the rich Civil War heritage preserved across the state. Tennessee truly offers something for everyone!",
    ],
  },
  ar: {
    label: "Arkansas",
    image: "/photos/states/ar.jpg",
    description: [
      "Located in the heart of the southern United States, Arkansas is fondly known as the 'Natural State' thanks to its stunning and diverse landscapes, including mountains, forests, rivers, and yes, hot springs! Imagine exploring the breathtaking Ozark and Ouachita Mountains or the fertile lands of the Mississippi River Delta – there's always something beautiful waiting to be discovered.",
      "Arkansas isn't just about natural beauty; it's a hub of education and history too. The University of Arkansas in Fayetteville is a lively center for research and student life. And let's not forget the Little Rock Nine, who played a crucial role in the civil rights movement, making Arkansas a significant chapter in America's journey towards equality.",
      "Music lovers, rejoice! Arkansas has given the world legendary musicians like Johnny Cash. The state's literary heritage sparkles with names like Maya Angelou and John Grisham. And if you’re a foodie, get ready to indulge in some mouthwatering Southern delights like finger-lickin' barbecue, crispy fried catfish, and irresistible sweet potato pie.",
    ],
  },
  in: {
    label: "Indiana",
    image: "/photos/states/in.jpg",
    description: [
      "Nestled in the heart of the Midwest, Indiana is affectionately known as the “Hoosier State,” celebrated for its warm hospitality, rich history, and scenic landscapes. From peaceful countryside views to vibrant urban energy, Indiana offers a little something for everyone. Picture strolling through charming small towns, exploring lush state parks, or enjoying the sparkling shores of Lake Michigan—beauty and discovery are always within reach.",
      "Indiana is also a place where innovation and culture thrive. Home to prestigious institutions like Indiana University and Purdue University, the state fosters creativity, research, and lifelong learning. History buffs will find meaningful moments at landmarks like the Indianapolis Motor Speedway, where the legendary Indy 500 has been held for over a century, shaping Indiana’s identity and excitement.",
      "Music, literature, and the arts flourish here too. Indiana has produced iconic talents such as Hoagy Carmichael and Kurt Vonnegut, adding to the state’s proud creative legacy. And for food lovers—prepare your tastebuds! Indiana is known for beloved classics like tender pork tenderloin sandwiches, sugar cream pie, and hearty farm-to-table fare that celebrates Midwestern comfort.",
    ],
  },
};

const cityInfo: Record<
  string,
  { label: string; description: string[]; image: string }
> = {
  "mi-lansing": {
    label: "Lansing",
    image: "/photos/cities/mi-lansing.jpg",
    description: [
      "Enjoy all the convenience that Lansing offers as a premier central location in Michigan. Our Lansing apartments grant easy access to the bustling cities of Ann Arbor and Grand Rapids, thanks to proximity to Interstate-94 and Route 127. Additionally, you'll find a wealth of local shopping, dining, and entertainment options just around the corner, such as the North Kitchen and Bar, as well as the diverse offerings at Lansing's own Jackson Crossing, which includes Lowe's, Kroger, Home Depot, Target, and an array of dining establishments.",
    ],
  },
  "mi-jackson": {
    label: "Jackson",
    image: "/photos/cities/mi-jackson.jpg",
    description: [
      "Enjoy all the convenience that Jackson offers as a premier central location in Michigan. Our apartments in Jackson, MI are just a short drive to Ann Arbor, Lansing, and Grand Rapids, with easy access to two major highways - Interstate-94 and Route 127. We are also a close proximity to many of our own local shopping, entertainment, and dining establishments. These include North Kitchen and Bar and Jackson Crossing (Lowes, Kroger, Home Depot, Target and multiple dining options).",
    ],
  },
  "al-robertsdale": {
    label: "Robertsdale",
    image: "/photos/cities/al-robertsdale.jpg",
    description: [
      "Experience the charm of Robertsdale, Alabama, where you'll find a delightful blend of southern hospitality and modern amenities. Located in Baldwin County, Robertsdale offers easy access to Gulf Coast beaches and neighboring cities like Mobile, Alabama and Pensacola, Florida. Enjoy a variety of local dining options, including classic southern comfort food and fresh seafood. Whether you're exploring the beautiful Gulf Coast or savoring delicious cuisine, Robertsdale is the perfect place to call home.",
    ],
  },
  "tn-ashland-city": {
    label: "Ashland City",
    image: "/photos/cities/tn-ashland-city.jpg",
    description: [
      "Thrive in the charming small-town atmosphere of Ashland City, TN! Our Ashland City apartment offers a delightful blend of peace and convenience. Nestled along the Cumberland River, Ashland City provides a scenic escape while remaining close to the excitement of Nashville. Easy access to Interstate 40 puts the Music City just a short drive away, while Ashland City itself boasts a vibrant community atmosphere. You'll discover a variety of local shops, restaurants, and entertainment venues right at your doorstep. Explore the unique offerings of downtown Ashland City, or unwind at a riverside park. Ashland City truly delivers a wonderful place to call home.",
    ],
  },
  "tn-columbia": {
    label: "Columbia",
    image: "/photos/cities/tn-columbia.jpg",
    description: [
      "Experience the welcoming small-town charm of Columbia, TN! Our Columbia apartments offer the perfect combination of tranquility and convenience. Located along the picturesque Duck River, Columbia offers a peaceful retreat while staying close to the vibrant energy of Nashville. With Interstate 65 nearby, the Music City is just a short drive away. Columbia itself is full of life, with a thriving community, local shops, delicious restaurants, and lively entertainment options right at your fingertips. Enjoy the unique attractions of downtown Columbia or relax in a serene riverside park. Columbia is truly a fantastic place to call home.",
    ],
  },
  "tn-johnson-city": {
    label: "Johnson City",
    image: "/photos/cities/tn-johnson-city.jpg",
    description: [
      "Nestled in the heart of the Appalachian Mountains, Johnson City offers a perfect blend of natural beauty and vibrant community living. This charming city is a haven for outdoor enthusiasts, with the Watauga River, Buffalo Mountain Park, and Sycamore Shoals State Park providing endless opportunities for adventure. The Tweetsie Trail, a popular spot for biking, walking, and running, weaves through the stunning landscape, offering breathtaking views along the way.",
    ],
  },
  "tn-lebanon": {
    label: "Lebanon",
    image: "/photos/cities/tn-lebanon.jpg",
    description: [
      "Discover a lifestyle of charm and convenience at Meadows of Lebanon Apartments, located in the heart of Middle Tennessee. Situated just 25 miles east of vibrant downtown Nashville, Lebanon offers a perfect balance between small-town charm and big-city accessibility. Whether you're seeking the peace of a suburban community or the excitement of a quick Nashville getaway, Meadows of Lebanon provides the best of both worlds.",
    ],
  },
  "tn-kingsport": {
    label: "Kingsport",
    image: "/photos/cities/tn-kingsport.jpg",
    description: [
      "Welcome to Kingsport—a city built on originality, charm, and a whole lot of heart. Whether you're an outdoor adventurer, a pet lover, or someone who thrives in the arts and culture scene, Kingsport offers something special for everyone.",
    ],
  },
  "ar-hot-springs": {
    label: "Hot Springs",
    image: "/photos/cities/ar-hot-springs.jpg",
    description: [
      "Discover the allure of Hot Springs, Arkansas, where natural beauty meets vibrant culture. Nestled in the Ouachita Mountains, Hot Springs is renowned for its thermal springs, historic Bathhouse Row, and the serene beauty of Hot Springs National Park. Enjoy a rich variety of local dining, from classic Southern fare to innovative culinary delights. Whether you're relaxing in the therapeutic waters or exploring the charming downtown, Hot Springs is a wonderful place to call home.",
    ],
  },
  "in-plainfield": {
    label: "Plainfield",
    image: "/photos/cities/in-plainfield.jpg",
    description: [
      "Enjoy all the convenience that Plainfield offers as one of Indiana’s most welcoming and well-connected communities. Our apartments in Plainfield, IN place you just minutes from downtown Indianapolis, with effortless access to major routes including U.S. 40 and I-70—perfect for commuters and weekend adventurers alike.",
    ],
  },
};

export async function getAreaInfo(
  state: string,
  city?: string,
): Promise<AreaInfo | null> {
  if (city) {
    const info = cityInfo[`${state}-${city}`];
    const state_info = stateInfo[state];
    if (!info) return null;
    return {
      pageHeading: `Apartments in ${info.label}, ${state_info?.label ?? state.toUpperCase()}`,
      heading: `Love Where You Live in ${info.label}`,
      description: info.description,
      image: info.image,
    };
  }

  const info = stateInfo[state];
  if (!info) return null;

  return {
    pageHeading: `Apartments in ${info.label}`,
    heading: `Apartments in ${info.label}`,
    description: info.description,
    image: info.image,
  };
}
