export default function CatDetails(props) {
    return (
        <div className="flex justify-center"> 
            <div className="w-2/3 text-center m-10 bg-amber-400 p-4 font-sans font-medium text-lg border border-gray-300 rounded shadow-sm">
                <h4 className="mb-2 font-bold text-2xl">Cat Details:</h4>
                <p className="font-bold text-gray-600">Origin: {props.origin}</p>
                <p className="font-bold text-gray-600">Children Friendly: {props.children_friendly < 5 ? "Not good with kids." : "Great with kids!"}</p>
                <p className="font-bold text-gray-600">Cat Length: {props.length}</p>
                <p className="font-bold text-gray-600">Playfulness: {props.playfulness < 5 ? "Not very Playful" : "Very Playful"}</p>
                <p className="font-bold text-gray-600">Friendly w/ Other Pets: {props.other_pets_friendly < 5 ? "Not good with other Pets" : "Great with Other Pets!"}</p>
            </div>
        </div>
       
    );
}
