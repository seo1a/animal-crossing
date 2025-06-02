import { useRef, useEffect, useState } from "react";
import type { villager } from "../types/villager";
import { monthMap, personalityMap, speciesMap, genderMap } from "../utils/villagerMappings";
import gsap from "gsap";

type CardDetailProps = {
    selectedVillager: villager;
    onClose: () => void;
}

export default function CardDetail({ selectedVillager, onClose }: CardDetailProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isClosing, setIsClosing] = useState(false);
    
    const month = monthMap[selectedVillager.birthday_month] ?? "??";
    const personality_kr = personalityMap[selectedVillager.personality] ?? "알 수 없음";
    const species_kr = speciesMap[selectedVillager.species] ?? "알 수 없음";
    const gender_kr = genderMap[selectedVillager.gender] ?? "알 수 없음";

    useEffect(() => {
        // 디테일 카드 등장 애니메이션
        gsap.fromTo(
            modalRef.current,
            { scale: 0.5, opacity: 0, y: -50 },
            { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
    }, []);

    const handleClose = () => {
        if (isClosing) return;
        setIsClosing(true);
        gsap.to(modalRef.current, {
            scale: 0.5,
            opacity: 0,
            y: 50,
            duration: 0.4,
            ease: "power2.in",
            onComplete: onClose,
        });
    };

    return(
        <div
            className="fixed inset-0 bg-cream bg-opacity-50
            flex justify-center items-center z-50"
            onClick={handleClose}
        >
            <div
                ref={modalRef}
                className="bg-cream border-8 border-borderColor rounded-3xl p-6 max-w-md w-full h-[700px] relative" 
                onClick={e => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 text-xl font-sdnrBold"
                    onClick={handleClose}
                    aria-label="Close"
                >
                    X
                </button>

                <div className="flex flex-col items-center justify-center h-full text-fontColor">
                    <img 
                        src={selectedVillager.image_url} 
                        alt={`${selectedVillager.name} 카드`}
                        className="block mx-auto w-[200px] h-auto"
                    />
                    
                    <h2 className="mt-6 mb-6 text-4xl font-sdnrBold">{selectedVillager.name}</h2>
                    <div className="text-xl font-mapleBold mx-4 self-start">
                        <p className="mb-2">종: {species_kr}</p>
                        <p className="mb-2">성격: {personality_kr}</p>
                        <p className="mb-2">성별: {gender_kr}</p>
                        <p className="mb-2">생일: {month}월 {selectedVillager.birthday_day}일</p>
                        <p className="mb-2">대사: {selectedVillager.quote}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}