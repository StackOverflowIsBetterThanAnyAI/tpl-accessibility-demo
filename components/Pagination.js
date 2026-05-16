import clsx from 'clsx'

function PageLink({ number, current }) {
    const label = current ? `Page ${number}` : `Goto page ${number}`
    const isCurrentPage = current ? 'page' : false

    const classnames = clsx({
        'px-3 py-1 text-22': true, // All
        'hover:bg-gray-100 hover:underline': !isCurrentPage, // Hover
        'text-blue-700': !isCurrentPage, // Is not current page
        'bg-blue-600 text-white font-bold': isCurrentPage, // Is current page
    })

    return (
        <li>
            <a
                href={`#?page=${number}`}
                className={classnames}
                aria-label={label}
                aria-current={isCurrentPage}
            >
                {number}
            </a>
        </li>
    )
}

export default function Pagination({
    currentPage = 1,
    totalPages = 48,
    totalItems = 480,
}) {
    return (
        <nav aria-label="Pagination" className="flex pt-8">
            {/* Next page link for screen readers only */}
            <a href="#" className="sr-only">
                Next page
            </a>

            <ul className="inline-flex space-x-2 mx-auto">
                <li className="mx-4">
                    <a
                        href="#"
                        className="font-bold text-22"
                        aria-label="Previous page"
                    >
                        &laquo; Previous
                    </a>
                </li>
                <PageLink number="1" current />
                <PageLink number="2" />
                <PageLink number="3" />
                <PageLink number="4" />
                <PageLink number="5" />
                <li aria-hidden="true">&hellip;</li>
                <PageLink number="48" title="Goto last page, page 48" />
                <li className="mx-4">
                    <a
                        href="#"
                        className="font-bold text-22"
                        aria-label="Next page"
                    >
                        Next &raquo;
                    </a>
                </li>
            </ul>
        </nav>
    )
}
