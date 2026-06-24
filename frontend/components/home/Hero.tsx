export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-20 text-white">
            <div className="mx-auto max-w-7xl">
                <h2 className="max-w-2xl text-5xl font-extrabold">
                    Fresh Pizza Delivered Fast
                </h2>

                <p className="mt-4 max-w-xl text-lg">
                    Delicious pizzas, burgers and sides delivered hot to your door.
                </p>

                <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
                    <input
                        className="flex-1 rounded-full px-5 py-3 text-gray-900"
                        placeholder="Enter postcode e.g. L4 6SH"
                    />
                    <button className="rounded-full bg-yellow-400 px-8 py-3 font-bold text-gray-900">
                        Find Store
                    </button>
                </div>

                <div className="mt-6 flex gap-4">
                    <button className="rounded-full bg-white px-6 py-2 font-semibold text-red-600">
                        Delivery
                    </button>
                    <button className="rounded-full border border-white px-6 py-2 font-semibold">
                        Collection
                    </button>
                </div>
            </div>
        </section>
    );
}