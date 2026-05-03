function StarRating({ count }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={i < count ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={i < count ? "text-amber-400" : "text-base-content/20"}
                >
                    <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.7 4.08L8 10.25l-3.7 2.25.7-4.08L2 5.5l4.15-.75L8 1z" />
                </svg>
            ))}
        </div>
    );
}

export default StarRating;