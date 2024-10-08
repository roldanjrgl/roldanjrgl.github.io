window.MathJax = {
    tex: {
        tags: 'ams',
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        macros: {
            eqref: ['\\text{(}\\ref{#1}\\text{)}', 1]
        }
    }
};