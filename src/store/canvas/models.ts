export interface IcanvasState {
    canvas: Array<IcanvasForm>;
    canvasList: Array<Object>;
}

export interface IcanvasForm {
    id: number;
    value: string | number;
    label: string;
    keyName: string;
    formType: string;
}

export class CanvasState implements IcanvasState {
    canvas = [
        {
          id: 1,
          value: "",
          label: "テキスト",
          keyName: "text",
          formType: "TextField",
        },
        {
          id: 2,
          value: NaN,
          label: "フォントサイズ",
          keyName: "fontsize",
          formType: "NumberField",
        },
        {
          id: 3,
          value: "",
          label: "色",
          keyName: "color",
          formType: "TextField",
        },
        {
          id: 4,
          value: "",
          label: "背景色",
          keyName: "backgroundColor",
          formType: "TextField",
        },
      ];
    canvasList = [];
}
