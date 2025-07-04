interface IProp {
    width: number;
    height: number;
}

const MiddleEastSVG = ({ width, height }: IProp = { width: 64, height: 64 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect x="0.5" width="64" height="64" fill="url(#pattern01)" />
            <defs>
                <pattern id="pattern01" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_55104_30383" transform="scale(0.0111111)" />
                </pattern>
                <image id="image0_55104_30383" width="90" height="90" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>
    );
}

export default MiddleEastSVG;