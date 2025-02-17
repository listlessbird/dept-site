import { useState } from 'react';
import images from '@/data/placements.json';

const PlacementGallery = () => {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);

    const [placementImages, setPlacementImages] = useState(() => {
        const currentYearImages = images.years.find(({ year }) => parseInt(year) === currentYear);
        if (currentYearImages) {
            return currentYearImages;
        }
        return images.years.length > 0 ? images.years[0] : null;
    });

    const handleYearChange = (event: any) => {
        const year = parseInt(event.target.value);
        const yearImages = images.years.find(({ year: y }) => parseInt(y) === year);
        if (yearImages) {
            setSelectedYear(year);
            setPlacementImages(yearImages);
        }
    };

    if (!placementImages) {
        return <div>No images found</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-end px-4">
                <select
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="block w-32 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    {images.years.map(({ year }) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {placementImages.images.map(({ fullName, name }, index) => (
                    <img
                        key={`${selectedYear}-${index}`}
                        src={`/placements/${placementImages.year}/${fullName}`}
                        alt={name}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        loading="lazy"

                    />
                ))}
            </div>
        </div>
    );
};

export default PlacementGallery;