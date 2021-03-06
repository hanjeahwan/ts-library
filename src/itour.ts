import { Overlay } from "./core/overlay";

export default class ITour {
  private options: any;
  private overlay: any;

  constructor(options: any) {
    this.options = options;
    this.overlay = new Overlay();
  }

  public start() {
    this.overlay.show();
  }
}
