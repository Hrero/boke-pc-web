import { useRouter } from 'next/router'

const Info = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div className="homeWrap">
            <p>Post: {id}</p>
        </div>
    )
};

export default Info
