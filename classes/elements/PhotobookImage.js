class PhotobookImage extends Element2D {
    constructor(base64Image, width, height, zIndex) {
        super();
        const imageDocument = new DOMParser().parseFromString(this.imageTemplate, `text/html`);
        this.element = imageDocument.querySelector(`.element-2d-container`);
        this.image = imageDocument.querySelector(`.image-container`);

        //initialize hooks
        const movementHooksManager = new MovementHooks(this);
        movementHooksManager.initializeHooksfunctionality();

        this.backgroundImage = base64Image;
        this.top = 0;
        this.left = 0;
        this.minWidth = 40;
        this.minHeight = 40;
        this.width = width || this.minWidth;
        this.height = height || this.minHeight;
        this.rotation = 0;
        this.zIndex = zIndex;
    }

    get backgroundImage() {
        return this.BackgroundImage;
    }

    set backgroundImage(value) {
        this.BackgroundImage = value;
        this.image.style.setProperty(`background-image`, `url(` + value + `)`);
    }

    imageTemplate = `
        <div class="element-2d-container flex-container flex-v-h-center">
            <div class="image-container size-fill-parent"></div>
        </div>`;
}