import { remove } from '../util/index'

let uid = 0

export default class Dep {
  constructor () {
    this.id = uid++
    this.subs = []
  }
  addSub (sub) {
    this.subs.push(sub)
  }
  removeSub (sub) {
    remove(this.subs, sub)
  }
  depend () {

  }
  notify () {

  }
}
