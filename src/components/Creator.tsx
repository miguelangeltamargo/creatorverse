import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import Card from './Card'

interface Creator {
  name: string;
  url: string;
  description: string;
  imageURL: string;
}

const Creator: React.FC = () => {
  const [creators, setCreators] = useState<Creator[]>([]);

  useEffect(() => {
    async function getCreators() {
      const { data, error } = await supabase
      .from('creators')
      .select();

      if (error) {
        console.error("Error fetching creators:", error);
      } else {
        setCreators(data as Creator[]);
      }
    }

    getCreators();
  }, []);

  return (
    <ul>
      {creators.map((creator) => (
        <Card 
          key={creator.name}
          name={creator.name}
          description={creator.description}
          imageURL={creator.imageURL} id={undefined} youtube={''} instagram={''} twitter={''} twitch={''} tiktok={''} navigateToCreator={function (name: string, id: string): void {
            throw new Error('Function not implemented.');
          } }        />
        // <li key={creator.name}>
        // Name:{creator.name}<br />
        // Description:{creator.description}<br />
        // URL: {<a href={creator.url} target="_blank" rel="noopener noreferrer">{creator.url}</a>}<br />
        // <img src={creator.imageURL} alt={creator.name} style={{width: '300px', height: 'auto' }} />
        // </li>
      ))}
    </ul>
  );
};

export default Creator;