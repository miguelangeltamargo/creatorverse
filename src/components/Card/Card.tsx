import './Card.scss'
import { FaTrashCan, FaPenToSquare, FaInstagram, FaTwitch, FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDeleteCreator } from '../../hooks/useDeleteCreator';

interface Props {
    id: Int8Array;
    name: string;
    description: string;
    imageURL: string;
    youtube: string;
    instagram: string;
    twitter: string;
    twitch: string;
    tiktok: string;
    website: string;
    navigateToCreator: (name: string, id: string) => void;
    onUse: () => void;
}
const baseUrls = {
    youtube: 'https://www.youtube.com/',
    instagram: 'https://www.instagram.com/',
    twitter: 'https://twitter.com/',
    twitch: 'https://www.twitch.tv/',
    tiktok: 'https://www.tiktok.com/',
    // website: 'https://'
}

const Card: React.FC<Props> = ({ id, name, imageURL, description, youtube, instagram, twitter, twitch, tiktok, website, navigateToCreator, onUse }: Props): JSX.Element => {
    const navigate = useNavigate()
    let isForm = false
    // if (id.length === 0) {
    //     isForm = true
    // }
    const deleteCreator = useDeleteCreator({num: id}, onUse)
    const useDelete = async () => {
        await deleteCreator()
    }
    const editNav = () => {
        navigate(`/edit/${id}`)
    }

    return (
        <div>
            {!isForm && (
                <div className="profile-card">
                    <div className="profile-card__img">
                        <img src={imageURL} alt={name} onClick={() => navigateToCreator(name, id instanceof Int8Array ? id.join('') : id)} style={{ cursor: 'pointer' }} />
                    </div>

                    <div className="profile-card__cnt">
                        <div className="profile-card__name" onClick={() => navigateToCreator(name, id instanceof Int8Array ? id.join('') : id)} style={{ cursor: 'pointer' }}>{name}</div>
                        {/* <div className="profile-card__txt">{description}</div> */}

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

                        <div className="profile-card-ctr">
                            <button className="profile-card__button button--blue" onClick={editNav}>Edit <FaPenToSquare /></button>
                            <button className="profile-card__button button--orange" onClick={deleteCreator}>Delete <FaTrashCan /></button>
                        </div>
                    </div>
                </div>)}

            {isForm && (<div className="form-card">
                <div className="form-card__img">
                    <img src={imageURL} alt={name} onClick={() => navigateToCreator(name, id instanceof Int8Array ? id.join('') : id)} style={{ cursor: 'pointer' }} />
                </div>

                <div className="form-card__cnt">
                    <div className="form-card__name" onClick={() => navigateToCreator(name, id instanceof Int8Array ? id.join('') : id)} style={{ cursor: 'pointer' }}>{name}</div>
                    {/* <div className="form-card__txt">{description}</div> */}

                    <div className="form-card-social">
                        {youtube && (<a href={`${baseUrls.youtube}${youtube}`} className="form-card-social__item youtube" target="_blank" rel="nonopener noreferrer">
                            <span className="icon-font">
                                <FaYoutube />
                            </span>
                        </a>)}

                        {instagram && (<a href={`${baseUrls.instagram}${instagram}`} className="form-card-social__item instagram" target="_blank" rel="nonopener noreferrer">
                            <span className="icon-font">
                                <FaInstagram />
                            </span>
                        </a>)}

                        {twitter && (<a href={`${baseUrls.twitter}${twitter}`}
                            className="form-card-social__item twitter" target="_blank" rel="nonopener noreferrer">
                            <span className="icon-font">
                                <FaTwitter />
                            </span>
                        </a>)}

                        {twitch && (<a href={`${baseUrls.twitch}${twitch}`} className="form-card-social__item twitch" target="_blank" rel="nonopener noreferrer">
                            <span className="icon-font">
                                <FaTwitch />
                            </span>
                        </a>)}

                        {tiktok && (<a href={`${baseUrls.tiktok}${tiktok}`} className="form-card-social__item tiktok" target="_blank" rel="nonopener noreferrer">
                            <span className="icon-font">
                                <FaTiktok />
                            </span>
                        </a>)}

                        {website && (<a href={`${website}`} className="form-card-social__item link" target="_blank" rel="nonopener noreferrer">
                            <span className="icon-font">
                                <FaLink />
                            </span>
                        </a>)}
                    </div>

                    <div className="form-card-ctr">
                        <button className="form-card__button button--blue" onClick={editNav}>Edit <FaPenToSquare /></button>
                        <button className="form-card__button button--orange" onClick={useDelete}>Delete <FaTrashCan /></button>
                    </div>
                </div>
            </div>)}

        </div>
    )
}

export default Card