'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUserFav, myKey } from '@/app/Utilities/apiUser';
import { MovieData } from '@/app/Utilities/Interface/interfaces';

const FAVORITES_QUERY_KEY = {
  movies: (sessionId: string | null) => ['favorites', 'movies', sessionId],
  tv: (sessionId: string | null) => ['favorites', 'tv', sessionId],
};

export const useFavoriteMovies = (sessionId: string | null) => {
  return useQuery<MovieData>({
    queryKey: FAVORITES_QUERY_KEY.movies(sessionId),
    queryFn: async () => {
      if (!sessionId) throw new Error('No session ID');
      return await getUserFav(sessionId, 'movies');
    },
    enabled: !!sessionId,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};

export const useFavoriteTv = (sessionId: string | null) => {
  return useQuery<MovieData>({
    queryKey: FAVORITES_QUERY_KEY.tv(sessionId),
    queryFn: async () => {
      if (!sessionId) throw new Error('No session ID');
      return await getUserFav(sessionId, 'tv');
    },
    enabled: !!sessionId,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};

export const useUpdateFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      sessionId,
      mediaType,
      mediaId,
      favorite,
    }: {
      sessionId: string | null;
      mediaType: string;
      mediaId: number;
      favorite: boolean;
    }) => {
      if (!sessionId) throw new Error('No session ID');

      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjk4ZDg4NTVkNDBkNTY4MjBlNDA1ZDY3MjkxZTEzZCIsIm5iZiI6MTcyMjM2Nzc4Ni4xODA4MjQsInN1YiI6IjY1YzI1MDNhOGU4ZDMwMDE2Mjc4MjIxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e9xUNvmJDxSfydLQ3v3of_uSIFAjW_GW5UYqeiAWqg8',
        },
        body: JSON.stringify({
          media_type: mediaType,
          media_id: mediaId,
          favorite: favorite,
        }),
      };

      const response = await fetch(
        `https://api.themoviedb.org/3/account/20971868/favorite?api_key=${myKey}&session_id=${sessionId}`,
        options
      );
      const data = await response.json();
      return data;
    },
    onSuccess: (data, variables) => {
      const mediaType = variables.mediaType === 'movie' ? 'movies' : 'tv';
      queryClient.invalidateQueries({
        queryKey: FAVORITES_QUERY_KEY[mediaType as keyof typeof FAVORITES_QUERY_KEY](
          variables.sessionId
        ),
      });
    },
  });
};

export const useIsFavorited = (
  sessionId: string | null,
  mediaId: number,
  mediaType: 'movie' | 'tv'
) => {
  const { data: movieFavorites } = useFavoriteMovies(
    mediaType === 'movie' ? sessionId : null
  );
  const { data: tvFavorites } = useFavoriteTv(
    mediaType === 'tv' ? sessionId : null
  );

  const favorites = mediaType === 'movie' ? movieFavorites : tvFavorites;
  return !!favorites?.results?.find((item: any) => item.id === mediaId);
};
