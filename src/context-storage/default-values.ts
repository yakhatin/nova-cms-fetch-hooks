export const fetchDataContextStorageDefaultValues = {
    createAdditionalState: () => {},
    state: {
        catalogs: {
            data: [],
            loading: true,
            setters: {
                setData: () => {},
                setLoading: () => {},
            },
        },
        appConfig: {
            data: undefined,
            loading: true,
            setters: {
                setData: () => {},
                setLoading: () => {},
            },
        },
    }
};
