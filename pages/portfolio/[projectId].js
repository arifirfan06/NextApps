import { useRouter } from "next/router"

function DynamicPage () {
const router = useRouter()
const routeQuery = router.query.projectId
return <div>
    <h2>Here is your directory {routeQuery}</h2>
</div>
}

export default DynamicPage