import { observable, action, makeObservable } from "mobx";
class KeywordStore {
  keyword = "";
  setKeyword(keyword) {
    this.keyword = keyword;
  }
}
KeywordStore = makeObservable(KeywordStore, {
  keyword: observable,
  setKeyword: action
});
export { KeywordStore };