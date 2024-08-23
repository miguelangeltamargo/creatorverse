import React, { useEffect, useState, useCallback } from "react";
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

export const useFetchAll = () => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

      const { data: creatorsData } = await supabase
        .from("creators")
        .select("*")
        .order('id', {ascending: true})

      const { data: socialsData } = await supabase
      .from("socials")
      .select()
      .order('id', {ascending: true})

      const combinedData =
        creatorsData?.map((creator) => {
          const creatorSocials =
            socialsData?.find((social) => social.id === creator.id) || {};

          return {
            ...creator,
            ...creatorSocials,
          };
        }) || [];

      setCreators(combinedData);
      setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { creators, loading, refetch: fetchData };
};
