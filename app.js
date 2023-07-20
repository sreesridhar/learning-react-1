const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an first line"),
    React.createElement("h2", {}, "I am an first line"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an first line"),
    React.createElement("h2", {}, "I am an first line"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
