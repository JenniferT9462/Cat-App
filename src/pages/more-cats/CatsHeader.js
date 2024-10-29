import Link from "next/link";

export default function CatsHeader() {
    return (
        <div className="bg-orange-400 drop-shadow-md flex justify-between">
            <h1 className="text-xl">Cats Cats and More Cats</h1>
            <Link href="/cat">Just One Cat</Link>
        </div>
    )
}