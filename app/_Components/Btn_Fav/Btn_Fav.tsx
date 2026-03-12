'use client'
import { getToken, myKey } from '@/app/Utilities/apiUser';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react'
import { RiHeartAddFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { useIsFavorited, useUpdateFavorite } from '@/app/Hooks/useFavorites';
import toast from 'react-hot-toast';

interface Iprop {
    data: number
    type: string
}

export default function Btn_Fav(props: Iprop) {
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    
    const isFavorited = useIsFavorited(sessionId, props.data, props.type as 'movie' | 'tv');
    const updateFavoriteMutation = useUpdateFavorite();

    useEffect(() => {
        setMounted(true);
        const id = localStorage.getItem('session_id');
        setSessionId(id);
    }, []);

    const handleToggleFavorite = async () => {
        if (!sessionId) {
            const tokenInfo = await getToken();
            if (tokenInfo?.request_token) {
                router.push(
                    `https://www.themoviedb.org/authenticate/${tokenInfo.request_token}?redirect_to=https://cinema-base.vercel.app/profile/${tokenInfo.request_token}`
                );
            }
            return;
        }

        updateFavoriteMutation.mutate(
            {
                sessionId,
                mediaType: props.type,
                mediaId: props.data,
                favorite: !isFavorited,
            },
            {
                onSuccess: (response) => {
                    if (response.status_code === 1 || response.status_message === 'Success.') {
                        toast.success(
                            isFavorited ? 'Removed from favorites' : 'Added to favorites'
                        );
                    } else {
                        toast.error('Failed to update favorite');
                    }
                },
                onError: (error) => {
                    toast.error('Error updating favorite');
                    console.error(error);
                },
            }
        );
    };

    if (!mounted) {
        return null;
    }

    const isLoading = updateFavoriteMutation.isPending;

    return (
        <>
            <button
                onClick={handleToggleFavorite}
                disabled={isLoading}
                className=' flex flex-col gap-y-3 items-center justify-center mBlur border mBlur borderGlass rounded-3xl py-3 px-5 lg:px-8 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
            >
                <p className=' text-white text-[12px] lg:text-sm font-semibold'>
                    {isFavorited ? (
                        <MdDeleteForever className='text-white text-base lg:text-2xl inline mx-1' />
                    ) : (
                        <RiHeartAddFill className='text-white text-sm lg:text-2xl inline mx-1' />
                    )}
                    {isLoading ? 'Loading...' : isFavorited ? 'Remove from Favorite' : 'Add to Favorite'}
                </p>
            </button>
        </>
    )
}
