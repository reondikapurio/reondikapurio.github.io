import { Star } from "lucide-react";

export default function SkillCard({
    title,
    desc,
    level,
}: {
    title: string;
    desc: string;
    level: number; // 1〜5
}) {
    return (
        <div className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-md transition duration-300">
            <h3 className="text-base font-semibold mb-2">
                {title}
            </h3>

            <p className="text-sm text-gray-600 mb-4">
                {desc}
            </p>

            {/* Stars */}
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        className={
                            i < level
                                ? "fill-black text-black"
                                : "text-gray-300"
                        }
                    />
                ))}
            </div>
        </div>
    );
}
