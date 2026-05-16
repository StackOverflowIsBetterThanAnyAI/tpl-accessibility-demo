import Layout from '../layouts/Layout'
import Pagination from '../components/Pagination'
import BookGridItem from '../components/BookGridItem'
import { BOOK_LIST } from '../const'

export default function Books() {
    return (
        <Layout>
            <div className="flex max-w-screen-lg mx-auto py-16">
                <main
                    className="w-full flex-auto space-y-3 p-6"
                    aria-labelledby="main-heading"
                >
                    <h2 className="text-40" aria-title>
                        New in General Fiction
                    </h2>

                    <h1 data-name="filter" className="flex justify-start">
                        973 Results
                    </h1>

                    <section
                        aria-labelledby="section-heading"
                        className="flex flex-wrap -m-6"
                        aria-level="section"
                    >
                        <h2 className="sr-only" id="section-heading">
                            Books, Page 1
                        </h2>
                        {BOOK_LIST.map((book, index) => (
                            <BookGridItem
                                {...book}
                                index={index}
                                key={`book-item-${index}`}
                            />
                        ))}
                    </section>

                    <Pagination />
                </main>
            </div>
        </Layout>
    )
}
