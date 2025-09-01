import React from 'react';

// You can create a separate component for team members later
const teamMembers = [
  { name: 'Steven Lee', title: 'Chairman' },
  { name: 'Jocelyn Yambao', title: 'Founder and Chief Operating Officer' },
  { name: 'Bernard Picot', title: 'Co-Founder and Chief Revenue Officer' },
  { name: 'Amit Srivastava', title: 'Chief Technology Officer' },
  { name: 'Kelley Brakstadt', title: 'Director of Organizational Effectiveness' },
  { name: 'Ehmi Leyn Pineda', title: 'Social Operations Manager' },
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Section: Who We Are */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 font-montserrat mb-4">
            Who We Are
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            JLY International was founded to assist businesses overcome their greatest hurdle: Finding the right connections. With over two decades of consulting, technology, entrepreneurship and global business experience, we leverage deep industry knowledge and an expansive network to deliver measurable results.
          </p>
        </div>
      </section>

      {/* Section: Mission, Vision, and Values */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Our Mission</h2>
            <p className="text-gray-600">To empower businesses by fostering meaningful connections and delivering tailored consulting solutions that drive measurable results.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Our Vision</h2>
            <p className="text-gray-600">To create a thriving business ecosystem where companies seamlessly access partnerships, funding, and tailored strategies.</p>
          </div>
           <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Our Core Values</h2>
            <p className="text-gray-600">Integrity, Client Success, and Excellence in all we do.</p>
          </div>
        </div>
      </section>

      {/* Section: Management Team */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 font-montserrat mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* You'll map over the team members here */}
            {teamMembers.map(member => (
              <div key={member.name} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-700">{member.name}</h3>
                <p className="text-orange-500">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;