for (const node of figma.currentPage.selection) {
    // Measure graphic size
    var graphicWidth = node.width;
    var graphicHeight = node.height;
    // Define window controls
    var barHeight = 32; // control bar height
    var controlSize = 18; // control button size
    var controlY = 6; // control button y position
    // Define window size
    var windowWidth = graphicWidth;
    var windowHeight = graphicHeight + barHeight;
    if (node.type == 'FRAME' || node.type == 'RECTANGLE') {
        // Draw window
        const window = figma.createFrame();
        window.name = "Window";
        window.resize(graphicWidth, windowHeight);
        window.cornerRadius = 8;
        window.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        window.x = node.x;
        window.y = node.y;
        // Draw window bar
        const bar = figma.createRectangle();
        bar.resize(graphicWidth, barHeight);
        bar.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.24, b: 0.33 } }];
        bar.name = "Bar";
        window.appendChild(bar);
        // Draw window controls
        const circRed = figma.createEllipse();
        circRed.fills = [{ type: 'SOLID', color: { r: 0.89, g: 0, b: 0.27 } }];
        window.appendChild(circRed);
        circRed.resize(controlSize, controlSize);
        circRed.x = windowWidth - controlSize - 60;
        circRed.y = controlY;
        const circAmber = figma.createEllipse();
        circAmber.fills = [{ type: 'SOLID', color: { r: 1, g: 0.77, b: 0.39 } }];
        window.appendChild(circAmber);
        circAmber.resize(controlSize, controlSize);
        circAmber.x = windowWidth - controlSize - 34;
        circAmber.y = controlY;
        const circGreen = figma.createEllipse();
        circGreen.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.67, b: 0.3294 } }];
        window.appendChild(circGreen);
        circGreen.resize(controlSize, controlSize);
        circGreen.x = windowWidth - controlSize - 8;
        circGreen.y = controlY;
        // Clone graphic into window
        var graphic = node.clone();
        window.appendChild(graphic);
        graphic.x = 0;
        graphic.y = 32;
        // Delete original selection
        node.remove();
    }
    else {
        figma.notify("Windows can only be applied to a rectangle or frame object.");
    }
}
figma.closePlugin();
