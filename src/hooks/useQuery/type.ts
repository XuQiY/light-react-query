
export type CacheProps = {
    cacheTime: number,
    data: any
    timer?: number 
}

export type CacheListProps = {
    [key:string] : CacheProps
}



