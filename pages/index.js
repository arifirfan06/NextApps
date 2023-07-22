import path from 'path'
import fs from 'fs/promises'
import Link from 'next/link'
function Homepage(props) {
    const {products} = props
    return <>
    <ul>
        {products.map((product) => (
            <li className='text-green-600 font-bold underline' key={product.id}><Link href={`/producsSSG/${product.id}`}>{product.title}</Link></li>
        ))}
    </ul>
    </>
}

export async function getStaticProps() {
    console.log('revalidate...')
    const pathFile = path.join(process.cwd(), 'data', 'dumb-be.json')
    const jsonData = await fs.readFile(pathFile)
    const data = JSON.parse(jsonData)
    return {
        props: {
            products: data.products
        },
        revalidate: 3
    }
}


export default Homepage