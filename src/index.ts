export function outOfBoundIndexArr<T>(arr: T[], index: number): T {
    if (arr[index]) {
        return arr[index];
    }

    const diff = index - arr.length;
    const _index = diff % arr.length;

    return arr[_index];
}

export function addCityProperty(city: string, obj: any): any {
    return {
        ...obj,
        city,
    };
}
