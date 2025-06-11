import { useState, useRef } from "react";
import type { villager } from "../types/villager";
import { monthMap, personalityMap, speciesMap, genderMap } from "../utils/villagerMappings";
import gsap from "gsap";

type CardProps = {
    villager: villager
}

export default function Card({ villager }: CardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [flipped, setFlipped] = useState<boolean>(false);

    const handleClick = () => {
        setFlipped(!flipped);

        if(cardRef.current) {
            gsap.to(cardRef.current, {
                rotateY: flipped ? 0 : 180,
                duration: 0.3,
                ease: "power2.inOut",
            })
        }
    }

    const handleMouseEnter = () => {
        if (cardRef.current) {
            gsap.to(cardRef.current, {
                scale: 1.05,
                y: -10,
                boxShadow: "0px 20px 30px rgba(0,0,0,0.2)",
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            gsap.to(cardRef.current, {
                scale: 1,
                y: 0,
                boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    const month = monthMap[villager.birthday_month] ?? "??";
    const personality_kr = personalityMap[villager.personality] ?? "알 수 없음";
    const species_kr = speciesMap[villager.species] ?? "알 수 없음";
    const gender_kr = genderMap[villager.gender] ?? "알 수 없음";

    return (
        <div 
            className="w-full flex justify-center"
            onClick={handleClick}
        >
            <div
                className="
                    villager-card 
                    w-full 
                    max-w-[105px] 
                    sm:max-w-[140px] 
                    lg:max-w-[280px] 
                    min-w-[105px] 
                    aspect-[2/3] 
                    rounded-3xl
                    mx-1
                    sm:mx-1 
                    md:mx-2
                    my-3 
                    sm:my-4 
                    md:my-6 
                    relative 
                    group 
                    cursor-pointer
                "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={cardRef}
                style={{
                    transformStyle: "preserve-3d",
                    backgroundColor: villager.title_color ? `#${villager.title_color}` : "#fff9e3",
                }}
            >
            {/* 배경 레이어 */}
            <div
                className="
                absolute top-0 left-0 
                w-full h-full 
                bg-white opacity-60 
                border-[6px] 
                sm:border-[8px] 
                md:border-[10px] 
                rounded-3xl 
                z-0
                "
            />

            {/* 앞면 */}
            <div
                className="
                absolute w-full h-full 
                backface-hidden 
                rounded-3xl 
                flex flex-col 
                items-center 
                justify-center 
                z-10
                "
            >
                <img
                    className="
                        object-contain 
                        w-[50%] 
                        sm:w-[55%] 
                        md:w-[60%] 
                        h-[50%] 
                        sm:h-[55%] 
                        md:h-[60%] 
                        relative z-10
                    "
                    src={villager.image_url}
                    alt={`${villager.name} 카드`}
                />
                <h2
                    className="
                        font-sdnrBold 
                        text-fontColor 
                        text-sm 
                        sm:text-base 
                        md:text-lg 
                        lg:text-xl 
                        text-center 
                        mt-3 
                        sm:mt-4 
                        md:mt-6 
                        px-2 
                        sm:px-3 
                        md:px-4 
                        py-1 
                        sm:py-2 
                        md:py-3 
                        rounded-3xl 
                        relative z-10
                    "
                    style={{
                        backgroundColor: villager.title_color ? `#${villager.title_color}` : "#fff9e3",
                        color: villager.text_color ? `#${villager.text_color}` : "#807155",
                    }}
                >
                    {villager.name}
                </h2>
            </div>

            {/* 뒷면 */}
            <div
                className="
                absolute w-full h-full 
                backface-hidden 
                bg-cream 
                rounded-3xl 
                px-2 
                sm:px-3 
                md:px-4 
                py-2 
                sm:py-3 
                md:py-4 
                text-fontColor 
                transform rotateY-180 
                border-[6px] 
                sm:border-[8px] 
                md:border-[10px] 
                border-borderColor
                flex flex-col 
                justify-center 
                overflow-hidden
                "
            >
                <img
                    className="
                        mx-auto 
                        object-contain 
                        w-[25%] 
                        sm:w-[30%] 
                        md:w-[35%] 
                        h-[25%] 
                        sm:h-[30%] 
                        md:h-[35%]
                    "
                    src={villager.image_url}
                    alt={`${villager.name} 카드`}
                />
                <h2
                    className="
                        text-center 
                        mt-2 
                        sm:mt-3 
                        md:mt-4 
                        mb-1 
                        sm:mb-2 
                        md:mb-3 
                        text-xs 
                        sm:text-sm 
                        md:text-base 
                        lg:text-lg 
                        font-sdnrBold
                    "
                >
                    {villager.name}
                </h2>
                <div
                    className="
                        text-[8px] 
                        sm:text-[10px] 
                        md:text-sm 
                        lg:text-base 
                        font-sdnrBold
                        md:font-mapleBold 
                        mx-1 
                        sm:mx-2 
                        md:mx-3 
                        overflow-y-auto 
                        scrollbar-thin 
                        scrollbar-thumb-gray-400 
                        scrollbar-track-transparent
                    "
                >
                <p className="mb-0.5 sm:mb-1">종: {species_kr}</p>
                <p className="mb-0.5 sm:mb-1">성격: {personality_kr}</p>
                <p className="mb-0.5 sm:mb-1">성별: {gender_kr}</p>
                <p className="mb-0.5 sm:mb-1">생일: {month}월 {villager.birthday_day}일</p>
                <p className="mb-0.5 sm:mb-1 break-words whitespace-pre-wrap">대사: {villager.quote}</p>
                </div>
            </div>
            </div>
        </div>
    );
}