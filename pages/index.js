import Link from "next/link"
import { useRouter } from "next/router"
export default function MyApp() {
    const router = useRouter()
    const navigate = () => {
        router.push('./about')
    }
    return <>
        <h1>First landing Page</h1>
        <ul>
            <li><Link href='/clients'>Clients</Link></li>
            <li><Link href='/clients/vuee'>Client Name</Link></li>
            <li><Link href='/portfolio/pid1'>Porto Project</Link></li>
            <li><Link href='/blogs/1/123/1234/12345'>Test</Link></li>
            <li><Link href='/clients/1/123/1234/12345'>Broken?</Link></li>
        </ul>
        <button onClick={navigate}>Navigate Programmatically</button>
    </>
}
