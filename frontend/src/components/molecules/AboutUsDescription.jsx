import React from 'react';
import Slide from 'react-reveal/Slide';

const AboutUsDescription = () => {
  return (
    <div className="container m-auto flex flex-col gap-20 px-0.5 py-20 md:px-2 md:flex-row">
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-semibold text-center tracking-tighter">We Serve Fresh and Delicious Food</p>
        <Slide left duration={2000}>
          <p className="tracking-wide break-all px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptas. Velit hic non facilis itaque culpa
            ea numquam expedita facere fugiat cupiditate ullam, ipsa neque, esse quaerat provident aliquam? Ipsam.
            Incidunt quaerat, reiciendis cumque nostrum impedit provident officiis consequatur, neque modi laborum
            soluta consectetur accusantium perspiciatis voluptatum. Et consequuntur dolor expedita a consectetur, quas
            nostrum, quos non, esse corrupti numquam. Sed aspernatur asperiores fuga, eveniet ab expedita accusamus
            atque, et totam eius fugiat exercitationem reprehenderit, earum vero quam tempora impedit eaque deserunt.
            Similique commodi temporibus recusandae? Illo quisquam reprehenderit sit! Delectus possimus quis at,
            deleniti officiis ipsa sequi aliquam vero laborum! Velit, expedita quas. Laudantium omnis, iusto excepturi
            officia labore perferendis nostrum harum temporibus facilis voluptates minima nisi neque tempora!
          </p>
        </Slide>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-2xl font-semibold text-center tracking-tighter">We Serve Fresh and Delicious Food</p>
        <Slide right duration={2000}>
          <p className="tracking-wide break-all px-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel eum repellendus placeat, maxime necessitatibus
            ipsam assumenda, obcaecati neque voluptate natus deleniti. Perspiciatis delectus voluptatibus velit ad magni
            deleniti tenetur temporibus! Quia rem ratione reiciendis et natus molestias ipsum, dolorem tenetur quis sint
            cum est iste minus enim mollitia molestiae possimus eaque esse quaerat perspiciatis? Ullam adipisci harum
            facilis consequuntur accusamus? Libero excepturi iure, molestias sed quae nihil saepe maxime nesciunt soluta
            autem nisi sit odio rerum aliquid amet ipsa explicabo repellendus voluptas officia blanditiis voluptatem
            asperiores a officiis culpa! Quis. Earum molestias cum similique laborum provident fuga, fugiat asperiores
            animi suscipit impedit repudiandae recusandae vel? Amet nam sint distinctio cupiditate itaque a minima,
            dolore numquam asperiores in reiciendis eum culpa.
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default AboutUsDescription;
