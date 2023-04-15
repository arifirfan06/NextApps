import { useRouter } from "next/router";

export default function scpecificBlog() {
    const router = useRouter()
    console.log(router.query)
    const filter = router.query.filtered
    console.log(filter)
    return <div>
        <h2>Here is the specifics blog</h2>
        <h4>Year: {filter && filter[0]}, Month: {filter && filter[1]}, Day: {filter && filter[2]}</h4>
    </div>
}