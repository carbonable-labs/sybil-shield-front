import Color from "colorjs.io";

/**
 * 
 * Return a color based on a percentage in the range of #A048FE to #83DA90
 * @param percentage 
 * @returns string
 */
export function getColorByPercentage(percentage: number): string {
    const gradient = new Color('#FFF').range('#C82538', {
        space: 'lch',
        outputSpace: 'srgb',
    });

    return gradient(percentage).toString(16);
}