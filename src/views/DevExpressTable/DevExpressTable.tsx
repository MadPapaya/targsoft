import React from "react";

import DataGrid, {
  Column,
  Editing,
  Popup,
  Form,
  Scrolling,
} from "devextreme-react/data-grid";
import "devextreme-react/text-area";
import { Item } from "devextreme-react/form";
import SelectBox from "devextreme-react/select-box";
import { dataSource } from "../../data/data";
const scrollingModeOptions = ["standard", "virtual"];

const titleEditorOptions = { height: 50 };
const bodyEditorOptions = { height: 150 };

function DevExpressTable() {
  const [scrollingMode, setScrollingMode] = React.useState("standard");
  const [editRowKey, setEditRowKey] = React.useState(null);

  return (
    <React.Fragment>
      <div id="data-grid-demo">
        <DataGrid
          dataSource={dataSource}
          keyExpr="id"
          showBorders={true}
          id="gridContainer"
          wordWrapEnabled={true}
        >
          <Scrolling mode={scrollingMode} />
          <Editing
            mode="popup"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}
            editRowKey={editRowKey}
            onEditRowKeyChange={setEditRowKey}
          >
            <Popup
              title="Post Info"
              showTitle={true}
              width="40%"
              height="50%"
            />
            <Form>
              <Item itemType="group" colCount={2} colSpan={2}>
                <Item dataField="userId" />
                <Item dataField="id" />
                <Item
                  dataField="title"
                  editorType="dxTextArea"
                  colSpan={2}
                  editorOptions={titleEditorOptions}
                />
                <Item
                  dataField="body"
                  editorType="dxTextArea"
                  colSpan={2}
                  editorOptions={bodyEditorOptions}
                />
              </Item>
            </Form>
          </Editing>
          <Column dataField="userId" caption="User id" width={60} />
          <Column dataField="id" caption="Post id" width={60} />
          <Column dataField="title" width="400" />
          <Column dataField="body" />
        </DataGrid>

        <div className="option">
          <span>Scrolling Mode</span>
          <SelectBox
            id="scrollingModeSelectBox"
            value={scrollingMode}
            items={scrollingModeOptions}
            onValueChange={setScrollingMode}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default DevExpressTable;
