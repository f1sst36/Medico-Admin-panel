import IStores from "./interfaces";

class RootStore implements IStores {
    // abc: IAbc;

    constructor() {
        // this.abc = new Abc(this);
    }
}

export const rootStore = new RootStore();