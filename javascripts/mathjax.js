window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],          // 行内公式分隔符
    displayMath: [['\\[', '\\]']],        // 块级公式分隔符
    processEscapes: true,                 // 处理普通文本中的 $ 符号
    processEnvironments: true             // 处理 LaTeX 环境
  },
  options: {
    ignoreHtmlClass: '.*|',              // 忽略特定类的 HTML 元素
    processHtmlClass: 'arithmatex'       // 处理带有 arithmatex 类的元素
  }
};

// 可选：支持即时加载（instant loading）
document$.subscribe(() => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});