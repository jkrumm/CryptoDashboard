import { Button, H1, H3 } from "@blueprintjs/core";
import { inject, observer } from "mobx-react";
import React from "react";
import { ICounterStore } from "../../stores/CounterStore";

interface IContainerProps {
    counterStore?: ICounterStore;
}

@inject("counterStore")
@observer
export class Home extends React.Component<IContainerProps> {
    render() {
        const { clickCounter, increment, decrement } = this.props.counterStore!;

        return (
            <>
                <H1>Home</H1>
                <H3>Counter : {clickCounter}</H3>
                <Button onClick={increment}>Increase</Button>
                <Button onClick={decrement}>Decrease</Button>
            </>
        );
    }
}
