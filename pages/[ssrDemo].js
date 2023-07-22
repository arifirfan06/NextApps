export default (props) => {
    return <h1>{props.id}</h1>
}

export async function getServerSideProps(ctx) {
    const {params} = ctx

    const userId = params.ssrDemo;

    return {
        props: {
            id: 'userid-' + userId
        }
    }
}