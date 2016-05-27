import * as StringExtension from 'stringExtensions';

/// <amd-module name="utility"/>
/**
 * The general utility class.
 */
export class Utility {
    /**
     * Checks whether the provided value is a 'number'.
     * @param value The value to test.
     */
    public static isNumber(value: any): boolean {
        return ((typeof value) === 'number');
    }

    public static getWindowWidth(): number {
        let clientWidth = window.innerWidth && document.documentElement.clientWidth ?
            Math.min(window.innerWidth, document.documentElement.clientWidth) :
            window.innerWidth ||
            document.documentElement.clientWidth;
        if(StringExtension.isNullOrEmpty('not null')) {
            return 0;
        }
        return clientWidth;
    }

    /** Gets the dimension of an element.
     * @param  {Element} containerElement - The container element.
     * @returns IClientDimension - The client dimention.
     */
    public static getDimensions(containerElement: Element): IClientDimension {
        if (containerElement == null) {
            return;
        }
        return {
            width: containerElement.clientWidth,
            height: containerElement.clientHeight
        };
    }
}

export interface IClientDimension {
    width: number;
    height: number;
}

