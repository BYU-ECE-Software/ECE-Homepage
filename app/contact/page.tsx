import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import RichText from '@/components/general/RichText';

export const metadata: Metadata = {
  title: 'Contact Us | Electrical and Computer Engineering',
  description: 'Contact information for the BYU Electrical and Computer Engineering department.',
};

const content = `
**Department of Electrical & Computer Engineering**

450 Engineering Building
Brigham Young University
Provo, UT 84602

Phone: (801) 422-4012
Fax: (801) 422-0201
Email: [ecen_secretary@byu.edu](mailto:ecen_secretary@byu.edu)

## Additional Contacts

| Position | Name | Email | Office | Phone Number |
|---|---|---|---|---|
| Department Chair | Dr. Randy Beard | [beard@byu.edu](mailto:beard@byu.edu) | 460J EB | (801) 422-8392 |
| Graduate Committee Chair | Dr. Jeff Goeders | [jgoeders@byu.edu](mailto:jgoeders@byu.edu) | 450I EB | (801) 422-3499 |
| Undergraduate Committee Chair | Dr. Willie Harrison | [willie.harrison@byu.edu](mailto:willie.harrison@byu.edu) | 460I EB | (801) 422-4355 |
| External Relations Committee Chair | Dr. Cammy Peterson | [cammy.peterson@byu.edu](mailto:cammy.peterson@byu.edu) | 460H EB | (801) 422-3348 |
| Office Manager | Kerrie Mennear | [kerrie_mennear@byu.edu](mailto:kerrie_mennear@byu.edu) | 460A | (801) 422-6455 |
| Freshman and Graduate Program Advisor | Jana Featherstone | [jana_featherstone@byu.edu](mailto:jana_featherstone@byu.edu) | 460S EB | (801) 422-1160 |
| Undergraduate Advisor | Janalyn Mergist | [janalyn@ee.byu.edu](mailto:janalyn@ee.byu.edu) | 460R EB | (801) 422-4013 |
| Capstone Coordinator | Allyson Gibson | [allyson_gibson@byu.edu](mailto:allyson_gibson@byu.edu) | 450S EB | (801) 422-7962 |

## Directions and Maps

### Driving Directions from Salt Lake City International Airport

1. Travel east on I-80 and take the I-215 South (Provo) exit.
2. Take I-15 South approximately 30 miles to exit 269, University Parkway.
3. Turn east (toward the mountains) to reach campus.
4. Pass the stadium on the left, then turn right on 900 East (the second right turn).
5. Turn right onto 1100 North.
6. Visitor parking appears on the left side.

### Building and Office Location

The Engineering Building is across from the visitor parking area, south of the Wilkinson Student Center. After passing the Crabtree Technology Building going west uphill, continue south past the Clyde Building to reach the main structure.

Within the Engineering Building, the ECE office occupies room 450 (southwest corner) on the fourth floor (ground level is designated as the second floor).

For personalized navigation, see [Google Maps](https://www.google.com/maps/place/Brigham+Young+University+Engineering+Building) or [maps.byu.edu](https://maps.byu.edu) for an interactive map of campus, including all buildings and parking areas.
`;

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-5xl [&_td]:whitespace-nowrap [&_th]:whitespace-nowrap">
          <RichText content={content} maxWidth="wide" />
        </div>
      </section>
    </>
  );
}
