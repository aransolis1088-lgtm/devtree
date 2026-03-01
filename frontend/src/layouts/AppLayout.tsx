
import { useQuery } from '@tanstack/react-query'
import { Navigate } from 'react-router-dom'
import { getUsers } from "../api/DevTreeAPI";
import DevTree from '../components/DevTree';

export default function AppLayout() {

    const { data, isLoading, isError } = useQuery({
        queryFn: getUsers,
        queryKey: ['user'],
        retry: 1,
        refetchOnWindowFocus: false
    })

    if (isLoading) return 'Cargando...'
    if (isError) return <Navigate to={'/auth/login'} />
    if (data) return < DevTree data={data} />
}