class productApi {
    getAll=(params) => {
         const url = '/products';
        return axiosClient.get(url, {params});
    };
    get=(id)=>{
        const url = '/products/${id}';
        return axiosClient.get(url);
    }
}

export default productsApi;