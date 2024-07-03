// 示例项目数据
const projects = [
    {
        title: "项目1",
        image: "project1.jpg",
        description: "项目1的描述。这是一个非常有趣的项目，展示了我的技能。"
    },
    {
        title: "项目2",
        image: "project2.jpg",
        description: "项目2的描述。这个项目展示了我的创新能力。"
    },
    // 可以继续添加更多项目
];

// 函数：创建项目元素
function createProjectElement(project) {
    const article = document.createElement('article');
    article.className = 'project';

    const title = document.createElement('h3');
    title.textContent = project.title;

    const img = document.createElement('img');
    img.src = project.image;
    img.alt = `${project.title}截图`;

    const description = document.createElement('p');
    description.textContent = project.description;

    article.appendChild(title);
    article.appendChild(img);
    article.appendChild(description);

    return article;
}

// 函数：加载项目
function loadProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectElement = createProjectElement(project);
        container.appendChild(projectElement);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', loadProjects);