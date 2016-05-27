/// <amd-module name="stringExtensions"/>
/**
 * Is string null or empty or undefined?
 * @return True if the value is null or undefined or empty string,
 * otherwise false.
 */
export function isNullOrEmpty(value: string): boolean {
    return (value == null) || (value.length === 0);
}