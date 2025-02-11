export default async function Category({ params }) {
    const { category } = await params;

    return <div>Post: {category}</div>;
}