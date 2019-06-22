import { action, observable } from "mobx";

export interface ICounterStore {
    clickCounter: number;
    increment(): void;
    decrement(): void;
}

export class CounterStore implements ICounterStore {
    @observable clickCounter = 0;

    @action.bound increment() {
        this.clickCounter++;
    }

    @action.bound decrement() {
        this.clickCounter--;
    }
}
