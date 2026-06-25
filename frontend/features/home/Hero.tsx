import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-20 text-white">
            <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
                <div>
                    <h2 className="text-5xl font-extrabold leading-tight md:text-6xl">
                        Fresh Pizza Delivered Fast
                    </h2>

                    <p className="mt-4 text-lg">
                        Delicious pizzas, burgers and sides delivered hot to your door.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <AppInput placeholder="Enter postcode e.g. L4 6SH" />
                        <AppButton variant="secondary">Find Store</AppButton>
                    </div>

                    <div className="mt-6 flex gap-4">
                        <AppButton variant="primary" className="bg-white text-red-600 hover:bg-gray-100">
                            Delivery
                        </AppButton>
                        <AppButton variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                            Collection
                        </AppButton>
                    </div>
                </div>

                <div className="hidden justify-center md:flex">
                    <div className="text-[180px] drop-shadow-2xl">🍕</div>
                </div>
            </div>
        </section>
    );
}