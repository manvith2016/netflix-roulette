export const fetchCurrentQueryParams = (searchParams) => {
    return new URLSearchParams(Object.fromEntries(searchParams.entries())).toString();
}
