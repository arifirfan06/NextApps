import { useRouter } from "next/router"
function ClientName() {
    const router = useRouter()
    const id = router.query.id
    const client = router.query.clientIdName
    return <div>
        <h2>Here is the names of id {id}</h2>
        <ul>
            <li>{client}</li>
        </ul>
    </div>
}

export default ClientName