import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchOne } from '../../hooks/useFetchOne';
import { useDeleteCreator } from '../../hooks/useDeleteCreator';
import { FaLink } from "react-icons/fa";
import { FaTrashCan, FaPenToSquare, FaInstagram, FaTwitch, FaYoutube, FaTiktok, FaTwitter, } from "react-icons/fa6";
import './CreatorPage.scss'

const baseUrls = {
  youtube: 'https://www.youtube.com/',
  instagram: 'https://www.instagram.com/',
  twitter: 'https://twitter.com/',
  twitch: 'https://www.twitch.tv/',
  tiktok: 'https://www.tiktok.com/',
  website: 'https://'
}


const CreatorPage: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>();
  const [refresh, setRefresh] = useState(false)
  const editNav = () => {
    navigate(`/edit/${id}`)
  }
  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [description, setDescription] = useState('')
  const [youtube, setYoutube] = useState('')
  const [instagram, setInstagram] = useState('')
  const [twitter, setTwitter] = useState('')
  const [twitch, setTwitch] = useState('')
  const [tiktok, setTiktok] = useState('')
  const [website, setWebsite] = useState('')

  const { creatorData: creator, refetch } = useFetchOne()
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

  const deleteCreator = useDeleteCreator({ num: null }, () => { })
  const useDelete = async () => {
    await deleteCreator()
  }
  if (!creator) return <p>Fetching Creator...</p>


  if (refresh) {
    refetch()
    setRefresh(false)
  }


  return (
    <div className='creatorpage'>

      <div className="section section-1">
        <h1 className='section section-1 intro'>
          What I do...
        </h1>
        <div className='section section-1 descript'>
          {description}
        </div>
      </div>

      <div className="section section-2">
        <div className='section section-2 details'>

          <div className="profile-name" onClick={() => editNav()} style={{ cursor: 'pointer' }}>{name}</div>

          <div className="section card__img">
            <img src={imageURL} alt={name} onClick={() => editNav()} style={{ cursor: 'pointer' }} />
          </div>
        <div className="form-card-ctr">
          <button className="form-card__button button--blue cpage" onClick={editNav}>Edit <FaPenToSquare /></button>
          <button className="form-card__button button--orange cpage" onClick={useDelete}>Delete <FaTrashCan /></button>
        </div>
        </div>
      </div>



      <div className="section section-3">

        <div className="profile-card-social">
          {youtube && (<a href={`${baseUrls.youtube}${youtube}`} className="profile-card-social__item youtube" target="_blank" rel="nonopener noreferrer">
            <span className="icon-font">
              <FaYoutube />
            </span>
          </a>)}

          {instagram && (<a href={`${baseUrls.instagram}${instagram}`} className="profile-card-social__item instagram" target="_blank" rel="nonopener noreferrer">
            <span className="icon-font">
              <FaInstagram />
            </span>
          </a>)}

          {twitter && (<a href={`${baseUrls.twitter}${twitter}`}
            className="profile-card-social__item twitter" target="_blank" rel="nonopener noreferrer">
            <span className="icon-font">
              <FaTwitter />
            </span>
          </a>)}

          {twitch && (<a href={`${baseUrls.twitch}${twitch}`} className="profile-card-social__item twitch" target="_blank" rel="nonopener noreferrer">
            <span className="icon-font">
              <FaTwitch />
            </span>
          </a>)}

          {tiktok && (<a href={`${baseUrls.tiktok}${tiktok}`} className="profile-card-social__item tiktok" target="_blank" rel="nonopener noreferrer">
            <span className="icon-font">
              <FaTiktok />
            </span>
          </a>)}

          {website && (<a href={website} className="profile-card-social__item link" target="_blank" rel="nonopener noreferrer">
            <span className="icon-font">
              <FaLink />
            </span>
          </a>)}
        </div>
      </div>
    </div>
  );
};

export default CreatorPage