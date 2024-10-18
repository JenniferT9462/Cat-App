export default function CatDetails(props) {
    return (
        <div className="text-black text-center m-10">
            <p>Origin: {props.origin}</p>
            <p>Children Friendly: {props.children_friendly < 5 ? "Not good with kids." : "Great with kids!"}</p>
            <p>Cat Length: {props.length}</p>
        </div>
    )
}