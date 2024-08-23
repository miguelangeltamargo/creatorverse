import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";

interface Creator {
  name: string;
  imageURL: string;
  description: string;
  youtube?: string;
  instagram?: string;
  twitter?: string;
  twitch?: string;
  tiktok?: string;
  website?: string;
}

export const useUpdate = (creator: Creator) => {
    const { id } = useParams<{ id: string }>();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate()

    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      try {
        const { data, error: updateError } = await supabase
          .from("creators")
          .update({
            name: creator.name,
            imageURL: creator.imageURL,
            description: creator.description,
          })
          .eq("id", id)
          .select()
  
        if (updateError) throw updateError;
  
        const { data: socialsData } = await supabase
          .from("socials")
          .update({
            youtube: creator.youtube,
            instagram: creator.instagram,
            twitter: creator.twitter,
            twitch: creator.twitch,
            tiktok: creator.tiktok,
            website: creator.website
          })
          .eq("id", id)
          .select()
  
        setError(null)
        console.log(data, socialsData)
        navigate(`/creator/${creator.name}/${id}`)//change to navigate back to creator page
      } catch (err: unknown) {
        if (err !instanceof Error){
            setError(err.message);
        }
      }
    };
  
    return {
      handleUpdate,
      error
    };
  };