import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/U0qa9sNBRI9QGuMx/scene.splinecode');

// 创建光标元素并设置样式类
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// 只有当鼠标在canvas上时才更新和显示光标
canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const cursorWidth = cursor.offsetWidth;
    const cursorHeight = cursor.offsetHeight;
    const offsetX = cursorWidth / 2;
    const offsetY = cursorHeight / 2;

    cursor.style.left = `${e.clientX - rect.left - offsetX}px`;
    cursor.style.top = `${e.clientY - rect.top - offsetY}px`;
    cursor.style.visibility = 'visible';
});

// 当鼠标离开canvas时隐藏光标
canvas.addEventListener('mouseleave', () => {
    cursor.style.visibility = 'hidden';
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