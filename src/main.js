import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/U0qa9sNBRI9QGuMx/scene.splinecode');

// 创建光标元素并设置样式类
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// 移动光标，自动根据光标尺寸调整偏移
document.addEventListener('mousemove', e => {
    // 获取光标元素的尺寸
    const cursorWidth = cursor.offsetWidth;
    const cursorHeight = cursor.offsetHeight;

    // 计算偏移量，以确保光标的中心跟随鼠标
    const offsetX = cursorWidth / 2;
    const offsetY = cursorHeight / 2;

    // 设置光标位置，应用计算后的偏移量
    cursor.style.left = `${e.clientX - offsetX}px`;
    cursor.style.top = `${e.clientY - offsetY}px`;

    // 确保光标在移动时可见
    cursor.style.visibility = 'visible';
});

// 定义交互元素及其鼠标悬停时光标的变化
const hoverElements = document.querySelectorAll('a, button, svg, img, media-item');
hoverElements.forEach(el => {
    el.addEventListener('mouseover', () => {
        cursor.classList.add('cursor-enlarged');
    });

    el.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor-enlarged');
    });
});
