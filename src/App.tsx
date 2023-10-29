import { TreeComponent } from "./TreeComponent";
import Sortable from "./Sortable";
import Collapsible from "./Collapsible";

const data = [
  {
    text: "Movies",
    children: [
      {
        text: "Horror",
        children: [
          {
            text: "Halloween",
          },
          {
            text: "Alien",
          },
        ],
      },
      {
        text: "Action",
        children: [
          {
            text: "Stonecold",
          },
          {
            text: "Commando",
          },
        ],
      },
    ],
  },
  {
    text: "Books",
    children: [
      {
        text: "Children of time",
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Collapsible>
        <TreeComponent data={data} />
      </Collapsible>
      <Sortable>
        <TreeComponent data={data} />
      </Sortable>
    </div>
  );
}

export default App;
