---
title: "Embeddings Draft"
last_modified_at: 2023-08-25T21:17:02-05:00
categories:
  - Blog
tags:
  - embeddings 
  - vectors
toc: true
---

<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      TeX: {equationNumbers: {autoNumber: "AMS"}},
    });
</script>

<script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

{{ toc }}

# Outline brainstorm
- Vector embeddings introduction
- Intuition
- Similarity between vectors
- State-of-the-art models
- Applications
- Visualization in 2D and 3D



# Vector embeddings introductions


# Similarity between vectors
One powerful way of evaluating the similarity between two documents is using cosine similarity which 
is computed using equation \ref{dot_product}

\begin{equation} \label{dot_product}
dot \ product(\textbf{v}, \textbf{w}) = \textbf{v} \cdot \textbf{w} = \sum_{i=1}^{N} v_iw_i = v_1w_1 + v_2w_2 + \dots + v_Nw_N 
\end{equation}

$$
\begin{equation}
    f(x) = \begin{aligned}[t]
    &x^2 + 2x + 1 \\
    & = (x+1)^2 \\
    & = x^2 + 2x + 1
    \end{aligned} 
\end{equation}
$$

$$
\begin{align}
    f(x) &= x^2 + 2x + 1 \\
    &= (x+1)^2 \\
    &= x^2 + 2x + 1
\end{align}
$$

# Resources