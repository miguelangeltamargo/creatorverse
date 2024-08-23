import React from 'react'


interface Creator {
    id: Int8Array;
    name: string;
    imageURL: string;
    description: string;
    youtube?: string;
    instagram?: string;
    twitter?: string;
    twitch?: string;
    tiktok?: string;
  }

  const baseUrls = {
    youtube: 'https://www.youtube.com/user/',
    instagram: 'https://www.instagram.com/',
    twitter: 'https://twitter.com/',
    twitch: 'https://www.twitch.tv/',
    tiktok: 'https://www.tiktok.com/'
    website: 'https://'
    
const useSocials = (creator: Creator) => {


  return (
    <div>useSocials</div>
  )
}

export default useSocials