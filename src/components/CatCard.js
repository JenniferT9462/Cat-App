import Image from "next/image";

export default function CatCard(props) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
            <Image 
                className="w-full object-cover" 
                src={props.image} 
                alt={props.name} 
                width={300}
                height={300}
                priority
                />
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{props.name}</h2>
                <p className="text-gray-600">{props.origin}</p>
            </div>
        </div>
    );
}