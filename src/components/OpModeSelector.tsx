import {useMemo, useState} from "react";
import OpMode, {type OpModeData, type OpModeType} from "./OpMode.tsx";
import {useImmer} from "use-immer";
import Fuse from "fuse.js";
import {sort} from "fast-sort";

export default function OpModeSelector() {
    const [opModeFilter, setOpModeFilter] = useState<OpModeType | "all">("all");

    const [opModes, setOpModes] = useImmer<OpModeData[]>([
        {
            name: "Tuning",
            group: "Pedro Pathing",
            type: "teleop",
            id: 1,
            starred: false
        },
        {
            name: "Tuning",
            group: "RoadRunner",
            type: "teleop",
            id: 2,
            starred: false
        },
        {
            name: "Blue Auto",
            group: "RoadRunner",
            type: "autonomous",
            id: 3,
            starred: false
        },
        {
            name: "Red Auto",
            group: "RoadRunner",
            type: "autonomous",
            id: 4,
            starred: false
        },
        {
            name: "Blue Auto",
            group: "Pedro Pathing",
            type: "autonomous",
            id: 5,
            starred: false
        },
        {
            name: "Red Auto",
            group: "Pedro Pathing",
            type: "autonomous",
            id: 6,
            starred: false
        }
    ]);

    const [searchQuery, setSearchQuery] = useState("");

    const fuse = useMemo(() => new Fuse(opModes, {
        keys: ["name", "group"],
        findAllMatches: true,
        threshold: 0.4
    }), [opModes]);

    const searchResults = useMemo(
        () => (searchQuery
            ? fuse.search(searchQuery).map(it => it.item)
            : sort(opModes).by([
                {desc: "starred"},
                {asc: "group"},
                {asc: "name"}
            ]))
            .filter(it => opModeFilter === "all" ? true : opModeFilter === it.type),
        [searchQuery, fuse, opModes, opModeFilter]
    );

    return (
        <div className="flex flex-col max-h-full">
            <div className="join grid grid-cols-3">
                <input className="join-item btn btn-success btn-outline"
                       type="radio"
                       name="opmode-type"
                       aria-label="TeleOp"
                       checked={opModeFilter === "teleop"}
                       onChange={() => {
                           setOpModeFilter("teleop");
                       }}/>
                <input className="join-item btn btn-primary btn-outline"
                       type="radio"
                       name="opmode-type"
                       aria-label="All"
                       checked={opModeFilter === "all"}
                       onChange={() => {
                           setOpModeFilter("all");
                       }}/>
                <input className="join-item btn btn-error btn-outline"
                       type="radio"
                       name="opmode-type"
                       aria-label="Autonomous"
                       checked={opModeFilter === "autonomous"}
                       onChange={() => {
                           setOpModeFilter("autonomous");
                       }}/>
            </div>

            <label className="input w-full my-4 min-h-10">
                <svg className="h-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" placeholder="Search" value={searchQuery} onChange={e => {
                    setSearchQuery(e.target.value)
                }}/>
            </label>

            <ul className="list bg-base-100 rounded-box flex-1 overflow-y-auto">
                {searchResults.map(opMode => <OpMode key={opMode.id} data={opMode} setStarred={starred => {
                    setOpModes(draft => {
                        const item = draft.find(it => it.id === opMode.id);
                        if (item) item.starred = starred;
                    });
                }}/>)}
            </ul>
        </div>
    );
}