import React from 'react';
import EditableImageCard from './EditableImageCard';

const EditableImageGrid = ({ images, onEditCard }) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                {/* Image 1 */}
                <div className="col-span-3 row-span-2">
                    <EditableImageCard
                        src={images[0].src}
                        alt={images[0].alt}
                        caption="favourite place"
                        width={310}
                        height={130}
                        onEdit={() => onEditCard(0)}
                    />
                </div>
                {/* Image 2 */}
                <div className="col-start-4 row-start-1 col-span-2 row-span-2">
                    <EditableImageCard
                        src={images[1].src}
                        alt={images[1].alt}
                        caption="music"
                        width={130}
                        height={130}
                        onEdit={() => onEditCard(1)}
                    />
                </div>
            </div>

            <div className="flex gap-4">
                <div className="flex flex-col gap-4 mr-7s">
                    {/* Image 3 */}
                    <div className="col-span-2 row-start-3 row-span-2">
                        <EditableImageCard
                            src={images[2].src}
                            alt={images[2].alt}
                            caption="knick-knacks"
                            width={130}
                            height={130}
                            onEdit={() => onEditCard(2)}
                        />
                    </div>
                    {/* Image 4 */}
                    <div className="col-start-3 col-span-3 row-start-3 row-span-4">
                        <EditableImageCard
                            src={images[3].src}
                            alt={images[3].alt}
                            caption="movie"
                            width={130}
                            height={130}
                            onEdit={() => onEditCard(3)}
                        />
                    </div>
                </div>
                {/* Image 5 */}
                <div className="col-start-1 col-span-2 row-start-5 row-span-2 mr-none">
                    <EditableImageCard
                        src={images[4].src}
                        alt={images[4].alt}
                        caption="food"
                        width={310}
                        height={275}
                        onEdit={() => onEditCard(4)}
                    />
                </div>
            </div>
        </div>
    );
};

EditableImageGrid.defaultProps = {
    onEditCard: () => console.log('No onEditCard handler provided'),
};

export default EditableImageGrid;
