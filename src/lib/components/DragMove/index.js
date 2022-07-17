const { BaseElement } = require("../BaseElement");


class DragMove extends BaseElement {
    static get properties() {
        return {
            targetName: { type: String }
        }
    }

    constructor() {
        super();

        this.drag = false;
        this.targetName = '';

        this.startDrag = this.startDrag.bind(this);
        this.dragDiv = this.dragDiv.bind(this);
        this.stopDrag = this.stopDrag.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();

        this.targetDrag = this.querySelector(`.${this.targetName}`);

        this.targetDrag.addEventListener('mousedown', this.startDrag);
        this.targetDrag.addEventListener('mouseup', this.stopDrag);

        // this.storyDrag.addEventListener('mousedown', this.startDrag);
        // this.storyDrag.addEventListener('mouseup', this.stopDrag);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.targetDrag.removeEventListener('mousedown', this.startDrag);
        this.targetDrag.removeEventListener('mousemove', this.dragDiv);
        this.targetDrag.removeEventListener('mouseup', this.stopDrag);

    }

    startDrag(e) {
        // determine event object
        if (!e) {
            var e = window.event;
        }
        if(e.preventDefault) e.preventDefault();

        // IE uses srcElement, others use target
        var targ = e.target;

        if (!targ.id === this.targetName) {
            return;
        }

        console.log("START DRAGGING", e.target.id);

        // calculate event X, Y coordinates
        this.offsetX = e.clientX;
        this.offsetY = e.clientY;

        // assign default values for top and left properties
        if(!targ.style.left) { targ.style.left='0px'};
        if (!targ.style.top) { targ.style.top='0px'};

        // calculate integer values for top and left 
        // properties
        this.coordX = parseInt(targ.style.left);
        this.coordY = parseInt(targ.style.top);
        this.drag = true;

        // move div element
        e.target.addEventListener('mousemove', this.dragDiv);
        // this.storyDrag.addEventListener('mousemove', this.dragDiv);

        return false;
        
}
    dragDiv(e) {
        if (!this.drag) {return};
        if (!e) { var e= window.event};
        var targ=e.target?e.target:e.srcElement;
        // move div element
        targ.style.left=this.coordX+e.clientX-this.offsetX+'px';
        targ.style.top=this.coordY+e.clientY-this.offsetY+'px';
        return false;
    }
    
    stopDrag() {
        this.drag=false;
    }
}

customElements.define('drag-move', DragMove);