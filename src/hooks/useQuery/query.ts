import { CacheListProps, CacheProps } from './type'

class VisibilityChangeListener {
  private queue: {[key:string]:()=>void}
  constructor() {
    this.queue = {}
    this.subscribeVisibilityChange()
  }

  private subscribeVisibilityChange(){
    document.addEventListener('visibilitychange', ()=> {
        if (document.visibilityState === 'visible') {
            Object.keys(this.queue).forEach((key)=>{
                this.queue[key]()
            })
           
        }
      })
  }

  public addSubscribe(key:string,callback:()=>void){
      this.queue[key] = callback
  }

  public removeSubscribe(key:string){
      delete this.queue[key]
  }

  public hasSubscribe(key:string){
    return !!this.queue[key]
  }

}

class Query {
  private cacheList: CacheListProps
  focusHandle: VisibilityChangeListener
  constructor() {
    this.cacheList = {}
    this.focusHandle = new VisibilityChangeListener()
  }

  public setCache(key: string, cache: CacheProps) {
    if (this.cacheList[key]) {
      this.updateCache(key, cache)
    } else {
      this.cacheList[key] = {
        ...cache,
        timer: this.setTimeOutToClear(cache.cacheTime, key),
      }
    }
  }

  public getCache(key: string): CacheProps {
    return {...this.cacheList[key]}
  }

  public updateCache(key: string, cache: CacheProps) {
    const timer = this.cacheList[key].timer
    this.clearTimeOut(timer as number)
    this.cacheList[key] = {
      ...cache,
      timer: this.setTimeOutToClear(cache.cacheTime, key),
    }
  }

  private clearCache(key: string) {
    delete this.cacheList[key]
  }

  private setTimeOutToClear(timeout: number, key: string) {
    /**TODO:
     * 1.更新定时器
     * 2 后台时间校对
     * */
    return setTimeout(() => {
      this.clearCache(key)
    }, timeout) as unknown as number
  }

  private clearTimeOut(timer: number) {
    clearTimeout(timer)
  }
}

export default Query
