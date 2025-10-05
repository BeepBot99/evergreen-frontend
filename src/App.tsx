import Navbar from "./components/Navbar.tsx";
import {DockviewReact, type DockviewReadyEvent} from "dockview-react";
import {evergreen} from "./utils/theme.ts";
import OpModeSelector from "./components/OpModeSelector.tsx";
import type {FunctionComponent} from "react";

const components: Record<string, FunctionComponent> = {
    hello: () => <div>Hello</div>,
    opModes: OpModeSelector
}

export default function App() {
    function onReady(event: DockviewReadyEvent) {
        event.api.addPanel({
            id: "first",
            component: "hello",
            position: {
                direction: "above"
            }
        });

        event.api.addPanel({
            id: "second",
            component: "hello",
            position: {
                direction: "below"
            },
            initialHeight: 200
        });

        event.api.addPanel({
            id: "opModes",
            component: "opModes",
            title: "OpModes",
            position: {
                direction: "left",
                referencePanel: "first"
            },
            initialWidth: 400
        });
    }

    return (
        <div className="flex flex-col h-screen">
            <Navbar/>
            <div className="flex-1 min-h-0">
                <DockviewReact theme={evergreen} components={components} onReady={onReady}/>
            </div>
        </div>
    );
}