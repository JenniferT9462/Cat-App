export default function CatDetails(props) {
    return (
        <div>
            <p>Origin: {props.catData.origin}</p>
            <p>Children Friendly: {props.catData.children_friendly < 5 ? "Not good with kids." : "Great with kids!"}</p>
            <p>Cat Length: {props.catData.length}</p>
        </div>
    )
}