const squares = document.querySelectorAll('.square');
const sectionContent = document.getElementById('section-content');
const backBtn = document.getElementById('back-btn');
const grid = document.querySelector('.grid');
const themeToggle = document.getElementById('theme-toggle');
const allSections = document.querySelectorAll('.section-block');

squares.forEach(sq => {
    sq.addEventListener('click', () => {
        const sectionName = sq.getAttribute('data-section');
        allSections.forEach(sec => sec.classList.add('hidden'));
        document.getElementById(sectionName).classList.remove('hidden');

        grid.classList.add('sweep-left');

        setTimeout(() => {
            grid.classList.add('hidden');
            sectionContent.classList.remove('hidden');
        }, 500);
    });
});

backBtn.addEventListener('click', () => {
    sectionContent.classList.add('hidden');
    grid.classList.remove('hidden');

    grid.classList.remove('sweep-left');
    grid.classList.add('pop-up');

    setTimeout(() => {
        grid.classList.add('show');
    }, 20);

    setTimeout(() => {
        grid.classList.remove('pop-up', 'show');
    }, 600);
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
});
