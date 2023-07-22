function user(props) {
    return <h2>{props.username}</h2>
}

export default user

export async function getServerSideProps(ctx) {
    return {
        props: {
            username: 'Vue'
        }
    }
}