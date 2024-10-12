import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AwarenessListItem {
  title: string;
  description: string;
  logo: string; // URL for the logo image
}

const awarenessListData: AwarenessListItem[] = [
  {
    title: 'Types of Intellectual Property',
    description:
      'Understanding the various forms of IP, such as patents, copyrights, trademarks, designs, and trade secrets.',
    logo: 'https://images.pexels.com/photos/25630343/pexels-photo-25630343/free-photo-of-digital-3d-model-of-a-mechanical-component.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Duration of Protection',
    description:
      'Awareness of the length of protection granted for different types of IP. For instance, patents last for 20 years in South Africa, while copyright for computer programs lasts for 50 years.',
    logo: 'https://images.pexels.com/photos/211151/pexels-photo-211151.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Copyright and Licensing',
    description:
      'Knowing that copyright prevents others from copying original works without permission, and that software is typically licensed rather than sold.',
    logo: 'https://images.pexels.com/photos/15752372/pexels-photo-15752372/free-photo-of-camera-menu-on-screen.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Trademarks and Domain Names',
    description:
      'Recognizing that trademarks distinguish goods and services and can be registered for perpetually renewable periods of 10 years. Also, being aware of the implications of cybersquatting, where domain names are registered in bad faith.',
    logo: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Open Source and Free Software',
    description:
      'Understanding the concepts of open source and free software, including the rights to use, study, modify, and share software.',
    logo: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Trade Secrets',
    description:
      'Awareness of laws governing trade secrets, which allow companies to keep certain information confidential to maintain a competitive edge.',
    logo: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Ethical Considerations',
    description:
      'Recognizing the ethical implications of IP rights in the digital era and how they can be used to stifle creativity and innovation.',
    logo: 'https://images.pexels.com/photos/6077181/pexels-photo-6077181.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Regulatory Issues',
    description:
      'Being informed about the regulatory frameworks surrounding IP protection and the existing gaps or grey areas in the law',
    logo: 'https://images.pexels.com/photos/12324202/pexels-photo-12324202.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const AwarenessList: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto pb-10">
      {awarenessListData.map((item, index) => (
        <AwarenessListItemComponent key={index} item={item} index={index} />
      ))}
    </div>
  );
};

const AwarenessListItemComponent: React.FC<{ item: AwarenessListItem; index: number }> = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className="flex items-start mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Reset the animation when out of view
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Vertical Line */}
      <div className="relative">
        <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center border border-gray-300 relative z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.logo} alt={item.title} className="w-12 h-12 rounded-full object-cover" />
        </div>
      </div>

      {/* Event Details */}
      <div className="ml-6">
        <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
        <p className="text-gray-500 text-xs">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default AwarenessList;