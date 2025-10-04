import Navbar from "./Navbar.tsx";
import {DockviewReact, type DockviewReadyEvent} from "dockview-react";
import {evergreen} from "./theme.ts";

function HelloPanel() {
    return <div>Hello</div>
}

const components = {
    hello: HelloPanel
}

export default function App() {
    function onReady(event: DockviewReadyEvent) {
        event.api.addPanel({
            id: "first",
            component: "hello"
        });

        event.api.addPanel({
            id: "second",
            component: "hello",
            position: {
                direction: "right",
                referencePanel: "first"
            }
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