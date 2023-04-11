import React from "react";
import "./App.css";
const tasks = [
    {
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
    },
    {
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
    },
    {
        id: "unique_id_001",

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
    },
];

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

const TagListItem = ({ tag }) => {
    console.log(tag);
    return (
        <li key={tag.id}>
            {tag.icon} - {tag.text}
        </li>
    );
};

const CommentListItem = ({ comment }) => {
    return (
        <div className="comment-item" key={comment.id}>
            <h4> {comment.user.name} </h4>
            <p>{comment.text} </p>
        </div>
    );
};

const TaskCard = ({ task }) => {
    return (
        <div className="day-card">
            <h2 className="title">
                {getDay(task.createdAt)}, {formateDate(task.createdAt)}
            </h2>

            <h3 className="sub-title"> {task.subtitle} </h3>

            <div className="tag-ul">
                {task.tags.map((tag) => {
                    <TagListItem key={tag.id} tag={tag} />;
                })}
            </div>
            <div className="line"></div>
            <h4 className="notes"> Notes linked to people </h4>

            <div className="comments">
                {task.comments.map((comment) => {
                    <CommentListItem comment={comment} />;
                })}
            </div>

            <ul className="tasks">
                {task.tasks.map((task) => {
                    <TaskListItem key={task.id} task={task} />;
                })}
            </ul>
        </div>
    );
};
const TaskListItem = ({ task }) => {
    return (
        <li key={task.id}>
            <h3> {task.title} </h3>
            <p>
                <small>{task.title} </small>
            </p>
            <p>{task.text}</p>
        </li>
    );
};
const App = () => {
    return (
        <div className="cards-group">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};

export default App;
