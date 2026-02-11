import { AiFillStar } from "react-icons/ai";

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
        <div className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
            {/* タイトル */}
            <h3 className="text-lg font-semibold mb-2">{title}</h3>

            {/* 説明 */}
            <p className="text-sm text-gray-600 mb-4">{desc}</p>

            {/* 星 */}
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <AiFillStar
                        key={i}
                        size={18}
                        color={i < level ? "#facc15" : "#d1d5db"}
                    />
                ))}
            </div>
        </div>
    );
}
