import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import { useNavigate } from 'react-router-dom';
import { useFetchAll } from '../../hooks/useFetchAll';
import './Dashboard.scss'

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false)
  const navigateToCreator = (name: string, id: string) => {
    const url = `/creator/${name}/${id}`
    navigate(url)
  }
  const { creators, loading, refetch } = useFetchAll();
  
    if (loading) return <div>Fetching data...</div>
  
  if (refresh) {
    refetch()
    setRefresh(false)
  } 

  return (
    <div>
      <h1>Dashboard</h1>
      <div className='containa'>
        {creators.map((creator) => (
          <Card
            key={creator.id instanceof Int8Array ? creator.id.join('') : creator.id}
            id={creator.id}
            name={creator.name}
            imageURL={creator.imageURL}
            description={creator.description}
            youtube={creator.youtube || ''}
            instagram={creator.instagram || ''}
            twitter={creator.twitter || ''}
            twitch={creator.twitch || ''}
            tiktok={creator.tiktok || ''}
            website={creator.website || ''}
            navigateToCreator={navigateToCreator}
            onUse={() => setRefresh(true)}
          />
        ))}
      </div>
    </div>

  )
}
export default Dashboard