import { OVERLAY_ID } from "../shared/constants";
import { DOM } from "./dom";

export class Overlay {
  show() {
    this.addLayer();
  }

  private addLayer() {
    let pageOverlay = document.getElementById(OVERLAY_ID);

    if (!pageOverlay) {
      pageOverlay = DOM.render({
        tagName: "div",
        attrs: { id: OVERLAY_ID },
        children: []
      });
    }

    document.body.appendChild(pageOverlay as Node);
  }
}
