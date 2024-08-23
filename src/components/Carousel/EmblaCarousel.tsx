import React, { useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import "./css/embla.scss"
import { useFetchAll } from '../../hooks/useFetchAll'
import { useNavigate } from 'react-router-dom'
import Card from '../Card/Card'

type PropType = {
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  let { options } = props
  const [refresh, setRefresh] = useState(false)
  const { creators, refetch} = useFetchAll();

  const navigate = useNavigate();
  const navigateToCreator = (name: string, id: string) => {
    const url = `/creator/${name}/${id}`
    navigate(url)
  }

    if (refresh) {
      refetch();
      setRefresh(false)
    }
  
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, stopOnInteraction: false, stopOnMouseEnter: true, startDelay: 300 })
  ])
  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

  }, [emblaApi])


  return (
    <div className="embla">

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {creators.slice(0, 5).map((creator) => (
            <div className="embla__slide" key={creator.id instanceof Int8Array ? creator.id.join('') : creator.id}>
              <div className="card-slide">
                <Card 
                  id={creator.id} 
                  name={creator.name}
                  imageURL={creator.imageURL}
                  youtube={creator.youtube || ''}
                  instagram={creator.instagram || ''}
                  twitter={creator.twitter || ''}
                  twitch={creator.twitch || ''}
                  tiktok={creator.tiktok || ''}
                  website={creator.website || ''}
                  navigateToCreator={navigateToCreator}
                  onUse={() => setRefresh(true)}
                  />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
