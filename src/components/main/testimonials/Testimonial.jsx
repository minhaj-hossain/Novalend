import StarRating from "./StarRating";

const testimonials = [
    {
        name: "Aisha Rahman",
        role: "Computer Science Student",
        avatar: "AR",
        color: "bg-violet-100 text-violet-700",
        rating: 5,
        text: "I borrowed three tech books in one afternoon. The search and filter feature saved me so much time. This platform is a game-changer for students like me.",
    },
    {
        name: "James Thornton",
        role: "High School Teacher",
        avatar: "JT",
        color: "bg-emerald-100 text-emerald-700",
        rating: 5,
        text: "Finally a library that works the way I think. I can find science titles instantly and recommend them to my students. The availability counter is super helpful.",
    },
    {
        name: "Priya Menon",
        role: "Fiction Enthusiast",
        avatar: "PM",
        color: "bg-rose-100 text-rose-700",
        rating: 4,
        text: "The story category has some hidden gems I would never have found in a physical library. Borrowing is seamless — click, confirm, and read. Love it.",
    },
    {
        name: "Daniel Osei",
        role: "Software Engineer",
        avatar: "DO",
        color: "bg-sky-100 text-sky-700",
        rating: 5,
        text: "As someone who reads a lot of tech books, having instant digital access with no late fees is incredible. The UI is clean and modern too.",
    },
    {
        name: "Lena Fischer",
        role: "Graduate Researcher",
        avatar: "LF",
        color: "bg-amber-100 text-amber-700",
        rating: 5,
        text: "I use this platform daily for my research. The science section is well-curated and the borrow confirmation flow is the smoothest I have ever used.",
    },
    {
        name: "Marcus Lee",
        role: "Casual Reader",
        avatar: "ML",
        color: "bg-teal-100 text-teal-700",
        rating: 4,
        text: "Great selection and super easy to use. My profile keeps track of everything I have borrowed so I never lose my place in my reading journey.",
    },
];




function Testimonials() {
    return (
        <section className="py-20 px-4 bg-base-100">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-14">

                    <h2 className="text-4xl font-bold mt-2 mb-4">Loved by Readers</h2>
                    <p className="text-base-content/60 max-w-xl mx-auto text-lg">
                        Thousands of people borrow, read, and return every day. Here is what some of them have to say.
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="card bg-base-200 border border-base-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="card-body gap-4">

                                <StarRating count={testimonial.rating} />


                                <p className="text-base-content/75 leading-relaxed text-sm flex-1">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>


                                <div className="divider my-0" />


                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shrink-0 ${testimonial.color}`}
                                    >
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm leading-tight">{testimonial.name}</p>
                                        <p className="text-base-content/50 text-xs">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}


export default Testimonials;