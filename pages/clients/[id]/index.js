import { useRouter } from "next/router"
export default () => {
    const router = useRouter()
    const clientId = router.query.id
    return <>
        <h2>This is the client id page, your Id is '{clientId}'</h2>
    </>
}