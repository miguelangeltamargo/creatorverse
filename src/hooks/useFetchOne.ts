import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";

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
  website?: string;
}

export const useFetchOne = () => {
  const { id } = useParams<{ id: string }>();
  const [creatorData, setCreatorData] = useState<Creator | null>(null);
  const navigate = useNavigate();

  const fetchCreator = async () => {
    const { data, error } = await supabase
      .from("creators")
      .select()
      .eq("id", id)
      .single();

    const { data: socials } = await supabase
      .from("socials")
      .select()
      .eq("id", id)
      .single();

    if (error) {
      console.error("Fetch Error:", error);
      navigate("/dashboard");
    }

    if (data && socials) {
      const combinedData = {
        ...data,
        ...socials,
      };
      setCreatorData(combinedData);
    }
  };

  useEffect(() => {
    fetchCreator();
  }, [id]);

  useEffect(() => {
    fetchCreator();
  }, [fetchCreator]);

  return { creatorData, refetch: fetchCreator };
};
