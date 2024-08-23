import React, { useState } from 'react'
import { supabase } from '../../client'
import { useNavigate } from 'react-router'
import './AddCreator.scss'
import Card from '../../components/Card/Card';

const AddCreator = () => {

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
  const [formError, setFormError] = useState<string | null>(null)
  const int8 = new Int8Array(0)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { data, error } = await supabase
      .from('creators')
      .insert([
        {
          name,
          imageURL,
          description
        },
      ])
      .select('id')

    if (error) {
      setFormError("Error adding creator: " + error.message)
      return
    }

    const creatorId = data?.[0]?.id
    
    await supabase
      .from('socials')
      .insert([
        {
          id: creatorId,
          youtube,
          instagram,
          twitter,
          twitch,
          tiktok,
          website
        }
      ])

    setName('')
    setImageURL('')
    setDescription('')
    setYoutube('')
    setInstagram('')
    setTwitter('')
    setTwitch('')
    setTiktok('')
    setWebsite('')
    setFormError(null)
    navigate("/dashboard")
  }

  function navigateToCreator(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="container">
      <section className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="nice-form-group">
            <label htmlFor='name'>Name</label>
            <input id='name' type="text" placeholder='Creator Name'
              className='icon-left'
              value={name}
              onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="nice-form-group">
            <label htmlFor='imageURL'>ImageURL</label>
            <input id='imageURL' type="url" placeholder='Provide URL of profile image; https://image.com'
              className='icon-left'
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)} />
          </div>

          <div className="nice-form-group">
            <label htmlFor='description'>Description</label>
            <input id='description' type="text" placeholder='Description of creator....'
              className='icon-left'
              value={description}
              onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div className="nice-form-group">
            <label htmlFor='youtube'>Youtube</label>
            <input id='youtube' type="text" placeholder='@Example'
              className="icon-left youtube-icon"
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)} />
          </div>

          <div className="nice-form-group">
            <label htmlFor='insta'>Instagram</label>
            <input id='insta' type="text" placeholder='@Example' 
            className='icon-left insta-icon'
            value={instagram} 
            onChange={(e) => setInstagram(e.target.value)} />
          </div>

          <div className="nice-form-group">
            <label htmlFor='twitter'>Twitter</label>
            <input id='twitter' type="text" placeholder='@Example'
              className='icon-left twitter-icon'
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)} />
          </div>

          <div className="nice-form-group">
            <label htmlFor='twitch'>Twitch</label>
            <input id='twitch' type="text" placeholder='ProfileName'
              className='icon-left twitch-icon'
              value={twitch}
              onChange={(e) => setTwitch(e.target.value)} />
          </div>

          <div className="nice-form-group">
            <label htmlFor='tiktok'>Tiktok</label>
            <input id="tiktok" type="text" placeholder='@Example'
              className='icon-left tiktok-icon'
              value={tiktok}
              onChange={(e) => setTiktok(e.target.value)} />
          </div>
          <div className="nice-form-group">
            <label htmlFor='website'>Website</label>
            <input id="website" type="url" placeholder='https://example.com'
              className='icon-left'
              value={website}
              onChange={(e) => setWebsite(e.target.value)} />
          </div>

          <details>
            <summary>
              <button className="submit" type="submit">Add Creator</button>
            </summary>
          </details>

          {formError && <p className="error">{formError}</p>}
        </form>
      </section>

        {/* <h1>Card Preview</h1> */}
        <div className='card-view'>

        <Card
            key={null}
            id={int8}
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

  );
};

export default AddCreator