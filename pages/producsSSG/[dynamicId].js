import fs from 'fs/promises'
import path from 'path'

export default (props) => {
    const {productx} = props
    return <>
        <h2>{productx.title}Here is your ID</h2>
        <h3>ID: {productx.id}</h3>
    </>
}

export const getStaticProps = async (ctx) => {
    const {params} = ctx;
    const productId = params.dynamicId;
    const pathFile = path.join(process.cwd(), 'data', 'dumb-be.json')
    const jsonData = await fs.readFile(pathFile)
    const data = JSON.parse(jsonData)
    const product = data.products.find(prod => prod.id === productId)

    // if (!product) {
    //     return {notFound : true}
    // }
    return {props: {
        productx : product
    }}
}

export const getStaticPaths = async () => {
    return {
        paths: [
            {params: {dynamicId: 'p1'}},
            {params: {dynamicId: 'p2'}},
        ],
        fallback: 'blocking'
    }
}