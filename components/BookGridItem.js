import clsx from 'clsx'
import Image from 'next/image'
import _uniqueId from 'lodash/uniqueId'

export default function BookGridItem({
    title,
    author,
    image,
    index,
    holds,
    copies,
    dateAdded,
}) {
    return (
        <div
            className="
      w-1/2 min-w-96 flex flex-col items-start p-6
      flex-0 space-y-3
      sm:w-1/3
      md:w-1/4
    "
        >
            <a href={`book-${index}`} className="group" id={`${index}-heading`}>
                <img src={image} className="mb-2 w-full" />
            </a>
            <a href={`book-${index}`} className="group" id={`${index}-heading`}>
                <h3 className="text-blue-300 group-hover:underline">{title}</h3>
            </a>
            <p className="text-sm">
                <span className="sr-only">, by: </span>
                {author}
            </p>

            <p className="text-sm">
                {copies} copies / {holds} holds
            </p>

            {dateAdded && (
                <p className="font-bold text-sm">Added {dateAdded}</p>
            )}

            <div className="flex flex-col space-y-2 w-full">
                <a
                    href={`place-hold-${index}`}
                    className="bg-blue-600 text-white rounded px-4 py-2 font-bold text-center"
                >
                    Place Hold
                </a>
                <a
                    href={`save-${index}`}
                    className="bg-white border-2 border-gray-200 text-gray-900 rounded px-4 py-2 text-center"
                >
                    Save
                </a>
            </div>
        </div>
    )
}
