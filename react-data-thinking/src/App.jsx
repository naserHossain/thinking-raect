import React from "react";

const task = {
    id: "unique_id_001",
    subtitle: "Subtitle",
    createdAt: "2023-04-10T13:27:29.024Z",
    tags: [
        {
            id: "tag_001",
            text: "Its done",
            icon: "T",
        },
        {
            id: "tag_002",
            text: "Its cancelled",
            icon: "X",
        },
        {
            id: "tag_003",
            text: "Its in progress",
            icon: "p",
        },
        {
            id: "tag_004",
            text: "Just Wrote this",
            icon: "C",
        },
    ],
    comments: [
        {
            id: "comment_id_001",
            user: {
                avatar: "xyx.com",
                name: "Viraj",
                id: "user_id_001",
            },
            text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, voluptates.",
        },
    ],
    tasks: [
        {
            id: "task_001",
            title: "Foggy Nelson",
            text: "Here to clean the streets of Hell's kitchen ",
            status: "done",
        },
        {
            id: "task_002",
            title: "Louise CK",
            text: "This one is cancelled",
            status: "cancel",
        },
        {
            id: "task_003",
            title: "Albert Einstein",
            text: "In Progress",
            status: "progress",
        },
        {
            id: "task_004",
            title: "Albert Einstein",
            text: "In Progress",
            status: "progress",
        },
    ],
};

function getDay(dateStr) {
    const date = new Date(dateStr).getDay();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    console.log(date);
    return days[date];
}

function formateDate(dateStr) {
    const date = new Date(dateStr);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const App = () => {
    return (
        <div>
            <h2>
                {getDay(task.createdAt)}, {formateDate(task.createdAt)}
            </h2>

            <h3> {task.subtitle} </h3>

            <div>
                {task.tags.map((tag) => {
                    <li key={tag.id}>
                        {tag.icon} - {tag.text}
                    </li>;
                })}
            </div>
            <hr />
            <h4> Notes linked to people </h4>
        </div>
    );
};

export default App;
