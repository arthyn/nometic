export const measureDomNode = (node, enhanceMeasurableNode = e => e) => {
    const container = document.createElement("div");
    container.className = 'inline-block absolute invisible';
    container.style.zIndex = "-1";

    const clonedNode = node.cloneNode(true);
    const content = enhanceMeasurableNode(clonedNode);

    container.appendChild(content);

    document.body.appendChild(container);

    const height = container.clientHeight;
    const width = container.clientWidth;

    container.parentNode.removeChild(container);
    return { height, width };
};