import { useEffect, useState } from 'react'
import { useFetchOne } from '../../hooks/useFetchOne'
import { useNavigate } from 'react-router-dom'
import '../AddCreator/AddCreator.scss'
import { FaRegPenToSquare } from "react-icons/fa6";
import { useUpdate } from '../../hooks/useUpdate';
import Card from '../../components/Card/Card';

const EditCreator = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [description, setDescription] = useState('')
  const [youtube, setYoutube] = useState('')
  const [instagram, setInstagram] = useState('')
  const [twitter, setTwitter] = useState('')
  const [twitch, setTwitch] = useState('')
  const [tiktok, setTiktok] = useState('')
  const [website, setWebsite] = useState('')

  const { creatorData: creator } = useFetchOne()
  const [firstData, setFirstdata] = useState(true)
  useEffect(() => {
    if (creator && firstData) {
      setFirstdata(false)
      setName(creator.name)
      setImageURL(creator.imageURL ?? '');
      setDescription(creator.description ?? '');
      setYoutube(creator.youtube ?? '');
      setInstagram(creator.instagram ?? '');
      setTwitter(creator.twitter ?? '');
      setTwitch(creator.twitch ?? '');
      setTiktok(creator.tiktok ?? '');
      setWebsite(creator.website ?? '')
    }
  }, [creator, firstData])


  const {handleUpdate, error} = useUpdate({
    name,
    imageURL,
    description,
    youtube,
    instagram,
    twitter,
    twitch,
    tiktok,
    website
  })
  const navigateToCreator = (name: string, id: string) => {
    const url = `/creator/${name}/${id}`
    navigate(url)
  }

  if (!creator) return <p>Fetching Creator...</p>

  return (
    <div className='container'>
      <section className='form-section'>
        <form onSubmit={handleUpdate}>

          <div className="href-target" id="update"></div>
          <h1>
            <FaRegPenToSquare />
            Update Creator
          </h1>
          <p>Update the creators information. Make sure you include a name.</p>
          <div className="nice-form-group">
            <label htmlFor='name'>Name</label>
            <input id='name' type="text" placeholder='Creator Name'
              className='icon-left'
              value={name}
              onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="nice-form-group">
            <label htmlFor='imageURL'>ImageURL</label>
            <input id='imageURL' type="url" placeholder='Provide URL of profile image'
              className='icon-left'
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)} />
          </div>

          <div className="nice-form-group">
            <label htmlFor='description'>Description</label>
            <input id='description' type="text" placeholder={description || 'What i do is...'}
              className='icon-left'
              value={description}
              onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div className="nice-form-group">
            <label htmlFor='youtube'>Youtube</label>
            <input id='youtube' type="text" placeholder={youtube || '@Example'}
              className="icon-left youtube-icon"
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)} />
          </div>

          <div className="nice-form-group">
            <label htmlFor='insta'>Instagram</label>
            <input id='insta' type="text" placeholder={instagram || '@Example'} 
            className='icon-left insta-icon'
              value={instagram} 
              onChange={(e) => setInstagram(e.target.value)} />
          </div>

          <div className="nice-form-group">
            <label htmlFor='twitter'>Twitter</label>
            <input id='twitter' type="text" placeholder={twitter || '@Example'}
              className='icon-left twitter-icon'
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)} />
          </div>

          <div className="nice-form-group">
            <label htmlFor='twitch'>Twitch</label>
            <input id='twitch' type="text" placeholder={twitch || 'ProfileName'}
              className='icon-left twitch-icon'
              value={twitch}
              onChange={(e) => setTwitch(e.target.value)} />
          </div>

          <div className="nice-form-group">
            <label htmlFor='tiktok'>Tiktok</label>
            <input id="tiktok" type="text" placeholder={tiktok || '@Example'}
              className='icon-left tiktok-icon'
              value={tiktok}
              onChange={(e) => setTiktok(e.target.value)} />
          </div>
          <div className="nice-form-group">
            <label htmlFor='website'>Website</label>
            <input id="website" type="url" placeholder='https://examplesite.com'
              className='icon-left'
              value={website}
              onChange={(e) => setWebsite(e.target.value)} />
          </div>
          <details>
            <summary>
            <button className="submit" type="submit">Update</button>
            {error && <p className="error">{error}</p>}
            </summary>
          </details>
        </form>
      </section>
<div className='card-view'>

      <Card
            key={null}
            id={creator.id}
            name={name}
            imageURL={imageURL}
            youtube={youtube || ''}
            instagram={instagram || ''}
            twitter={twitter || ''}
            twitch={twitch || ''}
            tiktok={tiktok || ''}
            website={website || ''}
            navigateToCreator={navigateToCreator}
            onUse={() => console.log()}
            />
            </div>
    </div>
  )
}

export default EditCreator
