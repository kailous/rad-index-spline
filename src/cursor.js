// 创建光标元素并设置样式类
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// 更新和显示光标
document.addEventListener('mousemove', e => {
    const cursorWidth = cursor.offsetWidth;
    const cursorHeight = cursor.offsetHeight;
    const offsetX = cursorWidth / 2;
    const offsetY = cursorHeight / 2;

    // 光标定位于鼠标位置
    cursor.style.left = `${e.clientX - offsetX}px`;
    cursor.style.top = `${e.clientY - offsetY}px`;
    cursor.style.visibility = 'visible';
});

// 当鼠标离开<body>时隐藏光标
document.body.addEventListener('mouseleave', () => {
    cursor.style.visibility = 'hidden';
});

// 当鼠标进入<body>时显示光标
document.body.addEventListener('mouseenter', () => {
    cursor.style.visibility = 'visible';
});


// 定义光标大小变化的逻辑
document.addEventListener('mouseover', e => {
    if (e.target.matches('a, button, svg, img, media-item')) {
        cursor.classList.add('cursor-enlarged');
    }
});

document.addEventListener('mouseout', e => {
    if (e.target.matches('a, button, svg, img, media-item')) {
        cursor.classList.remove('cursor-enlarged');
        cursor.style.visibility = 'hidden';  // 鼠标移出时隐藏光标
    }
});
