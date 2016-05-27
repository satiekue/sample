import * as StringExtension from 'stringExtensions';

/**
 * The general utility class.
 */
export class Utility {
    public validateString(input: string) : boolean {
        return StringExtension.isNullOrEmpty(input);
    }
}

