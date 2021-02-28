import React from "react";
import UseState from "./UseState";
import UseEffectC, { Example1 } from './UseEffect'
import Memo from "./UseMemo";
import Callback from "./UseCallback";
import Content from "./UseContent";

const Hooks = () => {

    return (
        <div className="row">
            <div className="col"><UseState /></div>
            <div className="col">
                <UseEffectC />
                <Example1 />
            </div>
            <div className="row">
                <div className="col">
                    <Memo />
                </div>
                <div className="col">
                    <Callback />
                </div>
                <div className="col">
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default Hooks;


